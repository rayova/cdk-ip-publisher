import { App, aws_route53, Stack } from 'aws-cdk-lib';
import { CaddyService } from '../src';

const app = new App();

const stack = new Stack(app, 'cdk-caddy-main-integ');

const hostedZone = aws_route53.HostedZone.fromHostedZoneAttributes(stack, 'HostedZone', {
  hostedZoneId: 'Z06399031EF646V59RCNP',
  zoneName: '812696460994.dev.rayova.com',
});

const caddyService = new CaddyService(stack, 'CaddyService', {});

new aws_route53.ARecord(stack, 'ARecord', {
  zone: hostedZone,
  recordName: `caddy.${hostedZone.zoneName}`,
  target: aws_route53.RecordTarget.fromAlias(caddyService.aliasTarget),
});

app.synth();