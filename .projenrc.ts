import { awscdk, javascript } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Josh Kellendonk',
  authorAddress: 'joshkellendonk@gmail.com',
  cdkVersion: '2.103.1',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: '@rayova/cdk-ip-publisher',
  description: 'A CDK construct to publish public ECS IP addresses to Route53',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/rayova/cdk-ip-publisher.git',

  release: true,
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,

  devDeps: [
    '@types/aws-lambda',
    '@aws-sdk/client-ecs@^3',
    '@aws-sdk/client-route-53@^3',
    '@aws-sdk/client-ec2@^3',
    '@aws-sdk/client-dynamodb@^3',
    '@aws-sdk/lib-dynamodb@^3',
    '@aws-lambda-powertools/tracer@^1',
    '@aws-lambda-powertools/logger@^1',
    'zod@^3',
    'electrodb@^2',
    '@middy/core@^4',
  ],

  tsconfig: {
    compilerOptions: {
      experimentalDecorators: true,
    },
  },

  tsconfigDev: {
    compilerOptions: {
      experimentalDecorators: true,
    },
  },

  lambdaOptions: {
    runtime: awscdk.LambdaRuntime.NODEJS_18_X,
    bundlingOptions: {
      externals: [
        'aws-sdk',
        '@aws-sdk/*',
      ],
    },
  },

  experimentalIntegRunner: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.package.file.addDeletionOverride('keywords');

project.addGitIgnore('.idea');
project.addGitIgnore('cdk.context.json');
project.addPackageIgnore('cdk.out');

const cdkConfig = new awscdk.CdkConfig(project, {
  app: '', // Required for types.
  buildCommand: 'npm run bundle',
  watchIncludes: [
    `${project.srcdir}/**/*.ts`,
    `${project.testdir}/**/*.integ.ts`,
  ],
});
// cdkConfig.json.addDeletionOverride('build');
cdkConfig.json.addDeletionOverride('app');
cdkConfig.json.addDeletionOverride('context');
cdkConfig.json.addDeletionOverride('output');

project.eslint!.addIgnorePattern('src/runtime/**/*');
project.eslint!.addIgnorePattern('*.lambda.ts');

project.addTask('integ:main:dev', {
  exec: 'cdk watch --app "ts-node -P tsconfig.dev.json test/main.integ.ts" --no-notices --no-version-reporting --no-asset-metadata --no-path-metadata \'**\' -o test/.tmp/main.integ/deploy.cdk.out --hotswap-fallback',
});

project.synth();