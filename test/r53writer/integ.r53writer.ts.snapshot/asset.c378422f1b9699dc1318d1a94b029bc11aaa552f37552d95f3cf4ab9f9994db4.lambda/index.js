"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/electrodb/src/types.js
var require_types = __commonJS({
  "node_modules/electrodb/src/types.js"(exports, module2) {
    "use strict";
    var KeyTypes = {
      pk: "pk",
      sk: "sk"
    };
    var QueryTypes = {
      and: "and",
      gte: "gte",
      gt: "gt",
      lte: "lte",
      lt: "lt",
      eq: "eq",
      begins: "begins",
      between: "between",
      collection: "collection",
      clustered_collection: "clustered_collection",
      is: "is"
    };
    var MethodTypes = {
      check: "check",
      put: "put",
      get: "get",
      query: "query",
      scan: "scan",
      update: "update",
      delete: "delete",
      remove: "remove",
      patch: "patch",
      create: "create",
      batchGet: "batchGet",
      batchWrite: "batchWrite",
      upsert: "upsert",
      transactWrite: "transactWrite",
      transactGet: "transactGet"
    };
    var TransactionMethods = {
      transactWrite: MethodTypes.transactWrite,
      transactGet: MethodTypes.transactGet
    };
    var TransactionOperations = {
      [MethodTypes.get]: "Get",
      [MethodTypes.check]: "ConditionCheck",
      [MethodTypes.put]: "Put",
      [MethodTypes.create]: "Put",
      [MethodTypes.upsert]: "Update",
      [MethodTypes.update]: "Update",
      [MethodTypes.patch]: "Update",
      [MethodTypes.remove]: "Delete",
      [MethodTypes.delete]: "Delete"
    };
    var MethodTypeTranslation = {
      put: "put",
      get: "get",
      query: "query",
      scan: "scan",
      update: "update",
      delete: "delete",
      remove: "delete",
      patch: "update",
      create: "put",
      batchGet: "batchGet",
      batchWrite: "batchWrite",
      upsert: "update",
      transactWrite: "transactWrite",
      transactGet: "transactGet"
    };
    var IndexTypes = {
      isolated: "isolated",
      clustered: "clustered"
    };
    var Comparisons = {
      lte: "<=",
      lt: "<",
      gte: ">=",
      gt: ">"
    };
    var PartialComparisons = {
      lt: "<",
      gte: ">=",
      /**
       * gt becomes gte and last character of incoming value is shifted up one character code
       * example:
       * sk > '2020-09-05'
       *   expected
       *     - 2020-09-06@05:05_hero
       *     - 2020-10-05@05:05_hero
       *     - 2022-02-05@05:05_villian
       *     - 2022-06-05@05:05_clown
       *     - 2022-09-06@05:05_clown
       *   actual (bad - includes all 2020-09-05 records)
       *     - 2020-09-05@05:05_hero
       *     - 2020-09-06@05:05_hero
       *     - 2020-10-05@05:05_hero
       *     - 2022-02-05@05:05_villian
       *     - 2022-06-05@05:05_clown
       */
      gt: ">=",
      /**
       * lte becomes lt and last character of incoming value is shifted up one character code
       * example:
       * sk >= '2020-09-05'
       *   expected
       *     - 2012-02-05@05:05_clown
       *     - 2015-10-05@05:05_hero
       *     - 2017-02-05@05:05_clown
       *     - 2017-02-05@05:05_villian
       *     - 2020-02-05@05:05_clown
       *     - 2020-02-25@05:05_clown
       *     - 2020-09-05@05:05_hero
       *   actual (bad - missing all 2020-09-05 records)
       *     - 2012-02-05@05:05_clown
       *     - 2015-10-05@05:05_hero
       *     - 2017-02-05@05:05_clown
       *     - 2017-02-05@05:05_villian
       *     - 2020-02-05@05:05_clown
       *     - 2020-02-25@05:05_clown
       */
      lte: "<"
    };
    var CastTypes = ["string", "number"];
    var AttributeTypes = {
      string: "string",
      number: "number",
      boolean: "boolean",
      enum: "enum",
      map: "map",
      set: "set",
      // enumSet: "enumSet",
      list: "list",
      any: "any",
      custom: "custom",
      static: "static"
    };
    var PathTypes = {
      ...AttributeTypes,
      item: "item"
    };
    var ExpressionTypes = {
      ConditionExpression: "ConditionExpression",
      FilterExpression: "FilterExpression"
    };
    var ElectroInstance = {
      entity: Symbol("entity"),
      service: Symbol("service"),
      electro: Symbol("electro")
    };
    var ElectroInstanceTypes = {
      electro: "electro",
      service: "service",
      entity: "entity",
      model: "model"
    };
    var ModelVersions = {
      beta: "beta",
      v1: "v1",
      v2: "v2"
    };
    var EntityVersions = {
      v1: "v1"
    };
    var ServiceVersions = {
      v1: "v1"
    };
    var MaxBatchItems = {
      [MethodTypes.batchGet]: 100,
      [MethodTypes.batchWrite]: 25
    };
    var AttributeMutationMethods = {
      get: "get",
      set: "set"
    };
    var Pager = {
      raw: "raw",
      named: "named",
      item: "item",
      cursor: "cursor"
    };
    var UnprocessedTypes = {
      raw: "raw",
      item: "item"
    };
    var AttributeWildCard = "*";
    var ItemOperations = {
      "set": "set",
      "delete": "delete",
      "remove": "remove",
      "add": "add",
      "subtract": "subtract",
      "append": "append",
      "ifNotExists": "ifNotExists"
    };
    var UpsertOperations = {
      "set": "set",
      "add": "add",
      "subtract": "subtract",
      "append": "append",
      "ifNotExists": "ifNotExists"
    };
    var AttributeProxySymbol = Symbol("attribute_proxy");
    var TransactionCommitSymbol = Symbol("transaction_commit");
    var BuilderTypes = {
      update: "update",
      filter: "filter"
    };
    var ValueTypes = {
      string: "string",
      boolean: "boolean",
      number: "number",
      array: "array",
      set: "set",
      aws_set: "aws_set",
      object: "object",
      map: "map",
      null: "null",
      undefined: "undefined",
      unknown: "unknown"
    };
    var TraverserIndexes = {
      readonly: "readonly",
      required: "required",
      getters: "getters",
      setters: "setters"
    };
    var ReturnValues = {
      "default": "default",
      "none": "none",
      "all_old": "all_old",
      "updated_old": "updated_old",
      "all_new": "all_new",
      "updated_new": "updated_new"
    };
    var FormatToReturnValues = {
      "none": "NONE",
      "default": "NONE",
      "all_old": "ALL_OLD",
      "updated_old": "UPDATED_OLD",
      "all_new": "ALL_NEW",
      "updated_new": "UPDATED_NEW"
    };
    var TableIndex = "";
    var KeyCasing = {
      none: "none",
      upper: "upper",
      lower: "lower",
      default: "default"
    };
    var EventSubscriptionTypes = [
      "query",
      "results"
    ];
    var TerminalOperation = {
      go: "go",
      page: "page"
    };
    var AllPages = "all";
    var ResultOrderOption = {
      "asc": true,
      "desc": false
    };
    var ResultOrderParam = "ScanIndexForward";
    var DynamoDBAttributeTypes = Object.entries({
      string: "S",
      stringSet: "SS",
      number: "N",
      numberSet: "NS",
      binary: "B",
      binarySet: "BS",
      boolean: "BOOL",
      null: "NULL",
      list: "L",
      map: "M"
    }).reduce((obj, [name, type]) => {
      obj[name] = type;
      obj[type] = type;
      return obj;
    }, {});
    var CastKeyOptions = {
      string: "string",
      number: "number"
    };
    module2.exports = {
      Pager,
      KeyTypes,
      CastTypes,
      KeyCasing,
      PathTypes,
      IndexTypes,
      QueryTypes,
      ValueTypes,
      TableIndex,
      MethodTypes,
      Comparisons,
      BuilderTypes,
      ReturnValues,
      MaxBatchItems,
      ModelVersions,
      ItemOperations,
      AttributeTypes,
      EntityVersions,
      CastKeyOptions,
      ServiceVersions,
      ExpressionTypes,
      ElectroInstance,
      TraverserIndexes,
      UnprocessedTypes,
      AttributeWildCard,
      TerminalOperation,
      PartialComparisons,
      FormatToReturnValues,
      AttributeProxySymbol,
      ElectroInstanceTypes,
      MethodTypeTranslation,
      EventSubscriptionTypes,
      DynamoDBAttributeTypes,
      AttributeMutationMethods,
      AllPages,
      ResultOrderOption,
      ResultOrderParam,
      TransactionCommitSymbol,
      TransactionOperations,
      TransactionMethods,
      UpsertOperations
    };
  }
});

// node_modules/electrodb/src/errors.js
var require_errors = __commonJS({
  "node_modules/electrodb/src/errors.js"(exports, module2) {
    "use strict";
    function getHelpLink(section) {
      section = section || "unknown-error-5001";
      return `https://electrodb.dev/en/reference/errors/#${section}`;
    }
    var ErrorCode = Symbol("error-code");
    var ErrorCodes = {
      NoClientDefined: {
        code: 1001,
        section: "no-client-defined-on-model",
        name: "NoClientDefined",
        sym: ErrorCode
      },
      InvalidIdentifier: {
        code: 1002,
        section: "invalid-identifier",
        name: "InvalidIdentifier",
        sym: ErrorCode
      },
      InvalidKeyCompositeAttributeTemplate: {
        code: 1003,
        section: "invalid-key-composite-attribute-template",
        name: "InvalidKeyCompositeAttributeTemplate",
        sym: ErrorCode
      },
      DuplicateIndexes: {
        code: 1004,
        section: "duplicate-indexes",
        name: "DuplicateIndexes",
        sym: ErrorCode
      },
      CollectionNoSK: {
        code: 1005,
        section: "collection-without-an-sk",
        name: "CollectionNoSK",
        sym: ErrorCode
      },
      DuplicateCollections: {
        code: 1006,
        section: "duplicate-collections",
        name: "DuplicateCollections",
        sym: ErrorCode
      },
      MissingPrimaryIndex: {
        code: 1007,
        section: "missing-primary-index",
        name: "MissingPrimaryIndex",
        sym: ErrorCode
      },
      InvalidAttributeDefinition: {
        code: 1008,
        section: "invalid-attribute-definition",
        name: "InvalidAttributeDefinition",
        sym: ErrorCode
      },
      InvalidModel: {
        code: 1009,
        section: "invalid-model",
        name: "InvalidModel",
        sym: ErrorCode
      },
      InvalidOptions: {
        code: 1010,
        section: "invalid-options",
        name: "InvalidOptions",
        sym: ErrorCode
      },
      InvalidFilter: {
        code: 1011,
        section: "filters",
        name: "InvalidFilter",
        sym: ErrorCode
      },
      InvalidWhere: {
        code: 1012,
        section: "where",
        name: "InvalidWhere",
        sym: ErrorCode
      },
      InvalidJoin: {
        code: 1013,
        section: "join",
        name: "InvalidJoin",
        sym: ErrorCode
      },
      DuplicateIndexFields: {
        code: 1014,
        section: "duplicate-index-fields",
        name: "DuplicateIndexField",
        sym: ErrorCode
      },
      DuplicateIndexCompositeAttributes: {
        code: 1015,
        section: "duplicate-index-composite-attributes",
        name: "DuplicateIndexCompositeAttributes",
        sym: ErrorCode
      },
      InvalidAttributeWatchDefinition: {
        code: 1016,
        section: "invalid-attribute-watch-definition",
        name: "InvalidAttributeWatchDefinition",
        sym: ErrorCode
      },
      IncompatibleKeyCompositeAttributeTemplate: {
        code: 1017,
        section: "incompatible-key-composite-attribute-template",
        name: "IncompatibleKeyCompositeAttributeTemplate",
        sym: ErrorCode
      },
      InvalidIndexWithAttributeName: {
        code: 1018,
        section: "invalid-index-with-attribute-name",
        name: "InvalidIndexWithAttributeName",
        sym: ErrorCode
      },
      InvalidCollectionOnIndexWithAttributeFieldNames: {
        code: 1019,
        section: "invalid-collection-on-index-with-attribute-field-names",
        name: "InvalidIndexCompositeWithAttributeName",
        sym: ErrorCode
      },
      InvalidListenerProvided: {
        code: 1020,
        section: "invalid-listener-provided",
        name: "InvalidListenerProvided",
        sym: ErrorCode
      },
      InvalidLoggerProvided: {
        code: 1020,
        section: "invalid-listener-provided",
        name: "InvalidListenerProvided",
        sym: ErrorCode
      },
      InvalidClientProvided: {
        code: 1021,
        section: "invalid-client-provided",
        name: "InvalidClientProvided",
        sym: ErrorCode
      },
      InconsistentIndexDefinition: {
        code: 1022,
        section: "inconsistent-index-definition",
        name: "Inconsistent Index Definition",
        sym: ErrorCode
      },
      MissingAttribute: {
        code: 2001,
        section: "missing-attribute",
        name: "MissingAttribute",
        sym: ErrorCode
      },
      IncompleteCompositeAttributes: {
        code: 2002,
        section: "incomplete-composite-attributes",
        name: "IncompleteCompositeAttributes",
        sym: ErrorCode
      },
      MissingTable: {
        code: 2003,
        section: "missing-table",
        name: "MissingTable",
        sym: ErrorCode
      },
      InvalidConcurrencyOption: {
        code: 2004,
        section: "invalid-concurrency-option",
        name: "InvalidConcurrencyOption",
        sym: ErrorCode
      },
      InvalidPagesOption: {
        code: 2005,
        section: "invalid-pages-option",
        name: "InvalidPagesOption",
        sym: ErrorCode
      },
      InvalidLimitOption: {
        code: 2006,
        section: "invalid-limit-option",
        name: "InvalidLimitOption",
        sym: ErrorCode
      },
      InvalidConversionKeysProvided: {
        code: 2007,
        section: "invalid-conversion-values-provided",
        name: "InvalidConversionKeysProvided",
        sym: ErrorCode
      },
      InvalidConversionCursorProvided: {
        code: 2008,
        section: "invalid-conversion-values-provided",
        name: "InvalidConversionCursorProvided",
        sym: ErrorCode
      },
      InvalidConversionCompositeProvided: {
        code: 2009,
        section: "invalid-conversion-values-provided",
        name: "InvalidConversionCompositeProvided",
        sym: ErrorCode
      },
      DuplicateUpdateCompositesProvided: {
        code: 2010,
        section: "duplicate-update-composites-provided",
        name: "DuplicateUpdateCompositesProvided",
        sym: ErrorCode
      },
      InvalidAttribute: {
        code: 3001,
        section: "invalid-attribute",
        name: "InvalidAttribute",
        sym: ErrorCode
      },
      AWSError: {
        code: 4001,
        section: "aws-error",
        name: "AWSError",
        sym: ErrorCode
      },
      UnknownError: {
        code: 5001,
        section: "unknown-error",
        name: "UnknownError",
        sym: ErrorCode
      },
      GeneralError: {
        code: 5002,
        section: "",
        name: "GeneralError",
        sym: ErrorCode
      },
      LastEvaluatedKey: {
        code: 5003,
        section: "invalid-last-evaluated-key",
        name: "LastEvaluatedKey",
        sym: ErrorCode
      },
      NoOwnerForPager: {
        code: 5004,
        section: "no-owner-for-pager",
        name: "NoOwnerForPager",
        sym: ErrorCode
      },
      NoOwnerForCursor: {
        code: 5004,
        section: "no-owner-for-pager",
        name: "NoOwnerForCursor",
        sym: ErrorCode
      },
      PagerNotUnique: {
        code: 5005,
        section: "pager-not-unique",
        name: "NoOwnerForPager",
        sym: ErrorCode
      }
    };
    function makeMessage(message, section) {
      return `${message} - For more detail on this error reference: ${getHelpLink(section)}`;
    }
    var ElectroError = class _ElectroError extends Error {
      constructor(code, message) {
        super(message);
        let detail = ErrorCodes.UnknownError;
        if (code && code.sym === ErrorCode) {
          detail = code;
        }
        this._message = message;
        this.message = makeMessage(message, detail.section);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, _ElectroError);
        }
        this.name = "ElectroError";
        this.ref = code;
        this.code = detail.code;
        this.date = Date.now();
        this.isElectroError = true;
      }
    };
    var ElectroValidationError = class extends ElectroError {
      constructor(errors = []) {
        const fields = [];
        const messages = [];
        for (let i = 0; i < errors.length; i++) {
          const error = errors[i];
          const message2 = error ? error._message || error.message : void 0;
          messages.push(message2);
          if (error instanceof ElectroUserValidationError) {
            fields.push({
              field: error.field,
              index: error.index,
              reason: message2,
              cause: error.cause,
              type: "validation"
            });
          } else if (error instanceof ElectroAttributeValidationError) {
            fields.push({
              field: error.field,
              index: error.index,
              reason: message2,
              cause: error.cause || error,
              // error | undefined
              type: "validation"
            });
          } else if (message2) {
            fields.push({
              field: "",
              index: error.index,
              reason: message2,
              cause: error !== void 0 ? error.cause || error : void 0,
              type: "fatal"
            });
          }
        }
        const message = messages.filter((message2) => typeof message2 === "string" && message2.length).join(", ") || `Invalid value(s) provided`;
        super(ErrorCodes.InvalidAttribute, message);
        this.fields = fields;
        this.name = "ElectroValidationError";
      }
    };
    var ElectroUserValidationError = class extends ElectroError {
      constructor(field, cause) {
        let message;
        let hasCause = false;
        if (typeof cause === "string") {
          message = cause;
        } else if (cause !== void 0 && typeof cause._message === "string" && cause._message.length) {
          message = cause._message;
          hasCause = true;
        } else if (cause !== void 0 && typeof cause.message === "string" && cause.message.length) {
          message = cause.message;
          hasCause = true;
        } else {
          message = "Invalid value provided";
        }
        super(ErrorCodes.InvalidAttribute, message);
        this.field = field;
        this.name = "ElectroUserValidationError";
        if (hasCause) {
          this.cause = cause;
        }
      }
    };
    var ElectroAttributeValidationError = class extends ElectroError {
      constructor(field, reason) {
        super(ErrorCodes.InvalidAttribute, reason);
        this.field = field;
      }
    };
    module2.exports = {
      ErrorCodes,
      ElectroError,
      ElectroValidationError,
      ElectroUserValidationError,
      ElectroAttributeValidationError
    };
  }
});

// node_modules/jsonschema/lib/helpers.js
var require_helpers = __commonJS({
  "node_modules/jsonschema/lib/helpers.js"(exports, module2) {
    "use strict";
    var uri = require("url");
    var ValidationError = exports.ValidationError = function ValidationError2(message, instance, schema, propertyPath, name, argument) {
      if (propertyPath) {
        this.property = propertyPath;
      }
      if (message) {
        this.message = message;
      }
      if (schema) {
        if (schema.id) {
          this.schema = schema.id;
        } else {
          this.schema = schema;
        }
      }
      if (instance !== void 0) {
        this.instance = instance;
      }
      this.name = name;
      this.argument = argument;
      this.stack = this.toString();
    };
    ValidationError.prototype.toString = function toString() {
      return this.property + " " + this.message;
    };
    var ValidatorResult = exports.ValidatorResult = function ValidatorResult2(instance, schema, options, ctx) {
      this.instance = instance;
      this.schema = schema;
      this.propertyPath = ctx.propertyPath;
      this.errors = [];
      this.throwError = options && options.throwError;
      this.disableFormat = options && options.disableFormat === true;
    };
    ValidatorResult.prototype.addError = function addError(detail) {
      var err;
      if (typeof detail == "string") {
        err = new ValidationError(detail, this.instance, this.schema, this.propertyPath);
      } else {
        if (!detail)
          throw new Error("Missing error detail");
        if (!detail.message)
          throw new Error("Missing error message");
        if (!detail.name)
          throw new Error("Missing validator type");
        err = new ValidationError(detail.message, this.instance, this.schema, this.propertyPath, detail.name, detail.argument);
      }
      if (this.throwError) {
        throw err;
      }
      this.errors.push(err);
      return err;
    };
    ValidatorResult.prototype.importErrors = function importErrors(res) {
      if (typeof res == "string" || res && res.validatorType) {
        this.addError(res);
      } else if (res && res.errors) {
        Array.prototype.push.apply(this.errors, res.errors);
      }
    };
    function stringizer(v, i) {
      return i + ": " + v.toString() + "\n";
    }
    ValidatorResult.prototype.toString = function toString(res) {
      return this.errors.map(stringizer).join("");
    };
    Object.defineProperty(ValidatorResult.prototype, "valid", { get: function() {
      return !this.errors.length;
    } });
    var SchemaError = exports.SchemaError = function SchemaError2(msg, schema) {
      this.message = msg;
      this.schema = schema;
      Error.call(this, msg);
      Error.captureStackTrace(this, SchemaError2);
    };
    SchemaError.prototype = Object.create(
      Error.prototype,
      {
        constructor: { value: SchemaError, enumerable: false },
        name: { value: "SchemaError", enumerable: false }
      }
    );
    var SchemaContext = exports.SchemaContext = function SchemaContext2(schema, options, propertyPath, base, schemas) {
      this.schema = schema;
      this.options = options;
      this.propertyPath = propertyPath;
      this.base = base;
      this.schemas = schemas;
    };
    SchemaContext.prototype.resolve = function resolve(target) {
      return uri.resolve(this.base, target);
    };
    SchemaContext.prototype.makeChild = function makeChild(schema, propertyName) {
      var propertyPath = propertyName === void 0 ? this.propertyPath : this.propertyPath + makeSuffix(propertyName);
      var base = uri.resolve(this.base, schema.id || "");
      var ctx = new SchemaContext(schema, this.options, propertyPath, base, Object.create(this.schemas));
      if (schema.id && !ctx.schemas[base]) {
        ctx.schemas[base] = schema;
      }
      return ctx;
    };
    var FORMAT_REGEXPS = exports.FORMAT_REGEXPS = {
      "date-time": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
      "date": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
      "time": /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,
      "email": /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
      "ip-address": /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
      "ipv6": /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
      "uri": /^[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*$/,
      "color": /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
      // hostname regex from: http://stackoverflow.com/a/1420225/5628
      "hostname": /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
      "host-name": /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
      "alpha": /^[a-zA-Z]+$/,
      "alphanumeric": /^[a-zA-Z0-9]+$/,
      "utc-millisec": function(input) {
        return typeof input === "string" && parseFloat(input) === parseInt(input, 10) && !isNaN(input);
      },
      "regex": function(input) {
        var result = true;
        try {
          new RegExp(input);
        } catch (e) {
          result = false;
        }
        return result;
      },
      "style": /\s*(.+?):\s*([^;]+);?/,
      "phone": /^\+(?:[0-9] ?){6,14}[0-9]$/
    };
    FORMAT_REGEXPS.regexp = FORMAT_REGEXPS.regex;
    FORMAT_REGEXPS.pattern = FORMAT_REGEXPS.regex;
    FORMAT_REGEXPS.ipv4 = FORMAT_REGEXPS["ip-address"];
    exports.isFormat = function isFormat(input, format, validator) {
      if (typeof input === "string" && FORMAT_REGEXPS[format] !== void 0) {
        if (FORMAT_REGEXPS[format] instanceof RegExp) {
          return FORMAT_REGEXPS[format].test(input);
        }
        if (typeof FORMAT_REGEXPS[format] === "function") {
          return FORMAT_REGEXPS[format](input);
        }
      } else if (validator && validator.customFormats && typeof validator.customFormats[format] === "function") {
        return validator.customFormats[format](input);
      }
      return true;
    };
    var makeSuffix = exports.makeSuffix = function makeSuffix2(key) {
      key = key.toString();
      if (!key.match(/[.\s\[\]]/) && !key.match(/^[\d]/)) {
        return "." + key;
      }
      if (key.match(/^\d+$/)) {
        return "[" + key + "]";
      }
      return "[" + JSON.stringify(key) + "]";
    };
    exports.deepCompareStrict = function deepCompareStrict(a, b) {
      if (typeof a !== typeof b) {
        return false;
      }
      if (Array.isArray(a)) {
        if (!Array.isArray(b)) {
          return false;
        }
        if (a.length !== b.length) {
          return false;
        }
        return a.every(function(v, i) {
          return deepCompareStrict(a[i], b[i]);
        });
      }
      if (typeof a === "object") {
        if (!a || !b) {
          return a === b;
        }
        var aKeys = Object.keys(a);
        var bKeys = Object.keys(b);
        if (aKeys.length !== bKeys.length) {
          return false;
        }
        return aKeys.every(function(v) {
          return deepCompareStrict(a[v], b[v]);
        });
      }
      return a === b;
    };
    function deepMerger(target, dst, e, i) {
      if (typeof e === "object") {
        dst[i] = deepMerge(target[i], e);
      } else {
        if (target.indexOf(e) === -1) {
          dst.push(e);
        }
      }
    }
    function copyist(src, dst, key) {
      dst[key] = src[key];
    }
    function copyistWithDeepMerge(target, src, dst, key) {
      if (typeof src[key] !== "object" || !src[key]) {
        dst[key] = src[key];
      } else {
        if (!target[key]) {
          dst[key] = src[key];
        } else {
          dst[key] = deepMerge(target[key], src[key]);
        }
      }
    }
    function deepMerge(target, src) {
      var array = Array.isArray(src);
      var dst = array && [] || {};
      if (array) {
        target = target || [];
        dst = dst.concat(target);
        src.forEach(deepMerger.bind(null, target, dst));
      } else {
        if (target && typeof target === "object") {
          Object.keys(target).forEach(copyist.bind(null, target, dst));
        }
        Object.keys(src).forEach(copyistWithDeepMerge.bind(null, target, src, dst));
      }
      return dst;
    }
    module2.exports.deepMerge = deepMerge;
    exports.objectGetPath = function objectGetPath(o, s) {
      var parts = s.split("/").slice(1);
      var k;
      while (typeof (k = parts.shift()) == "string") {
        var n = decodeURIComponent(k.replace(/~0/, "~").replace(/~1/g, "/"));
        if (!(n in o))
          return;
        o = o[n];
      }
      return o;
    };
    function pathEncoder(v) {
      return "/" + encodeURIComponent(v).replace(/~/g, "%7E");
    }
    exports.encodePath = function encodePointer(a) {
      return a.map(pathEncoder).join("");
    };
    exports.getDecimalPlaces = function getDecimalPlaces(number) {
      var decimalPlaces = 0;
      if (isNaN(number))
        return decimalPlaces;
      if (typeof number !== "number") {
        number = Number(number);
      }
      var parts = number.toString().split("e");
      if (parts.length === 2) {
        if (parts[1][0] !== "-") {
          return decimalPlaces;
        } else {
          decimalPlaces = Number(parts[1].slice(1));
        }
      }
      var decimalParts = parts[0].split(".");
      if (decimalParts.length === 2) {
        decimalPlaces += decimalParts[1].length;
      }
      return decimalPlaces;
    };
  }
});

// node_modules/jsonschema/lib/attribute.js
var require_attribute = __commonJS({
  "node_modules/jsonschema/lib/attribute.js"(exports, module2) {
    "use strict";
    var helpers = require_helpers();
    var ValidatorResult = helpers.ValidatorResult;
    var SchemaError = helpers.SchemaError;
    var attribute = {};
    attribute.ignoreProperties = {
      // informative properties
      "id": true,
      "default": true,
      "description": true,
      "title": true,
      // arguments to other properties
      "exclusiveMinimum": true,
      "exclusiveMaximum": true,
      "additionalItems": true,
      // special-handled properties
      "$schema": true,
      "$ref": true,
      "extends": true
    };
    var validators = attribute.validators = {};
    validators.type = function validateType(instance, schema, options, ctx) {
      if (instance === void 0) {
        return null;
      }
      var result = new ValidatorResult(instance, schema, options, ctx);
      var types = Array.isArray(schema.type) ? schema.type : [schema.type];
      if (!types.some(this.testType.bind(this, instance, schema, options, ctx))) {
        var list = types.map(function(v) {
          return v.id && "<" + v.id + ">" || v + "";
        });
        result.addError({
          name: "type",
          argument: list,
          message: "is not of a type(s) " + list
        });
      }
      return result;
    };
    function testSchemaNoThrow(instance, options, ctx, callback, schema) {
      var throwError = options.throwError;
      options.throwError = false;
      var res = this.validateSchema(instance, schema, options, ctx);
      options.throwError = throwError;
      if (!res.valid && callback instanceof Function) {
        callback(res);
      }
      return res.valid;
    }
    validators.anyOf = function validateAnyOf(instance, schema, options, ctx) {
      if (instance === void 0) {
        return null;
      }
      var result = new ValidatorResult(instance, schema, options, ctx);
      var inner = new ValidatorResult(instance, schema, options, ctx);
      if (!Array.isArray(schema.anyOf)) {
        throw new SchemaError("anyOf must be an array");
      }
      if (!schema.anyOf.some(
        testSchemaNoThrow.bind(
          this,
          instance,
          options,
          ctx,
          function(res) {
            inner.importErrors(res);
          }
        )
      )) {
        var list = schema.anyOf.map(function(v, i) {
          return v.id && "<" + v.id + ">" || v.title && JSON.stringify(v.title) || v["$ref"] && "<" + v["$ref"] + ">" || "[subschema " + i + "]";
        });
        if (options.nestedErrors) {
          result.importErrors(inner);
        }
        result.addError({
          name: "anyOf",
          argument: list,
          message: "is not any of " + list.join(",")
        });
      }
      return result;
    };
    validators.allOf = function validateAllOf(instance, schema, options, ctx) {
      if (instance === void 0) {
        return null;
      }
      if (!Array.isArray(schema.allOf)) {
        throw new SchemaError("allOf must be an array");
      }
      var result = new ValidatorResult(instance, schema, options, ctx);
      var self2 = this;
      schema.allOf.forEach(function(v, i) {
        var valid = self2.validateSchema(instance, v, options, ctx);
        if (!valid.valid) {
          var msg = v.id && "<" + v.id + ">" || v.title && JSON.stringify(v.title) || v["$ref"] && "<" + v["$ref"] + ">" || "[subschema " + i + "]";
          result.addError({
            name: "allOf",
            argument: { id: msg, length: valid.errors.length, valid },
            message: "does not match allOf schema " + msg + " with " + valid.errors.length + " error[s]:"
          });
          result.importErrors(valid);
        }
      });
      return result;
    };
    validators.oneOf = function validateOneOf(instance, schema, options, ctx) {
      if (instance === void 0) {
        return null;
      }
      if (!Array.isArray(schema.oneOf)) {
        throw new SchemaError("oneOf must be an array");
      }
      var result = new ValidatorResult(instance, schema, options, ctx);
      var inner = new ValidatorResult(instance, schema, options, ctx);
      var count = schema.oneOf.filter(
        testSchemaNoThrow.bind(
          this,
          instance,
          options,
          ctx,
          function(res) {
            inner.importErrors(res);
          }
        )
      ).length;
      var list = schema.oneOf.map(function(v, i) {
        return v.id && "<" + v.id + ">" || v.title && JSON.stringify(v.title) || v["$ref"] && "<" + v["$ref"] + ">" || "[subschema " + i + "]";
      });
      if (count !== 1) {
        if (options.nestedErrors) {
          result.importErrors(inner);
        }
        result.addError({
          name: "oneOf",
          argument: list,
          message: "is not exactly one from " + list.join(",")
        });
      }
      return result;
    };
    validators.properties = function validateProperties(instance, schema, options, ctx) {
      if (!this.types.object(instance))
        return;
      var result = new ValidatorResult(instance, schema, options, ctx);
      var properties = schema.properties || {};
      for (var property in properties) {
        if (typeof options.preValidateProperty == "function") {
          options.preValidateProperty(instance, property, properties[property], options, ctx);
        }
        var prop = Object.hasOwnProperty.call(instance, property) ? instance[property] : void 0;
        var res = this.validateSchema(prop, properties[property], options, ctx.makeChild(properties[property], property));
        if (res.instance !== result.instance[property])
          result.instance[property] = res.instance;
        result.importErrors(res);
      }
      return result;
    };
    function testAdditionalProperty(instance, schema, options, ctx, property, result) {
      if (!this.types.object(instance))
        return;
      if (schema.properties && schema.properties[property] !== void 0) {
        return;
      }
      if (schema.additionalProperties === false) {
        result.addError({
          name: "additionalProperties",
          argument: property,
          message: "additionalProperty " + JSON.stringify(property) + " exists in instance when not allowed"
        });
      } else {
        var additionalProperties = schema.additionalProperties || {};
        if (typeof options.preValidateProperty == "function") {
          options.preValidateProperty(instance, property, additionalProperties, options, ctx);
        }
        var res = this.validateSchema(instance[property], additionalProperties, options, ctx.makeChild(additionalProperties, property));
        if (res.instance !== result.instance[property])
          result.instance[property] = res.instance;
        result.importErrors(res);
      }
    }
    validators.patternProperties = function validatePatternProperties(instance, schema, options, ctx) {
      if (!this.types.object(instance))
        return;
      var result = new ValidatorResult(instance, schema, options, ctx);
      var patternProperties = schema.patternProperties || {};
      for (var property in instance) {
        var test = true;
        for (var pattern in patternProperties) {
          var expr = new RegExp(pattern, "u");
          if (!expr.test(property)) {
            continue;
          }
          test = false;
          if (typeof options.preValidateProperty == "function") {
            options.preValidateProperty(instance, property, patternProperties[pattern], options, ctx);
          }
          var res = this.validateSchema(instance[property], patternProperties[pattern], options, ctx.makeChild(patternProperties[pattern], property));
          if (res.instance !== result.instance[property])
            result.instance[property] = res.instance;
          result.importErrors(res);
        }
        if (test) {
          testAdditionalProperty.call(this, instance, schema, options, ctx, property, result);
        }
      }
      return result;
    };
    validators.additionalProperties = function validateAdditionalProperties(instance, schema, options, ctx) {
      if (!this.types.object(instance))
        return;
      if (schema.patternProperties) {
        return null;
      }
      var result = new ValidatorResult(instance, schema, options, ctx);
      for (var property in instance) {
        testAdditionalProperty.call(this, instance, schema, options, ctx, property, result);
      }
      return result;
    };
    validators.minProperties = function validateMinProperties(instance, schema, options, ctx) {
      if (!this.types.object(instance))
        return;
      var result = new ValidatorResult(instance, schema, options, ctx);
      var keys = Object.keys(instance);
      if (!(keys.length >= schema.minProperties)) {
        result.addError({
          name: "minProperties",
          argument: schema.minProperties,
          message: "does not meet minimum property length of " + schema.minProperties
        });
      }
      return result;
    };
    validators.maxProperties = function validateMaxProperties(instance, schema, options, ctx) {
      if (!this.types.object(instance))
        return;
      var result = new ValidatorResult(instance, schema, options, ctx);
      var keys = Object.keys(instance);
      if (!(keys.length <= schema.maxProperties)) {
        result.addError({
          name: "maxProperties",
          argument: schema.maxProperties,
          message: "does not meet maximum property length of " + schema.maxProperties
        });
      }
      return result;
    };
    validators.items = function validateItems(instance, schema, options, ctx) {
      var self2 = this;
      if (!this.types.array(instance))
        return;
      if (!schema.items)
        return;
      var result = new ValidatorResult(instance, schema, options, ctx);
      instance.every(function(value, i) {
        var items = Array.isArray(schema.items) ? schema.items[i] || schema.additionalItems : schema.items;
        if (items === void 0) {
          return true;
        }
        if (items === false) {
          result.addError({
            name: "items",
            message: "additionalItems not permitted"
          });
          return false;
        }
        var res = self2.validateSchema(value, items, options, ctx.makeChild(items, i));
        if (res.instance !== result.instance[i])
          result.instance[i] = res.instance;
        result.importErrors(res);
        return true;
      });
      return result;
    };
    validators.minimum = function validateMinimum(instance, schema, options, ctx) {
      if (!this.types.number(instance))
        return;
      var result = new ValidatorResult(instance, schema, options, ctx);
      var valid = true;
      if (schema.exclusiveMinimum && schema.exclusiveMinimum === true) {
        valid = instance > schema.minimum;
      } else {
        valid = instance >= schema.minimum;
      }
      if (!valid) {
        result.addError({
          name: "minimum",
          argument: schema.minimum,
          message: "must have a minimum value of " + schema.minimum
        });
      }
      return result;
    };
    validators.maximum = function validateMaximum(instance, schema, options, ctx) {
      if (!this.types.number(instance))
        return;
      var result = new ValidatorResult(instance, schema, options, ctx);
      var valid;
      if (schema.exclusiveMaximum && schema.exclusiveMaximum === true) {
        valid = instance < schema.maximum;
      } else {
        valid = instance <= schema.maximum;
      }
      if (!valid) {
        result.addError({
          name: "maximum",
          argument: schema.maximum,
          message: "must have a maximum value of " + schema.maximum
        });
      }
      return result;
    };
    var validateMultipleOfOrDivisbleBy = function validateMultipleOfOrDivisbleBy2(instance, schema, options, ctx, validationType, errorMessage) {
      if (!this.types.number(instance))
        return;
      var validationArgument = schema[validationType];
      if (validationArgument == 0) {
        throw new SchemaError(validationType + " cannot be zero");
      }
      var result = new ValidatorResult(instance, schema, options, ctx);
      var instanceDecimals = helpers.getDecimalPlaces(instance);
      var divisorDecimals = helpers.getDecimalPlaces(validationArgument);
      var maxDecimals = Math.max(instanceDecimals, divisorDecimals);
      var multiplier = Math.pow(10, maxDecimals);
      if (Math.round(instance * multiplier) % Math.round(validationArgument * multiplier) !== 0) {
        result.addError({
          name: validationType,
          argument: validationArgument,
          message: errorMessage + JSON.stringify(validationArgument)
        });
      }
      return result;
    };
    validators.multipleOf = function validateMultipleOf(instance, schema, options, ctx) {
      return validateMultipleOfOrDivisbleBy.call(this, instance, schema, options, ctx, "multipleOf", "is not a multiple of (divisible by) ");
    };
    validators.divisibleBy = function validateDivisibleBy(instance, schema, options, ctx) {
      return validateMultipleOfOrDivisbleBy.call(this, instance, schema, options, ctx, "divisibleBy", "is not divisible by (multiple of) ");
    };
    validators.required = function validateRequired(instance, schema, options, ctx) {
      var result = new ValidatorResult(instance, schema, options, ctx);
      if (instance === void 0 && schema.required === true) {
        result.addError({
          name: "required",
          message: "is required"
        });
      } else if (this.types.object(instance) && Array.isArray(schema.required)) {
        schema.required.forEach(function(n) {
          if (instance[n] === void 0) {
            result.addError({
              name: "required",
              argument: n,
              message: "requires property " + JSON.stringify(n)
            });
          }
        });
      }
      return result;
    };
    validators.pattern = function validatePattern(instance, schema, options, ctx) {
      if (!this.types.string(instance))
        return;
      var result = new ValidatorResult(instance, schema, options, ctx);
      var regexp = new RegExp(schema.pattern, "u");
      if (!instance.match(regexp)) {
        result.addError({
          name: "pattern",
          argument: schema.pattern,
          message: "does not match pattern " + JSON.stringify(schema.pattern.toString())
        });
      }
      return result;
    };
    validators.format = function validateFormat(instance, schema, options, ctx) {
      if (instance === void 0)
        return;
      var result = new ValidatorResult(instance, schema, options, ctx);
      if (!result.disableFormat && !helpers.isFormat(instance, schema.format, this)) {
        result.addError({
          name: "format",
          argument: schema.format,
          message: "does not conform to the " + JSON.stringify(schema.format) + " format"
        });
      }
      return result;
    };
    validators.minLength = function validateMinLength(instance, schema, options, ctx) {
      if (!this.types.string(instance))
        return;
      var result = new ValidatorResult(instance, schema, options, ctx);
      var hsp = instance.match(/[\uDC00-\uDFFF]/g);
      var length = instance.length - (hsp ? hsp.length : 0);
      if (!(length >= schema.minLength)) {
        result.addError({
          name: "minLength",
          argument: schema.minLength,
          message: "does not meet minimum length of " + schema.minLength
        });
      }
      return result;
    };
    validators.maxLength = function validateMaxLength(instance, schema, options, ctx) {
      if (!this.types.string(instance))
        return;
      var result = new ValidatorResult(instance, schema, options, ctx);
      var hsp = instance.match(/[\uDC00-\uDFFF]/g);
      var length = instance.length - (hsp ? hsp.length : 0);
      if (!(length <= schema.maxLength)) {
        result.addError({
          name: "maxLength",
          argument: schema.maxLength,
          message: "does not meet maximum length of " + schema.maxLength
        });
      }
      return result;
    };
    validators.minItems = function validateMinItems(instance, schema, options, ctx) {
      if (!this.types.array(instance))
        return;
      var result = new ValidatorResult(instance, schema, options, ctx);
      if (!(instance.length >= schema.minItems)) {
        result.addError({
          name: "minItems",
          argument: schema.minItems,
          message: "does not meet minimum length of " + schema.minItems
        });
      }
      return result;
    };
    validators.maxItems = function validateMaxItems(instance, schema, options, ctx) {
      if (!this.types.array(instance))
        return;
      var result = new ValidatorResult(instance, schema, options, ctx);
      if (!(instance.length <= schema.maxItems)) {
        result.addError({
          name: "maxItems",
          argument: schema.maxItems,
          message: "does not meet maximum length of " + schema.maxItems
        });
      }
      return result;
    };
    function testArrays(v, i, a) {
      var j, len = a.length;
      for (j = i + 1, len; j < len; j++) {
        if (helpers.deepCompareStrict(v, a[j])) {
          return false;
        }
      }
      return true;
    }
    validators.uniqueItems = function validateUniqueItems(instance, schema, options, ctx) {
      if (schema.uniqueItems !== true)
        return;
      if (!this.types.array(instance))
        return;
      var result = new ValidatorResult(instance, schema, options, ctx);
      if (!instance.every(testArrays)) {
        result.addError({
          name: "uniqueItems",
          message: "contains duplicate item"
        });
      }
      return result;
    };
    validators.dependencies = function validateDependencies(instance, schema, options, ctx) {
      if (!this.types.object(instance))
        return;
      var result = new ValidatorResult(instance, schema, options, ctx);
      for (var property in schema.dependencies) {
        if (instance[property] === void 0) {
          continue;
        }
        var dep = schema.dependencies[property];
        var childContext = ctx.makeChild(dep, property);
        if (typeof dep == "string") {
          dep = [dep];
        }
        if (Array.isArray(dep)) {
          dep.forEach(function(prop) {
            if (instance[prop] === void 0) {
              result.addError({
                // FIXME there's two different "dependencies" errors here with slightly different outputs
                // Can we make these the same? Or should we create different error types?
                name: "dependencies",
                argument: childContext.propertyPath,
                message: "property " + prop + " not found, required by " + childContext.propertyPath
              });
            }
          });
        } else {
          var res = this.validateSchema(instance, dep, options, childContext);
          if (result.instance !== res.instance)
            result.instance = res.instance;
          if (res && res.errors.length) {
            result.addError({
              name: "dependencies",
              argument: childContext.propertyPath,
              message: "does not meet dependency required by " + childContext.propertyPath
            });
            result.importErrors(res);
          }
        }
      }
      return result;
    };
    validators["enum"] = function validateEnum(instance, schema, options, ctx) {
      if (instance === void 0) {
        return null;
      }
      if (!Array.isArray(schema["enum"])) {
        throw new SchemaError("enum expects an array", schema);
      }
      var result = new ValidatorResult(instance, schema, options, ctx);
      if (!schema["enum"].some(helpers.deepCompareStrict.bind(null, instance))) {
        result.addError({
          name: "enum",
          argument: schema["enum"],
          message: "is not one of enum values: " + schema["enum"].map(String).join(",")
        });
      }
      return result;
    };
    validators["const"] = function validateEnum(instance, schema, options, ctx) {
      if (instance === void 0) {
        return null;
      }
      var result = new ValidatorResult(instance, schema, options, ctx);
      if (!helpers.deepCompareStrict(schema["const"], instance)) {
        result.addError({
          name: "const",
          argument: schema["const"],
          message: "does not exactly match expected constant: " + schema["const"]
        });
      }
      return result;
    };
    validators.not = validators.disallow = function validateNot(instance, schema, options, ctx) {
      var self2 = this;
      if (instance === void 0)
        return null;
      var result = new ValidatorResult(instance, schema, options, ctx);
      var notTypes = schema.not || schema.disallow;
      if (!notTypes)
        return null;
      if (!Array.isArray(notTypes))
        notTypes = [notTypes];
      notTypes.forEach(function(type) {
        if (self2.testType(instance, schema, options, ctx, type)) {
          var schemaId = type && type.id && "<" + type.id + ">" || type;
          result.addError({
            name: "not",
            argument: schemaId,
            message: "is of prohibited type " + schemaId
          });
        }
      });
      return result;
    };
    module2.exports = attribute;
  }
});

// node_modules/jsonschema/lib/scan.js
var require_scan = __commonJS({
  "node_modules/jsonschema/lib/scan.js"(exports, module2) {
    "use strict";
    var urilib = require("url");
    var helpers = require_helpers();
    module2.exports.SchemaScanResult = SchemaScanResult;
    function SchemaScanResult(found, ref) {
      this.id = found;
      this.ref = ref;
    }
    module2.exports.scan = function scan(base, schema) {
      function scanSchema(baseuri, schema2) {
        if (!schema2 || typeof schema2 != "object")
          return;
        if (schema2.$ref) {
          var resolvedUri = urilib.resolve(baseuri, schema2.$ref);
          ref[resolvedUri] = ref[resolvedUri] ? ref[resolvedUri] + 1 : 0;
          return;
        }
        var ourBase = schema2.id ? urilib.resolve(baseuri, schema2.id) : baseuri;
        if (ourBase) {
          if (ourBase.indexOf("#") < 0)
            ourBase += "#";
          if (found[ourBase]) {
            if (!helpers.deepCompareStrict(found[ourBase], schema2)) {
              throw new Error("Schema <" + schema2 + "> already exists with different definition");
            }
            return found[ourBase];
          }
          found[ourBase] = schema2;
          if (ourBase[ourBase.length - 1] == "#") {
            found[ourBase.substring(0, ourBase.length - 1)] = schema2;
          }
        }
        scanArray(ourBase + "/items", Array.isArray(schema2.items) ? schema2.items : [schema2.items]);
        scanArray(ourBase + "/extends", Array.isArray(schema2.extends) ? schema2.extends : [schema2.extends]);
        scanSchema(ourBase + "/additionalItems", schema2.additionalItems);
        scanObject(ourBase + "/properties", schema2.properties);
        scanSchema(ourBase + "/additionalProperties", schema2.additionalProperties);
        scanObject(ourBase + "/definitions", schema2.definitions);
        scanObject(ourBase + "/patternProperties", schema2.patternProperties);
        scanObject(ourBase + "/dependencies", schema2.dependencies);
        scanArray(ourBase + "/disallow", schema2.disallow);
        scanArray(ourBase + "/allOf", schema2.allOf);
        scanArray(ourBase + "/anyOf", schema2.anyOf);
        scanArray(ourBase + "/oneOf", schema2.oneOf);
        scanSchema(ourBase + "/not", schema2.not);
      }
      function scanArray(baseuri, schemas) {
        if (!Array.isArray(schemas))
          return;
        for (var i = 0; i < schemas.length; i++) {
          scanSchema(baseuri + "/" + i, schemas[i]);
        }
      }
      function scanObject(baseuri, schemas) {
        if (!schemas || typeof schemas != "object")
          return;
        for (var p in schemas) {
          scanSchema(baseuri + "/" + p, schemas[p]);
        }
      }
      var found = {};
      var ref = {};
      scanSchema(base, schema);
      return new SchemaScanResult(found, ref);
    };
  }
});

// node_modules/jsonschema/lib/validator.js
var require_validator = __commonJS({
  "node_modules/jsonschema/lib/validator.js"(exports, module2) {
    "use strict";
    var urilib = require("url");
    var attribute = require_attribute();
    var helpers = require_helpers();
    var scanSchema = require_scan().scan;
    var ValidatorResult = helpers.ValidatorResult;
    var SchemaError = helpers.SchemaError;
    var SchemaContext = helpers.SchemaContext;
    var anonymousBase = "/";
    var Validator = function Validator2() {
      this.customFormats = Object.create(Validator2.prototype.customFormats);
      this.schemas = {};
      this.unresolvedRefs = [];
      this.types = Object.create(types);
      this.attributes = Object.create(attribute.validators);
    };
    Validator.prototype.customFormats = {};
    Validator.prototype.schemas = null;
    Validator.prototype.types = null;
    Validator.prototype.attributes = null;
    Validator.prototype.unresolvedRefs = null;
    Validator.prototype.addSchema = function addSchema(schema, base) {
      var self2 = this;
      if (!schema) {
        return null;
      }
      var scan = scanSchema(base || anonymousBase, schema);
      var ourUri = base || schema.id;
      for (var uri in scan.id) {
        this.schemas[uri] = scan.id[uri];
      }
      for (var uri in scan.ref) {
        this.unresolvedRefs.push(uri);
      }
      this.unresolvedRefs = this.unresolvedRefs.filter(function(uri2) {
        return typeof self2.schemas[uri2] === "undefined";
      });
      return this.schemas[ourUri];
    };
    Validator.prototype.addSubSchemaArray = function addSubSchemaArray(baseuri, schemas) {
      if (!Array.isArray(schemas))
        return;
      for (var i = 0; i < schemas.length; i++) {
        this.addSubSchema(baseuri, schemas[i]);
      }
    };
    Validator.prototype.addSubSchemaObject = function addSubSchemaArray(baseuri, schemas) {
      if (!schemas || typeof schemas != "object")
        return;
      for (var p in schemas) {
        this.addSubSchema(baseuri, schemas[p]);
      }
    };
    Validator.prototype.setSchemas = function setSchemas(schemas) {
      this.schemas = schemas;
    };
    Validator.prototype.getSchema = function getSchema(urn) {
      return this.schemas[urn];
    };
    Validator.prototype.validate = function validate(instance, schema, options, ctx) {
      if (!options) {
        options = {};
      }
      var propertyName = options.propertyName || "instance";
      var base = urilib.resolve(options.base || anonymousBase, schema.id || "");
      if (!ctx) {
        ctx = new SchemaContext(schema, options, propertyName, base, Object.create(this.schemas));
        if (!ctx.schemas[base]) {
          ctx.schemas[base] = schema;
        }
        var found = scanSchema(base, schema);
        for (var n in found.id) {
          var sch = found.id[n];
          ctx.schemas[n] = sch;
        }
      }
      if (schema) {
        var result = this.validateSchema(instance, schema, options, ctx);
        if (!result) {
          throw new Error("Result undefined");
        }
        return result;
      }
      throw new SchemaError("no schema specified", schema);
    };
    function shouldResolve(schema) {
      var ref = typeof schema === "string" ? schema : schema.$ref;
      if (typeof ref == "string")
        return ref;
      return false;
    }
    Validator.prototype.validateSchema = function validateSchema(instance, schema, options, ctx) {
      var result = new ValidatorResult(instance, schema, options, ctx);
      if (typeof schema === "boolean") {
        if (schema === true) {
          schema = {};
        } else if (schema === false) {
          schema = { type: [] };
        }
      } else if (!schema) {
        throw new Error("schema is undefined");
      }
      if (schema["extends"]) {
        if (Array.isArray(schema["extends"])) {
          var schemaobj = { schema, ctx };
          schema["extends"].forEach(this.schemaTraverser.bind(this, schemaobj));
          schema = schemaobj.schema;
          schemaobj.schema = null;
          schemaobj.ctx = null;
          schemaobj = null;
        } else {
          schema = helpers.deepMerge(schema, this.superResolve(schema["extends"], ctx));
        }
      }
      var switchSchema = shouldResolve(schema);
      if (switchSchema) {
        var resolved = this.resolve(schema, switchSchema, ctx);
        var subctx = new SchemaContext(resolved.subschema, options, ctx.propertyPath, resolved.switchSchema, ctx.schemas);
        return this.validateSchema(instance, resolved.subschema, options, subctx);
      }
      var skipAttributes = options && options.skipAttributes || [];
      for (var key in schema) {
        if (!attribute.ignoreProperties[key] && skipAttributes.indexOf(key) < 0) {
          var validatorErr = null;
          var validator = this.attributes[key];
          if (validator) {
            validatorErr = validator.call(this, instance, schema, options, ctx);
          } else if (options.allowUnknownAttributes === false) {
            throw new SchemaError("Unsupported attribute: " + key, schema);
          }
          if (validatorErr) {
            result.importErrors(validatorErr);
          }
        }
      }
      if (typeof options.rewrite == "function") {
        var value = options.rewrite.call(this, instance, schema, options, ctx);
        result.instance = value;
      }
      return result;
    };
    Validator.prototype.schemaTraverser = function schemaTraverser(schemaobj, s) {
      schemaobj.schema = helpers.deepMerge(schemaobj.schema, this.superResolve(s, schemaobj.ctx));
    };
    Validator.prototype.superResolve = function superResolve(schema, ctx) {
      var ref = shouldResolve(schema);
      if (ref) {
        return this.resolve(schema, ref, ctx).subschema;
      }
      return schema;
    };
    Validator.prototype.resolve = function resolve(schema, switchSchema, ctx) {
      switchSchema = ctx.resolve(switchSchema);
      if (ctx.schemas[switchSchema]) {
        return { subschema: ctx.schemas[switchSchema], switchSchema };
      }
      var parsed = urilib.parse(switchSchema);
      var fragment = parsed && parsed.hash;
      var document = fragment && fragment.length && switchSchema.substr(0, switchSchema.length - fragment.length);
      if (!document || !ctx.schemas[document]) {
        throw new SchemaError("no such schema <" + switchSchema + ">", schema);
      }
      var subschema = helpers.objectGetPath(ctx.schemas[document], fragment.substr(1));
      if (subschema === void 0) {
        throw new SchemaError("no such schema " + fragment + " located in <" + document + ">", schema);
      }
      return { subschema, switchSchema };
    };
    Validator.prototype.testType = function validateType(instance, schema, options, ctx, type) {
      if (typeof this.types[type] == "function") {
        return this.types[type].call(this, instance);
      }
      if (type && typeof type == "object") {
        var res = this.validateSchema(instance, type, options, ctx);
        return res === void 0 || !(res && res.errors.length);
      }
      return true;
    };
    var types = Validator.prototype.types = {};
    types.string = function testString(instance) {
      return typeof instance == "string";
    };
    types.number = function testNumber(instance) {
      return typeof instance == "number" && isFinite(instance);
    };
    types.integer = function testInteger(instance) {
      return typeof instance == "number" && instance % 1 === 0;
    };
    types.boolean = function testBoolean(instance) {
      return typeof instance == "boolean";
    };
    types.array = function testArray(instance) {
      return Array.isArray(instance);
    };
    types["null"] = function testNull(instance) {
      return instance === null;
    };
    types.date = function testDate(instance) {
      return instance instanceof Date;
    };
    types.any = function testAny(instance) {
      return true;
    };
    types.object = function testObject(instance) {
      return instance && typeof instance === "object" && !Array.isArray(instance) && !(instance instanceof Date);
    };
    module2.exports = Validator;
  }
});

// node_modules/jsonschema/lib/index.js
var require_lib = __commonJS({
  "node_modules/jsonschema/lib/index.js"(exports, module2) {
    "use strict";
    var Validator = module2.exports.Validator = require_validator();
    module2.exports.ValidatorResult = require_helpers().ValidatorResult;
    module2.exports.ValidationError = require_helpers().ValidationError;
    module2.exports.SchemaError = require_helpers().SchemaError;
    module2.exports.SchemaScanResult = require_scan().SchemaScanResult;
    module2.exports.scan = require_scan().scan;
    module2.exports.validate = function(instance, schema, options) {
      var v = new Validator();
      return v.validate(instance, schema, options);
    };
  }
});

// node_modules/electrodb/src/validations.js
var require_validations = __commonJS({
  "node_modules/electrodb/src/validations.js"(exports, module2) {
    "use strict";
    var e = require_errors();
    var { KeyCasing } = require_types();
    var Validator = require_lib().Validator;
    Validator.prototype.customFormats.isFunction = function(input) {
      return typeof input === "function";
    };
    Validator.prototype.customFormats.isFunctionOrString = function(input) {
      return typeof input === "function" || typeof input === "string";
    };
    Validator.prototype.customFormats.isFunctionOrRegexp = function(input) {
      return typeof input === "function" || input instanceof RegExp;
    };
    var v = new Validator();
    var Attribute = {
      id: "/Attribute",
      type: ["object", "string", "array"],
      required: ["type"],
      properties: {
        type: {
          // todo: only specific values
          type: ["string", "array"]
          // enum: ["string", "number", "boolean", "enum"],
        },
        field: {
          type: "string"
        },
        hidden: {
          type: "boolean"
        },
        watch: {
          type: ["array", "string"],
          items: {
            type: "string"
          }
        },
        label: {
          type: "string"
        },
        readOnly: {
          type: "boolean"
        },
        required: {
          type: "boolean"
        },
        cast: {
          type: "string",
          enum: ["string", "number"]
        },
        default: {
          type: "any"
        },
        validate: {
          type: "any",
          format: "isFunctionOrRegexp"
        },
        get: {
          type: "any",
          format: "isFunction"
        },
        set: {
          type: "any",
          format: "isFunction"
        },
        padding: {
          type: "object",
          required: ["length", "char"],
          properties: {
            length: {
              type: "number"
            },
            char: {
              type: "string"
            }
          }
        }
      }
    };
    var Index = {
      id: "/Index",
      type: "object",
      properties: {
        pk: {
          type: "object",
          required: true,
          properties: {
            field: {
              type: "string",
              required: true
            },
            facets: {
              type: ["array", "string"],
              items: {
                type: "string"
              },
              required: false
            },
            composite: {
              type: ["array"],
              items: {
                type: "string"
              },
              required: false
            },
            template: {
              type: "string",
              required: false
            },
            casing: {
              type: "string",
              enum: ["upper", "lower", "none", "default"],
              required: false
            },
            cast: {
              type: "string",
              enum: ["string", "number"],
              required: false
            }
          }
        },
        sk: {
          type: "object",
          required: ["field"],
          properties: {
            field: {
              type: "string",
              required: true
            },
            facets: {
              type: ["array", "string"],
              required: false,
              items: {
                type: "string"
              }
            },
            composite: {
              type: ["array"],
              required: false,
              items: {
                type: "string"
              }
            },
            template: {
              type: "string",
              required: false
            },
            casing: {
              type: "string",
              enum: ["upper", "lower", "none", "default"],
              required: false
            },
            cast: {
              type: "string",
              enum: ["string", "number"],
              required: false
            }
          }
        },
        index: {
          type: "string"
        },
        collection: {
          type: ["array", "string"]
        },
        type: {
          type: "string",
          enum: ["clustered", "isolated"],
          required: false
        }
      }
    };
    var Modelv1 = {
      type: "object",
      required: true,
      properties: {
        model: {
          type: "object",
          required: true,
          properties: {
            entity: {
              type: "string",
              required: true
            },
            version: {
              type: "string",
              required: true
            },
            service: {
              type: "string",
              required: true
            }
          }
        },
        table: {
          type: "string"
        },
        attributes: {
          type: "object",
          patternProperties: {
            ["."]: { $ref: "/Attribute" }
          }
        },
        indexes: {
          type: "object",
          minProperties: 1,
          patternProperties: {
            ["."]: { $ref: "/Index" }
          }
        },
        filters: { $ref: "/Filters" }
      },
      required: ["model", "attributes", "indexes"]
    };
    var ModelBeta = {
      type: "object",
      required: true,
      properties: {
        service: {
          type: "string",
          required: true
        },
        entity: {
          type: "string",
          required: true
        },
        table: {
          type: "string"
        },
        version: {
          type: "string"
        },
        attributes: {
          type: "object",
          patternProperties: {
            ["."]: { $ref: "/Attribute" }
          }
        },
        indexes: {
          type: "object",
          minProperties: 1,
          patternProperties: {
            ["."]: { $ref: "/Index" }
          }
        },
        filters: { $ref: "/Filters" }
      },
      required: ["attributes", "indexes"]
    };
    var Filters = {
      id: "/Filters",
      type: "object",
      patternProperties: {
        ["."]: {
          type: "any",
          format: "isFunction",
          message: "Requires function"
        }
      }
    };
    v.addSchema(Attribute, "/Attribute");
    v.addSchema(Index, "/Index");
    v.addSchema(Filters, "/Filters");
    v.addSchema(ModelBeta, "/ModelBeta");
    v.addSchema(Modelv1, "/Modelv1");
    function validateModel(model = {}) {
      let betaErrors = v.validate(model, "/ModelBeta").errors;
      if (betaErrors.length) {
        let errors = v.validate(model, "/Modelv1").errors;
        if (errors.length) {
          throw new e.ElectroError(
            e.ErrorCodes.InvalidModel,
            errors.map((err) => {
              let message = `${err.property}`;
              switch (err.argument) {
                case "isFunction":
                  return `${message} must be a function`;
                case "isFunctionOrString":
                  return `${message} must be either a function or string`;
                case "isFunctionOrRegexp":
                  return `${message} must be either a function or Regexp`;
                default:
                  return `${message} ${err.message}`;
              }
            }).join(", ")
          );
        }
      }
    }
    function testModel(model) {
      let isModel = false;
      let error = "";
      try {
        validateModel(model);
        isModel = true;
      } catch (err) {
        error = err.message;
      }
      return [isModel, error];
    }
    function isStringHasLength(str) {
      return typeof str === "string" && str.length > 0;
    }
    function isObjectHasLength(obj) {
      return typeof obj === "object" && Object.keys(obj).length > 0;
    }
    function isArrayHasLength(arr) {
      return Array.isArray(arr) && arr.length > 0;
    }
    function isNameEntityRecordType(entityRecord) {
      return isObjectHasLength(entityRecord) && Object.values(entityRecord).find((value) => {
        return value._instance !== void 0;
      });
    }
    function isNameModelRecordType(modelRecord) {
      return isObjectHasLength(modelRecord) && Object.values(modelRecord).find((value) => {
        return value.model && isStringHasLength(value.model.entity) && isStringHasLength(value.model.version) && isStringHasLength(value.model.service);
      });
    }
    function isBetaServiceConfig(serviceConfig) {
      return isObjectHasLength(serviceConfig) && (isStringHasLength(serviceConfig.service) || isStringHasLength(serviceConfig.name)) && isStringHasLength(serviceConfig.version);
    }
    function isFunction(value) {
      return typeof value === "function";
    }
    function stringArrayMatch(arr1, arr2) {
      let areArrays = Array.isArray(arr1) && Array.isArray(arr2);
      let match = areArrays && arr1.length === arr2.length;
      for (let i = 0; i < arr1.length; i++) {
        if (!match) {
          break;
        }
        match = isStringHasLength(arr1[i]) && arr1[i] === arr2[i];
      }
      return match;
    }
    function isMatchingCasing(casing1, casing2) {
      const equivalentCasings = [KeyCasing.default, KeyCasing.lower];
      if (isStringHasLength(casing1) && isStringHasLength(casing2)) {
        let isRealCase = KeyCasing[casing1.toLowerCase()] !== void 0;
        let casingsMatch = casing1 === casing2;
        let casingsAreEquivalent = [casing1, casing2].every((casing) => {
          return casing === KeyCasing.lower || casing === KeyCasing.default;
        });
        return isRealCase && (casingsMatch || casingsAreEquivalent);
      } else if (isStringHasLength(casing1)) {
        return equivalentCasings.includes(casing1.toLowerCase());
      } else if (isStringHasLength(casing2)) {
        return equivalentCasings.includes(casing2.toLowerCase());
      } else {
        return casing1 === void 0 && casing2 === void 0;
      }
    }
    module2.exports = {
      testModel,
      isFunction,
      stringArrayMatch,
      isMatchingCasing,
      isArrayHasLength,
      isStringHasLength,
      isObjectHasLength,
      isBetaServiceConfig,
      isNameModelRecordType,
      isNameEntityRecordType,
      model: validateModel
    };
  }
});

// node_modules/electrodb/src/util.js
var require_util = __commonJS({
  "node_modules/electrodb/src/util.js"(exports, module2) {
    "use strict";
    var t = require_types();
    var e = require_errors();
    var v = require_validations();
    function parseJSONPath(path = "") {
      if (typeof path !== "string") {
        throw new Error("Path must be a string");
      }
      path = path.replace(/\[/g, ".");
      path = path.replace(/\]/g, "");
      return path.split(".").filter((part) => part !== "");
    }
    function genericizeJSONPath(path = "") {
      return path.replace(/\[\d+\]/g, "[*]");
    }
    function getInstanceType(instance = {}) {
      let [isModel, errors] = v.testModel(instance);
      if (!instance || Object.keys(instance).length === 0) {
        return "";
      } else if (isModel) {
        return t.ElectroInstanceTypes.model;
      } else if (instance._instance === t.ElectroInstance.entity) {
        return t.ElectroInstanceTypes.entity;
      } else if (instance._instance === t.ElectroInstance.service) {
        return t.ElectroInstanceTypes.service;
      } else if (instance._instance === t.ElectroInstance.electro) {
        return t.ElectroInstanceTypes.electro;
      } else {
        return "";
      }
    }
    function getModelVersion(model = {}) {
      let nameOnRoot = model && v.isStringHasLength(model.entity);
      let nameInModelNamespace = model && model.model && v.isStringHasLength(model.model.entity);
      if (nameInModelNamespace) {
        return t.ModelVersions.v1;
      } else if (nameOnRoot) {
        return t.ModelVersions.beta;
      } else {
        return "";
      }
    }
    function applyBetaModelOverrides(model = {}, { service = "", version = "", table = "" } = {}) {
      let type = getModelVersion(model);
      if (type !== t.ModelVersions.beta) {
        throw new Error("Invalid model");
      }
      let copy = Object.assign({}, model);
      if (v.isStringHasLength(service)) {
        copy.service = service;
      }
      if (v.isStringHasLength(version)) {
        copy.version = version;
      }
      if (v.isStringHasLength(table)) {
        copy.table = table;
      }
      return copy;
    }
    function batchItems(arr = [], size) {
      if (isNaN(size)) {
        throw new Error("Batch size must be of type number");
      }
      let batched = [];
      for (let i = 0; i < arr.length; i++) {
        let partition = Math.floor(i / size);
        batched[partition] = batched[partition] || [];
        batched[partition].push(arr[i]);
      }
      return batched;
    }
    function commaSeparatedString(array = [], prefix = '"', postfix = '"') {
      return array.map((value) => `${prefix}${value}${postfix}`).join(", ");
    }
    function formatStringCasing(str, casing, defaultCase) {
      if (typeof str !== "string") {
        return str;
      }
      let strCase = defaultCase;
      if (v.isStringHasLength(casing) && typeof t.KeyCasing[casing] === "string") {
        strCase = t.KeyCasing.default === casing ? defaultCase : t.KeyCasing[casing];
      }
      switch (strCase) {
        case t.KeyCasing.upper:
          return str.toUpperCase();
        case t.KeyCasing.none:
          return str;
        case t.KeyCasing.lower:
          return str.toLowerCase();
        case t.KeyCasing.default:
        default:
          return str;
      }
    }
    function formatKeyCasing(str, casing) {
      return formatStringCasing(str, casing, t.KeyCasing.lower);
    }
    function formatAttributeCasing(str, casing) {
      return formatStringCasing(str, casing, t.KeyCasing.none);
    }
    function formatIndexNameForDisplay(index) {
      if (index) {
        return index;
      } else {
        return "(Primary Index)";
      }
    }
    var BatchGetOrderMaintainer = class {
      constructor({ table, enabled, keyFormatter }) {
        this.table = table;
        this.enabled = enabled;
        this.keyFormatter = keyFormatter;
        this.batchIndexMap = /* @__PURE__ */ new Map();
        this.currentSlot = 0;
      }
      getSize() {
        return this.batchIndexMap.size;
      }
      getOrder(item) {
        const key = this.keyFormatter(item);
        const value = this.batchIndexMap.get(key);
        if (value === void 0) {
          return -1;
        }
        return value;
      }
      defineOrder(parameters = []) {
        if (this.enabled) {
          for (let i = 0; i < parameters.length; i++) {
            const batchParams = parameters[i];
            const recordKeys = batchParams && batchParams.RequestItems && batchParams.RequestItems[this.table] && batchParams.RequestItems[this.table].Keys || [];
            for (const recordKey of recordKeys) {
              const indexMapKey = this.keyFormatter(recordKey);
              this.batchIndexMap.set(indexMapKey, this.currentSlot++);
            }
          }
        }
      }
    };
    function getUnique(arr1, arr2) {
      return Array.from(/* @__PURE__ */ new Set([
        ...arr1,
        ...arr2
      ]));
    }
    var cursorFormatter = {
      serialize: (key) => {
        if (!key) {
          return null;
        } else if (typeof val !== "string") {
          key = JSON.stringify(key);
        }
        return Buffer.from(key).toString("base64url");
      },
      deserialize: (cursor) => {
        if (!cursor) {
          return void 0;
        } else if (typeof cursor !== "string") {
          throw new Error(`Invalid cursor provided, expected type 'string' recieved: ${JSON.stringify(cursor)}`);
        }
        try {
          return JSON.parse(Buffer.from(cursor, "base64url").toString("utf8"));
        } catch (err) {
          throw new Error("Unable to parse cursor");
        }
      }
    };
    function removeFixings({ prefix = "", postfix = "", value = "" } = {}) {
      const start = value.toLowerCase().startsWith(prefix.toLowerCase()) ? prefix.length : 0;
      const end = value.length - (value.toLowerCase().endsWith(postfix.toLowerCase()) ? postfix.length : 0);
      let formatted = "";
      for (let i = start; i < end; i++) {
        formatted += value[i];
      }
      return formatted;
    }
    function addPadding({ padding = {}, value = "" } = {}) {
      return value.padStart(padding.length, padding.char);
    }
    function removePadding({ padding = {}, value = "" } = {}) {
      if (!padding.length || value.length >= padding.length) {
        return value;
      }
      let formatted = "";
      let useRemaining = false;
      for (let i = 0; i < value.length; i++) {
        const char = value[i];
        if (useRemaining || i >= padding.length) {
          formatted += char;
        } else if (char !== padding.char) {
          formatted += char;
          useRemaining = true;
        }
      }
      return formatted;
    }
    function shiftSortOrder(str = "", codePoint) {
      let newString = "";
      for (let i = 0; i < str.length; i++) {
        const isLast = i === str.length - 1;
        let char = str[i];
        if (isLast) {
          char = String.fromCodePoint(char.codePointAt(0) + codePoint);
        }
        newString += char;
      }
      return newString;
    }
    function getFirstDefined(...params) {
      return params.find((val2) => val2 !== void 0);
    }
    function regexpEscape(str) {
      return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    module2.exports = {
      getUnique,
      batchItems,
      addPadding,
      regexpEscape,
      removePadding,
      removeFixings,
      parseJSONPath,
      shiftSortOrder,
      getFirstDefined,
      getInstanceType,
      getModelVersion,
      formatKeyCasing,
      cursorFormatter,
      genericizeJSONPath,
      commaSeparatedString,
      formatAttributeCasing,
      applyBetaModelOverrides,
      formatIndexNameForDisplay,
      BatchGetOrderMaintainer
    };
  }
});

// node_modules/electrodb/src/set.js
var require_set = __commonJS({
  "node_modules/electrodb/src/set.js"(exports, module2) {
    "use strict";
    var memberTypeToSetType = {
      "String": "String",
      "Number": "Number",
      "NumberValue": "Number",
      "Binary": "Binary",
      "string": "String",
      "number": "Number"
    };
    var DynamoDBSet = class {
      constructor(list, type) {
        this.wrapperName = "Set";
        this.type = memberTypeToSetType[type];
        if (this.type === void 0) {
          new Error(`Invalid Set type: ${type}`);
        }
        this.values = Array.from(new Set([].concat(list)));
      }
      initialize(list, validate) {
      }
      detectType() {
        return memberTypeToSetType[typeof this.values[0]];
      }
      validate() {
      }
      toJSON() {
        return this.values;
      }
    };
    module2.exports = { DynamoDBSet };
  }
});

// node_modules/electrodb/src/schema.js
var require_schema = __commonJS({
  "node_modules/electrodb/src/schema.js"(exports, module2) {
    "use strict";
    var { CastTypes, ValueTypes, KeyCasing, AttributeTypes, AttributeMutationMethods, AttributeWildCard, PathTypes, TableIndex, ItemOperations } = require_types();
    var AttributeTypeNames = Object.keys(AttributeTypes);
    var ValidFacetTypes = [AttributeTypes.string, AttributeTypes.number, AttributeTypes.boolean, AttributeTypes.enum];
    var e = require_errors();
    var u = require_util();
    var v = require_validations();
    var { DynamoDBSet } = require_set();
    function getValueType(value) {
      if (value === void 0) {
        return ValueTypes.undefined;
      } else if (value === null) {
        return ValueTypes.null;
      } else if (typeof value === "string") {
        return ValueTypes.string;
      } else if (typeof value === "number") {
        return ValueTypes.number;
      } else if (typeof value === "boolean") {
        return ValueTypes.boolean;
      } else if (Array.isArray(value)) {
        return ValueTypes.array;
      } else if (value.wrapperName === "Set") {
        return ValueTypes.aws_set;
      } else if (value.constructor.name === "Set") {
        return ValueTypes.set;
      } else if (value.constructor.name === "Map") {
        return ValueTypes.map;
      } else if (value.constructor.name === "Object") {
        return ValueTypes.object;
      } else {
        return ValueTypes.unknown;
      }
    }
    var AttributeTraverser = class _AttributeTraverser {
      constructor(parentTraverser) {
        if (parentTraverser instanceof _AttributeTraverser) {
          this.parent = parentTraverser;
          this.paths = this.parent.paths;
        } else {
          this.parent = null;
          this.paths = /* @__PURE__ */ new Map();
        }
        this.children = /* @__PURE__ */ new Map();
      }
      setChild(name, attribute) {
        this.children.set(name, attribute);
      }
      asChild(name, attribute) {
        if (this.parent) {
          this.parent.setChild(name, attribute);
        }
      }
      setPath(path, attribute) {
        if (this.parent) {
          this.parent.setPath(path, attribute);
        }
        this.paths.set(path, attribute);
      }
      getPath(path) {
        path = u.genericizeJSONPath(path);
        if (this.parent) {
          return this.parent.getPath(path);
        }
        return this.paths.get(path);
      }
      getChild(name) {
        return this.children.get(name);
      }
      getAllChildren() {
        return this.children.entries();
      }
      getAll() {
        if (this.parent) {
          return this.parent.getAll();
        }
        return this.paths.entries();
      }
    };
    var Attribute = class _Attribute {
      constructor(definition = {}) {
        this.name = definition.name;
        this.field = definition.field || definition.name;
        this.label = definition.label;
        this.readOnly = !!definition.readOnly;
        this.hidden = !!definition.hidden;
        this.required = !!definition.required;
        this.cast = this._makeCast(definition.name, definition.cast);
        this.default = this._makeDefault(definition.default);
        this.validate = this._makeValidate(definition.validate);
        this.isKeyField = !!definition.isKeyField;
        this.unformat = this._makeDestructureKey(definition);
        this.format = this._makeStructureKey(definition);
        this.padding = definition.padding;
        this.applyFixings = this._makeApplyFixings(definition);
        this.applyPadding = this._makePadding(definition);
        this.indexes = [...definition.indexes || []];
        let { isWatched, isWatcher, watchedBy, watching, watchAll } = _Attribute._destructureWatcher(definition);
        this._isWatched = isWatched;
        this._isWatcher = isWatcher;
        this.watchedBy = watchedBy;
        this.watching = watching;
        this.watchAll = watchAll;
        let { type, enumArray } = this._makeType(this.name, definition);
        this.type = type;
        this.enumArray = enumArray;
        this.parentType = definition.parentType;
        this.parentPath = definition.parentPath;
        const pathType = this.getPathType(this.type, this.parentType);
        const path = _Attribute.buildPath(this.name, pathType, this.parentPath);
        const fieldPath = _Attribute.buildPath(this.field, pathType, this.parentType);
        this.path = path;
        this.fieldPath = fieldPath;
        this.traverser = new AttributeTraverser(definition.traverser);
        this.traverser.setPath(this.path, this);
        this.traverser.setPath(this.fieldPath, this);
        this.traverser.asChild(this.name, this);
        this.parent = { parentType: this.type, parentPath: this.path };
        this.get = this._makeGet(definition.get);
        this.set = this._makeSet(definition.set);
        this.getClient = definition.getClient;
      }
      static buildChildAttributes(type, definition, parent) {
        let items;
        let properties;
        if (type === AttributeTypes.list) {
          items = _Attribute.buildChildListItems(definition, parent);
        } else if (type === AttributeTypes.set) {
          items = _Attribute.buildChildSetItems(definition, parent);
        } else if (type === AttributeTypes.map) {
          properties = _Attribute.buildChildMapProperties(definition, parent);
        }
        return { items, properties };
      }
      static buildChildListItems(definition, parent) {
        const { items, getClient } = definition;
        const prop = { ...items, ...parent };
        return Schema.normalizeAttributes({ "*": prop }, {}, { getClient, traverser: parent.traverser, parent }).attributes["*"];
      }
      static buildChildSetItems(definition, parent) {
        const { items, getClient } = definition;
        const allowedTypes = [AttributeTypes.string, AttributeTypes.boolean, AttributeTypes.number, AttributeTypes.enum];
        if (!Array.isArray(items) && !allowedTypes.includes(items)) {
          throw new e.ElectroError(e.ErrorCodes.InvalidAttributeDefinition, `Invalid "items" definition for Set attribute: "${definition.path}". Acceptable item types include ${u.commaSeparatedString(allowedTypes)}`);
        }
        const prop = { type: items, ...parent };
        return Schema.normalizeAttributes({ prop }, {}, { getClient, traverser: parent.traverser, parent }).attributes.prop;
      }
      static buildChildMapProperties(definition, parent) {
        const { properties, getClient } = definition;
        if (!properties || typeof properties !== "object") {
          throw new e.ElectroError(e.ErrorCodes.InvalidAttributeDefinition, `Invalid "properties" definition for Map attribute: "${definition.path}". The "properties" definition must describe the attributes that the Map will accept`);
        }
        const attributes2 = {};
        for (let name of Object.keys(properties)) {
          attributes2[name] = { ...properties[name], ...parent };
        }
        return Schema.normalizeAttributes(attributes2, {}, { getClient, traverser: parent.traverser, parent });
      }
      static buildPath(name, type, parentPath) {
        if (!parentPath)
          return name;
        switch (type) {
          case AttributeTypes.string:
          case AttributeTypes.number:
          case AttributeTypes.boolean:
          case AttributeTypes.map:
          case AttributeTypes.set:
          case AttributeTypes.list:
          case AttributeTypes.enum:
            return `${parentPath}.${name}`;
          case PathTypes.item:
            return `${parentPath}[*]`;
          case AttributeTypes.any:
          default:
            return `${parentPath}.*`;
        }
      }
      static _destructureWatcher(definition) {
        let watchAll = !!definition.watchAll;
        let watchingArr = watchAll ? [] : [...definition.watching || []];
        let watchedByArr = [...definition.watchedBy || []];
        let isWatched = watchedByArr.length > 0;
        let isWatcher = watchingArr.length > 0;
        let watchedBy = {};
        let watching = {};
        for (let watched of watchedByArr) {
          watchedBy[watched] = watched;
        }
        for (let attribute of watchingArr) {
          watching[attribute] = attribute;
        }
        return {
          watchAll,
          watching,
          watchedBy,
          isWatched,
          isWatcher
        };
      }
      _makeGet(get) {
        this._checkGetSet(get, "get");
        const getter = get || ((attr) => attr);
        return (value, siblings) => {
          if (this.hidden) {
            return;
          }
          value = this.unformat(value);
          return getter(value, siblings);
        };
      }
      _makeSet(set) {
        this._checkGetSet(set, "set");
        return set || ((attr) => attr);
      }
      _makeApplyFixings({ prefix = "", postfix = "", casing = KeyCasing.none } = {}) {
        return (value) => {
          if (value === void 0) {
            return;
          }
          if ([AttributeTypes.string, AttributeTypes.enum].includes(this.type)) {
            value = `${prefix}${value}${postfix}`;
          }
          return u.formatAttributeCasing(value, casing);
        };
      }
      _makeStructureKey() {
        return (key) => {
          return this.applyPadding(key);
        };
      }
      _isPaddingEligible(padding = {}) {
        return !!padding && padding.length && v.isStringHasLength(padding.char);
      }
      _makePadding({ padding = {} }) {
        return (value) => {
          if (typeof value !== "string") {
            return value;
          } else if (this._isPaddingEligible(padding)) {
            return u.addPadding({ padding, value });
          } else {
            return value;
          }
        };
      }
      _makeRemoveFixings({ prefix = "", postfix = "", casing = KeyCasing.none } = {}) {
        return (key) => {
          let value = "";
          if (![AttributeTypes.string, AttributeTypes.enum].includes(this.type) || typeof key !== "string") {
            value = key;
          } else if (prefix.length > 0 && key.length > prefix.length) {
            for (let i = prefix.length; i < key.length - postfix.length; i++) {
              value += key[i];
            }
          } else {
            value = key;
          }
          return value;
        };
      }
      _makeDestructureKey({ prefix = "", postfix = "", casing = KeyCasing.none, padding = {} } = {}) {
        return (key) => {
          let value = "";
          if (![AttributeTypes.string, AttributeTypes.enum].includes(this.type) || typeof key !== "string") {
            return key;
          } else if (key.length > prefix.length) {
            value = u.removeFixings({ prefix, postfix, value: key });
          } else {
            value = key;
          }
          return value;
        };
      }
      acceptable(val2) {
        return val2 !== void 0;
      }
      getPathType(type, parentType) {
        if (parentType === AttributeTypes.list || parentType === AttributeTypes.set) {
          return PathTypes.item;
        }
        return type;
      }
      getAttribute(path) {
        return this.traverser.getPath(path);
      }
      getChild(path) {
        if (this.type === AttributeTypes.any) {
          return this;
        } else if (!isNaN(path) && (this.type === AttributeTypes.list || this.type === AttributeTypes.set)) {
          return this.traverser.getChild("*");
        } else {
          return this.traverser.getChild(path);
        }
      }
      _checkGetSet(val2, type) {
        if (typeof val2 !== "function" && val2 !== void 0) {
          throw new e.ElectroError(e.ErrorCodes.InvalidAttributeDefinition, `Invalid "${type}" property for attribute ${this.path}. Please ensure value is a function or undefined.`);
        }
      }
      _makeCast(name, cast) {
        if (cast !== void 0 && !CastTypes.includes(cast)) {
          throw new e.ElectroError(
            e.ErrorCodes.InvalidAttributeDefinition,
            `Invalid "cast" property for attribute: "${name}". Acceptable types include ${CastTypes.join(", ")}`
          );
        } else if (cast === AttributeTypes.string) {
          return (val2) => {
            if (val2 === void 0) {
              throw new Error(`Attribute ${name} is undefined and cannot be cast to type ${cast}`);
            } else if (typeof val2 === "string") {
              return val2;
            } else {
              return JSON.stringify(val2);
            }
          };
        } else if (cast === AttributeTypes.number) {
          return (val2) => {
            if (val2 === void 0) {
              throw new Error(`Attribute ${name} is undefined and cannot be cast to type ${cast}`);
            } else if (typeof val2 === "number") {
              return val2;
            } else {
              let results = Number(val2);
              if (isNaN(results)) {
                throw new Error(`Attribute ${name} cannot be cast to type ${cast}. Doing so results in NaN`);
              } else {
                return results;
              }
            }
          };
        } else {
          return (val2) => val2;
        }
      }
      _makeValidate(definition) {
        if (typeof definition === "function") {
          return (val2) => {
            try {
              let reason = definition(val2);
              const isValid = !reason;
              if (isValid) {
                return [isValid, []];
              } else if (typeof reason === "boolean") {
                return [isValid, [new e.ElectroUserValidationError(this.path, "Invalid value provided")]];
              } else {
                return [isValid, [new e.ElectroUserValidationError(this.path, reason)]];
              }
            } catch (err) {
              return [false, [new e.ElectroUserValidationError(this.path, err)]];
            }
          };
        } else if (definition instanceof RegExp) {
          return (val2) => {
            if (val2 === void 0) {
              return [true, []];
            }
            let isValid = definition.test(val2);
            let reason = [];
            if (!isValid) {
              reason.push(new e.ElectroUserValidationError(this.path, `Invalid value for attribute "${this.path}": Failed model defined regex`));
            }
            return [isValid, reason];
          };
        } else {
          return () => [true, []];
        }
      }
      _makeDefault(definition) {
        if (typeof definition === "function") {
          return () => definition();
        } else {
          return () => definition;
        }
      }
      _makeType(name, definition) {
        let type = "";
        let enumArray = [];
        if (Array.isArray(definition.type)) {
          type = AttributeTypes.enum;
          enumArray = [...definition.type];
        } else {
          type = definition.type || "string";
        }
        if (!AttributeTypeNames.includes(type)) {
          throw new e.ElectroError(e.ErrorCodes.InvalidAttributeDefinition, `Invalid "type" property for attribute: "${name}". Acceptable types include ${AttributeTypeNames.join(", ")}`);
        }
        return { type, enumArray };
      }
      isWatcher() {
        return this._isWatcher;
      }
      isWatched() {
        return this._isWatched;
      }
      isWatching(attribute) {
        return this.watching[attribute] !== void 0;
      }
      isWatchedBy(attribute) {
        return this.watchedBy[attribute] !== void 0;
      }
      _isType(value) {
        if (value === void 0) {
          let reason2 = [];
          if (this.required) {
            reason2.push(new e.ElectroAttributeValidationError(this.path, `Invalid value type at entity path: "${this.path}". Value is required.`));
          }
          return [!this.required, reason2];
        }
        let isTyped = false;
        let reason = [];
        switch (this.type) {
          case AttributeTypes.enum:
            isTyped = this.enumArray.includes(value);
            if (!isTyped) {
              reason.push(new e.ElectroAttributeValidationError(this.path, `Invalid value type at entity path: "${this.path}". Value not found in set of acceptable values: ${u.commaSeparatedString(this.enumArray)}`));
            }
            break;
          case AttributeTypes.any:
          case AttributeTypes.static:
          case AttributeTypes.custom:
            isTyped = true;
            break;
          case AttributeTypes.string:
          case AttributeTypes.number:
          case AttributeTypes.boolean:
          default:
            isTyped = typeof value === this.type;
            if (!isTyped) {
              reason.push(new e.ElectroAttributeValidationError(this.path, `Invalid value type at entity path: "${this.path}". Received value of type "${typeof value}", expected value of type "${this.type}"`));
            }
            break;
        }
        return [isTyped, reason];
      }
      isValid(value) {
        try {
          let [isTyped, typeErrorReason] = this._isType(value);
          let [isValid, validationError] = isTyped ? this.validate(value) : [false, []];
          let errors = [...typeErrorReason, ...validationError].filter((value2) => value2 !== void 0);
          return [isTyped && isValid, errors];
        } catch (err) {
          return [false, [err]];
        }
      }
      val(value) {
        value = this.cast(value);
        if (value === void 0) {
          value = this.default();
        }
        return value;
      }
      getValidate(value) {
        value = this.val(value);
        let [isValid, validationErrors] = this.isValid(value);
        if (!isValid) {
          throw new e.ElectroValidationError(validationErrors);
        }
        return value;
      }
    };
    var MapAttribute = class extends Attribute {
      constructor(definition) {
        super(definition);
        const properties = Attribute.buildChildMapProperties(definition, {
          parentType: this.type,
          parentPath: this.path,
          traverser: this.traverser
        });
        this.properties = properties;
        this.isRoot = !!definition.isRoot;
        this.get = this._makeGet(definition.get, properties);
        this.set = this._makeSet(definition.set, properties);
      }
      _makeGet(get, properties) {
        this._checkGetSet(get, "get");
        const getter = get || ((val2) => {
          const isEmpty = !val2 || Object.keys(val2).length === 0;
          const isNotRequired = !this.required;
          const doesNotHaveDefault = this.default === void 0;
          const isRoot = this.isRoot;
          if (isEmpty && isRoot && isNotRequired && doesNotHaveDefault) {
            return void 0;
          }
          return val2;
        });
        return (values, siblings) => {
          const data = {};
          if (this.hidden) {
            return;
          }
          if (values === void 0) {
            if (!get) {
              return void 0;
            }
            return getter(data, siblings);
          }
          for (const name of Object.keys(properties.attributes)) {
            const attribute = properties.attributes[name];
            if (values[attribute.field] !== void 0) {
              let results = attribute.get(values[attribute.field], { ...values });
              if (results !== void 0) {
                data[name] = results;
              }
            }
          }
          return getter(data, siblings);
        };
      }
      _makeSet(set, properties) {
        this._checkGetSet(set, "set");
        const setter = set || ((val2) => {
          const isEmpty = !val2 || Object.keys(val2).length === 0;
          const isNotRequired = !this.required;
          const doesNotHaveDefault = this.default === void 0;
          const defaultIsValue = this.default === val2;
          const isRoot = this.isRoot;
          if (defaultIsValue) {
            return val2;
          } else if (isEmpty && isRoot && isNotRequired && doesNotHaveDefault) {
            return void 0;
          } else {
            return val2;
          }
        });
        return (values, siblings) => {
          const data = {};
          if (values === void 0) {
            if (!set) {
              return void 0;
            }
            return setter(values, siblings);
          }
          for (const name of Object.keys(properties.attributes)) {
            const attribute = properties.attributes[name];
            if (values[name] !== void 0) {
              const results = attribute.set(values[name], { ...values });
              if (results !== void 0) {
                data[attribute.field] = results;
              }
            }
          }
          return setter(data, siblings);
        };
      }
      _isType(value) {
        if (value === void 0) {
          let reason2 = [];
          if (this.required) {
            reason2.push(new e.ElectroAttributeValidationError(this.path, `Invalid value type at entity path: "${this.path}". Value is required.`));
          }
          return [!this.required, reason2];
        }
        const valueType = getValueType(value);
        if (valueType !== ValueTypes.object) {
          return [false, [new e.ElectroAttributeValidationError(this.path, `Invalid value type at entity path "${this.path}. Received value of type "${valueType}", expected value of type "object"`)]];
        }
        let reason = [];
        const [childrenAreValid, childErrors] = this._validateChildren(value);
        if (!childrenAreValid) {
          reason = childErrors;
        }
        return [childrenAreValid, reason];
      }
      _validateChildren(value) {
        const valueType = getValueType(value);
        const attributes2 = this.properties.attributes;
        let errors = [];
        if (valueType === ValueTypes.object) {
          for (const child of Object.keys(attributes2)) {
            const [isValid, errorValues] = attributes2[child].isValid(value === void 0 ? value : value[child]);
            if (!isValid) {
              errors = [...errors, ...errorValues];
            }
          }
        } else if (valueType !== ValueTypes.object) {
          errors.push(
            new e.ElectroAttributeValidationError(this.path, `Invalid value type at entity path: "${this.path}". Expected value to be an object to fulfill attribute type "${this.type}"`)
          );
        } else if (this.properties.hasRequiredAttributes) {
          errors.push(
            new e.ElectroAttributeValidationError(this.path, `Invalid value type at entity path: "${this.path}". Map attribute requires at least the properties ${u.commaSeparatedString(Object.keys(attributes2))}`)
          );
        }
        return [errors.length === 0, errors];
      }
      val(value) {
        const incomingIsEmpty = value === void 0;
        let fromDefault = false;
        let data;
        if (value === void 0) {
          data = this.default();
          if (data !== void 0) {
            fromDefault = true;
          }
        } else {
          data = value;
        }
        const valueType = getValueType(data);
        if (data === void 0) {
          return data;
        } else if (valueType !== "object") {
          throw new e.ElectroAttributeValidationError(this.path, `Invalid value type at entity path: "${this.path}". Expected value to be an object to fulfill attribute type "${this.type}"`);
        }
        const response = {};
        for (const name of Object.keys(this.properties.attributes)) {
          const attribute = this.properties.attributes[name];
          const results = attribute.val(data[attribute.name]);
          if (results !== void 0) {
            response[name] = results;
          }
        }
        if (Object.keys(response).length === 0 && !fromDefault && this.isRoot && !this.required && incomingIsEmpty) {
          return void 0;
        }
        return response;
      }
    };
    var ListAttribute = class extends Attribute {
      constructor(definition) {
        super(definition);
        const items = Attribute.buildChildListItems(definition, {
          parentType: this.type,
          parentPath: this.path,
          traverser: this.traverser
        });
        this.items = items;
        this.get = this._makeGet(definition.get, items);
        this.set = this._makeSet(definition.set, items);
      }
      _makeGet(get, items) {
        this._checkGetSet(get, "get");
        const getter = get || ((attr) => attr);
        return (values, siblings) => {
          const data = [];
          if (this.hidden) {
            return;
          }
          if (values === void 0) {
            return getter(data, siblings);
          }
          for (let value of values) {
            const results = items.get(value, [...values]);
            if (results !== void 0) {
              data.push(results);
            }
          }
          return getter(data, siblings);
        };
      }
      _makeSet(set, items) {
        this._checkGetSet(set, "set");
        const setter = set || ((attr) => attr);
        return (values, siblings) => {
          const data = [];
          if (values === void 0) {
            return setter(values, siblings);
          }
          for (const value of values) {
            const results = items.set(value, [...values]);
            if (results !== void 0) {
              data.push(results);
            }
          }
          return setter(data, siblings);
        };
      }
      _validateArrayValue(value) {
        const reason = [];
        const valueType = getValueType(value);
        if (value !== void 0 && valueType !== ValueTypes.array) {
          return [false, [new e.ElectroAttributeValidationError(this.path, `Invalid value type at entity path "${this.path}. Received value of type "${valueType}", expected value of type "array"`)]];
        } else {
          return [true, []];
        }
      }
      _isType(value) {
        if (value === void 0) {
          let reason2 = [];
          if (this.required) {
            reason2.push(new e.ElectroAttributeValidationError(this.path, `Invalid value type at entity path: "${this.path}". Value is required.`));
          }
          return [!this.required, reason2];
        }
        const [isValidArray, errors] = this._validateArrayValue(value);
        if (!isValidArray) {
          return [isValidArray, errors];
        }
        let reason = [];
        const [childrenAreValid, childErrors] = this._validateChildren(value);
        if (!childrenAreValid) {
          reason = childErrors;
        }
        return [childrenAreValid, reason];
      }
      _validateChildren(value) {
        const valueType = getValueType(value);
        const errors = [];
        if (valueType === ValueTypes.array) {
          for (const i in value) {
            const [isValid, errorValues] = this.items.isValid(value[i]);
            if (!isValid) {
              for (const err of errorValues) {
                if (err instanceof e.ElectroAttributeValidationError || err instanceof e.ElectroUserValidationError) {
                  err.index = parseInt(i);
                }
                errors.push(err);
              }
            }
          }
        } else {
          errors.push(
            new e.ElectroAttributeValidationError(this.path, `Invalid value type at entity path: "${this.path}". Expected value to be an Array to fulfill attribute type "${this.type}"`)
          );
        }
        return [errors.length === 0, errors];
      }
      val(value) {
        const getValue = (v2) => {
          v2 = this.cast(v2);
          if (v2 === void 0) {
            v2 = this.default();
          }
          return v2;
        };
        const data = value === void 0 ? getValue(value) : value;
        if (data === void 0) {
          return data;
        } else if (!Array.isArray(data)) {
          throw new e.ElectroAttributeValidationError(this.path, `Invalid value type at entity path "${this.path}. Received value of type "${getValueType(value)}", expected value of type "array"`);
        }
        const response = [];
        for (const d of data) {
          const results = this.items.val(d);
          if (results !== void 0) {
            response.push(results);
          }
        }
        return response;
      }
    };
    var SetAttribute = class extends Attribute {
      constructor(definition) {
        super(definition);
        const items = Attribute.buildChildSetItems(definition, {
          parentType: this.type,
          parentPath: this.path,
          traverser: this.traverser
        });
        this.items = items;
        this.get = this._makeGet(definition.get, items);
        this.set = this._makeSet(definition.set, items);
        this.validate = this._makeSetValidate(definition);
      }
      _makeSetValidate(definition) {
        const validate = this._makeValidate(definition.validate);
        return (value) => {
          switch (getValueType(value)) {
            case ValueTypes.array:
              return validate([...value]);
            case ValueTypes.aws_set:
              return validate([...value.values]);
            case ValueTypes.set:
              return validate(Array.from(value));
            default:
              return validate(value);
          }
        };
      }
      fromDDBSet(value) {
        switch (getValueType(value)) {
          case ValueTypes.aws_set:
            return [...value.values];
          case ValueTypes.set:
            return Array.from(value);
          default:
            return value;
        }
      }
      _createDDBSet(value) {
        const client = this.getClient();
        if (client && typeof client.createSet === "function") {
          value = Array.isArray(value) ? Array.from(new Set(value)) : value;
          return client.createSet(value, { validate: true });
        } else {
          return new DynamoDBSet(value, this.items.type);
        }
      }
      acceptable(val2) {
        return Array.isArray(val2) ? val2.length > 0 : this.items.acceptable(val2);
      }
      toDDBSet(value) {
        const valueType = getValueType(value);
        let array;
        switch (valueType) {
          case ValueTypes.set:
            array = Array.from(value);
            return this._createDDBSet(array);
          case ValueTypes.aws_set:
            return value;
          case ValueTypes.array:
            return this._createDDBSet(value);
          case ValueTypes.string:
          case ValueTypes.number: {
            this.items.getValidate(value);
            return this._createDDBSet(value);
          }
          default:
            throw new e.ElectroAttributeValidationError(this.path, `Invalid attribute value supplied to "set" attribute "${this.path}". Received value of type "${valueType}". Set values must be supplied as either Arrays, native JavaScript Set objects, DocumentClient Set objects, strings, or numbers.`);
        }
      }
      _makeGet(get, items) {
        this._checkGetSet(get, "get");
        const getter = get || ((attr) => attr);
        return (values, siblings) => {
          if (values !== void 0) {
            const data2 = this.fromDDBSet(values);
            return getter(data2, siblings);
          }
          const data = this.fromDDBSet(values);
          const results = getter(data, siblings);
          if (results !== void 0) {
            return this.fromDDBSet(results);
          }
        };
      }
      _makeSet(set, items) {
        this._checkGetSet(set, "set");
        const setter = set || ((attr) => attr);
        return (values, siblings) => {
          const results = setter(this.fromDDBSet(values), siblings);
          if (results !== void 0) {
            return this.toDDBSet(results);
          }
        };
      }
      _isType(value) {
        if (value === void 0) {
          const reason2 = [];
          if (this.required) {
            reason2.push(new e.ElectroAttributeValidationError(this.path, `Invalid value type at entity path: "${this.path}". Value is required.`));
          }
          return [!this.required, reason2];
        }
        let reason = [];
        const [childrenAreValid, childErrors] = this._validateChildren(value);
        if (!childrenAreValid) {
          reason = childErrors;
        }
        return [childrenAreValid, reason];
      }
      _validateChildren(value) {
        const valueType = getValueType(value);
        let errors = [];
        let arr = [];
        if (valueType === ValueTypes.array) {
          arr = value;
        } else if (valueType === ValueTypes.set) {
          arr = Array.from(value);
        } else if (valueType === ValueTypes.aws_set) {
          arr = value.values;
        } else {
          errors.push(
            new e.ElectroAttributeValidationError(this.path, `Invalid value type at attribute path: "${this.path}". Expected value to be an Expected value to be an Array, native JavaScript Set objects, or DocumentClient Set objects to fulfill attribute type "${this.type}"`)
          );
        }
        for (const item of arr) {
          const [isValid, errorValues] = this.items.isValid(item);
          if (!isValid) {
            errors = [...errors, ...errorValues];
          }
        }
        return [errors.length === 0, errors];
      }
      val(value) {
        if (value === void 0) {
          value = this.default();
        }
        if (value !== void 0) {
          return this.toDDBSet(value);
        }
      }
    };
    var Schema = class _Schema {
      constructor(properties = {}, facets = {}, { traverser = new AttributeTraverser(), getClient, parent, isRoot } = {}) {
        this._validateProperties(properties, parent);
        let schema = _Schema.normalizeAttributes(properties, facets, { traverser, getClient, parent, isRoot });
        this.getClient = getClient;
        this.attributes = schema.attributes;
        this.enums = schema.enums;
        this.translationForTable = schema.translationForTable;
        this.translationForRetrieval = schema.translationForRetrieval;
        this.hiddenAttributes = schema.hiddenAttributes;
        this.readOnlyAttributes = schema.readOnlyAttributes;
        this.requiredAttributes = schema.requiredAttributes;
        this.translationForWatching = this._formatWatchTranslations(this.attributes);
        this.traverser = traverser;
        this.isRoot = !!isRoot;
      }
      static normalizeAttributes(attributes2 = {}, facets = {}, { traverser, getClient, parent, isRoot } = {}) {
        const attributeHasParent = !!parent;
        let invalidProperties = [];
        let normalized = {};
        let usedAttrs = {};
        let enums = {};
        let translationForTable = {};
        let translationForRetrieval = {};
        let watchedAttributes = {};
        let requiredAttributes = /* @__PURE__ */ new Set();
        let hiddenAttributes = /* @__PURE__ */ new Set();
        let readOnlyAttributes = /* @__PURE__ */ new Set();
        let definitions = {};
        for (let name in attributes2) {
          let attribute = attributes2[name];
          if (typeof attribute === AttributeTypes.string || Array.isArray(attribute)) {
            attribute = {
              type: attribute
            };
          }
          const field = attribute.field || name;
          let isKeyField = false;
          let prefix = "";
          let postfix = "";
          let casing = KeyCasing.none;
          if (facets.byField && facets.byField[field] !== void 0) {
            for (const indexName of Object.keys(facets.byField[field])) {
              let definition2 = facets.byField[field][indexName];
              if (definition2.facets.length > 1) {
                throw new e.ElectroError(
                  e.ErrorCodes.InvalidIndexWithAttributeName,
                  `Invalid definition for "${definition2.type}" field on index "${u.formatIndexNameForDisplay(indexName)}". The ${definition2.type} field "${definition2.field}" shares a field name with an attribute defined on the Entity, and therefore is not allowed to contain composite references to other attributes. Please either change the field name of the attribute, or redefine the index to use only the single attribute "${definition2.field}".`
                );
              }
              if (definition2.isCustom) {
                const keyFieldLabels = facets.labels[indexName][definition2.type].labels;
                if (keyFieldLabels.length > 2) {
                  throw new e.ElectroError(
                    e.ErrorCodes.InvalidIndexWithAttributeName,
                    `Unexpected definition for "${definition2.type}" field on index "${u.formatIndexNameForDisplay(indexName)}". The ${definition2.type} field "${definition2.field}" shares a field name with an attribute defined on the Entity, and therefore is not possible to have more than two labels as part of it's template. Please either change the field name of the attribute, or reformat the key template to reduce all pre-fixing or post-fixing text around the attribute reference to two.`
                  );
                }
                isKeyField = true;
                casing = definition2.casing;
                for (const value of keyFieldLabels) {
                  if (value.name === field) {
                    prefix = value.label || "";
                  } else {
                    postfix = value.label || "";
                  }
                }
                if (attribute.type !== AttributeTypes.string && !Array.isArray(attribute.type)) {
                  if (prefix.length > 0 || postfix.length > 0) {
                    throw new e.ElectroError(e.ErrorCodes.InvalidIndexWithAttributeName, `definition for "${definition2.type}" field on index "${u.formatIndexNameForDisplay(indexName)}". Index templates may only have prefix or postfix values on "string" or "enum" type attributes. The ${definition2.type} field "${field}" is type "${attribute.type}", and therefore cannot be used with prefixes or postfixes. Please either remove the prefixed or postfixed values from the template or change the field name of the attribute.`);
                  }
                }
              } else {
                throw new e.ElectroError(
                  e.ErrorCodes.InvalidIndexCompositeWithAttributeName,
                  `Unexpected definition for "${definition2.type}" field on index "${u.formatIndexNameForDisplay(indexName)}". The ${definition2.type} field "${definition2.field}" shares a field name with an attribute defined on the Entity, and therefore must be defined with a template. Please either change the field name of the attribute, or add a key template to the "${definition2.type}" field on index "${u.formatIndexNameForDisplay(indexName)}" with the value: "\${${definition2.field}}"`
                );
              }
              if (definition2.inCollection) {
                throw new e.ElectroError(
                  e.ErrorCodes.InvalidCollectionOnIndexWithAttributeFieldNames,
                  `Invalid use of a collection on index "${u.formatIndexNameForDisplay(indexName)}". The ${definition2.type} field "${definition2.field}" shares a field name with an attribute defined on the Entity, and therefore the index is not allowed to participate in a Collection. Please either change the field name of the attribute, or remove all collection(s) from the index.`
                );
              }
              if (definition2.field === field) {
                if (attribute.padding !== void 0) {
                  throw new e.ElectroError(
                    e.ErrorCodes.InvalidAttributeDefinition,
                    `Invalid padding definition for the attribute "${name}". Padding is not currently supported for attributes that are also defined as table indexes.`
                  );
                }
              }
            }
          }
          let isKey = !!facets.byIndex && facets.byIndex[TableIndex].all.find((facet) => facet.name === name);
          let definition = {
            name,
            field,
            getClient,
            casing,
            prefix,
            postfix,
            traverser,
            isKeyField: isKeyField || isKey,
            isRoot: !!isRoot,
            label: attribute.label,
            required: !!attribute.required,
            default: attribute.default,
            validate: attribute.validate,
            readOnly: !!attribute.readOnly || isKey,
            hidden: !!attribute.hidden,
            indexes: facets.byAttr && facets.byAttr[name] || [],
            type: attribute.type,
            get: attribute.get,
            set: attribute.set,
            watching: Array.isArray(attribute.watch) ? attribute.watch : [],
            items: attribute.items,
            properties: attribute.properties,
            parentPath: attribute.parentPath,
            parentType: attribute.parentType,
            padding: attribute.padding
          };
          if (definition.type === AttributeTypes.custom) {
            definition.type = AttributeTypes.any;
          }
          if (attribute.watch !== void 0) {
            if (attribute.watch === AttributeWildCard) {
              definition.watchAll = true;
              definition.watching = [];
            } else if (Array.isArray(attribute.watch)) {
              definition.watching = attribute.watch;
            } else {
              throw new e.ElectroError(e.ErrorCodes.InvalidAttributeWatchDefinition, `Attribute Validation Error. The attribute '${name}' is defined to "watch" an invalid value of: '${attribute.watch}'. The watch property must either be a an array of attribute names, or the single string value of "${WatchAll}".`);
            }
          } else {
            definition.watching = [];
          }
          if (definition.readOnly) {
            readOnlyAttributes.add(name);
          }
          if (definition.hidden) {
            hiddenAttributes.add(name);
          }
          if (definition.required) {
            requiredAttributes.add(name);
          }
          if (facets.byAttr && facets.byAttr[definition.name] !== void 0 && (!ValidFacetTypes.includes(definition.type) && !Array.isArray(definition.type))) {
            let assignedIndexes = facets.byAttr[name].map((assigned) => assigned.index === "" ? "Table Index" : assigned.index);
            throw new e.ElectroError(e.ErrorCodes.InvalidAttributeDefinition, `Invalid composite attribute definition: Composite attributes must be one of the following: ${ValidFacetTypes.join(", ")}. The attribute "${name}" is defined as being type "${attribute.type}" but is a composite attribute of the following indexes: ${assignedIndexes.join(", ")}`);
          }
          if (usedAttrs[definition.field] || usedAttrs[name]) {
            invalidProperties.push({
              name,
              property: "field",
              value: definition.field,
              expected: `Unique field property, already used by attribute ${usedAttrs[definition.field]}`
            });
          } else {
            usedAttrs[definition.field] = definition.name;
          }
          translationForTable[definition.name] = definition.field;
          translationForRetrieval[definition.field] = definition.name;
          for (let watched of definition.watching) {
            watchedAttributes[watched] = watchedAttributes[watched] || [];
            watchedAttributes[watched].push(name);
          }
          definitions[name] = definition;
        }
        for (let name of Object.keys(definitions)) {
          const definition = definitions[name];
          definition.watchedBy = Array.isArray(watchedAttributes[name]) ? watchedAttributes[name] : [];
          switch (definition.type) {
            case AttributeTypes.map:
              normalized[name] = new MapAttribute(definition);
              break;
            case AttributeTypes.list:
              normalized[name] = new ListAttribute(definition);
              break;
            case AttributeTypes.set:
              normalized[name] = new SetAttribute(definition);
              break;
            case AttributeTypes.any:
              if (attributeHasParent) {
                throw new e.ElectroError(e.ErrorCodes.InvalidAttributeDefinition, `Invalid attribute "${definition.name}" defined within "${parent.parentPath}". Attributes with type ${u.commaSeparatedString([AttributeTypes.any, AttributeTypes.custom])} are only supported as root level attributes.`);
              }
            default:
              normalized[name] = new Attribute(definition);
          }
        }
        let watchedWatchers = [];
        let watchingUnknownAttributes = [];
        for (let watched of Object.keys(watchedAttributes)) {
          if (normalized[watched] === void 0) {
            for (let attribute of watchedAttributes[watched]) {
              watchingUnknownAttributes.push({ attribute, watched });
            }
          } else if (normalized[watched].isWatcher()) {
            for (let attribute of watchedAttributes[watched]) {
              watchedWatchers.push({ attribute, watched });
            }
          }
        }
        if (watchingUnknownAttributes.length > 0) {
          throw new e.ElectroError(e.ErrorCodes.InvalidAttributeWatchDefinition, `Attribute Validation Error. The following attributes are defined to "watch" invalid/unknown attributes: ${watchingUnknownAttributes.map(({ watched, attribute }) => `"${attribute}"->"${watched}"`).join(", ")}.`);
        }
        if (watchedWatchers.length > 0) {
          throw new e.ElectroError(e.ErrorCodes.InvalidAttributeWatchDefinition, `Attribute Validation Error. Attributes may only "watch" other attributes also watch attributes. The following attributes are defined with ineligible attributes to watch: ${watchedWatchers.map(({ attribute, watched }) => `"${attribute}"->"${watched}"`).join(", ")}.`);
        }
        let missingFacetAttributes = Array.isArray(facets.attributes) ? facets.attributes.filter(({ name }) => !normalized[name]).map((facet) => `"${facet.type}: ${facet.name}"`) : [];
        if (missingFacetAttributes.length > 0) {
          throw new e.ElectroError(e.ErrorCodes.InvalidKeyCompositeAttributeTemplate, `Invalid key composite attribute template. The following composite attribute attributes were described in the key composite attribute template but were not included model's attributes: ${missingFacetAttributes.join(", ")}`);
        }
        if (invalidProperties.length > 0) {
          let message = invalidProperties.map((prop) => `Schema Validation Error. Attribute "${prop.name}" property "${prop.property}". Received: "${prop.value}", Expected: "${prop.expected}"`);
          throw new e.ElectroError(e.ErrorCodes.InvalidAttributeDefinition, message);
        } else {
          return {
            enums,
            hiddenAttributes,
            readOnlyAttributes,
            requiredAttributes,
            translationForTable,
            translationForRetrieval,
            attributes: normalized
          };
        }
      }
      _validateProperties() {
      }
      _formatWatchTranslations(attributes2) {
        let watchersToAttributes = {};
        let attributesToWatchers = {};
        let watchAllAttributes = {};
        let hasWatchers = false;
        for (let name of Object.keys(attributes2)) {
          if (attributes2[name].isWatcher()) {
            hasWatchers = true;
            watchersToAttributes[name] = attributes2[name].watching;
          } else if (attributes2[name].watchAll) {
            hasWatchers = true;
            watchAllAttributes[name] = name;
          } else {
            attributesToWatchers[name] = attributesToWatchers[name] || {};
            attributesToWatchers[name] = attributes2[name].watchedBy;
          }
        }
        return {
          hasWatchers,
          watchAllAttributes,
          watchersToAttributes,
          attributesToWatchers
        };
      }
      getAttribute(path) {
        return this.traverser.getPath(path);
      }
      getLabels() {
        let labels = {};
        for (let name of Object.keys(this.attributes)) {
          let label = this.attributes[name].label;
          if (label !== void 0) {
            labels[name] = label;
          }
        }
        return labels;
      }
      getLabels() {
        let labels = {};
        for (let name of Object.keys(this.attributes)) {
          let label = this.attributes[name].label;
          if (label !== void 0) {
            labels[name] = label;
          }
        }
        return labels;
      }
      _applyAttributeMutation(method, include, avoid, payload) {
        let data = { ...payload };
        for (let path of Object.keys(include)) {
          const attribute = this.getAttribute(path);
          if (attribute !== void 0 && avoid[path] === void 0) {
            data[path] = attribute[method](payload[path], { ...payload });
          }
        }
        return data;
      }
      _fulfillAttributeMutationMethod(method, payload) {
        let watchersToTrigger = {};
        let avoid = { ...this.translationForWatching.watchersToAttributes, ...this.translationForWatching.watchAllAttributes };
        let data = this._applyAttributeMutation(method, payload, avoid, payload);
        if (!this.translationForWatching.hasWatchers) {
          return data;
        }
        for (let attribute of Object.keys(data)) {
          let watchers = this.translationForWatching.attributesToWatchers[attribute];
          if (watchers !== void 0) {
            watchersToTrigger = { ...watchersToTrigger, ...watchers };
          }
        }
        let include = { ...data, ...watchersToTrigger, ...this.translationForWatching.watchAllAttributes };
        return this._applyAttributeMutation(method, include, this.translationForWatching.attributesToWatchers, data);
      }
      applyAttributeGetters(payload = {}) {
        return this._fulfillAttributeMutationMethod(AttributeMutationMethods.get, payload);
      }
      applyAttributeSetters(payload = {}) {
        return this._fulfillAttributeMutationMethod(AttributeMutationMethods.set, payload);
      }
      translateFromFields(item = {}, options = {}) {
        let { includeKeys } = options;
        let data = {};
        let names = this.translationForRetrieval;
        for (let [attr, value] of Object.entries(item)) {
          let name = names[attr];
          if (name) {
            data[name] = value;
          } else if (includeKeys) {
            data[attr] = value;
          }
        }
        return data;
      }
      translateToFields(payload = {}) {
        let record = {};
        for (let [name, value] of Object.entries(payload)) {
          let field = this.getFieldName(name);
          if (value !== void 0) {
            record[field] = value;
          }
        }
        return record;
      }
      getFieldName(name) {
        if (typeof name === "string") {
          return this.translationForTable[name];
        }
      }
      checkCreate(payload = {}) {
        let record = {};
        for (let attribute of Object.values(this.attributes)) {
          let value = payload[attribute.name];
          record[attribute.name] = attribute.getValidate(value);
        }
        return record;
      }
      checkRemove(paths = []) {
        for (const path of paths) {
          const attribute = this.traverser.getPath(path);
          if (!attribute) {
            throw new e.ElectroAttributeValidationError(path, `Attribute "${path}" does not exist on model.`);
          } else if (attribute.readOnly) {
            throw new e.ElectroAttributeValidationError(attribute.path, `Attribute "${attribute.path}" is Read-Only and cannot be removed`);
          } else if (attribute.required) {
            throw new e.ElectroAttributeValidationError(attribute.path, `Attribute "${attribute.path}" is Required and cannot be removed`);
          }
        }
        return paths;
      }
      checkOperation(attribute, operation, value) {
        if (attribute.required && operation === ItemOperations.remove) {
          throw new e.ElectroAttributeValidationError(attribute.path, `Attribute "${attribute.path}" is Required and cannot be removed`);
        } else if (attribute.readOnly) {
          throw new e.ElectroAttributeValidationError(attribute.path, `Attribute "${attribute.path}" is Read-Only and cannot be updated`);
        }
        return value === void 0 ? void 0 : attribute.getValidate(value);
      }
      checkUpdate(payload = {}, { allowReadOnly } = {}) {
        let record = {};
        for (let [path, value] of Object.entries(payload)) {
          let attribute = this.traverser.paths.get(path);
          if (attribute === void 0) {
            continue;
          }
          if (attribute.readOnly && !allowReadOnly) {
            throw new e.ElectroAttributeValidationError(attribute.path, `Attribute "${attribute.path}" is Read-Only and cannot be updated`);
          } else {
            record[path] = attribute.getValidate(value);
          }
        }
        return record;
      }
      getReadOnly() {
        return Array.from(this.readOnlyAttributes);
      }
      getRequired() {
        return Array.from(this.requiredAttributes);
      }
      formatItemForRetrieval(item, config) {
        let returnAttributes = new Set(config.attributes || []);
        let hasUserSpecifiedReturnAttributes = returnAttributes.size > 0;
        let remapped = this.translateFromFields(item, config);
        let data = this._fulfillAttributeMutationMethod("get", remapped);
        if (this.hiddenAttributes.size > 0 || hasUserSpecifiedReturnAttributes) {
          for (let attribute of Object.keys(data)) {
            if (this.hiddenAttributes.has(attribute)) {
              delete data[attribute];
            }
            if (hasUserSpecifiedReturnAttributes && !returnAttributes.has(attribute)) {
              delete data[attribute];
            }
          }
        }
        return data;
      }
    };
    function createCustomAttribute(definition = {}) {
      return {
        ...definition,
        type: "custom"
      };
    }
    function CustomAttributeType(base) {
      const supported = ["string", "number", "boolean", "any"];
      if (!supported.includes(base)) {
        throw new Error(`OpaquePrimitiveType only supports base types: ${u.commaSeparatedString(supported)}`);
      }
      return base;
    }
    function createSchema(schema) {
      v.model(schema);
      return schema;
    }
    module2.exports = {
      Schema,
      Attribute,
      CastTypes,
      SetAttribute,
      createSchema,
      CustomAttributeType,
      createCustomAttribute
    };
  }
});

// node_modules/electrodb/src/filters.js
var require_filters = __commonJS({
  "node_modules/electrodb/src/filters.js"(exports, module2) {
    "use strict";
    var e = require_errors();
    var { MethodTypes, ExpressionTypes } = require_types();
    var FilterFactory = class {
      constructor(attributes2 = {}, filterTypes = {}) {
        this.attributes = { ...attributes2 };
        this.filters = {
          ...filterTypes
        };
      }
      getExpressionType(methodType) {
        switch (methodType) {
          case MethodTypes.put:
          case MethodTypes.create:
          case MethodTypes.update:
          case MethodTypes.patch:
          case MethodTypes.delete:
          case MethodTypes.get:
          case MethodTypes.upsert:
            return ExpressionTypes.ConditionExpression;
          default:
            return ExpressionTypes.FilterExpression;
        }
      }
      _buildFilterAttributes(setName, setValue) {
        let attributes2 = {};
        for (let [name, attribute] of Object.entries(this.attributes)) {
          let filterAttribute = {};
          for (let [type, { template }] of Object.entries(this.filters)) {
            Object.defineProperty(filterAttribute, type, {
              get: () => {
                return (...values) => {
                  let { prop } = setName({}, name, attribute.field);
                  let attrValues = [];
                  for (let value of values) {
                    if (template.length > 1) {
                      attrValues.push(
                        setValue(name, value, name)
                      );
                    }
                  }
                  let expression = template({}, attribute, prop, ...attrValues);
                  return expression.trim();
                };
              }
            });
          }
          attributes2[name] = filterAttribute;
        }
        return attributes2;
      }
      buildClause(filterFn) {
        return (entity, state, ...params) => {
          const type = this.getExpressionType(state.query.method);
          const builder = state.query.filter[type];
          let setName = (paths, name, value) => builder.setName(paths, name, value);
          let setValue = (name, value, path) => builder.setValue(name, value, path);
          let attributes2 = this._buildFilterAttributes(
            setName,
            setValue
          );
          const expression = filterFn(attributes2, ...params);
          if (typeof expression !== "string") {
            throw new e.ElectroError(e.ErrorCodes.InvalidFilter, "Invalid filter response. Expected result to be of type string");
          }
          builder.add(expression);
          return state;
        };
      }
      injectFilterClauses(clauses = {}, filters = {}) {
        let injected = { ...clauses };
        let filterParents = Object.entries(injected).filter((clause) => {
          let [name, { children }] = clause;
          return children.find((child) => ["go", "commit"].includes(child));
        }).map(([name]) => name);
        let modelFilters = Object.keys(filters);
        let filterChildren = [];
        for (let [name, filter] of Object.entries(filters)) {
          filterChildren.push(name);
          injected[name] = {
            name,
            action: this.buildClause(filter),
            children: ["params", "go", "commit", "filter", ...modelFilters]
          };
        }
        filterChildren.push("filter");
        injected["filter"] = {
          name: "filter",
          action: (entity, state, fn) => {
            return this.buildClause(fn)(entity, state);
          },
          children: ["params", "go", "commit", "filter", ...modelFilters]
        };
        for (let parent of filterParents) {
          injected[parent] = { ...injected[parent] };
          injected[parent].children = [
            ...filterChildren,
            ...injected[parent].children
          ];
        }
        return injected;
      }
    };
    module2.exports = { FilterFactory };
  }
});

// node_modules/electrodb/src/updateOperations.js
var require_updateOperations = __commonJS({
  "node_modules/electrodb/src/updateOperations.js"(exports, module2) {
    "use strict";
    var { AttributeTypes, ItemOperations } = require_types();
    var deleteOperations = {
      canNest: false,
      template: function del(options, attr, path, value) {
        let operation = "";
        let expression = "";
        switch (attr.type) {
          case AttributeTypes.any:
          case AttributeTypes.set:
            operation = ItemOperations.delete;
            expression = `${path} ${value}`;
            break;
          default:
            throw new Error(`Invalid Update Attribute Operation: "DELETE" Operation can only be performed on attributes with type "set" or "any".`);
        }
        return { operation, expression };
      }
    };
    var UpdateOperations = {
      ifNotExists: {
        template: function if_not_exists(options, attr, path, value) {
          const operation = ItemOperations.set;
          const expression = `${path} = if_not_exists(${path}, ${value})`;
          return { operation, expression };
        }
      },
      name: {
        canNest: true,
        template: function name(options, attr, path) {
          return path;
        }
      },
      value: {
        canNest: true,
        template: function value(options, attr, path, value) {
          return value;
        }
      },
      append: {
        canNest: false,
        template: function append(options, attr, path, value) {
          let operation = "";
          let expression = "";
          switch (attr.type) {
            case AttributeTypes.any:
            case AttributeTypes.list:
              const defaultValue = options.createValue("default_value", []);
              expression = `${path} = list_append(if_not_exists(${path}, ${defaultValue}), ${value})`;
              operation = ItemOperations.set;
              break;
            default:
              throw new Error(`Invalid Update Attribute Operation: "APPEND" Operation can only be performed on attributes with type "list" or "any".`);
          }
          return { operation, expression };
        }
      },
      add: {
        canNest: false,
        template: function add(options, attr, path, value, defaultValue) {
          let operation = "";
          let expression = "";
          let type = attr.type;
          if (type === AttributeTypes.any) {
            type = typeof value === "number" ? AttributeTypes.number : AttributeTypes.any;
          }
          switch (type) {
            case AttributeTypes.any:
            case AttributeTypes.set: {
              operation = ItemOperations.add;
              expression = `${path} ${value}`;
              break;
            }
            case AttributeTypes.number: {
              if (options.nestedValue) {
                operation = ItemOperations.set;
                expression = `${path} = ${path} + ${value}`;
              } else if (defaultValue !== void 0) {
                operation = ItemOperations.set;
                expression = `${path} = (if_not_exists(${path}, ${defaultValue}) + ${value})`;
              } else {
                operation = ItemOperations.add;
                expression = `${path} ${value}`;
              }
              break;
            }
            default:
              throw new Error(`Invalid Update Attribute Operation: "ADD" Operation can only be performed on attributes with type "number", "set", or "any".`);
          }
          return { operation, expression };
        }
      },
      subtract: {
        canNest: false,
        template: function subtract(options, attr, path, value, defaultValue = 0) {
          let operation = "";
          let expression = "";
          switch (attr.type) {
            case AttributeTypes.any:
            case AttributeTypes.number: {
              let resolvedDefaultValue;
              if (typeof defaultValue === "string" && defaultValue.startsWith(":")) {
                resolvedDefaultValue = defaultValue;
              } else if (defaultValue !== void 0) {
                resolvedDefaultValue = options.createValue("default_value", defaultValue);
              } else {
                resolvedDefaultValue = options.createValue("default_value", 0);
              }
              operation = ItemOperations.set;
              expression = `${path} = (if_not_exists(${path}, ${resolvedDefaultValue}) - ${value})`;
              break;
            }
            default:
              throw new Error(`Invalid Update Attribute Operation: "SUBTRACT" Operation can only be performed on attributes with type "number" or "any".`);
          }
          return { operation, expression };
        }
      },
      set: {
        canNest: false,
        template: function set(options, attr, path, value) {
          let operation = "";
          let expression = "";
          switch (attr.type) {
            case AttributeTypes.set:
            case AttributeTypes.list:
            case AttributeTypes.map:
            case AttributeTypes.enum:
            case AttributeTypes.string:
            case AttributeTypes.number:
            case AttributeTypes.boolean:
            case AttributeTypes.any:
              operation = ItemOperations.set;
              expression = `${path} = ${value}`;
              break;
            default:
              throw new Error(`Invalid Update Attribute Operation: "SET" Operation can only be performed on attributes with type "list", "map", "string", "number", "boolean", or "any".`);
          }
          return { operation, expression };
        }
      },
      remove: {
        canNest: false,
        template: function remove(options, attr, ...paths) {
          let operation = "";
          let expression = "";
          switch (attr.type) {
            case AttributeTypes.set:
            case AttributeTypes.any:
            case AttributeTypes.list:
            case AttributeTypes.map:
            case AttributeTypes.string:
            case AttributeTypes.number:
            case AttributeTypes.boolean:
            case AttributeTypes.enum:
              operation = ItemOperations.remove;
              expression = paths.join(", ");
              break;
            default: {
              throw new Error(`Invalid Update Attribute Operation: "REMOVE" Operation can only be performed on attributes with type "map", "list", "string", "number", "boolean", or "any".`);
            }
          }
          return { operation, expression };
        }
      },
      del: deleteOperations,
      delete: deleteOperations
    };
    module2.exports = {
      UpdateOperations
    };
  }
});

// node_modules/electrodb/src/filterOperations.js
var require_filterOperations = __commonJS({
  "node_modules/electrodb/src/filterOperations.js"(exports, module2) {
    "use strict";
    var FilterOperations = {
      escape: {
        template: function escape(options, attr) {
          return `${attr}`;
        },
        rawValue: true
      },
      size: {
        template: function size(options, attr, name) {
          return `size(${name})`;
        },
        strict: false
      },
      type: {
        template: function attributeType(options, attr, name, value) {
          return `attribute_type(${name}, ${value})`;
        },
        strict: false
      },
      ne: {
        template: function ne(options, attr, name, value) {
          return `${name} <> ${value}`;
        },
        strict: false
      },
      eq: {
        template: function eq(options, attr, name, value) {
          return `${name} = ${value}`;
        },
        strict: false
      },
      gt: {
        template: function gt(options, attr, name, value) {
          return `${name} > ${value}`;
        },
        strict: false
      },
      lt: {
        template: function lt(options, attr, name, value) {
          return `${name} < ${value}`;
        },
        strict: false
      },
      gte: {
        template: function gte(options, attr, name, value) {
          return `${name} >= ${value}`;
        },
        strict: false
      },
      lte: {
        template: function lte(options, attr, name, value) {
          return `${name} <= ${value}`;
        },
        strict: false
      },
      between: {
        template: function between(options, attr, name, value1, value2) {
          return `(${name} between ${value1} and ${value2})`;
        },
        strict: false
      },
      begins: {
        template: function begins(options, attr, name, value) {
          return `begins_with(${name}, ${value})`;
        },
        strict: false
      },
      exists: {
        template: function exists(options, attr, name) {
          return `attribute_exists(${name})`;
        },
        strict: false
      },
      notExists: {
        template: function notExists(options, attr, name) {
          return `attribute_not_exists(${name})`;
        },
        strict: false
      },
      contains: {
        template: function contains(options, attr, name, value) {
          return `contains(${name}, ${value})`;
        },
        strict: false
      },
      notContains: {
        template: function notContains(options, attr, name, value) {
          return `not contains(${name}, ${value})`;
        },
        strict: false
      },
      value: {
        template: function(options, attr, name, value) {
          return value;
        },
        strict: false,
        canNest: true
      },
      name: {
        template: function(options, attr, name) {
          return name;
        },
        strict: false,
        canNest: true
      },
      eqOrNotExists: {
        template: function eq(options, attr, name, value) {
          return `(${name} = ${value} OR attribute_not_exists(${name}))`;
        },
        strict: false
      },
      field: {
        template: function(options, _, fieldName) {
          return fieldName !== void 0 ? `${fieldName}` : "";
        },
        strict: false,
        canNest: true,
        rawField: true
      }
    };
    module2.exports = {
      FilterOperations
    };
  }
});

// node_modules/electrodb/src/operations.js
var require_operations = __commonJS({
  "node_modules/electrodb/src/operations.js"(exports, module2) {
    "use strict";
    var { AttributeTypes, ItemOperations, AttributeProxySymbol, BuilderTypes } = require_types();
    var { UpdateOperations } = require_updateOperations();
    var { FilterOperations } = require_filterOperations();
    var e = require_errors();
    var u = require_util();
    var ExpressionState = class {
      constructor({ prefix } = {}) {
        this.names = {};
        this.values = {};
        this.paths = {};
        this.counts = {};
        this.impacted = {};
        this.expression = "";
        this.prefix = prefix || "";
        this.refs = {};
      }
      incrementName(name) {
        if (this.counts[name] === void 0) {
          this.counts[name] = 0;
        }
        return `${this.prefix}${this.counts[name]++}`;
      }
      // todo: make the structure: name, value, paths
      setName(paths, name, value) {
        let json = "";
        let expression = "";
        const prop = `#${name}`;
        if (Object.keys(paths).length === 0) {
          json = `${name}`;
          expression = `${prop}`;
          this.names[prop] = value;
        } else if (isNaN(name)) {
          json = `${paths.json}.${name}`;
          expression = `${paths.expression}.${prop}`;
          this.names[prop] = value;
        } else {
          json = `${paths.json}[${name}]`;
          expression = `${paths.expression}[${name}]`;
        }
        return { json, expression, prop };
      }
      getNames() {
        return this.names;
      }
      setValue(name, value) {
        let valueCount = this.incrementName(name);
        let expression = `:${name}${valueCount}`;
        this.values[expression] = value;
        return expression;
      }
      updateValue(name, value) {
        this.values[name] = value;
      }
      getValues() {
        return this.values;
      }
      setPath(path, value) {
        this.paths[path] = value;
      }
      setExpression(expression) {
        this.expression = expression;
      }
      getExpression() {
        return this.expression;
      }
      setImpacted(operation, path, ref) {
        this.impacted[path] = operation;
        this.refs[path] = ref;
      }
    };
    var AttributeOperationProxy = class _AttributeOperationProxy {
      constructor({ builder, attributes: attributes2 = {}, operations = {} }) {
        this.ref = {
          attributes: attributes2,
          operations
        };
        this.attributes = _AttributeOperationProxy.buildAttributes(builder, attributes2);
        this.operations = _AttributeOperationProxy.buildOperations(builder, operations);
      }
      invokeCallback(op, ...params) {
        return op(this.attributes, this.operations, ...params);
      }
      performOperation({ operation, path, value, force = false }) {
        if (value === void 0) {
          return;
        }
        const parts = u.parseJSONPath(path);
        let attribute = this.attributes;
        for (let part of parts) {
          attribute = attribute[part];
        }
        if (attribute) {
          this.operations[operation](attribute, value);
          const { target } = attribute();
          if (target.readOnly && !force) {
            throw new Error(`Attribute "${target.path}" is Read-Only and cannot be updated`);
          }
        }
      }
      fromObject(operation, record) {
        for (let path of Object.keys(record)) {
          this.performOperation({
            operation,
            path,
            value: record[path]
          });
        }
      }
      fromArray(operation, paths) {
        for (let path of paths) {
          const parts = u.parseJSONPath(path);
          let attribute = this.attributes;
          for (let part of parts) {
            attribute = attribute[part];
          }
          if (attribute) {
            this.operations[operation](attribute);
            const { target } = attribute();
            if (target.readOnly) {
              throw new Error(`Attribute "${target.path}" is Read-Only and cannot be updated`);
            } else if (operation === ItemOperations.remove && target.required) {
              throw new Error(`Attribute "${target.path}" is Required and cannot be removed`);
            }
          }
        }
      }
      static buildOperations(builder, operations) {
        let ops = {};
        let seen = /* @__PURE__ */ new Map();
        for (let operation of Object.keys(operations)) {
          let { template, canNest, rawValue, rawField } = operations[operation];
          Object.defineProperty(ops, operation, {
            get: () => {
              return (property, ...values) => {
                if (property === void 0) {
                  throw new e.ElectroError(e.ErrorCodes.InvalidWhere, `Invalid/Unknown property passed in where clause passed to operation: '${operation}'`);
                }
                if (property[AttributeProxySymbol]) {
                  const { commit, target } = property();
                  const fixedValues = values.map((value) => target.applyFixings(value)).filter((value) => value !== void 0);
                  const isFilterBuilder = builder.type === BuilderTypes.filter;
                  const takesValueArgument = template.length > 3;
                  const isAcceptableValue = fixedValues.every((value) => {
                    const seenAttributes = seen.get(value);
                    if (seenAttributes) {
                      return seenAttributes.every((v) => target.acceptable(v));
                    }
                    return target.acceptable(value);
                  });
                  const shouldCommit = (
                    // if it is a filterBuilder than we don't care what they pass because the user needs more freedom here
                    isFilterBuilder || // if the operation does not take a value argument then not committing here could cause problems.
                    // this should be revisited to make more robust, we could hypothetically store the commit in the
                    // "seen" map for when the value is used, but that's a lot of new complexity
                    !takesValueArgument || // if the operation takes a value, we should determine if that value is acceptable. For
                    // example, in the cases of a "set" we check to see if it is empty, or if the value is
                    // undefined, we should not commit. The "fixedValues" length check is because the
                    // "fixedValues" array has been filtered for undefined, so no length there indicates an
                    // undefined value was passed.
                    takesValueArgument && isAcceptableValue && fixedValues.length > 0
                  );
                  if (!shouldCommit) {
                    return "";
                  }
                  const paths = commit();
                  const attributeValues = [];
                  let hasNestedValue = false;
                  for (let fixedValue of fixedValues) {
                    if (seen.has(fixedValue)) {
                      attributeValues.push(fixedValue);
                      hasNestedValue = true;
                    } else {
                      let attributeValueName = builder.setValue(target.name, fixedValue);
                      builder.setPath(paths.json, {
                        value: fixedValue,
                        name: attributeValueName
                      });
                      attributeValues.push(attributeValueName);
                    }
                  }
                  const options = {
                    nestedValue: hasNestedValue,
                    createValue: (name, value) => builder.setValue(`${target.name}_${name}`, value)
                  };
                  const formatted = template(options, target, paths.expression, ...attributeValues);
                  builder.setImpacted(operation, paths.json, target);
                  if (canNest) {
                    seen.set(paths.expression, attributeValues);
                    seen.set(formatted, attributeValues);
                  }
                  if (builder.type === BuilderTypes.update && formatted && typeof formatted.operation === "string" && typeof formatted.expression === "string") {
                    builder.add(formatted.operation, formatted.expression);
                    return formatted.expression;
                  }
                  return formatted;
                } else if (rawValue) {
                  let attributeValueName = builder.setValue(property, property);
                  builder.setPath(property, {
                    value: property,
                    name: attributeValueName
                  });
                  const formatted = template({}, attributeValueName);
                  seen.set(attributeValueName, [property]);
                  seen.set(formatted, [property]);
                  return formatted;
                } else if (rawField) {
                  const { prop, expression } = builder.setName({}, property, property);
                  const formatted = template({}, null, prop);
                  seen.set(expression, [property]);
                  seen.set(formatted, [property]);
                  return formatted;
                } else {
                  throw new e.ElectroError(e.ErrorCodes.InvalidWhere, `Invalid Attribute in where clause passed to operation '${operation}'. Use injected attributes only.`);
                }
              };
            }
          });
        }
        return ops;
      }
      static pathProxy(build) {
        return new Proxy(() => build(), {
          get: (_, prop, o) => {
            if (prop === AttributeProxySymbol) {
              return true;
            } else {
              return _AttributeOperationProxy.pathProxy(() => {
                const { commit, root, target, builder } = build();
                const attribute = target.getChild(prop);
                let field;
                if (attribute === void 0) {
                  throw new Error(`Invalid attribute "${prop}" at path "${target.path}.${prop}"`);
                } else if (attribute === root && attribute.type === AttributeTypes.any) {
                  field = prop;
                } else {
                  field = attribute.field;
                }
                return {
                  root,
                  builder,
                  target: attribute,
                  commit: () => {
                    const paths = commit();
                    return builder.setName(paths, prop, field);
                  }
                };
              });
            }
          }
        });
      }
      static buildAttributes(builder, attributes2) {
        let attr = {};
        for (let [name, attribute] of Object.entries(attributes2)) {
          Object.defineProperty(attr, name, {
            get: () => {
              return _AttributeOperationProxy.pathProxy(() => {
                return {
                  root: attribute,
                  target: attribute,
                  builder,
                  commit: () => builder.setName({}, attribute.name, attribute.field)
                };
              });
            }
          });
        }
        return attr;
      }
    };
    var FilterOperationNames = Object.keys(FilterOperations).reduce((ops, name) => {
      ops[name] = name;
      return ops;
    }, {});
    var UpdateOperationNames = Object.keys(UpdateOperations).reduce((ops, name) => {
      ops[name] = name;
      return ops;
    }, {});
    module2.exports = { UpdateOperations, UpdateOperationNames, FilterOperations, FilterOperationNames, ExpressionState, AttributeOperationProxy };
  }
});

// node_modules/electrodb/src/where.js
var require_where = __commonJS({
  "node_modules/electrodb/src/where.js"(exports, module2) {
    "use strict";
    var { MethodTypes, ExpressionTypes, BuilderTypes } = require_types();
    var { AttributeOperationProxy, ExpressionState, FilterOperations } = require_operations();
    var e = require_errors();
    var FilterExpression = class extends ExpressionState {
      constructor(props) {
        super(props);
        this.expression = "";
        this.type = BuilderTypes.filter;
      }
      _trim(expression) {
        if (typeof expression === "string" && expression.length > 0) {
          return expression.replace(/\n|\r/g, "").trim();
        }
        return "";
      }
      _isEmpty(expression) {
        if (typeof expression !== "string") {
          throw new Error("Invalid expression value type. Expected type string.");
        }
        return !expression.replace(/\n|\r|\w/g, "").trim();
      }
      add(newExpression) {
        let expression = "";
        let existingExpression = this.expression;
        if (typeof existingExpression === "string" && existingExpression.length > 0) {
          newExpression = this._trim(newExpression);
          let isEmpty = this._isEmpty(newExpression);
          if (isEmpty) {
            return existingExpression;
          }
          let existingNeedsParens = !existingExpression.startsWith("(") && !existingExpression.endsWith(")");
          if (existingNeedsParens) {
            existingExpression = `(${existingExpression})`;
          }
          expression = `${existingExpression} AND ${newExpression}`;
        } else {
          expression = this._trim(newExpression);
        }
        this.expression = expression;
      }
      // applies operations without verifying them against known attributes. Used internally for key conditions.
      unsafeSet(operation, name, ...values) {
        const { template } = FilterOperations[operation] || {};
        if (template === void 0) {
          throw new Error(`Invalid operation: "${operation}". Please report this issue via a bug ticket.`);
        }
        const names = this.setName({}, name, name);
        const valueExpressions = values.map((value) => this.setValue(name, value));
        const condition = template({}, names.expression, names.prop, ...valueExpressions);
        this.add(condition);
      }
      build() {
        return this.expression;
      }
    };
    var WhereFactory = class {
      constructor(attributes2 = {}, operations = {}) {
        this.attributes = { ...attributes2 };
        this.operations = { ...operations };
      }
      getExpressionType(methodType) {
        switch (methodType) {
          case MethodTypes.put:
          case MethodTypes.create:
          case MethodTypes.update:
          case MethodTypes.patch:
          case MethodTypes.delete:
          case MethodTypes.remove:
          case MethodTypes.upsert:
          case MethodTypes.get:
          case MethodTypes.check:
            return ExpressionTypes.ConditionExpression;
          default:
            return ExpressionTypes.FilterExpression;
        }
      }
      buildClause(cb) {
        if (typeof cb !== "function") {
          throw new e.ElectroError(e.ErrorCodes.InvalidWhere, 'Where callback must be of type "function"');
        }
        return (entity, state, ...params) => {
          const type = this.getExpressionType(state.query.method);
          const builder = state.query.filter[type];
          const proxy = new AttributeOperationProxy({
            builder,
            attributes: this.attributes,
            operations: this.operations
          });
          const expression = proxy.invokeCallback(cb, ...params);
          if (typeof expression !== "string") {
            throw new e.ElectroError(e.ErrorCodes.InvalidWhere, "Invalid response from where clause callback. Expected return result to be of type string");
          }
          builder.add(expression);
          return state;
        };
      }
      injectWhereClauses(clauses = {}, filters = {}) {
        let injected = { ...clauses };
        let filterParents = Object.entries(injected).filter((clause) => {
          let [name, { children }] = clause;
          return children.find((child) => ["go", "commit"].includes(child));
        }).map(([name]) => name);
        let modelFilters = Object.keys(filters);
        let filterChildren = [];
        for (let [name, filter] of Object.entries(filters)) {
          filterChildren.push(name);
          injected[name] = {
            name,
            action: this.buildClause(filter),
            children: ["params", "go", "commit", "where", ...modelFilters]
          };
        }
        filterChildren.push("where");
        injected["where"] = {
          name: "where",
          action: (entity, state, fn) => {
            return this.buildClause(fn)(entity, state);
          },
          children: ["params", "go", "commit", "where", ...modelFilters]
        };
        for (let parent of filterParents) {
          injected[parent] = { ...injected[parent] };
          injected[parent].children = [
            ...filterChildren,
            ...injected[parent].children
          ];
        }
        return injected;
      }
    };
    module2.exports = {
      WhereFactory,
      FilterExpression
    };
  }
});

// node_modules/electrodb/src/update.js
var require_update = __commonJS({
  "node_modules/electrodb/src/update.js"(exports, module2) {
    "use strict";
    var { UpdateOperations } = require_updateOperations();
    var { AttributeOperationProxy, ExpressionState } = require_operations();
    var { ItemOperations, BuilderTypes } = require_types();
    var UpdateExpression = class extends ExpressionState {
      constructor(props = {}) {
        super({ ...props });
        this.operations = {
          set: /* @__PURE__ */ new Set(),
          remove: /* @__PURE__ */ new Set(),
          add: /* @__PURE__ */ new Set(),
          subtract: /* @__PURE__ */ new Set(),
          delete: /* @__PURE__ */ new Set()
        };
        this.composites = {};
        this.seen = /* @__PURE__ */ new Map();
        this.type = BuilderTypes.update;
      }
      addComposite(attrName, value) {
        if (value !== void 0) {
          if (this.composites[attrName] === void 0 || this.composites[attrName] === value) {
            this.composites[attrName] = value;
            return true;
          }
        }
        return false;
      }
      add(type, expression) {
        this.operations[type].add(expression);
      }
      unadd(type, expression) {
        this.operations[type].delete(expression);
      }
      set(name, value, operation = ItemOperations.set, attribute) {
        let operationToApply = operation;
        if (operation === ItemOperations.ifNotExists) {
          operationToApply = ItemOperations.set;
        }
        const seen = this.seen.get(name);
        let n;
        let v;
        if (seen) {
          n = seen.name;
          v = seen.value;
          this.unadd(operationToApply, seen.expression);
        } else {
          n = this.setName({}, name, name);
          v = this.setValue(name, value);
        }
        let expression = `${n.prop} = ${v}`;
        if (operation === ItemOperations.ifNotExists) {
          expression = `${n.prop} = if_not_exists(${n.prop}, ${v})`;
        }
        this.seen.set(name, {
          name: n,
          value: v,
          expression
        });
        this.add(operationToApply, expression);
      }
      remove(name) {
        const n = this.setName({}, name, name);
        this.add(ItemOperations.remove, `${n.prop}`);
      }
      build() {
        let expressions = [];
        for (const type of Object.keys(this.operations)) {
          const operations = this.operations[type];
          if (operations.size > 0) {
            expressions.push(`${type.toUpperCase()} ${Array.from(operations).join(", ")}`);
          }
        }
        return expressions.join(" ");
      }
    };
    var UpdateEntity = class {
      constructor(attributes2 = {}, operations = {}) {
        this.attributes = { ...attributes2 };
        this.operations = { ...operations };
      }
      buildCallbackHandler(entity, state) {
        const proxy = new AttributeOperationProxy({
          builder: state.query.update,
          attributes: this.attributes,
          operations: this.operations
        });
        return (cb, ...params) => {
          if (typeof cb !== "function") {
            throw new Error('Update Callback must be of type "function"');
          }
          proxy.invokeCallback(cb, ...params);
        };
      }
    };
    module2.exports = {
      UpdateEntity,
      UpdateExpression
    };
  }
});

// node_modules/electrodb/src/clauses.js
var require_clauses = __commonJS({
  "node_modules/electrodb/src/clauses.js"(exports, module2) {
    "use strict";
    var {
      QueryTypes,
      MethodTypes,
      ItemOperations,
      ExpressionTypes,
      TransactionCommitSymbol,
      TransactionOperations,
      TerminalOperation,
      KeyTypes,
      IndexTypes,
      UpsertOperations
    } = require_types();
    var { AttributeOperationProxy, UpdateOperations, FilterOperationNames, UpdateOperationNames } = require_operations();
    var { UpdateExpression } = require_update();
    var { FilterExpression } = require_where();
    var v = require_validations();
    var e = require_errors();
    var u = require_util();
    var methodChildren = {
      upsert: ["upsertSet", "upsertAppend", "upsertAdd", "go", "params", "upsertSubtract", "commit", "upsertIfNotExists", "where"],
      update: ["data", "set", "append", "add", "updateRemove", "updateDelete", "go", "params", "subtract", "commit", "composite", "ifNotExists", "where"],
      put: ["where", "params", "go", "commit"],
      del: ["where", "params", "go", "commit"]
    };
    function batchAction(action, type, entity, state, payload) {
      if (state.getError() !== null) {
        return state;
      }
      try {
        state.setMethod(type);
        for (let facets of payload) {
          let batchState = action(entity, state.createSubState(), facets);
          if (batchState.getError() !== null) {
            throw batchState.getError();
          }
        }
        return state;
      } catch (err) {
        state.setError(err);
        return state;
      }
    }
    var clauses = {
      index: {
        name: "index",
        children: ["check", "get", "delete", "update", "query", "upsert", "put", "scan", "collection", "clusteredCollection", "create", "remove", "patch", "batchPut", "batchDelete", "batchGet"]
      },
      clusteredCollection: {
        name: "clusteredCollection",
        action(entity, state, collection = "", facets = {}) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            const { pk, sk } = state.getCompositeAttributes();
            return state.setType(QueryTypes.clustered_collection).setMethod(MethodTypes.query).setCollection(collection).setPK(entity._expectFacets(facets, pk)).ifSK(() => {
              const { composites, unused } = state.identifyCompositeAttributes(facets, sk, pk);
              state.setSK(composites);
              if (sk.length > 1) {
                state.filterProperties(FilterOperationNames.eq, { ...unused, ...composites });
              }
            }).whenOptions(({ options, state: state2 }) => {
              if (!options.ignoreOwnership && !state2.getParams()) {
                state2.query.options.expressions.names = {
                  ...state2.query.options.expressions.names,
                  ...state2.query.options.identifiers.names
                };
                state2.query.options.expressions.values = {
                  ...state2.query.options.expressions.values,
                  ...state2.query.options.identifiers.values
                };
                state2.query.options.expressions.expression = state2.query.options.expressions.expression.length > 1 ? `(${state2.query.options.expressions.expression}) AND ${state2.query.options.identifiers.expression}` : `${state2.query.options.identifiers.expression}`;
              }
            });
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: ["between", "gte", "gt", "lte", "lt", "begins", "params", "go"]
      },
      collection: {
        name: "collection",
        /* istanbul ignore next */
        action(entity, state, collection = "", facets = {}) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            const { pk, sk } = state.getCompositeAttributes();
            return state.setType(QueryTypes.collection).setMethod(MethodTypes.query).setCollection(collection).setPK(entity._expectFacets(facets, pk)).whenOptions(({ options, state: state2 }) => {
              if (!options.ignoreOwnership && !state2.getParams()) {
                state2.query.options.expressions.names = {
                  ...state2.query.options.expressions.names,
                  ...state2.query.options.identifiers.names
                };
                state2.query.options.expressions.values = {
                  ...state2.query.options.expressions.values,
                  ...state2.query.options.identifiers.values
                };
                state2.query.options.expressions.expression = state2.query.options.expressions.expression.length > 1 ? `(${state2.query.options.expressions.expression}) AND ${state2.query.options.identifiers.expression}` : `${state2.query.options.identifiers.expression}`;
              }
            });
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: ["params", "go"]
      },
      scan: {
        name: "scan",
        action(entity, state, config) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            return state.setMethod(MethodTypes.scan).whenOptions(({ state: state2, options }) => {
              if (!options.ignoreOwnership && !state2.getParams()) {
                state2.unsafeApplyFilter(FilterOperationNames.eq, entity.identifiers.entity, entity.getName());
                state2.unsafeApplyFilter(FilterOperationNames.eq, entity.identifiers.version, entity.getVersion());
              }
            });
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: ["params", "go"]
      },
      get: {
        name: "get",
        /* istanbul ignore next */
        action(entity, state, facets = {}) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            const { pk, sk } = state.getCompositeAttributes();
            const { composites } = state.identifyCompositeAttributes(facets, sk, pk);
            return state.setMethod(MethodTypes.get).setType(QueryTypes.eq).setPK(entity._expectFacets(facets, pk)).ifSK(() => {
              entity._expectFacets(facets, sk);
              state.setSK(composites);
            });
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: ["params", "go", "commit"]
      },
      check: {
        name: "check",
        action(...params) {
          return clauses.get.action(...params).setMethod(MethodTypes.check);
        },
        children: ["commit"]
      },
      batchGet: {
        name: "batchGet",
        action: (entity, state, payload) => batchAction(clauses.get.action, MethodTypes.batchGet, entity, state, payload),
        children: ["params", "go"]
      },
      batchDelete: {
        name: "batchDelete",
        action: (entity, state, payload) => batchAction(clauses.delete.action, MethodTypes.batchWrite, entity, state, payload),
        children: ["params", "go"]
      },
      delete: {
        name: "delete",
        /* istanbul ignore next */
        action(entity, state, facets = {}) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            const { pk, sk } = state.getCompositeAttributes();
            const pkComposite = entity._expectFacets(facets, pk);
            state.addOption("_includeOnResponseItem", pkComposite);
            return state.setMethod(MethodTypes.delete).setType(QueryTypes.eq).setPK(pkComposite).ifSK(() => {
              entity._expectFacets(facets, sk);
              const skComposite = state.buildQueryComposites(facets, sk);
              state.setSK(skComposite);
              state.addOption("_includeOnResponseItem", { ...skComposite, ...pkComposite });
            });
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: ["where", "params", "go", "commit"]
      },
      remove: {
        name: "remove",
        /* istanbul ignore next */
        action(entity, state, facets = {}) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            const attributes2 = state.getCompositeAttributes();
            const filter = state.query.filter[ExpressionTypes.ConditionExpression];
            const { pk, sk } = entity._getPrimaryIndexFieldNames();
            filter.unsafeSet(FilterOperationNames.exists, pk);
            if (sk) {
              filter.unsafeSet(FilterOperationNames.exists, sk);
            }
            const pkComposite = entity._expectFacets(facets, attributes2.pk);
            state.addOption("_includeOnResponseItem", pkComposite);
            return state.setMethod(MethodTypes.delete).setType(QueryTypes.eq).setPK(pkComposite).ifSK(() => {
              entity._expectFacets(facets, attributes2.sk);
              const skComposite = state.buildQueryComposites(facets, attributes2.sk);
              state.setSK(skComposite);
              state.addOption("_includeOnResponseItem", { ...skComposite, ...pkComposite });
            });
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: methodChildren.del
      },
      upsert: {
        name: "upsert",
        action(entity, state, payload = {}) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            return state.setMethod(MethodTypes.upsert).setType(QueryTypes.eq).applyUpsert(UpsertOperations.set, payload).beforeBuildParams(({ state: state2 }) => {
              const { upsert, update, updateProxy } = state2.query;
              state2.query.update.set(entity.identifiers.entity, entity.getName());
              state2.query.update.set(entity.identifiers.version, entity.getVersion());
              const setData = {};
              const nonSetData = {};
              let allData = {};
              for (const name in upsert.data) {
                const { operation, value } = upsert.data[name];
                allData[name] = value;
                if (operation === UpsertOperations.set) {
                  setData[name] = value;
                } else {
                  nonSetData[name] = value;
                }
              }
              const upsertData = entity.model.schema.checkCreate({ ...allData });
              const attributes2 = state2.getCompositeAttributes();
              const pkComposite = entity._expectFacets(upsertData, attributes2.pk);
              state2.addOption("_includeOnResponseItem", pkComposite).setPK(pkComposite).ifSK(() => {
                entity._expectFacets(upsertData, attributes2.sk);
                const skComposite = entity._buildQueryFacets(upsertData, attributes2.sk);
                state2.setSK(skComposite);
                state2.addOption("_includeOnResponseItem", { ...skComposite, ...pkComposite });
              });
              const appliedData = entity.model.schema.applyAttributeSetters({ ...upsertData });
              const onlySetAppliedData = {};
              const nonSetAppliedData = {};
              for (const name in appliedData) {
                const value = appliedData[name];
                const isSetOperation = setData[name] !== void 0;
                const cameFromApplyingSetters = allData[name] === void 0;
                const isNotUndefined = appliedData[name] !== void 0;
                const applyAsSet = isSetOperation || cameFromApplyingSetters;
                if (applyAsSet && isNotUndefined) {
                  onlySetAppliedData[name] = value;
                } else {
                  nonSetAppliedData[name] = value;
                }
              }
              const { pk } = state2.query.keys;
              const sk = state2.query.keys.sk[0];
              const { updatedKeys, setAttributes, indexKey } = entity._getPutKeys(pk, sk && sk.facets, onlySetAppliedData);
              upsert.indexKey = indexKey;
              const setFields = Object.entries(entity.model.schema.translateToFields(setAttributes));
              for (const key in updatedKeys) {
                const value = updatedKeys[key];
                if (indexKey[key] === void 0) {
                  setFields.push([key, value]);
                }
              }
              entity._maybeApplyUpsertUpdate({
                fields: setFields,
                operation: UpsertOperations.set,
                updateProxy,
                update
              });
              for (const name in nonSetData) {
                const value = appliedData[name];
                if (value === void 0 || upsert.data[name] === void 0) {
                  continue;
                }
                const { operation } = upsert.data[name];
                const fields = entity.model.schema.translateToFields({ [name]: value });
                entity._maybeApplyUpsertUpdate({
                  fields: Object.entries(fields),
                  updateProxy,
                  operation,
                  update
                });
              }
            });
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: methodChildren.upsert
      },
      put: {
        name: "put",
        /* istanbul ignore next */
        action(entity, state, payload = {}) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            let record = entity.model.schema.checkCreate({ ...payload });
            const attributes2 = state.getCompositeAttributes();
            return state.setMethod(MethodTypes.put).setType(QueryTypes.eq).applyPut(record).setPK(entity._expectFacets(record, attributes2.pk)).ifSK(() => {
              entity._expectFacets(record, attributes2.sk);
              state.setSK(state.buildQueryComposites(record, attributes2.sk));
            });
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: methodChildren.put
      },
      batchPut: {
        name: "batchPut",
        action: (entity, state, payload) => batchAction(clauses.put.action, MethodTypes.batchWrite, entity, state, payload),
        children: ["params", "go"]
      },
      create: {
        name: "create",
        action(entity, state, payload) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            let record = entity.model.schema.checkCreate({ ...payload });
            const attributes2 = state.getCompositeAttributes();
            const filter = state.query.filter[ExpressionTypes.ConditionExpression];
            const { pk, sk } = entity._getPrimaryIndexFieldNames();
            filter.unsafeSet(FilterOperationNames.notExists, pk);
            if (sk) {
              filter.unsafeSet(FilterOperationNames.notExists, sk);
            }
            return state.setMethod(MethodTypes.put).setType(QueryTypes.eq).applyPut(record).setPK(entity._expectFacets(record, attributes2.pk)).ifSK(() => {
              entity._expectFacets(record, attributes2.sk);
              state.setSK(state.buildQueryComposites(record, attributes2.sk));
            });
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: methodChildren.put
      },
      patch: {
        name: "patch",
        action(entity, state, facets) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            const attributes2 = state.getCompositeAttributes();
            const filter = state.query.filter[ExpressionTypes.ConditionExpression];
            const { pk, sk } = entity._getPrimaryIndexFieldNames();
            filter.unsafeSet(FilterOperationNames.exists, pk);
            if (sk) {
              filter.unsafeSet(FilterOperationNames.exists, sk);
            }
            const pkComposite = entity._expectFacets(facets, attributes2.pk);
            state.addOption("_includeOnResponseItem", pkComposite);
            return state.setMethod(MethodTypes.update).setType(QueryTypes.eq).setPK(pkComposite).ifSK(() => {
              entity._expectFacets(facets, attributes2.sk);
              const skComposite = state.buildQueryComposites(facets, attributes2.sk);
              state.setSK(skComposite);
              state.addOption("_includeOnResponseItem", { ...skComposite, ...pkComposite });
            });
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: methodChildren.update
      },
      update: {
        name: "update",
        action(entity, state, facets) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            const attributes2 = state.getCompositeAttributes();
            const pkComposite = entity._expectFacets(facets, attributes2.pk);
            state.addOption("_includeOnResponseItem", pkComposite);
            return state.setMethod(MethodTypes.update).setType(QueryTypes.eq).setPK(pkComposite).ifSK(() => {
              entity._expectFacets(facets, attributes2.sk);
              const skComposite = state.buildQueryComposites(facets, attributes2.sk);
              state.setSK(skComposite);
              state.addOption("_includeOnResponseItem", { ...pkComposite, ...skComposite });
            });
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: methodChildren.update
      },
      data: {
        name: "data",
        action(entity, state, cb) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            state.query.updateProxy.invokeCallback(cb);
            for (const path of Object.keys(state.query.update.refs)) {
              const operation = state.query.update.impacted[path];
              const attribute = state.query.update.refs[path];
              const keyValue = state.query.update.paths[path] || {};
              if (!attribute) {
                throw new e.ElectroAttributeValidationError(path, `Attribute "${path}" does not exist on model.`);
              }
              entity.model.schema.checkOperation(attribute, operation, keyValue.value);
            }
            return state;
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: methodChildren.update
      },
      set: {
        name: "set",
        action(entity, state, data) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            entity.model.schema.checkUpdate(data);
            state.query.updateProxy.fromObject(ItemOperations.set, data);
            return state;
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: methodChildren.update
      },
      upsertSet: {
        name: "set",
        action(entity, state, data) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            entity.model.schema.checkUpdate(data, { allowReadOnly: true });
            state.query.upsert.addData(UpsertOperations.set, data);
            return state;
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: methodChildren.upsert
      },
      composite: {
        name: "composite",
        action(entity, state, composites = {}) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            for (const attrName in composites) {
              if (entity.model.facets.byAttr[attrName]) {
                const wasSet = state.query.update.addComposite(attrName, composites[attrName]);
                if (!wasSet) {
                  throw new e.ElectroError(e.ErrorCodes.DuplicateUpdateCompositesProvided, `The composite attribute ${attrName} has been provided more than once with different values. Remove the duplication before running again`);
                }
                state.applyCondition(FilterOperationNames.eq, attrName, composites[attrName]);
              }
            }
            return state;
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: methodChildren.update
      },
      append: {
        name: "append",
        action(entity, state, data = {}) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            entity.model.schema.checkUpdate(data);
            state.query.updateProxy.fromObject(ItemOperations.append, data);
            return state;
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: methodChildren.update
      },
      ifNotExists: {
        name: "ifNotExists",
        action(entity, state, data = {}) {
          entity.model.schema.checkUpdate(data);
          state.query.updateProxy.fromObject(ItemOperations.ifNotExists, data);
          return state;
        },
        children: methodChildren.update
      },
      upsertIfNotExists: {
        name: "ifNotExists",
        action(entity, state, data = {}) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            entity.model.schema.checkUpdate(data, { allowReadOnly: true });
            state.query.upsert.addData(UpsertOperations.ifNotExists, data);
            return state;
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: methodChildren.upsert
      },
      upsertAppend: {
        name: "append",
        action(entity, state, data = {}) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            entity.model.schema.checkUpdate(data, { allowReadOnly: true });
            state.query.upsert.addData(UpsertOperations.append, data);
            return state;
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: methodChildren.upsert
      },
      updateRemove: {
        name: "remove",
        action(entity, state, data) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            if (!Array.isArray(data)) {
              throw new Error("Update method 'remove' expects type Array");
            }
            entity.model.schema.checkRemove(data);
            state.query.updateProxy.fromArray(ItemOperations.remove, data);
            return state;
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: methodChildren.update
      },
      updateDelete: {
        name: "delete",
        action(entity, state, data) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            entity.model.schema.checkUpdate(data);
            state.query.updateProxy.fromObject(ItemOperations.delete, data);
            return state;
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: methodChildren.update
      },
      add: {
        name: "add",
        action(entity, state, data) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            entity.model.schema.checkUpdate(data);
            state.query.updateProxy.fromObject(ItemOperations.add, data);
            return state;
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: methodChildren.update
      },
      upsertAdd: {
        name: "add",
        action(entity, state, data) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            entity.model.schema.checkUpdate(data, { allowReadOnly: true });
            state.query.upsert.addData(UpsertOperations.add, data);
            return state;
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: methodChildren.upsert
      },
      upsertSubtract: {
        name: "subtract",
        action(entity, state, data) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            entity.model.schema.checkUpdate(data, { allowReadOnly: true });
            state.query.upsert.addData(UpsertOperations.subtract, data);
            return state;
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: methodChildren.upsert
      },
      subtract: {
        name: "subtract",
        action(entity, state, data) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            entity.model.schema.checkUpdate(data);
            state.query.updateProxy.fromObject(ItemOperations.subtract, data);
            return state;
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: methodChildren.update
      },
      query: {
        name: "query",
        action(entity, state, facets, options = {}) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            state.addOption("_isPagination", true);
            const { pk, sk } = state.getCompositeAttributes();
            return state.setMethod(MethodTypes.query).setType(QueryTypes.is).setPK(entity._expectFacets(facets, pk)).ifSK(() => {
              const { composites, unused } = state.identifyCompositeAttributes(facets, sk, pk);
              state.setSK(state.buildQueryComposites(facets, sk));
              if (sk.length > 1) {
                state.filterProperties(FilterOperationNames.eq, { ...unused, ...composites });
              }
              state.whenOptions(({ options: options2, state: state2 }) => {
                if (state2.query.options.indexType === IndexTypes.clustered && Object.keys(composites).length < sk.length && !options2.ignoreOwnership && !state2.getParams()) {
                  state2.unsafeApplyFilter(FilterOperationNames.eq, entity.identifiers.entity, entity.getName()).unsafeApplyFilter(FilterOperationNames.eq, entity.identifiers.version, entity.getVersion());
                }
              });
            });
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: ["between", "gte", "gt", "lte", "lt", "begins", "params", "go"]
      },
      between: {
        name: "between",
        action(entity, state, startingFacets = {}, endingFacets = {}) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            const { pk, sk } = state.getCompositeAttributes();
            const endingSk = state.identifyCompositeAttributes(endingFacets, sk, pk);
            const startingSk = state.identifyCompositeAttributes(startingFacets, sk, pk);
            return state.setType(QueryTypes.and).setSK(endingSk.composites).setType(QueryTypes.between).setSK(startingSk.composites).filterProperties(FilterOperationNames.lte, endingSk.composites);
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: ["go", "params"]
      },
      begins: {
        name: "begins",
        action(entity, state, facets = {}) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            return state.setType(QueryTypes.begins).ifSK((state2) => {
              const attributes2 = state2.getCompositeAttributes();
              state2.setSK(state2.buildQueryComposites(facets, attributes2.sk));
            });
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: ["go", "params"]
      },
      gt: {
        name: "gt",
        action(entity, state, facets = {}) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            return state.setType(QueryTypes.gt).ifSK((state2) => {
              const { pk, sk } = state2.getCompositeAttributes();
              const { composites } = state2.identifyCompositeAttributes(facets, sk, pk);
              state2.setSK(composites);
              state2.filterProperties(FilterOperationNames.gt, {
                ...composites
              });
            });
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: ["go", "params"]
      },
      gte: {
        name: "gte",
        action(entity, state, facets = {}) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            return state.setType(QueryTypes.gte).ifSK((state2) => {
              const attributes2 = state2.getCompositeAttributes();
              state2.setSK(state2.buildQueryComposites(facets, attributes2.sk));
            });
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: ["go", "params"]
      },
      lt: {
        name: "lt",
        action(entity, state, facets = {}) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            return state.setType(QueryTypes.lt).ifSK((state2) => {
              const { pk, sk } = state2.getCompositeAttributes();
              const { composites } = state2.identifyCompositeAttributes(facets, sk, pk);
              state2.setSK(composites);
            });
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: ["go", "params"]
      },
      lte: {
        name: "lte",
        action(entity, state, facets = {}) {
          if (state.getError() !== null) {
            return state;
          }
          try {
            return state.setType(QueryTypes.lte).ifSK((state2) => {
              const { pk, sk } = state2.getCompositeAttributes();
              const { composites } = state2.identifyCompositeAttributes(facets, sk, pk);
              state2.setSK(composites);
              state2.filterProperties(FilterOperationNames.lte, {
                ...composites
              });
            });
          } catch (err) {
            state.setError(err);
            return state;
          }
        },
        children: ["go", "params"]
      },
      commit: {
        name: "commit",
        action(entity, state, options) {
          if (state.getError() !== null) {
            throw state.error;
          }
          const results = clauses.params.action(entity, state, {
            ...options,
            _returnOptions: true,
            _isTransaction: true
          });
          const method = TransactionOperations[state.query.method];
          if (!method) {
            throw new Error("Invalid commit method");
          }
          return {
            [method]: results.params,
            [TransactionCommitSymbol]: () => {
              return {
                entity
              };
            }
          };
        },
        children: []
      },
      params: {
        name: "params",
        action(entity, state, options = {}) {
          if (state.getError() !== null) {
            throw state.error;
          }
          try {
            if (!v.isStringHasLength(options.table) && !v.isStringHasLength(entity.getTableName())) {
              throw new e.ElectroError(e.ErrorCodes.MissingTable, `Table name not defined. Table names must be either defined on the model, instance configuration, or as a query option.`);
            }
            const method = state.getMethod();
            const normalizedOptions = entity._normalizeExecutionOptions({
              provided: [state.getOptions(), state.query.options, options],
              context: { operation: options._isTransaction ? MethodTypes.transactWrite : void 0 }
            });
            state.applyWithOptions(normalizedOptions);
            state.applyBeforeBuildParams(normalizedOptions);
            let results;
            switch (method) {
              case MethodTypes.query: {
                results = entity._queryParams(state, normalizedOptions);
                break;
              }
              case MethodTypes.batchWrite: {
                results = entity._batchWriteParams(state, normalizedOptions);
                break;
              }
              case MethodTypes.batchGet: {
                results = entity._batchGetParams(state, normalizedOptions);
                break;
              }
              default: {
                results = entity._params(state, normalizedOptions);
                break;
              }
            }
            if (method === MethodTypes.update && results.ExpressionAttributeValues && Object.keys(results.ExpressionAttributeValues).length === 0) {
              delete results.ExpressionAttributeValues;
            }
            if (options._returnOptions) {
              results = {
                params: results,
                options: normalizedOptions
              };
            }
            state.setParams(results);
            return results;
          } catch (err) {
            throw err;
          }
        },
        children: []
      },
      go: {
        name: "go",
        action(entity, state, options = {}) {
          if (state.getError() !== null) {
            return Promise.reject(state.error);
          }
          try {
            if (entity.client === void 0) {
              throw new e.ElectroError(e.ErrorCodes.NoClientDefined, "No client defined on model");
            }
            options.terminalOperation = TerminalOperation.go;
            const paramResults = clauses.params.action(entity, state, { ...options, _returnOptions: true });
            return entity.go(state.getMethod(), paramResults.params, paramResults.options);
          } catch (err) {
            return Promise.reject(err);
          }
        },
        children: []
      }
    };
    var ChainState = class _ChainState {
      constructor({ index = "", compositeAttributes = {}, attributes: attributes2 = {}, hasSortKey = false, options = {}, parentState = null } = {}) {
        const update = new UpdateExpression({ prefix: "_u" });
        this.parentState = parentState;
        this.error = null;
        this.attributes = attributes2;
        this.query = {
          collection: "",
          index,
          type: "",
          method: "",
          facets: { ...compositeAttributes },
          update,
          updateProxy: new AttributeOperationProxy({
            builder: update,
            attributes: attributes2,
            operations: UpdateOperations
          }),
          put: {
            data: {}
          },
          upsert: {
            data: {},
            indexKey: null,
            addData(operation = UpsertOperations.set, data = {}) {
              for (const name of Object.keys(data)) {
                const value = data[name];
                this.data[name] = {
                  operation,
                  value
                };
              }
            },
            getData(operationFilter) {
              const results = {};
              for (const name in this.data) {
                const { operation, value } = this.data[name];
                if (!operationFilter || operationFilter === operation) {
                  results[name] = value;
                }
              }
              return results;
            }
          },
          keys: {
            provided: [],
            pk: {},
            sk: []
          },
          filter: {
            [ExpressionTypes.ConditionExpression]: new FilterExpression(),
            [ExpressionTypes.FilterExpression]: new FilterExpression()
          },
          options
        };
        this.subStates = [];
        this.hasSortKey = hasSortKey;
        this.prev = null;
        this.self = null;
        this.params = null;
        this.applyAfterOptions = [];
        this.beforeBuildParamsOperations = [];
        this.beforeBuildParamsHasRan = false;
      }
      getParams() {
        return this.params;
      }
      setParams(params) {
        if (params) {
          this.params = params;
        }
      }
      init(entity, allClauses, currentClause) {
        let current = {};
        for (let child of currentClause.children) {
          const name = allClauses[child].name;
          current[name] = (...args) => {
            this.prev = this.self;
            this.self = child;
            let results = allClauses[child].action(entity, this, ...args);
            if (allClauses[child].children.length) {
              return this.init(entity, allClauses, allClauses[child]);
            } else {
              return results;
            }
          };
        }
        return current;
      }
      getMethod() {
        return this.query.method;
      }
      getOptions() {
        return this.query.options;
      }
      addOption(key, value) {
        this.query.options[key] = value;
        return this;
      }
      _appendProvided(type, attributes2) {
        const newAttributes = Object.keys(attributes2).map((attribute) => {
          return {
            type,
            attribute
          };
        });
        return u.getUnique(this.query.keys.provided, newAttributes);
      }
      setPK(attributes2) {
        this.query.keys.pk = attributes2;
        this.query.keys.provided = this._appendProvided(KeyTypes.pk, attributes2);
        return this;
      }
      ifSK(cb) {
        if (this.hasSortKey) {
          cb(this);
        }
        return this;
      }
      getCompositeAttributes() {
        return this.query.facets;
      }
      buildQueryComposites(provided, definition) {
        return definition.map((name) => [name, provided[name]]).reduce(
          (result, [name, value]) => {
            if (value !== void 0) {
              result[name] = value;
            }
            return result;
          },
          {}
        );
      }
      identifyCompositeAttributes(provided, defined, skip) {
        const composites = {};
        const unused = {};
        const definedSet = new Set(defined || []);
        const skipSet = new Set(skip || []);
        for (const key of Object.keys(provided)) {
          const value = provided[key];
          if (definedSet.has(key)) {
            composites[key] = value;
          } else if (skipSet.has(key)) {
            continue;
          } else {
            unused[key] = value;
          }
        }
        return {
          composites,
          unused
        };
      }
      applyFilter(operation, name, ...values) {
        if (FilterOperationNames[operation] !== void 0 & name !== void 0 && values.length > 0) {
          const attribute = this.attributes[name];
          if (attribute !== void 0) {
            this.unsafeApplyFilter(operation, attribute.field, ...values);
          }
        }
        return this;
      }
      applyCondition(operation, name, ...values) {
        if (FilterOperationNames[operation] !== void 0 && name !== void 0 && values.length > 0) {
          const attribute = this.attributes[name];
          if (attribute !== void 0) {
            const filter = this.query.filter[ExpressionTypes.ConditionExpression];
            filter.unsafeSet(operation, attribute.field, ...values);
          }
        }
        return this;
      }
      unsafeApplyFilter(operation, name, ...values) {
        if (FilterOperationNames[operation] !== void 0 & name !== void 0 && values.length > 0) {
          const filter = this.query.filter[ExpressionTypes.FilterExpression];
          filter.unsafeSet(operation, name, ...values);
        }
        return this;
      }
      filterProperties(operation, obj = {}) {
        for (const property in obj) {
          const value = obj[property];
          if (value !== void 0) {
            this.applyFilter(operation, property, value);
          }
        }
        return this;
      }
      setSK(attributes2, type = this.query.type) {
        if (this.hasSortKey) {
          this.query.keys.sk.push({
            type,
            facets: attributes2
          });
          this.query.keys.provided = this._appendProvided(KeyTypes.sk, attributes2);
        }
        return this;
      }
      setType(type) {
        if (!QueryTypes[type]) {
          throw new Error(`Invalid query type: "${type}"`);
        }
        this.query.type = QueryTypes[type];
        return this;
      }
      setMethod(method) {
        if (!MethodTypes[method]) {
          throw new Error(`Invalid method type: "${method}"`);
        }
        this.query.method = MethodTypes[method];
        return this;
      }
      setCollection(collection) {
        this.query.collection = collection;
        return this;
      }
      createSubState() {
        let subState = new _ChainState({
          parentState: this,
          index: this.query.index,
          attributes: this.attributes,
          hasSortKey: this.hasSortKey,
          options: this.query.options,
          compositeAttributes: this.query.facets
        });
        this.subStates.push(subState);
        return subState;
      }
      getError() {
        return this.error;
      }
      setError(err) {
        this.error = err;
        if (this.parentState) {
          this.parentState.setError(err);
        }
      }
      applyUpsert(operation = UpsertOperations.set, data = {}) {
        this.query.upsert.addData(operation, data);
        return this;
      }
      applyPut(data = {}) {
        this.query.put.data = { ...this.query.put.data, ...data };
        return this;
      }
      whenOptions(fn) {
        if (v.isFunction(fn)) {
          this.applyAfterOptions.push((options) => {
            fn({ options, state: this });
          });
        }
      }
      applyWithOptions(options = {}) {
        this.applyAfterOptions.forEach((fn) => fn(options));
      }
      beforeBuildParams(fn) {
        if (v.isFunction(fn)) {
          this.beforeBuildParamsOperations.push((options) => {
            fn({ options, state: this });
          });
        }
      }
      applyBeforeBuildParams(options = {}) {
        if (!this.beforeBuildParamsHasRan) {
          this.beforeBuildParamsHasRan = true;
          this.beforeBuildParamsOperations.forEach((fn) => fn(options));
        }
      }
    };
    module2.exports = {
      clauses,
      ChainState
    };
  }
});

// node_modules/electrodb/src/events.js
var require_events = __commonJS({
  "node_modules/electrodb/src/events.js"(exports, module2) {
    "use strict";
    var e = require_errors();
    var v = require_validations();
    var EventManager = class _EventManager {
      static createSafeListener(listener) {
        if (listener === void 0) {
          return void 0;
        }
        if (!v.isFunction(listener)) {
          throw new e.ElectroError(e.ErrorCodes.InvalidListenerProvided, `Provided listener is not of type 'function'`);
        } else {
          return (...params) => {
            try {
              listener(...params);
            } catch (err) {
              console.error(`Error invoking user supplied listener`, err);
            }
          };
        }
      }
      static normalizeListeners(listeners = []) {
        if (!Array.isArray(listeners)) {
          throw new e.ElectroError(e.ErrorCodes.InvalidListenerProvided, `Listeners must be provided as an array of functions`);
        }
        return listeners.map((listener) => _EventManager.createSafeListener(listener)).filter((listener) => {
          switch (typeof listener) {
            case "function":
              return true;
            case "undefined":
              return false;
            default:
              throw new e.ElectroError(e.ErrorCodes.InvalidListenerProvided, `Provided listener is not of type 'function`);
          }
        });
      }
      constructor({ listeners = [] } = {}) {
        this.listeners = _EventManager.normalizeListeners(listeners);
      }
      add(listeners = []) {
        if (!Array.isArray(listeners)) {
          listeners = [listeners];
        }
        this.listeners = this.listeners.concat(
          _EventManager.normalizeListeners(listeners)
        );
      }
      trigger(event, adHocListeners = []) {
        const allListeners = [
          ...this.listeners,
          ..._EventManager.normalizeListeners(adHocListeners)
        ];
        for (const listener of allListeners) {
          listener(event);
        }
      }
    };
    module2.exports = {
      EventManager
    };
  }
});

// node_modules/electrodb/src/client.js
var require_client = __commonJS({
  "node_modules/electrodb/src/client.js"(exports, module2) {
    "use strict";
    var lib = require("@aws-sdk/lib-dynamodb");
    var util = require("@aws-sdk/lib-dynamodb/dist-cjs/commands/utils");
    var { isFunction } = require_validations();
    var { ElectroError, ErrorCodes } = require_errors();
    var DocumentClientVersions = {
      v2: "v2",
      v3: "v3",
      electro: "electro"
    };
    var unmarshallOutput = util.unmarshallOutput || ((val2) => val2);
    var v3Methods = ["send"];
    var v2Methods = ["get", "put", "update", "delete", "batchWrite", "batchGet", "scan", "query", "createSet", "transactWrite", "transactGet"];
    var supportedClientVersions = {
      [DocumentClientVersions.v2]: v2Methods,
      [DocumentClientVersions.v3]: v3Methods
    };
    var DocumentClientV2Wrapper = class _DocumentClientV2Wrapper {
      static init(client) {
        return new _DocumentClientV2Wrapper(client, lib);
      }
      constructor(client, lib2) {
        this.client = client;
        this.lib = lib2;
        this.__v = "v2";
      }
      get(params) {
        return this.client.get(params);
      }
      put(params) {
        return this.client.put(params);
      }
      update(params) {
        return this.client.update(params);
      }
      delete(params) {
        return this.client.delete(params);
      }
      batchWrite(params) {
        return this.client.batchWrite(params);
      }
      batchGet(params) {
        return this.client.batchGet(params);
      }
      scan(params) {
        return this.client.scan(params);
      }
      query(params) {
        return this.client.query(params);
      }
      _transact(transactionRequest) {
        let cancellationReasons;
        transactionRequest.on("extractError", (response) => {
          try {
            cancellationReasons = JSON.parse(response.httpResponse.body.toString()).CancellationReasons;
          } catch (err) {
          }
        });
        return {
          async promise() {
            return transactionRequest.promise().catch((err) => {
              if (err) {
                if (Array.isArray(cancellationReasons)) {
                  return {
                    canceled: cancellationReasons.map((reason) => {
                      if (reason.Item) {
                        return unmarshallOutput(reason, [{ key: "Item" }]);
                      }
                      return reason;
                    })
                  };
                }
                throw err;
              }
            });
          }
        };
      }
      transactWrite(params) {
        const transactionRequest = this.client.transactWrite(params);
        return this._transact(transactionRequest);
      }
      transactGet(params) {
        const transactionRequest = this.client.transactGet(params);
        return this._transact(transactionRequest);
      }
      createSet(value, ...rest) {
        if (Array.isArray(value)) {
          return this.client.createSet(value, ...rest);
        } else {
          return this.client.createSet([value], ...rest);
        }
      }
    };
    var DocumentClientV3Wrapper = class _DocumentClientV3Wrapper {
      static init(client) {
        return new _DocumentClientV3Wrapper(client, lib);
      }
      constructor(client, lib2) {
        this.client = client;
        this.lib = lib2;
        this.__v = "v3";
      }
      promiseWrap(fn) {
        return {
          promise: async () => {
            return fn();
          }
        };
      }
      get(params) {
        return this.promiseWrap(() => {
          const command = new this.lib.GetCommand(params);
          return this.client.send(command);
        });
      }
      put(params) {
        return this.promiseWrap(() => {
          const command = new this.lib.PutCommand(params);
          return this.client.send(command);
        });
      }
      update(params) {
        return this.promiseWrap(() => {
          const command = new this.lib.UpdateCommand(params);
          return this.client.send(command);
        });
      }
      delete(params) {
        return this.promiseWrap(async () => {
          const command = new this.lib.DeleteCommand(params);
          return this.client.send(command);
        });
      }
      batchWrite(params) {
        return this.promiseWrap(async () => {
          const command = new this.lib.BatchWriteCommand(params);
          return this.client.send(command);
        });
      }
      batchGet(params) {
        return this.promiseWrap(async () => {
          const command = new this.lib.BatchGetCommand(params);
          return this.client.send(command);
        });
      }
      scan(params) {
        return this.promiseWrap(async () => {
          const command = new this.lib.ScanCommand(params);
          return this.client.send(command);
        });
      }
      query(params) {
        return this.promiseWrap(async () => {
          const command = new this.lib.QueryCommand(params);
          return this.client.send(command);
        });
      }
      transactWrite(params) {
        return this.promiseWrap(async () => {
          const command = new this.lib.TransactWriteCommand(params);
          return this.client.send(command).then((result) => {
            return result;
          }).catch((err) => {
            if (err.CancellationReasons) {
              return {
                canceled: err.CancellationReasons.map((reason) => {
                  if (reason.Item) {
                    return unmarshallOutput(reason, [{ key: "Item" }]);
                  }
                  return reason;
                })
              };
            }
            throw err;
          });
        });
      }
      transactGet(params) {
        return this.promiseWrap(async () => {
          const command = new this.lib.TransactGetCommand(params);
          return this.client.send(command).then((result) => {
            return result;
          }).catch((err) => {
            if (err.CancellationReasons) {
              return {
                canceled: err.CancellationReasons.map((reason) => {
                  if (reason.Item) {
                    return unmarshallOutput(reason, [{ key: "Item" }]);
                  }
                  return reason;
                })
              };
            }
            throw err;
          });
        });
      }
      createSet(value) {
        if (Array.isArray(value)) {
          return new Set(value);
        } else {
          return /* @__PURE__ */ new Set([value]);
        }
      }
    };
    function identifyClientVersion(client = {}) {
      if (client instanceof DocumentClientV3Wrapper || client instanceof DocumentClientV2Wrapper) {
        return DocumentClientVersions.electro;
      }
      for (const [version, methods] of Object.entries(supportedClientVersions)) {
        const hasMethods = methods.every((method) => {
          return method in client && isFunction(client[method]);
        });
        if (hasMethods) {
          return version;
        }
      }
    }
    function normalizeClient(client) {
      if (client === void 0)
        return client;
      const version = identifyClientVersion(client);
      switch (version) {
        case DocumentClientVersions.v3:
          return DocumentClientV3Wrapper.init(client);
        case DocumentClientVersions.v2:
          return DocumentClientV2Wrapper.init(client);
        case DocumentClientVersions.electro:
          return client;
        default:
          throw new ElectroError(ErrorCodes.InvalidClientProvided, "Invalid DynamoDB Document Client provided. ElectroDB supports the v2 and v3 DynamoDB Document Clients from the aws-sdk");
      }
    }
    function normalizeConfig(config = {}) {
      return {
        ...config,
        client: normalizeClient(config.client)
      };
    }
    module2.exports = {
      util,
      v2Methods,
      v3Methods,
      normalizeClient,
      normalizeConfig,
      identifyClientVersion,
      DocumentClientVersions,
      supportedClientVersions,
      DocumentClientV3Wrapper,
      DocumentClientV2Wrapper
    };
  }
});

// node_modules/electrodb/src/entity.js
var require_entity = __commonJS({
  "node_modules/electrodb/src/entity.js"(exports, module2) {
    "use strict";
    var { Schema } = require_schema();
    var {
      AllPages,
      KeyCasing,
      TableIndex,
      FormatToReturnValues,
      ReturnValues,
      EntityVersions,
      ItemOperations,
      UnprocessedTypes,
      Pager,
      ElectroInstance,
      KeyTypes,
      QueryTypes,
      MethodTypes,
      Comparisons,
      ExpressionTypes,
      ModelVersions,
      ElectroInstanceTypes,
      MaxBatchItems,
      TerminalOperation,
      ResultOrderOption,
      ResultOrderParam,
      IndexTypes,
      PartialComparisons,
      MethodTypeTranslation,
      TransactionCommitSymbol,
      CastKeyOptions,
      UpsertOperations
    } = require_types();
    var { FilterFactory } = require_filters();
    var { FilterOperations } = require_operations();
    var { WhereFactory } = require_where();
    var { clauses, ChainState } = require_clauses();
    var { EventManager } = require_events();
    var validations = require_validations();
    var c = require_client();
    var u = require_util();
    var e = require_errors();
    var v = require_validations();
    var Entity2 = class {
      constructor(model, config = {}) {
        config = c.normalizeConfig(config);
        this.eventManager = new EventManager({
          listeners: config.listeners
        });
        this.eventManager.add(config.logger);
        this._validateModel(model);
        this.version = EntityVersions.v1;
        this.config = config;
        this.client = config.client;
        this.model = this._parseModel(model, config);
        this.config.table = config.table || model.table;
        this._filterBuilder = new FilterFactory(this.model.schema.attributes, FilterOperations);
        this._whereBuilder = new WhereFactory(this.model.schema.attributes, FilterOperations);
        this._clausesWithFilters = this._filterBuilder.injectFilterClauses(clauses, this.model.filters);
        this._clausesWithFilters = this._whereBuilder.injectWhereClauses(this._clausesWithFilters);
        this.query = {};
        this.conversions = {
          fromComposite: {
            toKeys: (composite, options = {}) => this._fromCompositeToKeys({ provided: composite }, options),
            toCursor: (composite) => this._fromCompositeToCursor({ provided: composite }, { strict: "all" })
          },
          fromKeys: {
            toCursor: (keys) => this._fromKeysToCursor({ provided: keys }, {}),
            toComposite: (keys) => this._fromKeysToComposite({ provided: keys })
          },
          fromCursor: {
            toKeys: (cursor) => this._fromCursorToKeys({ provided: cursor }),
            toComposite: (cursor) => this._fromCursorToComposite({ provided: cursor })
          },
          byAccessPattern: {}
        };
        for (let accessPattern in this.model.indexes) {
          let index = this.model.indexes[accessPattern].index;
          this.query[accessPattern] = (...values) => {
            const options = {
              indexType: this.model.indexes[accessPattern].type || IndexTypes.isolated
            };
            return this._makeChain(index, this._clausesWithFilters, clauses.index, options).query(...values);
          };
          this.conversions.byAccessPattern[accessPattern] = {
            fromKeys: {
              toCursor: (keys) => this._fromKeysToCursorByIndex({ indexName: index, provided: keys }),
              toComposite: (keys) => this._fromKeysToCompositeByIndex({ indexName: index, provided: keys })
            },
            fromCursor: {
              toKeys: (cursor) => this._fromCursorToKeysByIndex({ indexName: index, provided: cursor }),
              toComposite: (cursor) => this._fromCursorToCompositeByIndex({ indexName: index, provided: cursor })
            },
            fromComposite: {
              toCursor: (composite) => this._fromCompositeToCursorByIndex({ indexName: index, provided: composite }, { strict: "all" }),
              toKeys: (composite, options = {}) => this._fromCompositeToKeysByIndex({ indexName: index, provided: composite }, options)
            }
          };
        }
        this.config.identifiers = config.identifiers || {};
        this.identifiers = {
          entity: this.config.identifiers.entity || "__edb_e__",
          version: this.config.identifiers.version || "__edb_v__"
        };
        this._instance = ElectroInstance.entity;
        this._instanceType = ElectroInstanceTypes.entity;
        this.schema = model;
      }
      get scan() {
        return this._makeChain(TableIndex, this._clausesWithFilters, clauses.index, { _isPagination: true }).scan();
      }
      setIdentifier(type = "", identifier = "") {
        if (!this.identifiers[type]) {
          throw new e.ElectroError(e.ErrorCodes.InvalidIdentifier, `Invalid identifier type: "${type}". Valid identifiers include: ${u.commaSeparatedString(Object.keys(this.identifiers))}`);
        } else {
          this.identifiers[type] = identifier;
        }
      }
      getName() {
        return this.model.entity;
      }
      getVersion() {
        return this.model.version;
      }
      // ownsItem(item) {
      // 	return (
      // 		item &&
      // 		this.getName() === item[this.identifiers.entity] &&
      // 		this.getVersion() === item[this.identifiers.version] &&
      // 		validations.isStringHasLength(item[this.identifiers.entity]) &&
      // 		validations.isStringHasLength(item[this.identifiers.version])
      // 	) || !!this.ownsKeys(item)
      // }
      // ownsKeys({keys = {}}) {
      // 	let {pk, sk} = this.model.prefixes[TableIndex];
      // 	let hasSK = this.model.lookup.indexHasSortKeys[TableIndex];
      // 	let pkMatch = typeof keys[pk.field] === "string" && keys[pk.field].startsWith(pk.prefix);
      // 	let skMatch = pkMatch && !hasSK;
      // 	if (pkMatch && hasSK) {
      // 		skMatch = typeof keys[sk.field] === "string" && keys[sk.field].startsWith(sk.prefix);
      // 	}
      //
      // 	return (pkMatch && skMatch &&
      // 		this._formatKeysToItem(TableIndex, key) !== null);
      // }
      // ownsCursor({ cursor }) {
      // 	if (typeof cursor === 'string') {
      // 		cursor = u.cursorFormatter.deserialize(cursor);
      // 	}
      // 	return this.ownsKeys({ keys: cursor });
      // }
      ownsItem(item) {
        return item && this.getName() === item[this.identifiers.entity] && this.getVersion() === item[this.identifiers.version] && validations.isStringHasLength(item[this.identifiers.entity]) && validations.isStringHasLength(item[this.identifiers.version]);
      }
      _attributesIncludeKeys(attributes2 = []) {
        let { pk, sk } = this.model.prefixes[TableIndex];
        let pkFound = false;
        let skFound = false;
        for (let i = 0; i < attributes2.length; i++) {
          const attribute = attributes2[i];
          if (attribute === sk.field) {
            skFound = true;
          }
          if (attribute === pk.field) {
            skFound = true;
          }
          if (pkFound && skFound) {
            return true;
          }
        }
        return false;
      }
      ownsKeys(key = {}) {
        let { pk, sk } = this.model.prefixes[TableIndex];
        let hasSK = this.model.lookup.indexHasSortKeys[TableIndex];
        let pkMatch = typeof key[pk.field] === "string" && key[pk.field].startsWith(pk.prefix);
        let skMatch = pkMatch && !hasSK;
        if (pkMatch && hasSK) {
          skMatch = typeof key[sk.field] === "string" && key[sk.field].startsWith(sk.prefix);
        }
        return pkMatch && skMatch && this._formatKeysToItem(TableIndex, key) !== null;
      }
      ownsCursor(cursor) {
        if (typeof cursor === "string") {
          cursor = u.cursorFormatter.deserialize(cursor);
        }
        return this.ownsKeys(cursor);
      }
      serializeCursor(key) {
        return u.cursorFormatter.serialize(key);
      }
      deserializeCursor(cursor) {
        return u.cursorFormatter.deserialize(cursor);
      }
      /** @depricated pagers no longer exist, use the new cursor api */
      ownsPager(pager, index = TableIndex) {
        if (pager === null) {
          return false;
        }
        let tableIndexFacets = this.model.facets.byIndex[index];
        let indexFacets = this.model.facets.byIndex[index];
        if (tableIndexFacets === void 0 || indexFacets === void 0) {
          return false;
        }
        let matchesTableIndex = tableIndexFacets.all.every((facet) => {
          return pager[facet.name] !== void 0;
        });
        if (!matchesTableIndex) {
          return false;
        }
        return indexFacets.all.every((facet) => {
          return pager[facet.name] !== void 0;
        });
      }
      match(facets = {}) {
        const options = { _isPagination: true };
        const match = this._findBestIndexKeyMatch(facets);
        if (match.shouldScan) {
          return this._makeChain(TableIndex, this._clausesWithFilters, clauses.index, options).scan().filter((attr) => {
            let eqFilters = [];
            for (let facet of Object.keys(facets)) {
              if (attr[facet] !== void 0 && facets[facet] !== void 0) {
                eqFilters.push(attr[facet].eq(facets[facet]));
              }
            }
            return eqFilters.join(" AND ");
          });
        } else {
          return this._makeChain(match.index, this._clausesWithFilters, clauses.index, options).query(facets).filter((attr) => {
            let eqFilters = [];
            for (let facet of Object.keys(facets)) {
              if (attr[facet] !== void 0 && facets[facet] !== void 0) {
                eqFilters.push(attr[facet].eq(facets[facet]));
              }
            }
            return eqFilters.join(" AND ");
          });
        }
      }
      find(facets = {}) {
        const options = { _isPagination: true };
        const match = this._findBestIndexKeyMatch(facets);
        if (match.shouldScan) {
          return this._makeChain(TableIndex, this._clausesWithFilters, clauses.index, options).scan();
        } else {
          return this._makeChain(match.index, this._clausesWithFilters, clauses.index, options).query(facets);
        }
      }
      collection(collection = "", clauses2 = {}, facets = {}, options = {}) {
        const chainOptions = {
          ...options,
          _isCollectionQuery: true
        };
        let index = this.model.translations.collections.fromCollectionToIndex[collection];
        if (index === void 0) {
          throw new Error(`Invalid collection: ${collection}`);
        }
        const chain = this._makeChain(index, clauses2, clauses2.index, chainOptions);
        if (options.indexType === IndexTypes.clustered) {
          return chain.clusteredCollection(
            collection,
            facets
          );
        } else {
          return chain.collection(
            collection,
            facets
          );
        }
      }
      _validateModel(model) {
        return validations.model(model);
      }
      check(compositeAttributes = {}) {
        return this._makeChain(TableIndex, this._clausesWithFilters, clauses.index).check(compositeAttributes);
      }
      get(facets = {}) {
        let index = TableIndex;
        if (Array.isArray(facets)) {
          return this._makeChain(index, this._clausesWithFilters, clauses.index).batchGet(facets);
        } else {
          return this._makeChain(index, this._clausesWithFilters, clauses.index).get(facets);
        }
      }
      delete(facets = {}) {
        let index = TableIndex;
        if (Array.isArray(facets)) {
          return this._makeChain(index, this._clausesWithFilters, clauses.index).batchDelete(facets);
        } else {
          return this._makeChain(index, this._clausesWithFilters, clauses.index).delete(facets);
        }
      }
      put(attributes2 = {}) {
        let index = TableIndex;
        if (Array.isArray(attributes2)) {
          return this._makeChain(index, this._clausesWithFilters, clauses.index).batchPut(attributes2);
        } else {
          return this._makeChain(index, this._clausesWithFilters, clauses.index).put(attributes2);
        }
      }
      upsert(attributes2 = {}) {
        let index = TableIndex;
        return this._makeChain(index, this._clausesWithFilters, clauses.index).upsert(attributes2);
      }
      create(attributes2 = {}) {
        let index = TableIndex;
        let options = {};
        return this._makeChain(index, this._clausesWithFilters, clauses.index, options).create(attributes2);
      }
      update(facets = {}) {
        let index = TableIndex;
        return this._makeChain(index, this._clausesWithFilters, clauses.index).update(facets);
      }
      patch(facets = {}) {
        let index = TableIndex;
        let options = {};
        return this._makeChain(index, this._clausesWithFilters, clauses.index, options).patch(facets);
      }
      remove(facets = {}) {
        let index = TableIndex;
        let options = {};
        return this._makeChain(index, this._clausesWithFilters, clauses.index, options).remove(facets);
      }
      async transactWrite(parameters, config) {
        let response = await this._exec(MethodTypes.transactWrite, parameters, config);
        return response;
      }
      async transactGet(parameters, config) {
        let response = await this._exec(MethodTypes.transactGet, parameters, config);
        return response;
      }
      async go(method, parameters = {}, config = {}) {
        let stackTrace;
        if (!config.originalErr) {
          stackTrace = new e.ElectroError(e.ErrorCodes.AWSError);
        }
        try {
          switch (method) {
            case MethodTypes.batchWrite:
              return await this.executeBulkWrite(parameters, config);
            case MethodTypes.batchGet:
              return await this.executeBulkGet(parameters, config);
            case MethodTypes.query:
            case MethodTypes.scan:
              return await this.executeQuery(method, parameters, config);
            default:
              return await this.executeOperation(method, parameters, config);
          }
        } catch (err) {
          if (config.originalErr || stackTrace === void 0) {
            return Promise.reject(err);
          } else {
            if (err.__isAWSError) {
              stackTrace.message = new e.ElectroError(e.ErrorCodes.AWSError, `Error thrown by DynamoDB client: "${err.message}"`).message;
              return Promise.reject(stackTrace);
            } else if (err.isElectroError) {
              return Promise.reject(err);
            } else {
              stackTrace.message = new e.ElectroError(e.ErrorCodes.UnknownError, err.message).message;
              return Promise.reject(stackTrace);
            }
          }
        }
      }
      async _exec(method, params, config = {}) {
        const notifyQuery = () => {
          this.eventManager.trigger({
            type: "query",
            method,
            params,
            config
          }, config.listeners);
        };
        const notifyResults = (results, success) => {
          this.eventManager.trigger({
            type: "results",
            method,
            config,
            success,
            results
          }, config.listeners);
        };
        const dynamoDBMethod = MethodTypeTranslation[method];
        return this.client[dynamoDBMethod](params).promise().then((results) => {
          notifyQuery();
          notifyResults(results, true);
          return results;
        }).catch((err) => {
          notifyQuery();
          notifyResults(err, false);
          err.__isAWSError = true;
          throw err;
        });
      }
      async executeBulkWrite(parameters, config) {
        if (!Array.isArray(parameters)) {
          parameters = [parameters];
        }
        let results = [];
        let concurrent = this._normalizeConcurrencyValue(config.concurrent);
        let concurrentOperations = u.batchItems(parameters, concurrent);
        for (let operation of concurrentOperations) {
          await Promise.all(operation.map(async (params) => {
            let response = await this._exec(MethodTypes.batchWrite, params, config);
            if (validations.isFunction(config.parse)) {
              let parsed = config.parse(config, response);
              if (parsed) {
                results.push(parsed);
              }
            } else {
              let { unprocessed } = this.formatBulkWriteResponse(response, config);
              for (let u2 of unprocessed) {
                results.push(u2);
              }
            }
          }));
        }
        return { unprocessed: results };
      }
      _createNewBatchGetOrderMaintainer(config = {}) {
        const pkName = this.model.translations.keys[TableIndex].pk;
        const skName = this.model.translations.keys[TableIndex].sk;
        const enabled = !!config.preserveBatchOrder;
        const table = this.config.table;
        const keyFormatter = (record = {}) => {
          const pk = record[pkName];
          const sk = record[skName];
          return `${pk}${sk}`;
        };
        return new u.BatchGetOrderMaintainer({
          table,
          enabled,
          keyFormatter
        });
      }
      async executeBulkGet(parameters, config) {
        if (!Array.isArray(parameters)) {
          parameters = [parameters];
        }
        const orderMaintainer = this._createNewBatchGetOrderMaintainer(config);
        orderMaintainer.defineOrder(parameters);
        let concurrent = this._normalizeConcurrencyValue(config.concurrent);
        let concurrentOperations = u.batchItems(parameters, concurrent);
        let resultsAll = config.preserveBatchOrder ? new Array(orderMaintainer.getSize()).fill(null) : [];
        let unprocessedAll = [];
        for (let operation of concurrentOperations) {
          await Promise.all(operation.map(async (params) => {
            let response = await this._exec(MethodTypes.batchGet, params, config);
            if (validations.isFunction(config.parse)) {
              resultsAll.push(config.parse(config, response));
            } else {
              this.applyBulkGetResponseFormatting({
                orderMaintainer,
                resultsAll,
                unprocessedAll,
                response,
                config
              });
            }
          }));
        }
        return { data: resultsAll, unprocessed: unprocessedAll };
      }
      async hydrate(index, keys = [], config) {
        const items = [];
        const validKeys = [];
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const item = this._formatKeysToItem(index, key);
          if (item !== null) {
            items.push(item);
            validKeys.push(key);
          }
        }
        const results = await this.get(items).go({
          ...config,
          hydrate: false,
          parse: void 0,
          hydrator: void 0,
          _isCollectionQuery: false,
          preserveBatchOrder: true,
          ignoreOwnership: config._providedIgnoreOwnership
        });
        const unprocessed = [];
        const data = [];
        for (let i = 0; i < results.data.length; i++) {
          const key = validKeys[i];
          const item = results.data[i];
          if (!item) {
            if (key) {
              unprocessed.push(key);
            }
          } else {
            data.push(item);
          }
        }
        return {
          unprocessed,
          data
        };
      }
      async executeQuery(method, parameters, config = {}) {
        let results = config._isCollectionQuery ? {} : [];
        let ExclusiveStartKey = this._formatExclusiveStartKey({ config, indexName: parameters.IndexName });
        if (ExclusiveStartKey === null) {
          ExclusiveStartKey = void 0;
        }
        let pages = this._normalizePagesValue(config.pages);
        let max = this._normalizeLimitValue(config.limit);
        let iterations = 0;
        let count = 0;
        let hydratedUnprocessed = [];
        const shouldHydrate = config.hydrate && method === MethodTypes.query;
        do {
          let limit = max === void 0 ? parameters.Limit : max - count;
          let response = await this._exec(method, { ExclusiveStartKey, ...parameters, Limit: limit }, config);
          ExclusiveStartKey = response.LastEvaluatedKey;
          response = this.formatResponse(response, parameters.IndexName, {
            ...config,
            includeKeys: shouldHydrate || config.includeKeys,
            ignoreOwnership: shouldHydrate || config.ignoreOwnership
          });
          if (config.raw) {
            return response;
          } else if (config._isCollectionQuery) {
            for (const entity in response.data) {
              if (max) {
                count += response.data[entity].length;
              }
              let items = response.data[entity];
              if (shouldHydrate && items.length) {
                const hydrated = await config.hydrator(entity, parameters.IndexName, items, config);
                items = hydrated.data;
                hydratedUnprocessed = hydratedUnprocessed.concat(hydrated.unprocessed);
              }
              results[entity] = results[entity] || [];
              results[entity] = [...results[entity], ...items];
            }
          } else if (Array.isArray(response.data)) {
            if (max) {
              count += response.data.length;
            }
            let items = response.data;
            if (shouldHydrate) {
              const hydrated = await this.hydrate(parameters.IndexName, items, config);
              items = hydrated.data;
              hydratedUnprocessed = hydratedUnprocessed.concat(hydrated.unprocessed);
            }
            results = [...results, ...items];
          } else {
            return response;
          }
          iterations++;
        } while (ExclusiveStartKey && (pages === AllPages || iterations < pages) && (max === void 0 || count < max));
        const cursor = this._formatReturnPager(config, ExclusiveStartKey);
        if (shouldHydrate) {
          return {
            cursor,
            data: results,
            unprocessed: hydratedUnprocessed
          };
        }
        return { data: results, cursor };
      }
      async executeOperation(method, parameters, config) {
        let response = await this._exec(method, parameters, config);
        switch (parameters.ReturnValues) {
          case FormatToReturnValues.none:
            return { data: null };
          case FormatToReturnValues.all_new:
          case FormatToReturnValues.all_old:
          case FormatToReturnValues.updated_new:
          case FormatToReturnValues.updated_old:
            return this.formatResponse(response, TableIndex, config);
          case FormatToReturnValues.default:
          default:
            return this._formatDefaultResponse(method, parameters.IndexName, parameters, config, response);
        }
      }
      _formatDefaultResponse(method, index, parameters, config = {}, response) {
        switch (method) {
          case MethodTypes.put:
          case MethodTypes.create:
            return this.formatResponse(parameters, index, config);
          case MethodTypes.update:
          case MethodTypes.patch:
          case MethodTypes.delete:
          case MethodTypes.remove:
          case MethodTypes.upsert:
            return this.formatResponse(response, index, { ...config, _objectOnEmpty: true });
          default:
            return this.formatResponse(response, index, config);
        }
      }
      cleanseRetrievedData(item = {}, options = {}) {
        let { includeKeys } = options;
        let data = {};
        let names = this.model.schema.translationForRetrieval;
        for (let [attr, value] of Object.entries(item)) {
          let name = names[attr];
          if (name) {
            data[name] = value;
          } else if (includeKeys) {
            data[attr] = value;
          }
        }
        return data;
      }
      formatBulkWriteResponse(response = {}, config = {}) {
        if (!response || !response.UnprocessedItems) {
          return response;
        }
        const table = config.table || this.getTableName();
        const index = TableIndex;
        let unprocessed = response.UnprocessedItems[table];
        if (Array.isArray(unprocessed) && unprocessed.length) {
          unprocessed = unprocessed.map((request) => {
            if (request.PutRequest) {
              return this.formatResponse(request.PutRequest, index, config).data;
            } else if (request.DeleteRequest) {
              if (config.unprocessed === UnprocessedTypes.raw) {
                return request.DeleteRequest.Key;
              } else {
                return this._formatKeysToItem(index, request.DeleteRequest.Key);
              }
            } else {
              throw new Error("Unknown response format");
            }
          });
        } else {
          unprocessed = [];
        }
        return { unprocessed };
      }
      applyBulkGetResponseFormatting({
        resultsAll,
        unprocessedAll,
        orderMaintainer,
        response = {},
        config = {}
      }) {
        const table = config.table || this.getTableName();
        const index = TableIndex;
        if (!response.UnprocessedKeys || !response.Responses) {
          throw new Error("Unknown response format");
        }
        if (response.UnprocessedKeys[table] && response.UnprocessedKeys[table].Keys && Array.isArray(response.UnprocessedKeys[table].Keys)) {
          for (let value of response.UnprocessedKeys[table].Keys) {
            if (config && config.unprocessed === UnprocessedTypes.raw) {
              unprocessedAll.push(value);
            } else {
              unprocessedAll.push(
                this._formatKeysToItem(index, value)
              );
            }
          }
        }
        if (response.Responses[table] && Array.isArray(response.Responses[table])) {
          const responses = response.Responses[table];
          for (let i = 0; i < responses.length; i++) {
            const item = responses[i];
            const slot = orderMaintainer.getOrder(item);
            const formatted = this.formatResponse({ Item: item }, index, config);
            if (slot !== -1) {
              resultsAll[slot] = formatted.data;
            } else {
              resultsAll.push(formatted.data);
            }
          }
        }
      }
      formatResponse(response, index, config = {}) {
        let stackTrace;
        if (!config.originalErr) {
          stackTrace = new e.ElectroError(e.ErrorCodes.AWSError);
        }
        try {
          let results = {};
          if (validations.isFunction(config.parse)) {
            results = config.parse(config, response);
          } else if (config.raw && !config._isPagination) {
            if (response.TableName) {
              results = {};
            } else {
              results = response;
            }
          } else if (config.raw && (config._isPagination || config.lastEvaluatedKeyRaw)) {
            results = response;
          } else {
            if (response.Item) {
              if (config.ignoreOwnership && config.attributes && config.attributes.length > 0 && !this._attributesIncludeKeys(config.attributes) || (config.ignoreOwnership || config.hydrate) && this.ownsKeys(response.Item) || this.ownsItem(response.Item)) {
                results = this.model.schema.formatItemForRetrieval(response.Item, config);
                if (Object.keys(results).length === 0) {
                  results = null;
                }
              } else if (!config._objectOnEmpty) {
                results = null;
              }
            } else if (response.Items) {
              results = [];
              for (let item of response.Items) {
                if (config.ignoreOwnership && config.attributes && config.attributes.length > 0 && !this._attributesIncludeKeys(config.attributes) || (config.ignoreOwnership || config.hydrate) && this.ownsKeys(item) || this.ownsItem(item)) {
                  let record = this.model.schema.formatItemForRetrieval(item, config);
                  if (Object.keys(record).length > 0) {
                    results.push(record);
                  }
                }
              }
            } else if (response.Attributes) {
              results = this.model.schema.formatItemForRetrieval(response.Attributes, config);
              if (Object.keys(results).length === 0) {
                results = null;
              }
            } else if (config._objectOnEmpty) {
              return {
                data: {
                  ...config._includeOnResponseItem
                }
              };
            } else {
              results = null;
            }
          }
          if (config._isPagination || response.LastEvaluatedKey) {
            const nextPage = this._formatReturnPager(config, response.LastEvaluatedKey);
            return { cursor: nextPage || null, data: results };
          }
          return { data: results };
        } catch (err) {
          if (config.originalErr || stackTrace === void 0) {
            throw err;
          } else {
            stackTrace.message = err.message;
            throw stackTrace;
          }
        }
      }
      parse(item, options = {}) {
        if (item === void 0 || item === null) {
          return null;
        }
        const config = {
          ...options || {},
          ignoreOwnership: true
        };
        return this.formatResponse(item, TableIndex, config);
      }
      _fromCompositeToKeys({ provided }, options = {}) {
        if (!provided || Object.keys(provided).length === 0) {
          throw new e.ElectroError(e.ErrorCodes.InvalidConversionCompositeProvided, "Invalid conversion composite provided");
        }
        let keys = {};
        const secondaryIndexStrictMode = options.strict === "all" || options.strict === "pk" ? "pk" : "none";
        for (const { index } of Object.values(this.model.indexes)) {
          const indexKeys = this._fromCompositeToKeysByIndex({ indexName: index, provided }, {
            strict: index === TableIndex ? options.strict : secondaryIndexStrictMode
          });
          if (indexKeys) {
            keys = {
              ...keys,
              ...indexKeys
            };
          }
        }
        if (Object.keys(keys).length === 0) {
          throw new e.ElectroError(e.ErrorCodes.InvalidConversionCompositeProvided, "Invalid conversion composite provided");
        }
        return keys;
      }
      _fromCompositeToCursor({ provided }, options = {}) {
        const keys = this._fromCompositeToKeys({ provided }, options);
        if (!keys || Object.keys(keys).length === 0) {
          throw new e.ElectroError(e.ErrorCodes.InvalidConversionCompositeProvided, "Invalid conversion composite provided");
        }
        return u.cursorFormatter.serialize(keys);
      }
      _fromKeysToCursor({ provided }, options = {}) {
        if (!provided || Object.keys(provided).length === 0) {
          throw new e.ElectroError(e.ErrorCodes.InvalidConversionKeysProvided, "Invalid keys provided");
        }
        return u.cursorFormatter.serialize(provided);
      }
      _fromKeysToComposite({ provided }, options = {}) {
        if (!provided || Object.keys(provided).length === 0) {
          throw new e.ElectroError(e.ErrorCodes.InvalidConversionKeysProvided, "Provided keys could not be used to form composite attributes");
        }
        let keys = {};
        for (const { index } of Object.values(this.model.indexes)) {
          const composite = this._fromKeysToCompositeByIndex({ indexName: index, provided }, options);
          if (composite) {
            for (const attribute in composite) {
              if (keys[attribute] === void 0) {
                keys[attribute] = composite[attribute];
              }
            }
          }
        }
        if (Object.keys(keys).length === 0) {
          throw new e.ElectroError(e.ErrorCodes.InvalidConversionKeysProvided, "Provided keys could not be used to form composite attributes");
        }
        return keys;
      }
      _fromCursorToKeys({ provided }, options = {}) {
        if (typeof provided !== "string") {
          throw new e.ElectroError(e.ErrorCodes.InvalidConversionCursorProvided, "Invalid conversion cursor provided");
        }
        return u.cursorFormatter.deserialize(provided);
      }
      _fromCursorToComposite({ provided }, options = {}) {
        if (typeof provided !== "string") {
          throw new e.ElectroError(e.ErrorCodes.InvalidConversionCursorProvided, "Invalid conversion cursor provided");
        }
        const keys = this._fromCursorToKeys({ provided }, options);
        if (!keys) {
          throw new e.ElectroError(e.ErrorCodes.InvalidConversionCursorProvided, "Invalid conversion cursor provided");
        }
        return this._fromKeysToComposite({ provided: keys }, options);
      }
      _fromCompositeToCursorByIndex({ indexName = TableIndex, provided }, options = {}) {
        if (!provided || Object.keys(provided).length === 0) {
          throw new e.ElectroError(e.ErrorCodes.InvalidConversionCompositeProvided, "Invalid conversion composite provided");
        }
        const keys = this._formatSuppliedPager(indexName, provided, {
          relaxedPk: false,
          relaxedSk: false
        });
        return this._fromKeysToCursorByIndex({ indexName, provided: keys }, options);
      }
      _fromCompositeToKeysByIndex({ indexName = TableIndex, provided }, options = {}) {
        return this._formatSuppliedPager(indexName, provided, {
          relaxedPk: options.strict !== "pk" && options.strict !== "all",
          relaxedSk: options.strict !== "all"
        });
      }
      _fromCursorToKeysByIndex({ provided }, options = {}) {
        if (typeof provided !== "string" || provided.length < 1) {
          throw new e.ElectroError(e.ErrorCodes.InvalidConversionCursorProvided, "Invalid conversion cursor provided");
        }
        return u.cursorFormatter.deserialize(provided);
      }
      _fromKeysToCursorByIndex({ indexName = TableIndex, provided }, options = {}) {
        const isValidTableIndex = this._verifyKeys({ indexName: TableIndex, provided });
        const isValidIndex = this._verifyKeys({ indexName, provided });
        if (!isValidTableIndex) {
          throw new e.ElectroError(e.ErrorCodes.InvalidConversionKeysProvided, "Provided keys did not include valid properties for the primary index");
        } else if (!isValidIndex) {
          throw new e.ElectroError(e.ErrorCodes.InvalidConversionKeysProvided, `Provided keys did not include valid properties for the index "${indexName}"`);
        }
        const keys = this._trimKeysToIndex({ indexName, provided });
        if (!keys || Object.keys(keys).length === 0) {
          throw new e.ElectroError(e.ErrorCodes.InvalidConversionKeysProvided, `Provided keys not defined`);
        }
        return u.cursorFormatter.serialize(provided);
      }
      _fromKeysToCompositeByIndex({ indexName = TableIndex, provided }, options = {}) {
        let allKeys = {};
        const indexKeys = this._deconstructIndex({ index: indexName, keys: provided });
        if (!indexKeys) {
          throw new e.ElectroError(e.ErrorCodes.InvalidConversionKeysProvided, `Provided keys did not include valid properties for the index "${indexName}"`);
        }
        allKeys = {
          ...indexKeys
        };
        let tableKeys;
        if (indexName !== TableIndex) {
          tableKeys = this._deconstructIndex({ index: TableIndex, keys: provided });
        }
        if (tableKeys === null) {
          return allKeys;
        }
        allKeys = {
          ...allKeys,
          ...tableKeys
        };
        if (Object.keys(allKeys).length === 0) {
          throw new e.ElectroError(e.ErrorCodes.InvalidConversionKeysProvided, "Provided keys could not be used to form composite attributes");
        }
        return allKeys;
      }
      _fromCursorToCompositeByIndex({ indexName = TableIndex, provided }, options = {}) {
        const keys = this._fromCursorToKeysByIndex({ indexName, provided }, options);
        if (!keys || Object.keys(keys).length === 0) {
          throw new e.ElectroError(e.ErrorCodes.InvalidConversionCursorProvided, "Invalid conversion cursor provided");
        }
        return this._fromKeysToCompositeByIndex({ indexName, provided: keys }, options);
      }
      _trimKeysToIndex({ indexName = TableIndex, provided }) {
        if (!provided) {
          return null;
        }
        const pkName = this.model.translations.keys[indexName].pk;
        const skName = this.model.translations.keys[indexName].sk;
        const tablePKName = this.model.translations.keys[TableIndex].pk;
        const tableSKName = this.model.translations.keys[TableIndex].sk;
        const keys = {
          [pkName]: provided[pkName],
          [skName]: provided[skName],
          [tablePKName]: provided[tablePKName],
          [tableSKName]: provided[tableSKName]
        };
        if (!keys || Object.keys(keys).length === 0) {
          return null;
        }
        return keys;
      }
      _verifyKeys({ indexName, provided }) {
        if (!provided) {
          throw new e.ElectroError(e.ErrorCodes.InvalidConversionKeysProvided, `Provided keys not defined`);
        }
        const pkName = this.model.translations.keys[indexName].pk;
        const skName = this.model.translations.keys[indexName].sk;
        return provided[pkName] !== void 0 && (!skName || provided[skName] !== void 0);
      }
      _formatReturnPager(config, lastEvaluatedKey) {
        let page = lastEvaluatedKey || null;
        if (config.raw || config.pager === Pager.raw) {
          return page;
        }
        return config.formatCursor.serialize(page) || null;
      }
      _formatExclusiveStartKey({ config, indexName = TableIndex }) {
        let exclusiveStartKey = config.cursor;
        if (config.raw || config.pager === Pager.raw) {
          return this._trimKeysToIndex({ provided: exclusiveStartKey, indexName }) || null;
        }
        let keys;
        if (config.pager === Pager.item) {
          keys = this._fromCompositeToKeysByIndex({ indexName, provided: exclusiveStartKey });
        } else {
          keys = config.formatCursor.deserialize(exclusiveStartKey);
        }
        if (!keys) {
          return null;
        }
        return this._trimKeysToIndex({ provided: keys, indexName }) || null;
      }
      setClient(client) {
        if (client) {
          this.client = c.normalizeClient(client);
        }
      }
      setTableName(tableName) {
        this.config.table = tableName;
      }
      getTableName() {
        return this.config.table;
      }
      getTableName() {
        return this.config.table;
      }
      _chain(state, clauses2, clause) {
        let current = {};
        for (let child of clause.children) {
          current[child] = (...args) => {
            state.prev = state.self;
            state.self = child;
            let results = clauses2[child].action(this, state, ...args);
            if (clauses2[child].children.length) {
              return this._chain(results, clauses2, clauses2[child]);
            } else {
              return results;
            }
          };
        }
        return current;
      }
      /* istanbul ignore next */
      _makeChain(index = TableIndex, clauses2, rootClause, options = {}) {
        let state = new ChainState({
          index,
          options,
          attributes: options.attributes || this.model.schema.attributes,
          hasSortKey: options.hasSortKey || this.model.lookup.indexHasSortKeys[index],
          compositeAttributes: options.compositeAttributes || this.model.facets.byIndex[index]
        });
        return state.init(this, clauses2, rootClause);
      }
      _regexpEscape(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      _normalizeConcurrencyValue(value = 1) {
        value = parseInt(value);
        if (isNaN(value) || value < 1) {
          throw new e.ElectroError(e.ErrorCodes.InvalidConcurrencyOption, "Query option 'concurrency' must be of type 'number' and greater than zero.");
        }
        return value;
      }
      _normalizePagesValue(value) {
        if (value === AllPages) {
          return value;
        }
        value = parseInt(value);
        if (isNaN(value) || value < 1) {
          throw new e.ElectroError(e.ErrorCodes.InvalidPagesOption, `Query option 'pages' must be of type 'number' and greater than zero or the string value '${AllPages}'`);
        }
        return value;
      }
      _normalizeLimitValue(value) {
        if (value !== void 0) {
          value = parseInt(value);
          if (isNaN(value) || value < 1) {
            throw new e.ElectroError(e.ErrorCodes.InvalidLimitOption, "Query option 'limit' must be of type 'number' and greater than zero.");
          }
        }
        return value;
      }
      _createKeyDeconstructor(prefixes = {}, labels = [], attributes2 = {}) {
        let { prefix, isCustom, postfix } = prefixes;
        let names = [];
        let types = [];
        let pattern = `^${this._regexpEscape(prefix || "")}`;
        for (let { name, label } of labels) {
          let attr = attributes2[name];
          if (isCustom && !name && label) {
            pattern += `${this._regexpEscape(label)}`;
          } else if (isCustom) {
            pattern += `${this._regexpEscape(label === void 0 ? "" : label)}(.+)`;
          } else {
            pattern += `#${this._regexpEscape(label === void 0 ? name : label)}_(.+)`;
          }
          names.push(name);
          if (attr) {
            types.push(attr.type);
          }
        }
        if (typeof postfix === "string") {
          pattern += this._regexpEscape(postfix);
        }
        pattern += "$";
        let regex = new RegExp(pattern, "i");
        return ({ key } = {}) => {
          if (!["string", "number"].includes(typeof key)) {
            return null;
          }
          key = `${key}`;
          let match = key.match(regex);
          let results = {};
          if (match) {
            for (let i = 0; i < names.length; i++) {
              let key2 = names[i];
              let value = match[i + 1];
              let type = types[i];
              switch (type) {
                case "number": {
                  value = parseFloat(value);
                  break;
                }
                case "boolean": {
                  value = value === "true";
                  break;
                }
              }
              if (key2 && value !== void 0) {
                results[key2] = value;
              }
            }
          } else {
            results = null;
          }
          return results;
        };
      }
      _deconstructIndex({ index = TableIndex, keys = {} } = {}) {
        const hasIndex = !!this.model.translations.keys[index];
        if (!hasIndex) {
          return null;
        }
        let pkName = this.model.translations.keys[index].pk;
        let skName = this.model.translations.keys[index].sk;
        const indexHasSortKey = this.model.lookup.indexHasSortKeys[index];
        const deconstructors = this.model.keys.deconstructors[index];
        const pk = keys[pkName];
        if (pk === void 0) {
          return null;
        }
        const pkComposites = deconstructors.pk({ key: pk });
        if (pkComposites === null) {
          return null;
        }
        let skComposites = {};
        if (indexHasSortKey) {
          const sk = keys[skName];
          if (!sk) {
            return null;
          }
          skComposites = deconstructors.sk({ key: sk });
          if (skComposites === null) {
            return null;
          }
        }
        return {
          ...pkComposites,
          ...skComposites
        };
      }
      _formatKeysToItem(index = TableIndex, keys) {
        if (keys === null || typeof keys !== "object" || Object.keys(keys).length === 0) {
          return keys;
        }
        let tableIndex = TableIndex;
        let indexParts = this._deconstructIndex({ index, keys });
        if (indexParts === null) {
          return null;
        }
        if (index !== tableIndex) {
          const tableIndexParts = this._deconstructIndex({ index: tableIndex, keys });
          if (tableIndexParts === null) {
            return null;
          }
          indexParts = { ...indexParts, ...tableIndexParts };
        }
        let noPartsFound = Object.keys(indexParts).length === 0 && this.model.facets.byIndex[tableIndex].all.length > 0;
        let partsAreIncomplete = this.model.facets.byIndex[tableIndex].all.find((facet) => indexParts[facet.name] === void 0);
        if (noPartsFound || partsAreIncomplete) {
          return null;
        }
        return indexParts;
      }
      _constructPagerIndex(index = TableIndex, item, options = {}) {
        let pkAttributes = options.relaxedPk ? item : this._expectFacets(item, this.model.facets.byIndex[index].pk);
        let skAttributes = options.relaxedSk ? item : this._expectFacets(item, this.model.facets.byIndex[index].sk);
        let keys = this._makeIndexKeys({
          index,
          pkAttributes,
          skAttributes: [skAttributes]
        });
        return this._makeParameterKey(index, keys.pk, ...keys.sk);
      }
      _formatSuppliedPager(index = TableIndex, item, options = {}) {
        if (typeof item !== "object" || Object.keys(item).length === 0) {
          return item;
        }
        let tableIndex = TableIndex;
        let pager = this._constructPagerIndex(index, item, options);
        if (index !== tableIndex) {
          pager = { ...pager, ...this._constructPagerIndex(tableIndex, item, options) };
        }
        return pager;
      }
      _normalizeExecutionOptions({ provided = [], context = {} } = {}) {
        let config = {
          includeKeys: false,
          originalErr: false,
          raw: false,
          params: {},
          page: {},
          lastEvaluatedKeyRaw: false,
          table: void 0,
          concurrent: void 0,
          parse: void 0,
          pager: Pager.named,
          unprocessed: UnprocessedTypes.item,
          response: "default",
          cursor: null,
          data: "attributes",
          ignoreOwnership: false,
          _providedIgnoreOwnership: false,
          _isPagination: false,
          _isCollectionQuery: false,
          pages: 1,
          listeners: [],
          preserveBatchOrder: false,
          attributes: [],
          terminalOperation: void 0,
          formatCursor: u.cursorFormatter,
          order: void 0,
          hydrate: false,
          hydrator: (_entity, _indexName, items) => items,
          _includeOnResponseItem: {}
        };
        return provided.filter(Boolean).reduce((config2, option) => {
          if (typeof option.order === "string") {
            switch (option.order.toLowerCase()) {
              case "asc":
                config2.params[ResultOrderParam] = ResultOrderOption.asc;
                break;
              case "desc":
                config2.params[ResultOrderParam] = ResultOrderOption.desc;
                break;
              default:
                throw new e.ElectroError(e.ErrorCodes.InvalidOptions, `Invalid value for query option "order" provided. Valid options include 'asc' and 'desc, received: "${option.order}"`);
            }
          }
          if (typeof option.response === "string" && option.response.length) {
            const format = ReturnValues[option.response];
            if (format === void 0) {
              throw new e.ElectroError(e.ErrorCodes.InvalidOptions, `Invalid value for query option "format" provided: "${option.format}". Allowed values include ${u.commaSeparatedString(Object.keys(ReturnValues))}.`);
            }
            config2.response = format;
            if (context.operation === MethodTypes.transactWrite) {
              config2.params.ReturnValuesOnConditionCheckFailure = FormatToReturnValues[format];
            } else {
              config2.params.ReturnValues = FormatToReturnValues[format];
            }
          }
          if (option.formatCursor) {
            const isValid = ["serialize", "deserialize"].every(
              (method) => method in option.formatCursor && validations.isFunction(option.formatCursor[method])
            );
            if (isValid) {
              config2.formatCursor = option.formatCursor;
            } else {
              throw new e.ElectroError(e.ErrorCodes.InvalidOptions, `Invalid value for query option "formatCursor" provided. Formatter interface must have serialize and deserialize functions`);
            }
          }
          if (option.terminalOperation in TerminalOperation) {
            config2.terminalOperation = TerminalOperation[option.terminalOperation];
          }
          if (Array.isArray(option.attributes)) {
            config2.attributes = config2.attributes.concat(option.attributes);
          }
          if (option.preserveBatchOrder === true) {
            config2.preserveBatchOrder = true;
          }
          if (option.pages !== void 0) {
            config2.pages = option.pages;
          }
          if (option._isCollectionQuery === true) {
            config2._isCollectionQuery = true;
          }
          if (option.includeKeys === true) {
            config2.includeKeys = true;
          }
          if (option.originalErr === true) {
            config2.originalErr = true;
          }
          if (option.raw === true) {
            config2.raw = true;
          }
          if (option._isPagination) {
            config2._isPagination = true;
          }
          if (option.lastEvaluatedKeyRaw === true) {
            config2.lastEvaluatedKeyRaw = true;
            config2.pager = Pager.raw;
            config2.unprocessed = UnprocessedTypes.raw;
          }
          if (option.cursor) {
            config2.cursor = option.cursor;
          }
          if (option.data) {
            config2.data = option.data;
            switch (option.data) {
              case "raw":
                config2.raw = true;
                break;
              case "includeKeys":
                config2.includeKeys = true;
                break;
            }
          }
          if (option.limit !== void 0) {
            config2.limit = option.limit;
            config2.params.Limit = option.limit;
          }
          if (validations.isStringHasLength(option.table)) {
            config2.params.TableName = option.table;
            config2.table = option.table;
          }
          if (option.concurrent !== void 0) {
            config2.concurrent = option.concurrent;
          }
          if (validations.isFunction(option.parse)) {
            config2.parse = option.parse;
          }
          if (typeof option.pager === "string") {
            if (typeof Pager[option.pager] === "string") {
              config2.pager = option.pager;
            } else {
              throw new e.ElectroError(e.ErrorCodes.InvalidOptions, `Invalid value for option "pager" provided: "${option.pager}". Allowed values include ${u.commaSeparatedString(Object.keys(Pager))}.`);
            }
          }
          if (typeof option.unprocessed === "string") {
            if (typeof UnprocessedTypes[option.unprocessed] === "string") {
              config2.unproessed = UnprocessedTypes[option.unprocessed];
            } else {
              throw new e.ElectroError(e.ErrorCodes.InvalidOptions, `Invalid value for option "unprocessed" provided: "${option.unprocessed}". Allowed values include ${u.commaSeparatedString(Object.keys(UnprocessedTypes))}.`);
            }
          }
          if (option.ignoreOwnership) {
            config2.ignoreOwnership = option.ignoreOwnership;
            config2._providedIgnoreOwnership = option.ignoreOwnership;
          }
          if (option.listeners) {
            if (Array.isArray(option.listeners)) {
              config2.listeners = config2.listeners.concat(option.listeners);
            }
          }
          if (option.logger) {
            if (validations.isFunction(option.logger)) {
              config2.listeners.push(option.logger);
            } else {
              throw new e.ElectroError(e.ErrorCodes.InvalidLoggerProvided, `Loggers must be of type function`);
            }
          }
          if (option.hydrate) {
            config2.hydrate = true;
            config2.ignoreOwnership = true;
          }
          if (validations.isFunction(option.hydrator)) {
            config2.hydrator = option.hydrator;
          }
          if (option._includeOnResponseItem) {
            config2._includeOnResponseItem = {
              ...config2._includeOnResponseItem,
              ...option._includeOnResponseItem
            };
          }
          config2.page = Object.assign({}, config2.page, option.page);
          config2.params = Object.assign({}, config2.params, option.params);
          return config2;
        }, config);
      }
      _applyParameterOptions({ params = {}, options = {} } = {}) {
        let parameters = Object.assign({}, params);
        for (let customParameter of Object.keys(options.params || {})) {
          if (options.params[customParameter] !== void 0) {
            parameters[customParameter] = options.params[customParameter];
          }
        }
        return parameters;
      }
      addListeners(logger2) {
        this.eventManager.add(logger2);
      }
      _addLogger(logger2) {
        if (validations.isFunction(logger2)) {
          this.addListeners(logger2);
        } else {
          throw new e.ElectroError(e.ErrorCodes.InvalidLoggerProvided, `Logger must be of type function`);
        }
      }
      _getPrimaryIndexFieldNames() {
        let hasSortKey = this.model.lookup.indexHasSortKeys[TableIndex];
        let accessPattern = this.model.translations.indexes.fromIndexToAccessPattern[TableIndex];
        let pkField = this.model.indexes[accessPattern].pk.field;
        let skField;
        if (hasSortKey) {
          skField = this.model.indexes[accessPattern].sk.field;
        }
        return {
          pk: pkField,
          sk: skField
        };
      }
      _applyParameterExpressionTypes(params, filter) {
        const conditions = filter[ExpressionTypes.ConditionExpression];
        if (conditions.build().length > 0) {
          if (typeof params[ExpressionTypes.ConditionExpression] === "string" && params[ExpressionTypes.ConditionExpression].length > 0) {
            params[ExpressionTypes.ConditionExpression] = `${params[ExpressionTypes.ConditionExpression]} AND ${conditions.build()}`;
          } else {
            params[ExpressionTypes.ConditionExpression] = conditions.build();
          }
          if (Object.keys(conditions.getNames()).length > 0) {
            params.ExpressionAttributeNames = params.ExpressionAttributeNames || {};
            params.ExpressionAttributeNames = Object.assign({}, conditions.getNames(), params.ExpressionAttributeNames);
          }
          if (Object.keys(conditions.getValues()).length > 0) {
            params.ExpressionAttributeValues = params.ExpressionAttributeValues || {};
            params.ExpressionAttributeValues = Object.assign({}, conditions.getValues(), params.ExpressionAttributeValues);
          }
        }
        return params;
      }
      /* istanbul ignore next */
      _params(state, config = {}) {
        const { keys = {}, method = "", put = {}, update = {}, filter = {}, upsert, updateProxy } = state.query;
        let consolidatedQueryFacets = this._consolidateQueryFacets(keys.sk);
        let params = {};
        switch (method) {
          case MethodTypes.check:
          case MethodTypes.get:
          case MethodTypes.delete:
          case MethodTypes.remove:
            params = this._makeSimpleIndexParams(keys.pk, ...consolidatedQueryFacets);
            break;
          case MethodTypes.upsert:
            params = this._makeUpsertParams({ update, upsert, updateProxy }, keys.pk, ...keys.sk);
            break;
          case MethodTypes.put:
          case MethodTypes.create:
            params = this._makePutParams(put, keys.pk, ...keys.sk);
            break;
          case MethodTypes.update:
          case MethodTypes.patch:
            params = this._makeUpdateParams(
              update,
              keys.pk,
              ...consolidatedQueryFacets
            );
            break;
          case MethodTypes.scan:
            params = this._makeScanParam(filter[ExpressionTypes.FilterExpression]);
            break;
          default:
            throw new Error(`Invalid method: ${method}`);
        }
        let appliedParameters = this._applyParameterOptions({
          params,
          options: config
        });
        return this._applyParameterExpressions(method, appliedParameters, config, filter);
      }
      _applyParameterExpressions(method, parameters, config, filter) {
        if (method !== MethodTypes.get) {
          return this._applyParameterExpressionTypes(parameters, filter);
        } else {
          parameters = this._applyProjectionExpressions({ parameters, config });
          return this._applyParameterExpressionTypes(parameters, filter);
        }
      }
      _applyProjectionExpressions({ parameters = {}, config = {} } = {}) {
        const attributes2 = config.attributes || [];
        if (attributes2.length === 0) {
          return parameters;
        }
        const requiresRawResponse = !!config.raw;
        const enforcesOwnership = !config.ignoreOwnership;
        const requiresUserInvolvedPagination = TerminalOperation[config.terminalOperation] === TerminalOperation.page;
        const isServerBound = TerminalOperation[config.terminalOperation] === TerminalOperation.go || TerminalOperation[config.terminalOperation] === TerminalOperation.page;
        const unknownAttributes = [];
        let attributeFields = /* @__PURE__ */ new Set();
        for (const attributeName of attributes2) {
          const fieldName = this.model.schema.getFieldName(attributeName);
          if (typeof fieldName !== "string") {
            unknownAttributes.push(attributeName);
          } else {
            attributeFields.add(fieldName);
          }
        }
        if (attributeFields.size === 0 || unknownAttributes.length > 0) {
          let message = "Unknown attributes provided in query options";
          if (unknownAttributes.length) {
            message += `: ${u.commaSeparatedString(unknownAttributes)}`;
          }
          throw new e.ElectroError(e.ErrorCodes.InvalidOptions, message);
        }
        parameters.ExpressionAttributeNames = parameters.ExpressionAttributeNames || {};
        if (
          // The response you're returning:
          // 1. is not expected to be raw
          !requiresRawResponse && isServerBound && enforcesOwnership
        ) {
          attributeFields.add(this.identifiers.entity);
          attributeFields.add(this.identifiers.version);
          if (requiresUserInvolvedPagination && config.pager !== Pager.raw) {
            let tableIndexFacets = this.model.facets.byIndex[TableIndex];
            let indexFacets = this.model.facets.byIndex[parameters.IndexName] || { all: [] };
            for (const attribute of [...tableIndexFacets.all, ...indexFacets.all]) {
              const fieldName = this.model.schema.getFieldName(attribute.name);
              attributeFields.add(fieldName);
            }
          }
        }
        for (const attributeField of attributeFields) {
          parameters.ExpressionAttributeNames["#" + attributeField] = attributeField;
        }
        if (typeof parameters.ProjectionExpression === "string") {
          parameters.ProjectionExpression = [parameters.ProjectionExpression, ...Object.keys([parameters.ExpressionAttributeNames])].join(", ");
        } else {
          parameters.ProjectionExpression = Object.keys(parameters.ExpressionAttributeNames).join(", ");
        }
        return parameters;
      }
      _batchGetParams(state, config = {}) {
        let table = config.table || this.getTableName();
        let userDefinedParams = config.params || {};
        delete userDefinedParams.TableName;
        let records = [];
        for (let itemState of state.subStates) {
          let method = itemState.query.method;
          let params = this._params(itemState, config);
          if (method === MethodTypes.get) {
            let { Key } = params;
            records.push(Key);
          }
        }
        let batches = u.batchItems(records, MaxBatchItems.batchGet);
        return batches.map((batch) => {
          return {
            RequestItems: {
              [table]: {
                ...userDefinedParams,
                Keys: batch
              }
            }
          };
        });
      }
      _batchWriteParams(state, config = {}) {
        let table = config.table || this.getTableName();
        let records = [];
        for (let itemState of state.subStates) {
          let method = itemState.query.method;
          let params = this._params(itemState, config);
          switch (method) {
            case MethodTypes.put:
              let { Item } = params;
              records.push({ PutRequest: { Item } });
              break;
            case MethodTypes.delete:
              let { Key } = params;
              records.push({ DeleteRequest: { Key } });
              break;
            default:
              throw new Error("Invalid method type");
          }
        }
        let batches = u.batchItems(records, MaxBatchItems.batchWrite);
        return batches.map((batch) => {
          return {
            RequestItems: {
              [table]: batch
            }
          };
        });
      }
      _makeParameterKey(index, pk, sk) {
        let hasSortKey = this.model.lookup.indexHasSortKeys[index];
        let accessPattern = this.model.translations.indexes.fromIndexToAccessPattern[index];
        let pkField = this.model.indexes[accessPattern].pk.field;
        let key = {
          [pkField]: pk
        };
        if (hasSortKey && sk !== void 0) {
          let skField = this.model.indexes[accessPattern].sk.field;
          key[skField] = sk;
        }
        return key;
      }
      getIdentifierExpressions(alias = this.getName()) {
        let name = this.getName();
        let version = this.getVersion();
        return {
          names: {
            [`#${this.identifiers.entity}`]: this.identifiers.entity,
            [`#${this.identifiers.version}`]: this.identifiers.version
          },
          values: {
            [`:${this.identifiers.entity}_${alias}`]: name,
            [`:${this.identifiers.version}_${alias}`]: version
          },
          expression: `(#${this.identifiers.entity} = :${this.identifiers.entity}_${alias} AND #${this.identifiers.version} = :${this.identifiers.version}_${alias})`
        };
      }
      /* istanbul ignore next */
      _makeScanParam(filter = {}) {
        let indexBase = TableIndex;
        let hasSortKey = this.model.lookup.indexHasSortKeys[indexBase];
        let accessPattern = this.model.translations.indexes.fromIndexToAccessPattern[indexBase];
        let pkField = this.model.indexes[accessPattern].pk.field;
        let { pk, sk } = this._makeIndexKeys({
          index: indexBase
        });
        let keys = this._makeParameterKey(indexBase, pk, ...sk);
        let keyExpressions = this._expressionAttributeBuilder(keys);
        let params = {
          TableName: this.getTableName(),
          ExpressionAttributeNames: this._mergeExpressionsAttributes(
            filter.getNames(),
            keyExpressions.ExpressionAttributeNames
          ),
          ExpressionAttributeValues: this._mergeExpressionsAttributes(
            filter.getValues(),
            keyExpressions.ExpressionAttributeValues
          ),
          FilterExpression: `begins_with(#${pkField}, :${pkField})`
        };
        if (hasSortKey) {
          let skField = this.model.indexes[accessPattern].sk.field;
          params.FilterExpression = `${params.FilterExpression} AND begins_with(#${skField}, :${skField})`;
        }
        if (filter.build()) {
          params.FilterExpression = `${params.FilterExpression} AND ${filter.build()}`;
        }
        return params;
      }
      _makeSimpleIndexParams(partition, sort) {
        let index = TableIndex;
        let keys = this._makeIndexKeys({
          index,
          pkAttributes: partition,
          skAttributes: [sort]
        });
        let Key = this._makeParameterKey(index, keys.pk, ...keys.sk);
        let TableName = this.getTableName();
        return { Key, TableName };
      }
      _removeAttributes(item, keys) {
        let copy = { ...item };
        for (let key of Object.keys(keys)) {
          delete copy[key];
        }
        return copy;
      }
      _makeUpdateParams(update = {}, pk = {}, sk = {}) {
        let primaryIndexAttributes = { ...pk, ...sk };
        let modifiedAttributeValues = {};
        let modifiedAttributeNames = {};
        for (const path of Object.keys(update.paths)) {
          const { value, name } = update.paths[path];
          modifiedAttributeValues[path] = value;
          modifiedAttributeNames[path] = name;
        }
        const removed = {};
        for (const name in update.impacted) {
          if (update.impacted[name] === ItemOperations.remove) {
            removed[name] = name;
          }
        }
        modifiedAttributeValues = this._removeAttributes(modifiedAttributeValues, { ...pk, ...sk, ...this.model.schema.getReadOnly() });
        const preparedUpdateValues = this.model.schema.applyAttributeSetters(modifiedAttributeValues);
        const attributesAndComposites = {
          ...update.composites,
          ...preparedUpdateValues
        };
        const { indexKey, updatedKeys, deletedKeys = [] } = this._getUpdatedKeys(pk, sk, attributesAndComposites, removed);
        const accessPattern = this.model.translations.indexes.fromIndexToAccessPattern[TableIndex];
        for (const path of Object.keys(preparedUpdateValues)) {
          if (modifiedAttributeNames[path] !== void 0 && preparedUpdateValues[path] !== void 0) {
            update.updateValue(modifiedAttributeNames[path], preparedUpdateValues[path]);
          } else if (preparedUpdateValues[path] !== void 0) {
            const attr = this.model.schema.getAttribute(path);
            if (attr) {
              update.set(attr.field, preparedUpdateValues[path]);
            } else {
              update.set(path, preparedUpdateValues[path]);
            }
          }
        }
        for (const indexKey2 of Object.keys(updatedKeys)) {
          const isNotTablePK = indexKey2 !== this.model.indexes[accessPattern].pk.field;
          const isNotTableSK = indexKey2 !== this.model.indexes[accessPattern].sk.field;
          const wasNotAlreadyModified = modifiedAttributeNames[indexKey2] === void 0;
          if (isNotTablePK && isNotTableSK && wasNotAlreadyModified) {
            update.set(indexKey2, updatedKeys[indexKey2]);
          }
        }
        for (const indexKey2 of deletedKeys) {
          const isNotTablePK = indexKey2 !== this.model.indexes[accessPattern].pk.field;
          const isNotTableSK = indexKey2 !== this.model.indexes[accessPattern].sk.field;
          const wasNotAlreadyModified = modifiedAttributeNames[indexKey2] === void 0;
          if (isNotTablePK && isNotTableSK && wasNotAlreadyModified) {
            update.remove(indexKey2);
          }
        }
        for (const primaryIndexAttribute of Object.keys(primaryIndexAttributes)) {
          const attribute = this.model.schema.attributes[primaryIndexAttribute];
          const isNotTablePK = !!(attribute && attribute.field !== this.model.indexes[accessPattern].pk.field);
          const isNotTableSK = !!(attribute && attribute.field !== this.model.indexes[accessPattern].sk.field);
          const wasNotAlreadyModified = modifiedAttributeNames[primaryIndexAttribute] === void 0;
          if (isNotTablePK && isNotTableSK && wasNotAlreadyModified) {
            update.set(primaryIndexAttribute, primaryIndexAttributes[primaryIndexAttribute]);
          }
        }
        update.set(this.identifiers.entity, this.getName());
        update.set(this.identifiers.version, this.getVersion());
        return {
          UpdateExpression: update.build(),
          ExpressionAttributeNames: update.getNames(),
          ExpressionAttributeValues: update.getValues(),
          TableName: this.getTableName(),
          Key: indexKey
        };
      }
      /* istanbul ignore next */
      _makePutParams({ data } = {}, pk, sk) {
        let appliedData = this.model.schema.applyAttributeSetters(data);
        let { updatedKeys, setAttributes } = this._getPutKeys(pk, sk && sk.facets, appliedData);
        let translatedFields = this.model.schema.translateToFields(setAttributes);
        return {
          Item: {
            ...translatedFields,
            ...updatedKeys,
            [this.identifiers.entity]: this.getName(),
            [this.identifiers.version]: this.getVersion()
          },
          TableName: this.getTableName()
        };
      }
      _maybeApplyUpsertUpdate({ fields = [], operation, updateProxy, update }) {
        for (let [field, value] of fields) {
          const name = this.model.schema.translationForRetrieval[field];
          if (name) {
            const attribute = this.model.schema.attributes[name];
            if (this.model.schema.readOnlyAttributes.has(name) && (!attribute || !attribute.indexes || attribute.indexes.length === 0)) {
              update.set(field, value, ItemOperations.ifNotExists);
            } else {
              updateProxy.performOperation({
                value,
                operation,
                path: name,
                force: true
              });
            }
          } else {
            update.set(field, value, operation);
          }
        }
      }
      _makeUpsertParams({ update, upsert } = {}) {
        return {
          TableName: this.getTableName(),
          UpdateExpression: update.build(),
          ExpressionAttributeNames: update.getNames(),
          ExpressionAttributeValues: update.getValues(),
          Key: upsert.indexKey
        };
      }
      _updateExpressionBuilder(data) {
        let accessPattern = this.model.translations.indexes.fromIndexToAccessPattern[TableIndex];
        let skip = [
          // Removing readOnly from here because this should have been validated earlier in the process. Not checking
          // readOnly here also allows `watch` properties to circumnavigate the readOnly check for attributes that
          // should be calculated but not updatable by the user.
          // ...this.model.schema.getReadOnly(),
          // ...this.model.facets.fields,
          this.model.indexes[accessPattern].pk.field,
          this.model.indexes[accessPattern].sk.field
        ];
        return this._expressionAttributeBuilder(data, ItemOperations.set, { skip });
      }
      _queryKeyExpressionAttributeBuilder(index, pk, ...sks) {
        let translate = { ...this.model.translations.keys[index] };
        let restrict = ["pk"];
        let keys = { pk };
        sks = sks.filter((sk) => sk !== void 0);
        for (let i = 0; i < sks.length; i++) {
          let id = `sk${i + 1}`;
          keys[id] = sks[i];
          restrict.push(id);
          translate[id] = translate["sk"];
        }
        let keyExpressions = this._expressionAttributeBuilder(keys, ItemOperations.set, {
          translate,
          restrict
        });
        return {
          ExpressionAttributeNames: Object.assign({}, keyExpressions.ExpressionAttributeNames),
          ExpressionAttributeValues: Object.assign({}, keyExpressions.ExpressionAttributeValues)
        };
      }
      /* istanbul ignore next */
      _expressionAttributeBuilder(item = {}, operation = "", options = {}) {
        let {
          require: require2 = [],
          reject = [],
          restrict = [],
          skip = [],
          translate = {}
        } = options;
        let expressions = {
          UpdateExpression: [],
          ExpressionAttributeNames: {},
          ExpressionAttributeValues: {}
        };
        if (require2.length) {
          let props = Object.keys(item);
          let missing = require2.filter((prop) => !props.includes(prop));
          if (!missing) {
            throw new e.ElectroError(e.ErrorCodes.MissingAttribute, `Item is missing attributes: ${u.commaSeparatedString(missing)}`);
          }
        }
        for (let prop in item) {
          if (reject.includes(prop)) {
            throw new Error(`Invalid attribute ${prop}`);
          }
          if (restrict.length && !restrict.includes(prop)) {
            throw new Error(`${prop} is not a valid attribute: ${u.commaSeparatedString(restrict)}`);
          }
          if (prop === void 0 || skip.includes(prop)) {
            continue;
          }
          let name = prop;
          let value = item[prop];
          let nameProp = `#${prop}`;
          let valProp = `:${prop}`;
          if (translate[prop]) {
            name = translate[prop];
          }
          expressions.UpdateExpression.push(`${nameProp} = ${valProp}`);
          expressions.ExpressionAttributeNames[nameProp] = name;
          expressions.ExpressionAttributeValues[valProp] = value;
        }
        expressions.UpdateExpression = `${operation.toUpperCase()} ${expressions.UpdateExpression.join(
          ", "
        )}`;
        return expressions;
      }
      _makeQueryKeys(state) {
        let consolidatedQueryFacets = this._consolidateQueryFacets(
          state.query.keys.sk
        );
        switch (state.query.type) {
          case QueryTypes.is:
            return this._makeIndexKeys({
              index: state.query.index,
              pkAttributes: state.query.keys.pk,
              skAttributes: consolidatedQueryFacets,
              indexType: state.query.options.indexType,
              queryType: state.query.type,
              isCollection: state.query.options._isCollectionQuery
            });
          default:
            return this._makeIndexKeysWithoutTail(state, consolidatedQueryFacets);
        }
      }
      /* istanbul ignore next */
      _queryParams(state = {}, options = {}) {
        const indexKeys = this._makeQueryKeys(state);
        let parameters = {};
        switch (state.query.type) {
          case QueryTypes.is:
            parameters = this._makeIsQueryParams(
              state.query,
              state.query.index,
              state.query.filter[ExpressionTypes.FilterExpression],
              indexKeys.pk,
              ...indexKeys.sk
            );
            break;
          case QueryTypes.begins:
            parameters = this._makeBeginsWithQueryParams(
              state.query.options,
              state.query.index,
              state.query.filter[ExpressionTypes.FilterExpression],
              indexKeys.pk,
              ...indexKeys.sk
            );
            break;
          case QueryTypes.collection:
            parameters = this._makeBeginsWithQueryParams(
              state.query.options,
              state.query.index,
              state.query.filter[ExpressionTypes.FilterExpression],
              indexKeys.pk,
              this._getCollectionSk(state.query.collection)
            );
            break;
          case QueryTypes.clustered_collection:
            parameters = this._makeBeginsWithQueryParams(
              state.query.options,
              state.query.index,
              state.query.filter[ExpressionTypes.FilterExpression],
              indexKeys.pk,
              ...indexKeys.sk
            );
            break;
          case QueryTypes.between:
            parameters = this._makeBetweenQueryParams(
              state.query.index,
              state.query.filter[ExpressionTypes.FilterExpression],
              indexKeys.pk,
              ...indexKeys.sk
            );
            break;
          case QueryTypes.gte:
          case QueryTypes.gt:
          case QueryTypes.lte:
          case QueryTypes.lt:
            parameters = this._makeComparisonQueryParams(
              state.query.index,
              state.query.type,
              state.query.filter[ExpressionTypes.FilterExpression],
              indexKeys
            );
            break;
          default:
            throw new Error(`Invalid query type: ${state.query.type}`);
        }
        const appliedParameters = this._applyParameterOptions({
          params: parameters,
          options
        });
        return this._applyProjectionExpressions({
          parameters: appliedParameters,
          config: options
        });
      }
      _makeBetweenQueryParams(index, filter, pk, ...sk) {
        let keyExpressions = this._queryKeyExpressionAttributeBuilder(
          index,
          pk,
          ...sk
        );
        delete keyExpressions.ExpressionAttributeNames["#sk2"];
        let params = {
          TableName: this.getTableName(),
          ExpressionAttributeNames: this._mergeExpressionsAttributes(
            filter.getNames(),
            keyExpressions.ExpressionAttributeNames
          ),
          ExpressionAttributeValues: this._mergeExpressionsAttributes(
            filter.getValues(),
            keyExpressions.ExpressionAttributeValues
          ),
          KeyConditionExpression: `#pk = :pk and #sk1 BETWEEN :sk1 AND :sk2`
        };
        if (index) {
          params["IndexName"] = index;
        }
        if (filter.build()) {
          params.FilterExpression = filter.build();
        }
        return params;
      }
      _makeInclusiveQueryParams(options, index, filter, pk, sk, type) {
        let keyExpressions = this._queryKeyExpressionAttributeBuilder(index, pk, sk);
        let KeyConditionExpression = "#pk = :pk";
        if (this.model.lookup.indexHasSortKeys[index] && typeof keyExpressions.ExpressionAttributeValues[":sk1"] === "string" && keyExpressions.ExpressionAttributeValues[":sk1"].length > 0) {
          if (type === QueryTypes.is) {
            KeyConditionExpression = `${KeyConditionExpression} and #sk1 = :sk1`;
          } else {
            KeyConditionExpression = `${KeyConditionExpression} and begins_with(#sk1, :sk1)`;
          }
        } else {
          delete keyExpressions.ExpressionAttributeNames["#sk1"];
          delete keyExpressions.ExpressionAttributeValues[":sk1"];
        }
        let customExpressions = {
          names: options.expressions && options.expressions.names || {},
          values: options.expressions && options.expressions.values || {},
          expression: options.expressions && options.expressions.expression || ""
        };
        let params = {
          KeyConditionExpression,
          TableName: this.getTableName(),
          ExpressionAttributeNames: this._mergeExpressionsAttributes(filter.getNames(), keyExpressions.ExpressionAttributeNames, customExpressions.names),
          ExpressionAttributeValues: this._mergeExpressionsAttributes(filter.getValues(), keyExpressions.ExpressionAttributeValues, customExpressions.values)
        };
        if (index) {
          params["IndexName"] = index;
        }
        let expressions = [customExpressions.expression, filter.build()].filter(Boolean).join(" AND ");
        if (expressions.length) {
          params.FilterExpression = expressions;
        }
        return params;
      }
      _makeIsQueryParams(query, index, filter, pk, sk) {
        const { options, keys } = query;
        const providedSks = keys.provided.filter((item) => item.type === KeyTypes.sk).map((item) => item.attribute);
        const skDefinition = this.model.facets.byIndex[index] && this.model.facets.byIndex[index].sk && Array.isArray(this.model.facets.byIndex[index].sk) && this.model.facets.byIndex[index].sk || [];
        const skCompositeAttributes = new Set(skDefinition);
        const skIsCompletelyFulfilled = skCompositeAttributes.size === providedSks.length && skDefinition.every((attr) => providedSks.includes(attr));
        if (skIsCompletelyFulfilled) {
          return this._makeInclusiveQueryParams(options, index, filter, pk, sk, QueryTypes.is);
        } else {
          return this._makeBeginsWithQueryParams(options, index, filter, pk, sk);
        }
      }
      _makeBeginsWithQueryParams(options, index, filter, pk, sk) {
        return this._makeInclusiveQueryParams(options, index, filter, pk, sk, QueryTypes.begins);
      }
      _mergeExpressionsAttributes(...expressionAttributes) {
        let merged = {};
        for (let obj of expressionAttributes) {
          if (obj) {
            merged = { ...merged, ...obj };
          }
        }
        return merged;
      }
      /* istanbul ignore next */
      _makeComparisonQueryParams(index = TableIndex, comparison = "", filter = {}, indexKeys = {}) {
        const { pk, fulfilled } = indexKeys;
        const sk = indexKeys.sk[0];
        let operator = PartialComparisons[comparison];
        if (!operator) {
          throw new Error(`Unexpected comparison operator "${comparison}", expected ${u.commaSeparatedString(Object.values(Comparisons))}`);
        }
        let keyExpressions = this._queryKeyExpressionAttributeBuilder(
          index,
          pk,
          sk
        );
        let params = {
          TableName: this.getTableName(),
          ExpressionAttributeNames: this._mergeExpressionsAttributes(
            filter.getNames(),
            keyExpressions.ExpressionAttributeNames
          ),
          ExpressionAttributeValues: this._mergeExpressionsAttributes(
            filter.getValues(),
            keyExpressions.ExpressionAttributeValues
          ),
          KeyConditionExpression: `#pk = :pk and #sk1 ${operator} :sk1`
        };
        if (index) {
          params["IndexName"] = index;
        }
        if (filter.build()) {
          params.FilterExpression = filter.build();
        }
        return params;
      }
      _expectIndexFacets(attributes2, facets) {
        let [isIncomplete, { incomplete, complete }] = this._getIndexImpact(
          attributes2,
          facets
        );
        if (isIncomplete) {
          let incompleteAccessPatterns = incomplete.map(({ index }) => this.model.translations.indexes.fromIndexToAccessPattern[index]);
          let missingFacets = incomplete.reduce((result, { missing }) => [...result, ...missing], []);
          throw new e.ElectroError(
            e.ErrorCodes.IncompleteCompositeAttributes,
            `Incomplete composite attributes: Without the composite attributes ${u.commaSeparatedString(missingFacets)} the following access patterns cannot be updated: ${u.commaSeparatedString(incompleteAccessPatterns.filter((val2) => val2 !== void 0))}. If a composite attribute is readOnly and cannot be set, use the 'composite' chain method on update to supply the value for key formatting purposes.`
          );
        }
        return complete;
      }
      _makeKeysFromAttributes(indexes, attributes2) {
        let indexKeys = {};
        for (let [index, keyTypes] of Object.entries(indexes)) {
          let keys = this._makeIndexKeys({
            index,
            pkAttributes: attributes2,
            skAttributes: [attributes2]
          });
          if (keyTypes.pk || keyTypes.sk) {
            indexKeys[index] = {};
          }
          if (keyTypes.pk && keys.pk) {
            indexKeys[index].pk = keys.pk;
          }
          if (keyTypes.sk && keys.sk) {
            indexKeys[index].sk = keys.sk;
          } else {
            indexKeys[index].sk = [];
          }
        }
        return indexKeys;
      }
      _makePutKeysFromAttributes(indexes, attributes2) {
        let indexKeys = {};
        for (let index of indexes) {
          indexKeys[index] = this._makeIndexKeys({
            index,
            pkAttributes: attributes2,
            skAttributes: [attributes2]
          });
        }
        return indexKeys;
      }
      _getPutKeys(pk, sk, set, validationAssistance) {
        let setAttributes = set;
        let updateIndex = TableIndex;
        let keyTranslations = this.model.translations.keys;
        let keyAttributes = { ...sk, ...pk };
        let completeFacets = this._expectIndexFacets(
          { ...setAttributes, ...validationAssistance },
          { ...keyAttributes }
        );
        if (!completeFacets.indexes.includes(updateIndex)) {
          completeFacets.indexes.push(updateIndex);
        }
        let composedKeys = this._makePutKeysFromAttributes(completeFacets.indexes, { ...keyAttributes, ...setAttributes });
        let updatedKeys = {};
        let indexKey = {};
        for (let [index, keys] of Object.entries(composedKeys)) {
          let { pk: pk2, sk: sk2 } = keyTranslations[index];
          if (index === updateIndex) {
            indexKey[pk2] = keys.pk;
            if (sk2) {
              indexKey[sk2] = keys.sk[0];
            }
          }
          if (keys.pk !== void 0 && keys.pk !== "") {
            updatedKeys[pk2] = keys.pk;
          }
          if (sk2 && keys.sk[0] !== void 0 && keys.sk[0] !== "") {
            updatedKeys[sk2] = keys.sk[0];
          }
        }
        return { indexKey, updatedKeys, setAttributes };
      }
      _getUpdatedKeys(pk, sk, set, removed) {
        let updateIndex = TableIndex;
        let keyTranslations = this.model.translations.keys;
        let keyAttributes = { ...sk, ...pk };
        let completeFacets = this._expectIndexFacets(
          { ...set },
          { ...keyAttributes }
        );
        const removedKeyImpact = this._expectIndexFacets(
          { ...removed },
          { ...keyAttributes }
        );
        if (completeFacets.impactedIndexTypes[updateIndex] === void 0) {
          completeFacets.impactedIndexTypes[updateIndex] = {
            pk: "pk",
            sk: "sk"
          };
        }
        let composedKeys = this._makeKeysFromAttributes(completeFacets.impactedIndexTypes, { ...set, ...keyAttributes });
        let updatedKeys = {};
        let deletedKeys = [];
        let indexKey = {};
        for (const keys of Object.values(removedKeyImpact.impactedIndexTypes)) {
          deletedKeys = deletedKeys.concat(Object.values(keys));
        }
        for (let [index, keys] of Object.entries(composedKeys)) {
          let { pk: pk2, sk: sk2 } = keyTranslations[index];
          if (index === updateIndex) {
            indexKey[pk2] = keys.pk;
            if (sk2) {
              indexKey[sk2] = keys.sk[0];
            }
          } else {
            let noImpactSk = Array.isArray(keys.sk) && keys.sk.length === 0;
            let indexHasSk = this.model.lookup.indexHasSortKeys[index];
            let noAttributeSk = indexHasSk && this.model.facets.byIndex[index].sk.length === 0;
            let hasPrefix = indexHasSk && this.model.prefixes[index].sk.prefix !== void 0;
            if (noImpactSk && noAttributeSk && hasPrefix) {
              keys.sk.push(this.model.prefixes[index].sk.prefix);
            }
          }
          if (keys.pk) {
            updatedKeys[pk2] = keys.pk;
          }
          if (sk2 && keys.sk[0]) {
            updatedKeys[sk2] = keys.sk[0];
          }
        }
        return { indexKey, updatedKeys, deletedKeys };
      }
      /* istanbul ignore next */
      _getIndexImpact(attributes2 = {}, included = {}) {
        let includedFacets = Object.keys(included);
        let impactedIndexes = {};
        let impactedIndexTypes = {};
        let completedIndexes = [];
        let facets = {};
        for (let [attribute, indexes] of Object.entries(this.model.facets.byAttr)) {
          if (attributes2[attribute] !== void 0) {
            facets[attribute] = attributes2[attribute];
            indexes.forEach(({ index, type }) => {
              impactedIndexes[index] = impactedIndexes[index] || {};
              impactedIndexes[index][type] = impactedIndexes[index][type] || [];
              impactedIndexes[index][type].push(attribute);
              impactedIndexTypes[index] = impactedIndexTypes[index] || {};
              impactedIndexTypes[index][type] = this.model.translations.keys[index][type];
            });
          }
        }
        let incomplete = Object.entries(this.model.facets.byIndex).map(([index, { pk, sk }]) => {
          let impacted = impactedIndexes[index];
          let impact = { index, missing: [] };
          if (impacted) {
            let missingPk = impacted[KeyTypes.pk] && impacted[KeyTypes.pk].length !== pk.length;
            let missingSk = impacted[KeyTypes.sk] && impacted[KeyTypes.sk].length !== sk.length;
            if (missingPk) {
              impact.missing = [
                ...impact.missing,
                ...pk.filter((attr) => {
                  return !impacted[KeyTypes.pk].includes(attr) && !includedFacets.includes(attr);
                })
              ];
            }
            if (missingSk) {
              impact.missing = [
                ...impact.missing,
                ...sk.filter(
                  (attr) => !impacted[KeyTypes.sk].includes(attr) && !includedFacets.includes(attr)
                )
              ];
            }
            if (!missingPk && !missingSk) {
              completedIndexes.push(index);
            }
          }
          return impact;
        }).filter(({ missing }) => missing.length);
        let isIncomplete = !!incomplete.length;
        let complete = { facets, indexes: completedIndexes, impactedIndexTypes };
        return [isIncomplete, { incomplete, complete }];
      }
      _consolidateQueryFacets(queryFacets) {
        let sk1 = {};
        let sk2 = {};
        for (let { type, facets } of queryFacets) {
          if (type === QueryTypes.between) {
            sk1 = { ...sk1, ...facets };
          } else if (type === QueryTypes.and) {
            sk2 = { ...sk2, ...facets };
          } else {
            sk1 = { ...sk1, ...facets };
            sk2 = { ...sk2, ...facets };
          }
        }
        return [sk1, sk2];
      }
      _buildQueryFacets(facets, skFacets) {
        let queryFacets = this._findProperties(facets, skFacets).reduce(
          (result, [name, value]) => {
            if (value !== void 0) {
              result[name] = value;
            }
            return result;
          },
          {}
        );
        return { ...queryFacets };
      }
      /* istanbul ignore next */
      _expectFacets(obj = {}, properties = [], type = "key composite attributes") {
        let [incompletePk, missing, matching] = this._expectProperties(obj, properties);
        if (incompletePk) {
          throw new e.ElectroError(e.ErrorCodes.IncompleteCompositeAttributes, `Incomplete or invalid ${type} supplied. Missing properties: ${u.commaSeparatedString(missing)}`);
        } else {
          return matching;
        }
      }
      _findProperties(obj, properties) {
        return properties.map((name) => [name, obj[name]]);
      }
      _expectProperties(obj, properties) {
        let missing = [];
        let matching = {};
        this._findProperties(obj, properties).forEach(([name, value]) => {
          if (value === void 0) {
            missing.push(name);
          } else {
            matching[name] = value;
          }
        });
        return [!!missing.length, missing, matching];
      }
      _makeKeyFixings({
        service,
        entity,
        version = "1",
        tableIndex,
        modelVersion,
        isClustered,
        schema
      }) {
        let keys = {
          pk: {
            prefix: "",
            field: tableIndex.pk.field,
            casing: tableIndex.pk.casing,
            isCustom: tableIndex.customFacets.pk,
            cast: tableIndex.pk.cast
          },
          sk: {
            prefix: "",
            casing: tableIndex.sk.casing,
            isCustom: tableIndex.customFacets.sk,
            field: tableIndex.sk ? tableIndex.sk.field : void 0,
            cast: tableIndex.sk ? tableIndex.sk.cast : void 0
          }
        };
        let pk = `$${service}`;
        let sk = "";
        let entityKeys = "";
        let postfix = "";
        let collectionPrefix = this._makeCollectionPrefix(tableIndex.collection);
        if (validations.isStringHasLength(collectionPrefix)) {
          sk = `${collectionPrefix}`;
          entityKeys += `#${entity}`;
        } else {
          entityKeys += `$${entity}`;
        }
        if (modelVersion === ModelVersions.beta) {
          pk = `${pk}_${version}`;
        } else {
          entityKeys = `${entityKeys}_${version}`;
        }
        if (isClustered) {
          postfix = entityKeys;
        } else {
          sk = `${sk}${entityKeys}`;
        }
        if (Object.keys(tableIndex.sk).length === 0) {
          pk += sk;
          if (isClustered) {
            pk += postfix;
          }
        }
        if (!keys.pk.isCustom) {
          keys.pk.prefix = u.formatKeyCasing(pk, tableIndex.pk.casing);
        }
        if (!keys.sk.isCustom) {
          keys.sk.prefix = u.formatKeyCasing(sk, tableIndex.sk.casing);
          keys.sk.postfix = u.formatKeyCasing(postfix, tableIndex.sk.casing);
        }
        const castKeys = tableIndex.hasSk ? [tableIndex.pk, tableIndex.sk] : [tableIndex.pk];
        for (const castKey of castKeys) {
          if (castKey.cast === CastKeyOptions.string) {
            keys[castKey.type].cast = CastKeyOptions.string;
          } else if (
            // custom keys with only one facet and no labels are numeric by default
            castKey.cast === void 0 && castKey.isCustom && castKey.facets.length === 1 && castKey.facetLabels.every(({ label }) => !label) && schema.attributes[castKey.facets[0]] && schema.attributes[castKey.facets[0]].type === "number"
          ) {
            keys[castKey.type].cast = CastKeyOptions.number;
          } else if (castKey.cast === CastKeyOptions.number && castKey.facets.length === 1 && schema.attributes[castKey.facets[0]] && ["number", "string", "boolean"].includes(schema.attributes[castKey.facets[0]].type)) {
            keys[castKey.type].cast = CastKeyOptions.number;
          } else if (castKey.cast === CastKeyOptions.number && castKey.facets.length > 1) {
            throw new e.ElectroError(e.ErrorCodes.InvalidModel, `Invalid "cast" option provided for ${castKey.type} definition on index "${u.formatIndexNameForDisplay(tableIndex.index)}". Keys can only be cast to 'number' if they are a composite of one numeric attribute.`);
          } else {
            keys[castKey.type].cast = CastKeyOptions.string;
          }
        }
        return keys;
      }
      _formatKeyCasing(accessPattern, key) {
        const casing = this.model.indexes[accessPattern] !== void 0 ? this.model.indexes[accessPattern].sk.casing : void 0;
        return u.formatKeyCasing(key, casing);
      }
      _validateIndex(index) {
        if (!this.model.facets.byIndex[index]) {
          throw new Error(`Invalid index: ${index}`);
        }
      }
      _getCollectionSk(collection = "") {
        const subCollections = this.model.subCollections[collection];
        const index = this.model.translations.collections.fromCollectionToIndex[collection];
        const accessPattern = this.model.translations.indexes.fromIndexToAccessPattern[index];
        const prefixes = this.model.prefixes[index];
        const prefix = this._makeCollectionPrefix(subCollections);
        if (prefixes.sk && prefixes.sk.isCustom) {
          return "";
        }
        return this._formatKeyCasing(accessPattern, prefix);
      }
      _makeCollectionPrefix(collection = []) {
        let prefix = "";
        if (validations.isArrayHasLength(collection)) {
          for (let i = 0; i < collection.length; i++) {
            let subCollection = collection[i];
            if (i === 0) {
              prefix += `$${subCollection}`;
            } else {
              prefix += `#${subCollection}`;
            }
          }
        } else if (validations.isStringHasLength(collection)) {
          prefix = `$${collection}`;
        }
        return prefix;
      }
      _makeKeyTransforms(queryType) {
        const transforms = [];
        const shiftUp = (val2) => u.shiftSortOrder(val2, 1);
        const noop = (val2) => val2;
        switch (queryType) {
          case QueryTypes.between:
            transforms.push(noop, shiftUp);
            break;
          case QueryTypes.lte:
          case QueryTypes.gt:
            transforms.push(shiftUp);
            break;
          default:
            transforms.push(noop);
            break;
        }
        return transforms;
      }
      /* istanbul ignore next */
      _makeIndexKeysWithoutTail(state = {}, skFacets = []) {
        const index = state.query.index || TableIndex;
        this._validateIndex(index);
        const pkFacets = state.query.keys.pk || {};
        const excludePostfix = state.query.options.indexType === IndexTypes.clustered && state.query.options._isCollectionQuery;
        const transforms = this._makeKeyTransforms(state.query.type);
        if (!skFacets.length) {
          skFacets.push({});
        }
        let facets = this.model.facets.byIndex[index];
        let prefixes = this.model.prefixes[index];
        if (!prefixes) {
          throw new Error(`Invalid index: ${index}`);
        }
        let partitionKey = this._makeKey(
          prefixes.pk,
          facets.pk,
          pkFacets,
          this.model.facets.labels[index].pk
        );
        let pk = partitionKey.key;
        let sk = [];
        let fulfilled = false;
        if (this.model.lookup.indexHasSortKeys[index]) {
          for (let i = 0; i < skFacets.length; i++) {
            const skFacet = skFacets[i];
            const transform = transforms[i];
            let hasLabels = this.model.facets.labels[index] && Array.isArray(this.model.facets.labels[index].sk);
            let labels = hasLabels ? this.model.facets.labels[index].sk : [];
            let sortKey = this._makeKey(prefixes.sk, facets.sk, skFacet, labels, {
              excludeLabelTail: true,
              excludePostfix,
              transform
            });
            if (sortKey.key !== void 0) {
              sk.push(sortKey.key);
            }
            if (sortKey.fulfilled) {
              fulfilled = true;
            }
          }
        }
        return {
          pk,
          sk,
          fulfilled
        };
      }
      /* istanbul ignore next */
      _makeIndexKeys({
        index = TableIndex,
        pkAttributes = {},
        skAttributes = [],
        queryType,
        indexType,
        isCollection = false
      }) {
        this._validateIndex(index);
        const excludePostfix = indexType === IndexTypes.clustered && isCollection;
        const transforms = this._makeKeyTransforms(queryType);
        if (!skAttributes.length) {
          skAttributes.push({});
        }
        let facets = this.model.facets.byIndex[index];
        let prefixes = this.model.prefixes[index];
        if (!prefixes) {
          throw new Error(`Invalid index: ${index}`);
        }
        let pk = this._makeKey(prefixes.pk, facets.pk, pkAttributes, this.model.facets.labels[index].pk);
        let sk = [];
        let fulfilled = false;
        if (this.model.lookup.indexHasSortKeys[index]) {
          for (let i = 0; i < skAttributes.length; i++) {
            const skFacet = skAttributes[i];
            const transform = transforms[i];
            let hasLabels = this.model.facets.labels[index] && Array.isArray(this.model.facets.labels[index].sk);
            let labels = hasLabels ? this.model.facets.labels[index].sk : [];
            let sortKey = this._makeKey(prefixes.sk, facets.sk, skFacet, labels, { excludePostfix, transform });
            if (sortKey.key !== void 0) {
              sk.push(sortKey.key);
            }
            if (sortKey.fulfilled) {
              fulfilled = true;
            }
          }
        }
        return {
          pk: pk.key,
          sk,
          fulfilled
        };
      }
      _formatNumericCastKey(attributeName, key) {
        const fulfilled = key !== void 0;
        if (!fulfilled) {
          return {
            fulfilled,
            key
          };
        }
        if (typeof key === "number") {
          return {
            fulfilled,
            key
          };
        }
        if (typeof key === "string") {
          const parsed = parseInt(key);
          if (!isNaN(parsed)) {
            return {
              fulfilled,
              key: parsed
            };
          }
        }
        if (typeof key === "boolean") {
          return {
            fulfilled,
            key: key === true ? 1 : 0
          };
        }
        throw new e.ElectroAttributeValidationError(attributeName, `Invalid key value provided, could not cast composite attribute ${attributeName} to number for index`);
      }
      /* istanbul ignore next */
      _makeKey({ prefix, isCustom, casing, postfix, cast } = {}, facets = [], supplied = {}, labels = [], { excludeLabelTail, excludePostfix, transform = (val2) => val2 } = {}) {
        if (cast === CastKeyOptions.number) {
          return this._formatNumericCastKey(facets[0], supplied[facets[0]]);
        }
        let key = prefix;
        let foundCount = 0;
        for (let i = 0; i < labels.length; i++) {
          const { name, label } = labels[i];
          const attribute = this.model.schema.getAttribute(name);
          let value = supplied[name];
          if (supplied[name] === void 0 && excludeLabelTail) {
            break;
          }
          if (attribute && validations.isFunction(attribute.format)) {
            value = attribute.format(`${value}`);
          }
          if (isCustom) {
            key = `${key}${label}`;
          } else {
            key = `${key}#${label}_`;
          }
          if (supplied[name] === void 0) {
            break;
          }
          foundCount++;
          key = `${key}${value}`;
        }
        const fulfilled = foundCount === labels.length;
        const shouldApplyPostfix = typeof postfix === "string" && !excludePostfix;
        if (fulfilled && shouldApplyPostfix) {
          key += postfix;
        }
        const transformedKey = transform(u.formatKeyCasing(key, casing));
        return {
          fulfilled,
          key: transformedKey
        };
      }
      _findBestIndexKeyMatch(attributes2 = {}) {
        let facets = this.model.facets.bySlot;
        let matches = [];
        for (let f = 0; f < facets.length; f++) {
          const slots = facets[f] || [];
          for (let s = 0; s < slots.length; s++) {
            const accessPatternSlot = slots[s];
            matches[s] = matches[s] || {
              index: accessPatternSlot.index,
              allKeys: false,
              hasSk: false,
              count: 0,
              done: false,
              keys: []
            };
            const indexOutOfContention = matches[s].done;
            const lacksAttributeAtSlot = !accessPatternSlot;
            const attributeNotProvided = accessPatternSlot && attributes2[accessPatternSlot.name] === void 0;
            const nextAttributeIsSortKey = accessPatternSlot && accessPatternSlot.next && facets[f + 1][s].type === "sk";
            const hasAllKeys = accessPatternSlot && !accessPatternSlot.next;
            if (indexOutOfContention || lacksAttributeAtSlot || attributeNotProvided) {
              matches[s].done = true;
              continue;
            }
            if (nextAttributeIsSortKey) {
              matches[s].hasSk = true;
            } else if (hasAllKeys) {
              matches[s].allKeys = true;
            }
            matches[s].count++;
            matches[s].keys.push({
              name: accessPatternSlot.name,
              type: accessPatternSlot.type
            });
          }
        }
        let max = 0;
        matches = matches.filter((match2) => match2.hasSk || match2.allKeys).map((match2) => {
          max = Math.max(max, match2.count);
          return match2;
        });
        const matched = [];
        for (let m = 0; m < matches.length; m++) {
          const match2 = matches[m];
          const primaryIndexIsFinished = match2.index === "" && match2.allKeys;
          const primaryIndexIsMostMatched = match2.index === "" && match2.count === max;
          const indexRequirementsFulfilled = match2.allKeys;
          const hasTheMostAttributeMatches = match2.count === max;
          if (primaryIndexIsFinished) {
            matched[0] = match2;
          } else if (primaryIndexIsMostMatched) {
            matched[1] = match2;
          } else if (indexRequirementsFulfilled) {
            matched[2] = match2;
          } else if (hasTheMostAttributeMatches) {
            matched[3] = match2;
          }
        }
        const match = matched.find((value) => !!value);
        let keys = [];
        let index = "";
        let shouldScan = true;
        if (match) {
          keys = match.keys;
          index = match.index;
          shouldScan = false;
        }
        return { keys, index, shouldScan };
      }
      /* istanbul ignore next */
      _parseComposedKey(key = TableIndex) {
        let attributes2 = {};
        let names = key.match(/:[A-Z1-9]+/gi);
        if (!names) {
          throw new e.ElectroError(e.ErrorCodes.InvalidKeyCompositeAttributeTemplate, `Invalid key composite attribute template. No composite attributes provided, expected at least one composite attribute with the format ":attributeName". Received: ${key}`);
        }
        let labels = key.split(/:[A-Z1-9]+/gi);
        for (let i = 0; i < names.length; i++) {
          let name = names[i].replace(":", "");
          let label = labels[i];
          if (name !== "") {
            attributes2[name] = attributes2[name] || [];
            attributes2[name].push(label);
          }
        }
        return attributes2;
      }
      _parseTemplateKey(template = "") {
        let attributes2 = [];
        let current = {
          label: "",
          name: ""
        };
        let type = "label";
        for (let i = 0; i < template.length; i++) {
          let char = template[i];
          let last = template[i - 1];
          let next = template[i + 1];
          if (char === "{" && last === "$" && type === "label") {
            type = "name";
          } else if (char === "}" && type === "name") {
            if (current.name.match(/^\s*$/)) {
              throw new e.ElectroError(e.ErrorCodes.InvalidKeyCompositeAttributeTemplate, `Invalid key composite attribute template. Empty expression "\${${current.name}}" provided. Expected attribute name.`);
            }
            attributes2.push({ name: current.name, label: current.label });
            current.name = "";
            current.label = "";
            type = "label";
          } else if (char === "$" && next === "{" && type === "label") {
            continue;
          } else {
            current[type] += char;
          }
        }
        if (current.name.length > 0 || current.label.length > 0) {
          attributes2.push({ name: current.name, label: current.label });
        }
        return attributes2;
      }
      _parseFacets(facets) {
        let isCustom = !Array.isArray(facets) && typeof facets === "string";
        if (isCustom && facets.length > 0) {
          let labels = this._parseComposedKey(facets);
          return {
            isCustom,
            labels: [],
            attributes: Object.keys(attributes)
          };
        } else if (isCustom && facets.length === 0) {
          return {
            isCustom: false,
            labels: [],
            attributes: []
          };
        } else {
          return {
            isCustom,
            labels: [],
            attributes: Object.keys(facets)
          };
        }
      }
      _parseTemplateAttributes(composite = []) {
        let isCustom = !Array.isArray(composite) && typeof composite === "string";
        if (isCustom && composite.length > 0) {
          let labels = this._parseTemplateKey(composite);
          return {
            isCustom,
            labels,
            attributes: labels.map(({ name }) => name).filter((name) => !!name)
          };
        } else if (isCustom && composite.length === 0) {
          return {
            isCustom: false,
            labels: [],
            attributes: []
          };
        } else {
          return {
            isCustom,
            labels: composite.map((name) => ({ name })),
            attributes: composite
          };
        }
      }
      _compositeTemplateAreCompatible(parsedAttributes, composite) {
        if (!Array.isArray(composite) || !parsedAttributes || !parsedAttributes.isCustom) {
          return true;
        }
        return validations.stringArrayMatch(composite, parsedAttributes.attributes);
      }
      _optimizeIndexKey(keyDefinition) {
        const hasTemplate = typeof keyDefinition.template === "string";
        const hasSingleItemComposite = Array.isArray(keyDefinition.facets) && keyDefinition.facets.length === 1 && keyDefinition.facets[0] === keyDefinition.field;
        if (!hasTemplate && hasSingleItemComposite) {
          keyDefinition.facets = "${" + keyDefinition.field + "}";
        }
        return keyDefinition;
      }
      _optimizeMatchingKeyAttributes(model = {}) {
        const attributeFields = [];
        for (const name of Object.keys(model.attributes)) {
          const { field } = model.attributes[name];
          attributeFields.push(field || name);
        }
        for (const accessPattern of Object.keys(model.indexes)) {
          let { pk, sk } = model.indexes[accessPattern];
          if (attributeFields.includes(pk.field)) {
            model.indexes[accessPattern].pk = this._optimizeIndexKey(pk);
          }
          if (sk && attributeFields.includes(sk.field)) {
            model.indexes[accessPattern].sk = this._optimizeIndexKey(sk);
          }
        }
        return model;
      }
      _normalizeIndexes(indexes) {
        let normalized = {};
        let indexFieldTranslation = {};
        let indexHasSortKeys = {};
        let indexHasSubCollections = {};
        let clusteredIndexes = /* @__PURE__ */ new Set();
        let indexAccessPatternTransaction = {
          fromAccessPatternToIndex: {},
          fromIndexToAccessPattern: {}
        };
        let collectionIndexTranslation = {
          fromCollectionToIndex: {},
          fromIndexToCollection: {}
        };
        let subCollections = {};
        let collections = {};
        let facets = {
          byIndex: {},
          byField: {},
          byFacet: {},
          byAttr: {},
          byType: {},
          bySlot: [],
          fields: [],
          attributes: [],
          labels: {}
        };
        let seenIndexes = {};
        let seenIndexFields = {};
        let accessPatterns = Object.keys(indexes);
        for (let i in accessPatterns) {
          let accessPattern = accessPatterns[i];
          let index = indexes[accessPattern];
          let indexName = index.index || TableIndex;
          let indexType = typeof index.type === "string" ? index.type : IndexTypes.isolated;
          if (indexType === "clustered") {
            clusteredIndexes.add(accessPattern);
          }
          if (seenIndexes[indexName] !== void 0) {
            if (indexName === TableIndex) {
              throw new e.ElectroError(e.ErrorCodes.DuplicateIndexes, `Duplicate index defined in model found in Access Pattern '${accessPattern}': '${u.formatIndexNameForDisplay(indexName)}'. This could be because you forgot to specify the index name of a secondary index defined in your model.`);
            } else {
              throw new e.ElectroError(e.ErrorCodes.DuplicateIndexes, `Duplicate index defined in model found in Access Pattern '${accessPattern}': '${indexName}'`);
            }
          }
          seenIndexes[indexName] = indexName;
          let hasSk = !!index.sk;
          let inCollection = !!index.collection;
          if (!hasSk && inCollection) {
            throw new e.ElectroError(e.ErrorCodes.CollectionNoSK, `Invalid Access pattern definition for '${accessPattern}': '${u.formatIndexNameForDisplay(indexName)}', contains a collection definition without a defined SK. Collections can only be defined on indexes with a defined SK.`);
          }
          let collection = index.collection || "";
          let customFacets = {
            pk: false,
            sk: false
          };
          const pkCasing = KeyCasing[index.pk.casing] === void 0 ? KeyCasing.default : index.pk.casing;
          let skCasing = KeyCasing.default;
          if (hasSk && KeyCasing[index.sk.casing] !== void 0) {
            skCasing = index.sk.casing;
          }
          indexHasSortKeys[indexName] = hasSk;
          let parsedPKAttributes = this._parseTemplateAttributes(index.pk.facets);
          customFacets.pk = parsedPKAttributes.isCustom;
          facets.labels[indexName] = facets.labels[indexName] || {};
          facets.labels[indexName]["pk"] = facets.labels[indexName]["pk"] || parsedPKAttributes;
          facets.labels[indexName]["sk"] = facets.labels[indexName]["sk"] || this._parseTemplateAttributes();
          let pk = {
            inCollection,
            accessPattern,
            index: indexName,
            casing: pkCasing,
            type: KeyTypes.pk,
            cast: index.pk.cast,
            field: index.pk.field || "",
            facets: parsedPKAttributes.attributes,
            isCustom: parsedPKAttributes.isCustom,
            facetLabels: parsedPKAttributes.labels
          };
          let sk = {};
          let parsedSKAttributes = {};
          if (hasSk) {
            parsedSKAttributes = this._parseTemplateAttributes(index.sk.facets);
            customFacets.sk = parsedSKAttributes.isCustom;
            facets.labels[indexName]["sk"] = parsedSKAttributes;
            sk = {
              inCollection,
              accessPattern,
              index: indexName,
              casing: skCasing,
              type: KeyTypes.sk,
              cast: index.sk.cast,
              field: index.sk.field || "",
              facets: parsedSKAttributes.attributes,
              isCustom: parsedSKAttributes.isCustom,
              facetLabels: parsedSKAttributes.labels
            };
            facets.fields.push(sk.field);
          }
          if (Array.isArray(sk.facets)) {
            let duplicates = pk.facets.filter((facet) => sk.facets.includes(facet));
            if (duplicates.length !== 0) {
              if (sk.facets.length > 1) {
                throw new e.ElectroError(e.ErrorCodes.DuplicateIndexCompositeAttributes, `The Access Pattern '${accessPattern}' contains duplicate references the composite attribute(s): ${u.commaSeparatedString(duplicates)}. Composite attributes can only be used more than once in an index if your sort key is limitted to a single attribute. This is to prevent unexpected runtime errors related to the inability to generate keys.`);
              }
            }
          }
          let definition = {
            pk,
            sk,
            collection,
            hasSk,
            customFacets,
            index: indexName,
            type: indexType
          };
          indexHasSubCollections[indexName] = inCollection && Array.isArray(collection);
          if (inCollection) {
            let collectionArray = this._toSubCollectionArray(collection);
            for (let collectionName of collectionArray) {
              if (collections[collectionName] !== void 0) {
                throw new e.ElectroError(e.ErrorCodes.DuplicateCollections, `Duplicate collection, "${collectionName}" is defined across multiple indexes "${collections[collectionName]}" and "${accessPattern}". Collections must be unique names across indexes for an Entity.`);
              } else {
                collections[collectionName] = accessPattern;
              }
              collectionIndexTranslation.fromCollectionToIndex[collectionName] = indexName;
              collectionIndexTranslation.fromIndexToCollection[indexName] = collectionIndexTranslation.fromIndexToCollection[indexName] || [];
              collectionIndexTranslation.fromIndexToCollection[indexName].push(collection);
            }
            subCollections = {
              ...subCollections,
              ...this._normalizeSubCollections(collectionArray)
            };
          }
          let attributes2 = [
            ...pk.facets.map((name) => ({
              name,
              index: indexName,
              type: KeyTypes.pk
            })),
            ...(sk.facets || []).map((name) => ({
              name,
              index: indexName,
              type: KeyTypes.sk
            }))
          ];
          normalized[accessPattern] = definition;
          indexAccessPatternTransaction.fromAccessPatternToIndex[accessPattern] = indexName;
          indexAccessPatternTransaction.fromIndexToAccessPattern[indexName] = accessPattern;
          indexFieldTranslation[indexName] = {
            pk: pk.field,
            sk: sk.field || ""
          };
          facets.attributes = [...facets.attributes, ...attributes2];
          facets.fields.push(pk.field);
          facets.byIndex[indexName] = {
            customFacets,
            pk: pk.facets,
            sk: sk.facets,
            all: attributes2,
            collection: index.collection,
            hasSortKeys: !!indexHasSortKeys[indexName],
            hasSubCollections: !!indexHasSubCollections[indexName],
            casing: {
              pk: pkCasing,
              sk: skCasing
            }
          };
          facets.byField = facets.byField || {};
          facets.byField[pk.field] = facets.byField[pk.field] || {};
          facets.byField[pk.field][indexName] = pk;
          if (sk.field) {
            facets.byField[sk.field] = facets.byField[sk.field] || {};
            facets.byField[sk.field][indexName] = sk;
          }
          if (seenIndexFields[pk.field] !== void 0) {
            const definition2 = Object.values(facets.byField[pk.field]).find((definition3) => definition3.index !== indexName);
            const definitionsMatch = validations.stringArrayMatch(pk.facets, definition2.facets);
            if (!definitionsMatch) {
              throw new e.ElectroError(e.ErrorCodes.InconsistentIndexDefinition, `Partition Key (pk) on Access Pattern '${u.formatIndexNameForDisplay(accessPattern)}' is defined with the composite attribute(s) ${u.commaSeparatedString(pk.facets)}, but the accessPattern '${u.formatIndexNameForDisplay(definition2.index)}' defines this field with the composite attributes ${u.commaSeparatedString(definition2.facets)}'. Key fields must have the same composite attribute definitions across all indexes they are involved with`);
            }
            seenIndexFields[pk.field].push({ accessPattern, type: "pk" });
          } else {
            seenIndexFields[pk.field] = [];
            seenIndexFields[pk.field].push({ accessPattern, type: "pk" });
          }
          if (sk.field) {
            if (sk.field === pk.field) {
              throw new e.ElectroError(e.ErrorCodes.DuplicateIndexFields, `The Access Pattern '${u.formatIndexNameForDisplay(accessPattern)}' references the field '${sk.field}' as the field name for both the PK and SK. Fields used for indexes need to be unique to avoid conflicts.`);
            } else if (seenIndexFields[sk.field] !== void 0) {
              const isAlsoDefinedAsPK = seenIndexFields[sk.field].find((field) => field.type === "pk");
              if (isAlsoDefinedAsPK) {
                throw new e.ElectroError(e.ErrorCodes.InconsistentIndexDefinition, `The Sort Key (sk) on Access Pattern '${u.formatIndexNameForDisplay(accessPattern)}' references the field '${pk.field}' which is already referenced by the Access Pattern(s) '${u.formatIndexNameForDisplay(isAlsoDefinedAsPK.accessPattern)}' as a Partition Key. Fields mapped to Partition Keys cannot be also mapped to Sort Keys.`);
              }
              const definition2 = Object.values(facets.byField[sk.field]).find((definition3) => definition3.index !== indexName);
              const definitionsMatch = validations.stringArrayMatch(sk.facets, definition2.facets);
              if (!definitionsMatch) {
                throw new e.ElectroError(e.ErrorCodes.DuplicateIndexFields, `Sort Key (sk) on Access Pattern '${u.formatIndexNameForDisplay(accessPattern)}' is defined with the composite attribute(s) ${u.commaSeparatedString(sk.facets)}, but the accessPattern '${u.formatIndexNameForDisplay(definition2.index)}' defines this field with the composite attributes ${u.commaSeparatedString(definition2.facets)}'. Key fields must have the same composite attribute definitions across all indexes they are involved with`);
              }
              seenIndexFields[sk.field].push({ accessPattern, type: "sk" });
            } else {
              seenIndexFields[sk.field] = [];
              seenIndexFields[sk.field].push({ accessPattern, type: "sk" });
            }
          }
          attributes2.forEach(({ index: index2, type, name }, j) => {
            let next = attributes2[j + 1] !== void 0 ? attributes2[j + 1].name : "";
            let facet = { index: index2, name, type, next };
            facets.byAttr[name] = facets.byAttr[name] || [];
            facets.byAttr[name].push(facet);
            facets.byType[type] = facets.byType[type] || [];
            facets.byType[type].push(facet);
            facets.byFacet[name] = facets.byFacet[name] || [];
            facets.byFacet[name][j] = facets.byFacet[name][j] || [];
            facets.byFacet[name][j].push(facet);
            facets.bySlot[j] = facets.bySlot[j] || [];
            facets.bySlot[j][i] = facet;
          });
          let pkTemplateIsCompatible = this._compositeTemplateAreCompatible(parsedPKAttributes, index.pk.composite);
          if (!pkTemplateIsCompatible) {
            throw new e.ElectroError(e.ErrorCodes.IncompatibleKeyCompositeAttributeTemplate, `Incompatible PK 'template' and 'composite' properties for defined on index "${u.formatIndexNameForDisplay(indexName)}". PK "template" string is defined as having composite attributes ${u.commaSeparatedString(parsedPKAttributes.attributes)} while PK "composite" array is defined with composite attributes ${u.commaSeparatedString(index.pk.composite)}`);
          }
          if (index.sk !== void 0 && Array.isArray(index.sk.composite) && typeof index.sk.template === "string") {
            let skTemplateIsCompatible = this._compositeTemplateAreCompatible(parsedSKAttributes, index.sk.composite);
            if (!skTemplateIsCompatible) {
              throw new e.ElectroError(e.ErrorCodes.IncompatibleKeyCompositeAttributeTemplate, `Incompatible SK 'template' and 'composite' properties for defined on index "${u.formatIndexNameForDisplay(indexName)}". SK "template" string is defined as having composite attributes ${u.commaSeparatedString(parsedSKAttributes.attributes)} while SK "composite" array is defined with composite attributes ${u.commaSeparatedString(index.sk.composite)}`);
            }
          }
        }
        if (facets.byIndex[TableIndex] === void 0) {
          throw new e.ElectroError(e.ErrorCodes.MissingPrimaryIndex, "Schema is missing an index definition for the table's main index. Please update the schema to include an index without a specified name to define the table's natural index");
        }
        return {
          facets,
          subCollections,
          indexHasSortKeys,
          clusteredIndexes,
          indexHasSubCollections,
          indexes: normalized,
          indexField: indexFieldTranslation,
          indexAccessPattern: indexAccessPatternTransaction,
          indexCollection: collectionIndexTranslation,
          collections: Object.keys(collections)
        };
      }
      _normalizeFilters(filters = {}) {
        let normalized = {};
        let invalidFilterNames = ["go", "params", "filter", "where", "set"];
        for (let [name, fn] of Object.entries(filters)) {
          if (invalidFilterNames.includes(name)) {
            throw new e.ElectroError(e.ErrorCodes.InvalidFilter, `Invalid filter name: ${name}. Filter cannot be named ${u.commaSeparatedString(invalidFilterNames)}`);
          } else {
            normalized[name] = fn;
          }
        }
        return normalized;
      }
      _normalizeKeyFixings({ service, entity, version, indexes, modelVersion, clusteredIndexes, schema }) {
        let prefixes = {};
        for (let accessPattern of Object.keys(indexes)) {
          let tableIndex = indexes[accessPattern];
          prefixes[tableIndex.index] = this._makeKeyFixings({
            service,
            entity,
            version,
            tableIndex,
            modelVersion,
            isClustered: clusteredIndexes.has(accessPattern),
            schema
          });
        }
        return prefixes;
      }
      _normalizeSubCollections(collections = []) {
        let lookup = {};
        for (let i = collections.length - 1; i >= 0; i--) {
          let subCollection = collections[i];
          lookup[subCollection] = lookup[subCollection] || [];
          for (let j = 0; j <= i; j++) {
            lookup[subCollection].push(collections[j]);
          }
        }
        return lookup;
      }
      _toSubCollectionArray(collection) {
        let collectionArray = [];
        if (Array.isArray(collection) && collection.every((col) => validations.isStringHasLength(col))) {
          collectionArray = collection;
        } else if (validations.isStringHasLength(collection)) {
          collectionArray.push(collection);
        } else {
          throw new Error("Invalid collection definition");
        }
        return collectionArray;
      }
      _applyCompositeToFacetConversion(model) {
        for (let accessPattern of Object.keys(model.indexes)) {
          let index = model.indexes[accessPattern];
          let invalidPK = index.pk.facets === void 0 && index.pk.composite === void 0 && index.pk.template === void 0;
          let invalidSK = index.sk && (index.sk.facets === void 0 && index.sk.composite === void 0 && index.sk.template === void 0);
          if (invalidPK) {
            throw new Error("Missing Index Composite Attributes!");
          } else if (invalidSK) {
            throw new Error("Missing Index Composite Attributes!");
          }
          if (Array.isArray(index.pk.composite)) {
            index.pk = {
              ...index.pk,
              facets: index.pk.composite
            };
          }
          if (typeof index.pk.template === "string") {
            index.pk = {
              ...index.pk,
              facets: index.pk.template
            };
          }
          if (index.sk && Array.isArray(index.sk.composite)) {
            index.sk = {
              ...index.sk,
              facets: index.sk.composite
            };
          }
          if (index.sk && typeof index.sk.template === "string") {
            index.sk = {
              ...index.sk,
              facets: index.sk.template
            };
          }
          model.indexes[accessPattern] = index;
        }
        return model;
      }
      _mergeKeyDefinitions(fromIndex, fromModel) {
        let definitions = {};
        for (let indexName of Object.keys(fromIndex)) {
          let pk = fromIndex[indexName].pk;
          let sk = fromIndex[indexName].sk || { labels: [] };
          definitions[indexName] = {
            pk: [],
            sk: []
          };
          for (let { name, label } of pk.labels) {
            if (pk.isCustom) {
              definitions[indexName].pk.push({ name, label });
            } else {
              definitions[indexName].pk.push({ name, label: fromModel[name] || name });
            }
          }
          for (let { name, label } of sk.labels) {
            if (sk.isCustom) {
              definitions[indexName].sk.push({ name, label });
            } else {
              definitions[indexName].sk.push({ name, label: u.getFirstDefined(fromModel[name], name) });
            }
          }
        }
        return definitions;
      }
      _parseModel(model, config = {}) {
        let modelVersion = u.getModelVersion(model);
        let service, entity, version, table, name;
        switch (modelVersion) {
          case ModelVersions.beta:
            service = model.service;
            entity = model.entity;
            version = model.version;
            table = config.table || model.table;
            name = entity;
            break;
          case ModelVersions.v1:
            service = model.model && model.model.service;
            entity = model.model && model.model.entity;
            version = model.model && model.model.version;
            table = config.table || model.table;
            name = entity;
            break;
          default:
            throw new Error("Invalid model");
        }
        model = this._applyCompositeToFacetConversion(model);
        model = this._optimizeMatchingKeyAttributes(model);
        let {
          facets,
          indexes,
          indexField,
          collections,
          subCollections,
          indexCollection,
          clusteredIndexes,
          indexHasSortKeys,
          indexAccessPattern,
          indexHasSubCollections
        } = this._normalizeIndexes(model.indexes);
        let schema = new Schema(model.attributes, facets, {
          getClient: () => this.client,
          isRoot: true
        });
        let filters = this._normalizeFilters(model.filters);
        let prefixes = this._normalizeKeyFixings({ service, entity, version, indexes, modelVersion, clusteredIndexes, schema });
        let schemaDefinedLabels = schema.getLabels();
        const deconstructors = {};
        facets.labels = this._mergeKeyDefinitions(facets.labels, schemaDefinedLabels);
        for (let indexName of Object.keys(facets.labels)) {
          const accessPattern = indexAccessPattern.fromIndexToAccessPattern[indexName];
          indexes[accessPattern].pk.labels = facets.labels[indexName].pk;
          indexes[accessPattern].sk.labels = facets.labels[indexName].sk;
          const keyTypes = prefixes[indexName] || {};
          deconstructors[indexName] = {};
          for (const keyType in keyTypes) {
            const prefixes2 = keyTypes[keyType];
            const labels = facets.labels[indexName][keyType] || [];
            const attributes2 = schema.attributes;
            deconstructors[indexName][keyType] = this._createKeyDeconstructor(prefixes2, labels, attributes2);
          }
        }
        return {
          name,
          table,
          schema,
          facets,
          entity,
          service,
          indexes,
          version,
          filters,
          prefixes,
          collections,
          modelVersion,
          subCollections,
          lookup: {
            clusteredIndexes,
            indexHasSortKeys,
            indexHasSubCollections
          },
          translations: {
            keys: indexField,
            indexes: indexAccessPattern,
            collections: indexCollection
          },
          keys: {
            deconstructors
          },
          original: model
        };
      }
    };
    function getEntityIdentifiers(entities) {
      let identifiers = [];
      for (let alias of Object.keys(entities)) {
        let entity = entities[alias];
        let name = entity.model.entity;
        let version = entity.model.version;
        identifiers.push({
          name,
          alias,
          version,
          entity,
          nameField: entity.identifiers.entity,
          versionField: entity.identifiers.version
        });
      }
      return identifiers;
    }
    function matchToEntityAlias({ paramItem, identifiers, record, entities = {}, allowMatchOnKeys = false } = {}) {
      let entity;
      if (paramItem && v.isFunction(paramItem[TransactionCommitSymbol])) {
        const committed = paramItem[TransactionCommitSymbol]();
        entity = committed.entity;
      }
      let entityAlias;
      for (let { name, version, nameField, versionField, alias } of identifiers) {
        if (entity && entity.model.entity === name && entity.model.version === version) {
          entityAlias = alias;
          break;
        } else if (record[nameField] !== void 0 && record[versionField] !== void 0 && record[nameField] === name && record[versionField] === version) {
          entityAlias = alias;
          break;
        } else if (entities[alias] && entities[alias].ownsKeys(record)) {
          entityAlias = alias;
          break;
        }
      }
      return entityAlias;
    }
    module2.exports = {
      Entity: Entity2,
      clauses,
      getEntityIdentifiers,
      matchToEntityAlias
    };
  }
});

// node_modules/electrodb/src/transaction.js
var require_transaction = __commonJS({
  "node_modules/electrodb/src/transaction.js"(exports, module2) {
    "use strict";
    var { TableIndex, TransactionMethods } = require_types();
    var { getEntityIdentifiers, matchToEntityAlias } = require_entity();
    function cleanseCanceledData(index = TableIndex, entities, data = {}, config = {}) {
      if (config.raw) {
        return data;
      }
      const identifiers = getEntityIdentifiers(entities);
      const canceled = data.canceled || [];
      const paramItems = config._paramItems || [];
      const results = [];
      for (let i = 0; i < canceled.length; i++) {
        const { Item, Code, Message } = canceled[i] || {};
        const paramItem = paramItems[i];
        const code = Code || "None";
        const rejected = code !== "None";
        const result = {
          rejected,
          code,
          message: Message
        };
        if (Item) {
          const entityAlias = matchToEntityAlias({
            record: Item,
            paramItem,
            identifiers
          });
          result.item = entities[entityAlias].formatResponse({ Item }, index, {
            ...config,
            pager: false,
            parse: void 0
          }).data;
        } else {
          result.item = null;
        }
        results.push(result);
      }
      return results;
    }
    function cleanseTransactionData(index = TableIndex, entities, data = {}, config = {}) {
      if (config.raw) {
        return data;
      }
      const identifiers = getEntityIdentifiers(entities);
      data.Items = data.Items || [];
      const paramItems = config._paramItems || [];
      const results = [];
      for (let i = 0; i < data.Items.length; i++) {
        const record = data.Items[i];
        if (!record) {
          results.push(null);
          continue;
        }
        const paramItem = paramItems[i];
        const entityAlias = matchToEntityAlias({ paramItem, identifiers, record });
        if (!entityAlias) {
          continue;
        }
        let formatted = entities[entityAlias].formatResponse({ Item: record }, index, {
          ...config,
          pager: false,
          parse: void 0
        });
        results.push(formatted.data);
      }
      return results.map((item) => ({
        rejected: false,
        item
      }));
    }
    function createTransaction(options) {
      const { fn, method, getEntities } = options;
      const operations = {
        params: (options2 = {}) => {
          const paramItems = fn(getEntities());
          const params = {
            TransactItems: paramItems
          };
          if (typeof options2.token === "string" && options2.token.length) {
            params["ClientRequestToken"] = options2.token;
          }
          if (options2._returnParamItems) {
            return { params, paramItems };
          }
          return params;
        },
        go: async (options2) => {
          const driver = Object.values(getEntities())[0];
          if (!driver) {
            throw new Error("At least one entity must exist to perform a transaction");
          }
          const { params, paramItems } = operations.params({
            ...options2,
            _returnParamItems: true
          });
          let canceled = false;
          if (paramItems.length === 0) {
            return {
              canceled,
              data: []
            };
          }
          const response = await driver.go(method, params, {
            ...options2,
            parse: (options3, data) => {
              if (options3.raw) {
                return data;
              } else if (data.canceled) {
                canceled = true;
                return cleanseCanceledData(TableIndex, getEntities(), data, {
                  ...options3,
                  _isTransaction: true,
                  _paramItems: paramItems
                });
              } else if (data.Responses) {
                return cleanseTransactionData(TableIndex, getEntities(), {
                  Items: data.Responses.map((response2) => response2.Item)
                }, {
                  ...options3,
                  _isTransaction: true,
                  _paramItems: paramItems
                });
              } else {
                return new Array(paramItems ? paramItems.length : 0).fill({
                  item: null,
                  code: "None",
                  rejected: false,
                  message: void 0
                });
              }
            }
          });
          return {
            ...response,
            canceled
          };
        }
      };
      return operations;
    }
    function createWriteTransaction(entities, fn) {
      return createTransaction({
        fn,
        method: TransactionMethods.transactWrite,
        getEntities: () => entities
      });
    }
    function createGetTransaction(entities, fn) {
      return createTransaction({
        fn,
        method: TransactionMethods.transactGet,
        getEntities: () => entities
      });
    }
    module2.exports = {
      createTransaction,
      createWriteTransaction,
      createGetTransaction
    };
  }
});

// node_modules/electrodb/src/service.js
var require_service = __commonJS({
  "node_modules/electrodb/src/service.js"(exports, module2) {
    "use strict";
    var { Entity: Entity2, getEntityIdentifiers, matchToEntityAlias } = require_entity();
    var { clauses } = require_clauses();
    var { TableIndex, TransactionMethods, KeyCasing, ServiceVersions, Pager, ElectroInstance, ElectroInstanceTypes, ModelVersions, IndexTypes } = require_types();
    var { FilterFactory } = require_filters();
    var { FilterOperations } = require_operations();
    var { WhereFactory } = require_where();
    var v = require_validations();
    var c = require_client();
    var e = require_errors();
    var u = require_util();
    var txn = require_transaction();
    var { getInstanceType, getModelVersion, applyBetaModelOverrides } = require_util();
    var ConstructorTypes = {
      beta: "beta",
      v1: "v1",
      v1Map: "v1Map",
      unknown: "unknown"
    };
    function inferConstructorType(service) {
      if (v.isNameEntityRecordType(service) || v.isNameModelRecordType(service)) {
        return ConstructorTypes.v1Map;
      } else if (v.isBetaServiceConfig(service)) {
        return ConstructorTypes.beta;
      } else if (v.isStringHasLength(service)) {
        return ConstructorTypes.v1;
      } else {
        return ConstructorTypes.unknown;
      }
    }
    function inferJoinValues(alias, instance, config) {
      let hasAlias = true;
      let args = { alias, instance, config, hasAlias };
      if (typeof alias !== "string") {
        args.config = instance;
        args.instance = alias;
        args.hasAlias = false;
      }
      return args;
    }
    var Service2 = class {
      _betaConstructor(service, config) {
        this.service = {};
        this._modelOverrides = {};
        this._modelVersion = ModelVersions.beta;
        this._modelOverrides = {
          table: service.table,
          service: service.service,
          version: service.version
        };
        this.service.name = service.name || service.service;
        this.service.table = service.table;
        this.service.version = service.version;
        this.config = config;
        this.client = config.client;
        if (v.isFunction(config.logger)) {
          this.logger = config.logger;
        }
        this.entities = {};
        this.find = {};
        this.collectionSchema = {};
        this.compositeAttributes = {};
        this.collections = {};
        this.identifiers = {};
        this.transaction = {
          get: (fn) => {
            return txn.createTransaction({
              fn,
              getEntities: () => this.entities,
              method: TransactionMethods.transactGet
            });
          },
          write: (fn) => {
            return txn.createTransaction({
              fn,
              getEntities: () => this.entities,
              method: TransactionMethods.transactWrite
            });
          }
        };
        this._instance = ElectroInstance.service;
        this._instanceType = ElectroInstanceTypes.service;
      }
      _v1Constructor(service, config) {
        this.service = {};
        this._modelOverrides = {};
        this._modelVersion = ModelVersions.v1;
        this.service.name = service;
        this.service.table = config.table;
        this._modelOverrides.table = config.table;
        this.config = config;
        this.client = config.client;
        if (v.isFunction(config.logger)) {
          this.logger = config.logger;
        }
        this.entities = {};
        this.find = {};
        this.collectionSchema = {};
        this.compositeAttributes = {};
        this.collections = {};
        this.identifiers = {};
        this.transaction = {
          get: (fn) => {
            return txn.createTransaction({
              fn,
              getEntities: () => this.entities,
              method: TransactionMethods.transactGet
            });
          },
          write: (fn) => {
            return txn.createTransaction({
              fn,
              getEntities: () => this.entities,
              method: TransactionMethods.transactWrite
            });
          }
        };
        this._instance = ElectroInstance.service;
        this._instanceType = ElectroInstanceTypes.service;
      }
      _v1MapConstructor(service, config) {
        let entityNames = Object.keys(service);
        let serviceName2 = this._inferServiceNameFromEntityMap(service);
        this._v1Constructor(serviceName2, config);
        for (let name of entityNames) {
          let entity = service[name];
          this.join(name, entity, config);
        }
      }
      constructor(service = "", config = {}) {
        config = c.normalizeConfig(config);
        this.version = ServiceVersions.v1;
        let type = inferConstructorType(service);
        switch (type) {
          case ConstructorTypes.v1Map:
            this._v1MapConstructor(service, config);
            break;
          case ConstructorTypes.beta:
            this._betaConstructor(service, config);
            break;
          case ConstructorTypes.v1:
            this._v1Constructor(service, config);
            break;
          default:
            throw new e.ElectroError(e.ErrorCodes.InvalidJoin, `Invalid service name: ${JSON.stringify(service)}. Service name must have length greater than zero`);
        }
      }
      _inferServiceNameFromEntityMap(service) {
        let names = Object.keys(service);
        let entity = names.map((name) => service[name]).map((instance) => this._inferJoinEntity(instance)).find((entity2) => entity2 && entity2.model && entity2.model.service);
        if (!entity || !entity.model || !entity.model.service) {
          throw new e.ElectroError(e.ErrorCodes.InvalidJoin, `Invalid service name: Entities/Models provided do not contain property for Service Name`);
        }
        return entity.model.service;
      }
      _inferJoinEntity(instance, options) {
        let entity = {};
        let type = getInstanceType(instance);
        let modelVersion = getModelVersion(instance);
        switch (type) {
          case ElectroInstanceTypes.model:
            entity = new Entity2(instance, options);
            break;
          case ElectroInstanceTypes.entity:
            entity = instance;
            break;
          default:
            if (modelVersion !== this._modelVersion) {
              throw new e.ElectroError(e.ErrorCodes.InvalidJoin, "Invalid instance: Valid instances to join include Models and Entity instances.");
            } else if (modelVersion === ModelVersions.beta) {
              instance = applyBetaModelOverrides(instance, this._modelOverrides);
            } else {
              throw new e.ElectroError(e.ErrorCodes.InvalidJoin, `Invalid instance: Valid instances to join include Models and Entity instances.`);
            }
            entity = new Entity2(instance, options);
            break;
        }
        return entity;
      }
      /**
       * Join
       * @param {string} alias
       * @param instance
       * @param config
       * @returns {Service}
       */
      join(...args) {
        let { alias, instance, config, hasAlias } = inferJoinValues(...args);
        let options = { ...config, ...this.config };
        let entity = this._inferJoinEntity(instance, options);
        let name = hasAlias ? alias : entity.getName();
        if (this.service.name.toLowerCase() !== entity.model.service.toLowerCase()) {
          throw new e.ElectroError(e.ErrorCodes.InvalidJoin, `Service name defined on joined instance, ${entity.model.service}, does not match the name of this Service: ${this.service.name}. Verify or update the service name on the Entity/Model to match the name defined on this service.`);
        }
        if (this.getTableName()) {
          entity.setTableName(this.getTableName());
        }
        if (options.client) {
          entity.setClient(options.client);
        }
        if (options.logger) {
          entity._addLogger(options.logger);
        }
        if (options.listeners) {
          entity.addListeners(options.listeners);
        }
        if (this._modelVersion === ModelVersions.beta && this.service.version) {
          entity.model.version = this.service.version;
        }
        this.entities[name] = entity;
        for (let collection of this.entities[name].model.collections) {
          this._addCollectionEntity(collection, name, this.entities[name]);
          this.collections[collection] = (...facets) => {
            return this._makeCollectionChain({
              name: collection,
              initialClauses: clauses
            }, ...facets);
          };
        }
        for (const collection in this.collectionSchema) {
          const collectionSchema = this.collectionSchema[collection];
          this.compositeAttributes[collection] = this._collectionSchemaToCompositeAttributes(collectionSchema);
        }
        this.find = { ...this.entities, ...this.collections };
        return this;
      }
      _collectionSchemaToCompositeAttributes(schema) {
        const keys = schema.keys;
        return {
          hasSortKeys: keys.hasSk,
          customFacets: {
            pk: keys.pk.isCustom,
            sk: keys.sk.isCustom
          },
          pk: keys.pk.facets,
          sk: keys.sk.facets,
          all: [
            ...keys.pk.facets.map((name) => {
              return {
                name,
                index: keys.index,
                type: "pk"
              };
            }),
            ...keys.sk.facets.map((name) => {
              return {
                name,
                index: keys.index,
                type: "sk"
              };
            })
          ],
          collection: keys.collection,
          hasSubCollections: schema.hasSubCollections,
          casing: {
            pk: keys.pk.casing,
            sk: keys.sk.casing
          }
        };
      }
      setClient(client) {
        if (client !== void 0) {
          for (let entity of Object.values(this.entities)) {
            entity.setClient(client);
          }
        }
      }
      cleanseRetrievedData(index = TableIndex, entities, data = {}, config = {}) {
        if (config.raw) {
          return data;
        }
        const identifiers = getEntityIdentifiers(entities);
        data.Items = data.Items || [];
        const results = {};
        for (let { alias } of identifiers) {
          results[alias] = [];
        }
        for (let i = 0; i < data.Items.length; i++) {
          const record = data.Items[i];
          if (!record) {
            continue;
          }
          const entityAlias = matchToEntityAlias({ identifiers, record, entities: this.entities, allowMatchOnKeys: config.ignoreOwnership });
          if (!entityAlias) {
            continue;
          }
          let formatted;
          if (config.hydrate) {
            formatted = {
              data: record
              // entities[entityAlias]._formatKeysToItem(index, record),
            };
          } else {
            formatted = entities[entityAlias].formatResponse({ Item: record }, index, {
              ...config,
              pager: false,
              parse: void 0
            });
          }
          results[entityAlias].push(formatted.data);
        }
        return results;
      }
      findKeyOwner(lastEvaluatedKey) {
        return Object.values(this.entities)[0];
      }
      expectKeyOwner(lastEvaluatedKey) {
        const owner = this.findKeyOwner(lastEvaluatedKey);
        if (owner === void 0) {
          throw new e.ElectroError(e.ErrorCodes.NoOwnerForCursor, `Supplied cursor does not resolve to Entity within the Service ${this.service.name}`);
        }
        return owner;
      }
      findCursorOwner(cursor) {
        return Object.values(this.entities)[0];
      }
      expectCursorOwner(cursor) {
        const owner = this.findCursorOwner(cursor);
        if (owner === void 0) {
          throw new e.ElectroError(e.ErrorCodes.NoOwnerForCursor, `Supplied cursor does not resolve to Entity within the Service ${this.service.name}`);
        }
        return owner;
      }
      getTableName() {
        return this.service.table;
      }
      setTableName(table) {
        this.service.table = table;
        for (let entity of Object.values(this.entities)) {
          entity.setTableName(table);
        }
      }
      _makeCollectionChain({
        name = "",
        initialClauses = {}
      }, facets = {}) {
        const { entities, attributes: attributes2, identifiers, indexType, index } = this.collectionSchema[name];
        const compositeAttributes = this.compositeAttributes[name];
        const allEntities = Object.values(entities);
        const entity = allEntities[0];
        let filterBuilder = new FilterFactory(attributes2, FilterOperations);
        let whereBuilder = new WhereFactory(attributes2, FilterOperations);
        let clauses2 = { ...initialClauses };
        clauses2 = filterBuilder.injectFilterClauses(clauses2);
        clauses2 = whereBuilder.injectWhereClauses(clauses2);
        const expression = identifiers.expression || "";
        let options = {
          // expressions, // DynamoDB doesnt return what I expect it would when provided with these entity filters
          parse: (options2, data) => {
            if (options2.raw) {
              return data;
            }
            return this.cleanseRetrievedData(index, entities, data, options2);
          },
          formatCursor: {
            serialize: (key) => {
              return this.expectKeyOwner(key).serializeCursor(key);
            },
            deserialize: (cursor) => {
              return this.expectCursorOwner(cursor).deserializeCursor(cursor);
            }
          },
          identifiers: {
            names: identifiers.names || {},
            values: identifiers.values || {},
            expression: allEntities.length > 1 ? `(${expression})` : expression
          },
          expressions: {
            names: {},
            values: {},
            expression: ""
          },
          attributes: attributes2,
          entities,
          indexType,
          compositeAttributes,
          hydrator: async (entity2, index2, items, config) => {
            if (entity2 && entities[entity2]) {
              return entities[entity2].hydrate(index2, items, {
                ...config,
                parse: void 0,
                hydrator: void 0,
                _isCollectionQuery: false,
                ignoreOwnership: config._providedIgnoreOwnership
              });
            }
            let entityItemRefs = {};
            for (let i = 0; i < items.length; i++) {
              const item = items[i];
              for (let entityName in entities) {
                entityItemRefs[entityName] = entityItemRefs[entityName] || [];
                const entity3 = entities[entityName];
                if (entity3.ownsKeys(item)) {
                  entityItemRefs[entityName].push({
                    item,
                    itemSlot: i
                  });
                }
              }
            }
            let unprocessed = [];
            let data = new Array(items.length).fill(null);
            for (const entityName in entityItemRefs) {
              const itemRefs = entityItemRefs[entityName];
              const items2 = itemRefs.map((ref) => ref.item);
              const results = await entities[entity2].hydrate(index2, items2, {
                ...config,
                parse: void 0,
                hydrate: false,
                hydrator: void 0,
                _isCollectionQuery: false,
                ignoreOwnership: config._providedIgnoreOwnership
              });
              unprocessed = unprocessed.concat(results.unprocessed);
              if (results.data.length !== itemRefs.length) {
                throw new Error("Temporary: something wrong");
              }
              for (let r = 0; r < itemRefs.length; r++) {
                const itemRef = itemRefs[r];
                const hydrated = results.data[r];
                data[itemRef.itemSlot] = hydrated;
              }
            }
            return {
              data,
              unprocessed
            };
          }
        };
        return entity.collection(name, clauses2, facets, options);
      }
      _validateIndexCasingMatch(definition = {}, providedIndex = {}) {
        const definitionSk = definition.sk || {};
        const providedSk = providedIndex.sk || {};
        const pkCasingMatch = v.isMatchingCasing(definition.pk.casing, providedIndex.pk.casing);
        const skCasingMatch = v.isMatchingCasing(definitionSk.casing, providedSk.casing);
        return {
          pk: pkCasingMatch,
          sk: skCasingMatch
        };
      }
      _validateCollectionDefinition(definition = {}, providedIndex = {}) {
        let isCustomMatchPK = definition.pk.isCustom === providedIndex.pk.isCustom;
        let isCustomMatchSK = !!(definition.sk && definition.sk.isCustom) === !!(providedIndex.sk && providedIndex.sk.isCustom);
        let indexMatch = definition.index === providedIndex.index;
        let pkFieldMatch = definition.pk.field === providedIndex.pk.field;
        let pkFacetLengthMatch = definition.pk.facets.length === providedIndex.pk.facets.length;
        let mismatchedFacetLabels = [];
        let collectionDifferences = [];
        let definitionIndexName = u.formatIndexNameForDisplay(definition.index);
        let providedIndexName = u.formatIndexNameForDisplay(providedIndex.index);
        let matchingKeyCasing = this._validateIndexCasingMatch(definition, providedIndex);
        for (let i = 0; i < Math.max(definition.pk.labels.length, providedIndex.pk.labels.length); i++) {
          let definitionFacet = definition.pk.labels[i] && definition.pk.labels[i].name;
          let definitionLabel = definition.pk.labels[i] && definition.pk.labels[i].label;
          let providedFacet = providedIndex.pk.labels[i] && providedIndex.pk.labels[i].name;
          let providedLabel = providedIndex.pk.labels[i] && providedIndex.pk.labels[i].label;
          let noLabels = definitionLabel === definitionFacet && providedLabel === providedFacet;
          if (definitionLabel !== providedLabel) {
            mismatchedFacetLabels.push({
              definitionFacet,
              definitionLabel,
              providedFacet,
              providedLabel,
              kind: "Partition",
              type: noLabels ? "facet" : "label"
            });
            break;
          } else if (definitionFacet !== providedFacet) {
            mismatchedFacetLabels.push({
              definitionFacet,
              definitionLabel,
              providedFacet,
              providedLabel,
              kind: "Partition",
              type: "facet"
            });
            break;
          }
        }
        if (!isCustomMatchPK) {
          collectionDifferences.push(`The usage of key templates the partition key on index ${definitionIndexName} must be consistent across all Entities, some entities provided use template while others do not`);
        }
        if (!isCustomMatchSK) {
          collectionDifferences.push(`The usage of key templates the sort key on index ${definitionIndexName} must be consistent across all Entities, some entities provided use template while others do not`);
        }
        if (definition.type === "clustered") {
          for (let i = 0; i < Math.min(definition.sk.labels.length, providedIndex.sk.labels.length); i++) {
            let definitionFacet = definition.sk.labels[i] && definition.sk.labels[i].name;
            let definitionLabel = definition.sk.labels[i] && definition.sk.labels[i].label;
            let providedFacet = providedIndex.sk.labels[i] && providedIndex.sk.labels[i].name;
            let providedLabel = providedIndex.sk.labels[i] && providedIndex.sk.labels[i].label;
            let noLabels = definitionLabel === definitionFacet && providedLabel === providedFacet;
            if (definitionFacet === providedFacet) {
              if (definitionLabel !== providedLabel) {
                mismatchedFacetLabels.push({
                  definitionFacet,
                  definitionLabel,
                  providedFacet,
                  providedLabel,
                  kind: "Sort",
                  type: noLabels ? "facet" : "label"
                });
              }
            } else {
              break;
            }
          }
        }
        if (!matchingKeyCasing.pk) {
          collectionDifferences.push(
            `The pk property "casing" provided "${providedIndex.pk.casing || KeyCasing.default}" does not match established casing "${definition.pk.casing || KeyCasing.default}" on index "${providedIndexName}". Index casing options must match across all entities participating in a collection`
          );
        }
        if (!matchingKeyCasing.sk) {
          const definedSk = definition.sk || {};
          const providedSk = providedIndex.sk || {};
          collectionDifferences.push(
            `The sk property "casing" provided "${definedSk.casing || KeyCasing.default}" does not match established casing "${providedSk.casing || KeyCasing.default}" on index "${providedIndexName}". Index casing options must match across all entities participating in a collection`
          );
        }
        if (!indexMatch) {
          collectionDifferences.push(
            `Collection defined on provided index "${providedIndexName}" does not match collection established index "${definitionIndexName}". Collections must be defined on the same index across all entities within a service.`
          );
        } else if (!pkFieldMatch) {
          collectionDifferences.push(
            `Partition Key composite attributes provided "${providedIndex.pk.field}" for index "${providedIndexName}" do not match established field "${definition.pk.field}" on established index "${definitionIndexName}"`
          );
        }
        if (!pkFacetLengthMatch) {
          collectionDifferences.push(
            `Partition Key composite attributes provided [${providedIndex.pk.facets.map((val2) => `"${val2}"`).join(", ")}] for index "${providedIndexName}" do not match established composite attributes [${definition.pk.facets.map((val2) => `"${val2}"`).join(", ")}] on established index "${definitionIndexName}"`
          );
        } else if (mismatchedFacetLabels.length > 0) {
          for (let mismatch of mismatchedFacetLabels) {
            if (mismatch.type === "facet") {
              collectionDifferences.push(
                `${mismatch.kind} Key composite attributes provided for index "${providedIndexName}" do not match established composite attribute "${mismatch.definitionFacet}" on established index "${definitionIndexName}": "${mismatch.definitionLabel}" != "${mismatch.providedLabel}"; Composite attribute definitions must match between all members of a collection to ensure key structures will resolve to identical Partition Keys. Please ensure these composite attribute definitions are identical for all entities associated with this service.`
              );
            } else {
              collectionDifferences.push(
                `${mismatch.kind} Key composite attributes provided for index "${providedIndexName}" contain conflicting composite attribute labels for established composite attribute "${mismatch.definitionFacet || ""}" on established index "${definitionIndexName}". Established composite attribute "${mismatch.definitionFacet || ""}" on established index "${definitionIndexName}" was defined with label "${mismatch.definitionLabel}" while provided composite attribute "${mismatch.providedFacet || ""}" on provided index "${providedIndexName}" is defined with label "${mismatch.providedLabel}". Composite attribute labels definitions must match between all members of a collection to ensure key structures will resolve to identical Partition Keys. Please ensure these labels definitions are identical for all entities associated with this service.`
              );
            }
          }
        }
        return [!!collectionDifferences.length, collectionDifferences];
      }
      _compareEntityAttributes(entityName, definition = {}, providedAttributes = {}, keys) {
        let results = {
          additions: {},
          invalid: []
        };
        for (let [name, detail] of Object.entries(providedAttributes)) {
          let defined = definition[name];
          if (defined === void 0) {
            results.additions[name] = detail;
          } else if (defined.field !== detail.field) {
            results.invalid.push(
              `The attribute "${name}" with Table Field "${detail.field}" does not match established Table Field "${defined.field}"`
            );
          }
          if (defined && detail && (defined.padding || detail.padding)) {
            const definedPadding = defined.padding || {};
            const detailPadding = detail.padding || {};
            if (keys.pk.facets.includes(name) && (definedPadding.length !== detailPadding.length || definedPadding.char !== detailPadding.char)) {
              results.invalid.push(
                `The attribute "${name}" contains inconsistent padding definitions that impact how keys are formed`
              );
            }
          }
        }
        return [!!results.invalid.length, results];
      }
      _processEntityAttributes(entityName, definition = {}, providedAttributes = {}, keys) {
        let [attributesAreIncompatible, attributeResults] = this._compareEntityAttributes(entityName, definition, providedAttributes, keys);
        if (attributesAreIncompatible) {
          throw new e.ElectroError(e.ErrorCodes.InvalidJoin, `Inconsistent attribute(s) on the entity "${entityName}". The following attribute(s) are defined with incompatible or conflicting definitions across participating entities: ${attributeResults.invalid.join(", ")}. These attribute definitions must match among all members of the collection.`);
        } else {
          return {
            ...definition,
            ...attributeResults.additions
          };
        }
      }
      _processEntityKeys(name, definition = {}, providedIndex = {}) {
        if (!Object.keys(definition).length) {
          definition = providedIndex;
        }
        const [invalidDefinition, invalidIndexMessages] = this._validateCollectionDefinition(definition, providedIndex);
        if (invalidDefinition) {
          throw new e.ElectroError(e.ErrorCodes.InvalidJoin, `Validation Error while joining entity, "${name}". ${invalidIndexMessages.join("; ")}`);
        }
        const sharedSortKeyAttributes = [];
        const sharedSortKeyCompositeAttributeLabels = [];
        const sharedSortKeyLabels = [];
        if (providedIndex.hasSk && definition.hasSk && Array.isArray(definition.sk.labels)) {
          for (let i = 0; i < definition.sk.labels.length; i++) {
            const providedLabels = providedIndex.sk.labels[i];
            const definedLabels = definition.sk.labels[i];
            const namesMatch = providedLabels && providedLabels.name === definedLabels.name;
            const labelsMatch = providedLabels && providedLabels.label === definedLabels.label;
            if (!namesMatch || !labelsMatch) {
              break;
            }
            sharedSortKeyLabels.push({ ...definedLabels });
            sharedSortKeyCompositeAttributeLabels.push({ ...definition.sk.facetLabels[i] });
            sharedSortKeyAttributes.push(definition.sk.facets[i]);
          }
        }
        return {
          ...definition,
          sk: {
            ...definition.sk,
            facets: sharedSortKeyAttributes,
            facetLabels: sharedSortKeyCompositeAttributeLabels,
            labels: sharedSortKeyLabels
          }
        };
      }
      _getEntityIndexFromCollectionName(collection, entity) {
        for (let index of Object.values(entity.model.indexes)) {
          let names = [];
          if (v.isArrayHasLength(index.collection)) {
            names = index.collection;
          } else {
            names.push(index.collection);
          }
          for (let name of names) {
            if (v.isStringHasLength(name) && name === collection) {
              return index;
            }
          }
        }
        return Object.values(entity.model.indexes).find(
          (index) => {
            if (v.isStringHasLength(index.collection)) {
              return index.collection === collection;
            } else if (v.isArrayHasLength(index.collection)) {
              return index.collection.indexOf(collection) > 0;
            }
          }
        );
      }
      _processSubCollections(providedType, existing, provided, entityName, collectionName) {
        let existingSubCollections;
        let providedSubCollections;
        if (v.isArrayHasLength(existing)) {
          existingSubCollections = existing;
        } else {
          existingSubCollections = [existing];
        }
        if (v.isArrayHasLength(provided)) {
          providedSubCollections = provided;
        } else {
          providedSubCollections = [provided];
        }
        if (providedSubCollections.length > 1 && providedType === IndexTypes.clustered) {
          throw new e.ElectroError(e.ErrorCodes.InvalidJoin, `Clustered indexes do not support sub-collections. The sub-collection "${collectionName}", on Entity "${entityName}" must be defined as either an individual collection name or the index must be redefined as an isolated cluster`);
        }
        const existingRequiredIndex = existingSubCollections.indexOf(collectionName);
        const providedRequiredIndex = providedSubCollections.indexOf(collectionName);
        if (providedRequiredIndex < 0) {
          throw new e.ElectroError(e.ErrorCodes.InvalidJoin, `The collection definition for Collection "${collectionName}" does not exist on Entity "${entityName}".`);
        }
        if (existingRequiredIndex >= 0 && existingRequiredIndex !== providedRequiredIndex) {
          throw new e.ElectroError(e.ErrorCodes.InvalidJoin, `The collection definition for Collection "${collectionName}", on Entity "${entityName}", does not match the established sub-collection order for this service. The collection name provided in slot ${providedRequiredIndex + 1}, ${providedSubCollections[existingRequiredIndex] === void 0 ? "(not found)" : `"${providedSubCollections[existingRequiredIndex]}"`}, on Entity "${entityName}", does not match the established collection name in slot ${existingRequiredIndex + 1}, "${collectionName}". When using sub-collections, all Entities within a Service must must implement the same order for all preceding sub-collections.`);
        }
        let length = Math.max(existingRequiredIndex, providedRequiredIndex);
        for (let i = 0; i <= length; i++) {
          let existingCollection = existingSubCollections[i];
          let providedCollection = providedSubCollections[i];
          if (v.isStringHasLength(existingCollection)) {
            if (existingCollection === providedCollection && providedCollection === collectionName) {
              return i;
            }
            if (existingCollection !== providedCollection) {
              throw new e.ElectroError(e.ErrorCodes.InvalidJoin, `The collection definition for Collection "${collectionName}", on Entity "${entityName}", does not match the established sub-collection order for this service. The collection name provided in slot ${i + 1}, "${providedCollection}", on Entity "${entityName}", does not match the established collection name in slot ${i + 1}, "${existingCollection}". When using sub-collections, all Entities within a Service must must implement the same order for all preceding sub-collections.`);
            }
          } else if (v.isStringHasLength(providedCollection)) {
            if (providedCollection === collectionName) {
              return i;
            }
          }
        }
      }
      _addCollectionEntity(collection = "", name = "", entity = {}) {
        let providedIndex = this._getEntityIndexFromCollectionName(
          collection,
          entity
        );
        this.collectionSchema[collection] = this.collectionSchema[collection] || {
          entities: {},
          keys: {},
          attributes: {},
          identifiers: {
            names: {},
            values: {},
            expression: ""
          },
          index: void 0,
          table: "",
          collection: [],
          indexType: void 0,
          hasSubCollections: void 0
        };
        const providedType = providedIndex.type || IndexTypes.isolated;
        if (this.collectionSchema[collection].indexType === void 0) {
          this.collectionSchema[collection].indexType = providedType;
        } else if (this.collectionSchema[collection].indexType !== providedType) {
          throw new e.ElectroError(e.ErrorCodes.InvalidJoin, `Index type mismatch on collection ${collection}. The entity ${name} defines the index as type ${providedType} while the established type for that index is ${this.collectionSchema[collection].indexType}. Note that when omitted, indexes default to the type "${IndexTypes.isolated}"`);
        }
        if (this.collectionSchema[collection].entities[name] !== void 0) {
          throw new e.ElectroError(e.ErrorCodes.InvalidJoin, `Entity with name '${name}' has already been joined to this service.`);
        }
        if (this.collectionSchema[collection].table !== "") {
          if (this.collectionSchema[collection].table !== entity.getTableName()) {
            throw new e.ElectroError(e.ErrorCodes.InvalidJoin, `Entity with name '${name}' is defined to use a different Table than what is defined on other Service Entities and/or the Service itself. Entity '${name}' is defined with table name '${entity.getTableName()}' but the Service has been defined to use table name '${this.collectionSchema[collection].table}'. All Entities in a Service must reference the same DynamoDB table. To ensure all Entities will use the same DynamoDB table, it is possible to apply the property 'table' to the Service constructor's configuration parameter.`);
          }
        } else {
          this.collectionSchema[collection].table = entity.getTableName();
        }
        this.collectionSchema[collection].keys = this._processEntityKeys(name, this.collectionSchema[collection].keys, providedIndex);
        this.collectionSchema[collection].attributes = this._processEntityAttributes(name, this.collectionSchema[collection].attributes, entity.model.schema.attributes, this.collectionSchema[collection].keys);
        this.collectionSchema[collection].entities[name] = entity;
        this.collectionSchema[collection].identifiers = this._processEntityIdentifiers(this.collectionSchema[collection].identifiers, entity.getIdentifierExpressions(name));
        this.collectionSchema[collection].index = this._processEntityCollectionIndex(this.collectionSchema[collection].index, providedIndex.index, name, collection);
        let collectionIndex = this._processSubCollections(
          providedType,
          this.collectionSchema[collection].collection,
          providedIndex.collection,
          name,
          collection
        );
        this.collectionSchema[collection].collection[collectionIndex] = collection;
        this.collectionSchema[collection].hasSubCollections = this.collectionSchema[collection].hasSubCollections || Array.isArray(providedIndex.collection);
        return this.collectionSchema[collection];
      }
      _processEntityCollectionIndex(existing, provided, name, collection) {
        if (typeof provided !== "string") {
          throw new e.ElectroError(e.ErrorCodes.InvalidJoin, `Entity with name '${name}' does not have collection ${collection} defined on it's model`);
        } else if (existing === void 0) {
          return provided;
        } else if (provided !== existing) {
          throw new e.ElectroError(e.ErrorCodes.InvalidJoin, `Entity with name '${name}' defines collection ${collection} on index `);
        } else {
          return existing;
        }
      }
      _processEntityIdentifiers(existing = {}, { names, values, expression } = {}) {
        let identifiers = {};
        if (names) {
          identifiers.names = Object.assign({}, existing.names, names);
        }
        if (values) {
          identifiers.values = Object.assign({}, existing.values, values);
        }
        if (expression) {
          identifiers.expression = [existing.expression, expression].filter(Boolean).join(" OR ");
        }
        return identifiers;
      }
    };
    module2.exports = {
      Service: Service2
    };
  }
});

// node_modules/electrodb/index.js
var require_electrodb = __commonJS({
  "node_modules/electrodb/index.js"(exports, module2) {
    "use strict";
    var { Entity: Entity2 } = require_entity();
    var { Service: Service2 } = require_service();
    var { createGetTransaction, createWriteTransaction } = require_transaction();
    var { createCustomAttribute, CustomAttributeType, createSchema } = require_schema();
    var { ElectroError, ElectroValidationError, ElectroUserValidationError, ElectroAttributeValidationError } = require_errors();
    module2.exports = {
      Entity: Entity2,
      Service: Service2,
      ElectroError,
      createSchema,
      CustomAttributeType,
      createCustomAttribute,
      ElectroValidationError,
      createGetTransaction,
      createWriteTransaction
    };
  }
});

// node_modules/@aws-lambda-powertools/logger/lib/helpers.js
var require_helpers2 = __commonJS({
  "node_modules/@aws-lambda-powertools/logger/lib/helpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createLogger = void 0;
    var _1 = require_lib3();
    var createLogger = (options = {}) => new _1.Logger(options);
    exports.createLogger = createLogger;
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/utils/lambda/LambdaInterface.js
var require_LambdaInterface = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/utils/lambda/LambdaInterface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/utils/lambda/index.js
var require_lambda = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/utils/lambda/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_LambdaInterface(), exports);
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/Utility.js
var require_Utility = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/Utility.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Utility = void 0;
    var Utility = class {
      constructor() {
        this.coldStart = true;
        this.defaultServiceName = "service_undefined";
      }
      getColdStart() {
        if (this.coldStart) {
          this.coldStart = false;
          return true;
        }
        return false;
      }
      isColdStart() {
        return this.getColdStart();
      }
      getDefaultServiceName() {
        return this.defaultServiceName;
      }
      isValidServiceName(serviceName2) {
        return typeof serviceName2 === "string" && serviceName2.trim().length > 0;
      }
    };
    exports.Utility = Utility;
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/config/ConfigService.js
var require_ConfigService = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/config/ConfigService.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConfigService = void 0;
    var ConfigService = class {
    };
    exports.ConfigService = ConfigService;
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/config/EnvironmentVariablesService.js
var require_EnvironmentVariablesService = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/config/EnvironmentVariablesService.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EnvironmentVariablesService = void 0;
    var ConfigService_1 = require_ConfigService();
    var EnvironmentVariablesService = class extends ConfigService_1.ConfigService {
      constructor() {
        super(...arguments);
        this.serviceNameVariable = "POWERTOOLS_SERVICE_NAME";
        this.xRayTraceIdVariable = "_X_AMZN_TRACE_ID";
      }
      get(name) {
        return process.env[name]?.trim() || "";
      }
      getServiceName() {
        return this.get(this.serviceNameVariable);
      }
      getXrayTraceId() {
        const xRayTraceData = this.getXrayTraceData();
        return xRayTraceData?.Root;
      }
      getXrayTraceSampled() {
        const xRayTraceData = this.getXrayTraceData();
        return xRayTraceData?.Sampled === "1";
      }
      isValueTrue(value) {
        const truthyValues = ["1", "y", "yes", "t", "true", "on"];
        return truthyValues.includes(value.toLowerCase());
      }
      getXrayTraceData() {
        const xRayTraceEnv = this.get(this.xRayTraceIdVariable);
        if (xRayTraceEnv === "")
          return void 0;
        if (!xRayTraceEnv.includes("="))
          return { Root: xRayTraceEnv };
        const xRayTraceData = {};
        xRayTraceEnv.split(";").forEach((field) => {
          const [key, value] = field.split("=");
          xRayTraceData[key] = value;
        });
        return xRayTraceData;
      }
    };
    exports.EnvironmentVariablesService = EnvironmentVariablesService;
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/config/index.js
var require_config = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/config/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_ConfigService(), exports);
    __exportStar(require_EnvironmentVariablesService(), exports);
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/samples/resources/contexts/hello-world.js
var require_hello_world = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/samples/resources/contexts/hello-world.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.helloworldContext = void 0;
    var helloworldContext = {
      callbackWaitsForEmptyEventLoop: true,
      functionVersion: "$LATEST",
      functionName: "foo-bar-function",
      memoryLimitInMB: "128",
      logGroupName: "/aws/lambda/foo-bar-function-123456abcdef",
      logStreamName: "2021/03/09/[$LATEST]abcdef123456abcdef123456abcdef123456",
      invokedFunctionArn: "arn:aws:lambda:eu-west-1:123456789012:function:foo-bar-function",
      awsRequestId: "c6af9ac6-7b61-11e6-9a41-93e812345678",
      getRemainingTimeInMillis: () => 1234,
      done: () => console.log("Done!"),
      fail: () => console.log("Failed!"),
      succeed: () => console.log("Succeeded!")
    };
    exports.helloworldContext = helloworldContext;
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/samples/resources/contexts/index.js
var require_contexts = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/samples/resources/contexts/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_hello_world(), exports);
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/samples/resources/events/custom/index.js
var require_custom = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/samples/resources/events/custom/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomEvent = void 0;
    exports.CustomEvent = {
      key1: "value1",
      key2: "value2",
      key3: "value3"
    };
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/samples/resources/events/index.js
var require_events2 = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/samples/resources/events/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Custom = void 0;
    exports.Custom = __importStar(require_custom());
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/types/middy.js
var require_middy = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/types/middy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/types/utils.js
var require_utils = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/types/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isNullOrUndefined = exports.isTruthy = exports.isString = exports.isRecord = void 0;
    var isRecord = (value) => {
      return Object.prototype.toString.call(value) === "[object Object]" && !Object.is(value, null);
    };
    exports.isRecord = isRecord;
    var isTruthy = (value) => {
      if (typeof value === "string") {
        return value !== "";
      } else if (typeof value === "number") {
        return value !== 0;
      } else if (typeof value === "boolean") {
        return value;
      } else if (Array.isArray(value)) {
        return value.length > 0;
      } else if (isRecord(value)) {
        return Object.keys(value).length > 0;
      } else {
        return false;
      }
    };
    exports.isTruthy = isTruthy;
    var isNullOrUndefined = (value) => {
      return Object.is(value, null) || Object.is(value, void 0);
    };
    exports.isNullOrUndefined = isNullOrUndefined;
    var isString = (value) => {
      return typeof value === "string";
    };
    exports.isString = isString;
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/version.js
var require_version = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PT_VERSION = void 0;
    exports.PT_VERSION = "1.13.1";
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/awsSdk/utils.js
var require_utils2 = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/awsSdk/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isSdkClient = void 0;
    var isSdkClient = (client) => typeof client === "object" && client !== null && "send" in client && typeof client.send === "function" && "config" in client && client.config !== void 0 && typeof client.config === "object" && client.config !== null && "middlewareStack" in client && client.middlewareStack !== void 0 && typeof client.middlewareStack === "object" && client.middlewareStack !== null && "identify" in client.middlewareStack && typeof client.middlewareStack.identify === "function" && "addRelativeTo" in client.middlewareStack && typeof client.middlewareStack.addRelativeTo === "function";
    exports.isSdkClient = isSdkClient;
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/awsSdk/userAgentMiddleware.js
var require_userAgentMiddleware = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/awsSdk/userAgentMiddleware.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addUserAgentMiddleware = exports.customUserAgentMiddleware = void 0;
    var version_1 = require_version();
    var utils_1 = require_utils2();
    var EXEC_ENV = process.env.AWS_EXECUTION_ENV || "NA";
    var middlewareOptions = {
      relation: "after",
      toMiddleware: "getUserAgentMiddleware",
      name: "addPowertoolsToUserAgent",
      tags: ["POWERTOOLS", "USER_AGENT"]
    };
    var customUserAgentMiddleware = (feature) => {
      return (next) => async (args) => {
        const powertoolsUserAgent = `PT/${feature}/${version_1.PT_VERSION} PTEnv/${EXEC_ENV}`;
        args.request.headers["user-agent"] = `${args.request.headers["user-agent"]} ${powertoolsUserAgent}`;
        return await next(args);
      };
    };
    exports.customUserAgentMiddleware = customUserAgentMiddleware;
    var addUserAgentMiddleware = (client, feature) => {
      try {
        if ((0, utils_1.isSdkClient)(client)) {
          if (client.middlewareStack.identify().includes("addPowertoolsToUserAgent: POWERTOOLS,USER_AGENT")) {
            return;
          }
          client.middlewareStack.addRelativeTo(customUserAgentMiddleware(feature), middlewareOptions);
        } else {
          throw new Error(`The client provided does not match the expected interface`);
        }
      } catch (e) {
        console.warn("Failed to add user agent middleware", e);
      }
    };
    exports.addUserAgentMiddleware = addUserAgentMiddleware;
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/awsSdk/index.js
var require_awsSdk = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/awsSdk/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isSdkClient = exports.addUserAgentMiddleware = void 0;
    var userAgentMiddleware_1 = require_userAgentMiddleware();
    Object.defineProperty(exports, "addUserAgentMiddleware", { enumerable: true, get: function() {
      return userAgentMiddleware_1.addUserAgentMiddleware;
    } });
    var utils_1 = require_utils2();
    Object.defineProperty(exports, "isSdkClient", { enumerable: true, get: function() {
      return utils_1.isSdkClient;
    } });
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Events = exports.ContextExamples = void 0;
    __exportStar(require_lambda(), exports);
    __exportStar(require_Utility(), exports);
    __exportStar(require_config(), exports);
    exports.ContextExamples = __importStar(require_contexts());
    exports.Events = __importStar(require_events2());
    __exportStar(require_middy(), exports);
    __exportStar(require_utils(), exports);
    __exportStar(require_awsSdk(), exports);
  }
});

// node_modules/@aws-lambda-powertools/logger/lib/formatter/LogFormatter.js
var require_LogFormatter = __commonJS({
  "node_modules/@aws-lambda-powertools/logger/lib/formatter/LogFormatter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogFormatter = void 0;
    var isErrorWithCause = (error) => {
      return "cause" in error;
    };
    var LogFormatter = class {
      formatError(error) {
        return {
          name: error.name,
          location: this.getCodeLocation(error.stack),
          message: error.message,
          stack: error.stack,
          cause: isErrorWithCause(error) ? error.cause instanceof Error ? this.formatError(error.cause) : error.cause : void 0
        };
      }
      formatTimestamp(now) {
        return now.toISOString();
      }
      getCodeLocation(stack) {
        if (!stack) {
          return "";
        }
        const stackLines = stack.split("\n");
        const regex = /\((.*):(\d+):(\d+)\)\\?$/;
        let i;
        for (i = 0; i < stackLines.length; i++) {
          const match = regex.exec(stackLines[i]);
          if (Array.isArray(match)) {
            return `${match[1]}:${Number(match[2])}`;
          }
        }
        return "";
      }
    };
    exports.LogFormatter = LogFormatter;
  }
});

// node_modules/@aws-lambda-powertools/logger/lib/formatter/LogFormatterInterface.js
var require_LogFormatterInterface = __commonJS({
  "node_modules/@aws-lambda-powertools/logger/lib/formatter/LogFormatterInterface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@aws-lambda-powertools/logger/lib/formatter/PowertoolLogFormatter.js
var require_PowertoolLogFormatter = __commonJS({
  "node_modules/@aws-lambda-powertools/logger/lib/formatter/PowertoolLogFormatter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PowertoolLogFormatter = void 0;
    var _1 = require_formatter();
    var PowertoolLogFormatter = class extends _1.LogFormatter {
      formatAttributes(attributes2) {
        return {
          cold_start: attributes2.lambdaContext?.coldStart,
          function_arn: attributes2.lambdaContext?.invokedFunctionArn,
          function_memory_size: attributes2.lambdaContext?.memoryLimitInMB,
          function_name: attributes2.lambdaContext?.functionName,
          function_request_id: attributes2.lambdaContext?.awsRequestId,
          level: attributes2.logLevel,
          message: attributes2.message,
          sampling_rate: attributes2.sampleRateValue,
          service: attributes2.serviceName,
          timestamp: this.formatTimestamp(attributes2.timestamp),
          xray_trace_id: attributes2.xRayTraceId
        };
      }
    };
    exports.PowertoolLogFormatter = PowertoolLogFormatter;
  }
});

// node_modules/@aws-lambda-powertools/logger/lib/formatter/index.js
var require_formatter = __commonJS({
  "node_modules/@aws-lambda-powertools/logger/lib/formatter/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_LogFormatter(), exports);
    __exportStar(require_LogFormatterInterface(), exports);
    __exportStar(require_PowertoolLogFormatter(), exports);
  }
});

// node_modules/lodash.merge/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.merge/index.js"(exports, module2) {
    "use strict";
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var asyncTag = "[object AsyncFunction]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var nullTag = "[object Null]";
    var objectTag = "[object Object]";
    var proxyTag = "[object Proxy]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var undefinedTag = "[object Undefined]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString = objectProto.toString;
    var objectCtorString = funcToString.call(Object);
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var Symbol2 = root.Symbol;
    var Uint8Array2 = root.Uint8Array;
    var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    var objectCreate = Object.create;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var nativeMax = Math.max;
    var nativeNow = Date.now;
    var Map2 = getNative(root, "Map");
    var nativeCreate = getNative(Object, "create");
    var baseCreate = function() {
      function object() {
      }
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignMergeValue(object, key, value) {
      if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    var baseFor = createBaseFor();
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack());
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
          if (newValue === void 0) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
      var isCommon = newValue === void 0;
      if (isCommon) {
        var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }
      if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + "");
    }
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
        return eq(object[index], value);
      }
      return false;
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function overRest(func, start, transform) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }
    function safeGet(object, key) {
      if (key === "constructor" && typeof object[key] === "function") {
        return;
      }
      if (key == "__proto__") {
        return;
      }
      return object[key];
    }
    var setToString = shortOut(baseSetToString);
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });
    function constant(value) {
      return function() {
        return value;
      };
    }
    function identity(value) {
      return value;
    }
    function stubFalse() {
      return false;
    }
    module2.exports = merge;
  }
});

// node_modules/@aws-lambda-powertools/logger/lib/log/LogItem.js
var require_LogItem = __commonJS({
  "node_modules/@aws-lambda-powertools/logger/lib/log/LogItem.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogItem = void 0;
    var lodash_merge_1 = __importDefault(require_lodash());
    var LogItem = class {
      constructor(params) {
        this.attributes = {};
        this.addAttributes(params.baseAttributes);
        this.addAttributes(params.persistentAttributes);
      }
      addAttributes(attributes2) {
        this.attributes = (0, lodash_merge_1.default)(this.attributes, attributes2);
        return this;
      }
      getAttributes() {
        return this.attributes;
      }
      prepareForPrint() {
        this.setAttributes(this.removeEmptyKeys(this.getAttributes()));
      }
      removeEmptyKeys(attributes2) {
        const newAttributes = {};
        for (const key in attributes2) {
          if (attributes2[key] !== void 0 && attributes2[key] !== "" && attributes2[key] !== null) {
            newAttributes[key] = attributes2[key];
          }
        }
        return newAttributes;
      }
      setAttributes(attributes2) {
        this.attributes = attributes2;
      }
    };
    exports.LogItem = LogItem;
  }
});

// node_modules/@aws-lambda-powertools/logger/lib/log/LogItemInterface.js
var require_LogItemInterface = __commonJS({
  "node_modules/@aws-lambda-powertools/logger/lib/log/LogItemInterface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@aws-lambda-powertools/logger/lib/log/index.js
var require_log = __commonJS({
  "node_modules/@aws-lambda-powertools/logger/lib/log/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_LogItem(), exports);
    __exportStar(require_LogItemInterface(), exports);
  }
});

// node_modules/@aws-lambda-powertools/logger/lib/config/ConfigServiceInterface.js
var require_ConfigServiceInterface = __commonJS({
  "node_modules/@aws-lambda-powertools/logger/lib/config/ConfigServiceInterface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@aws-lambda-powertools/logger/lib/config/EnvironmentVariablesService.js
var require_EnvironmentVariablesService2 = __commonJS({
  "node_modules/@aws-lambda-powertools/logger/lib/config/EnvironmentVariablesService.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EnvironmentVariablesService = void 0;
    var commons_1 = require_lib2();
    var EnvironmentVariablesService = class extends commons_1.EnvironmentVariablesService {
      constructor() {
        super(...arguments);
        this.awsRegionVariable = "AWS_REGION";
        this.currentEnvironmentVariable = "ENVIRONMENT";
        this.devModeVariable = "POWERTOOLS_DEV";
        this.functionNameVariable = "AWS_LAMBDA_FUNCTION_NAME";
        this.functionVersionVariable = "AWS_LAMBDA_FUNCTION_VERSION";
        this.logEventVariable = "POWERTOOLS_LOGGER_LOG_EVENT";
        this.logLevelVariable = "LOG_LEVEL";
        this.memoryLimitInMBVariable = "AWS_LAMBDA_FUNCTION_MEMORY_SIZE";
        this.sampleRateValueVariable = "POWERTOOLS_LOGGER_SAMPLE_RATE";
      }
      getAwsRegion() {
        return this.get(this.awsRegionVariable);
      }
      getCurrentEnvironment() {
        return this.get(this.currentEnvironmentVariable);
      }
      getFunctionMemory() {
        const value = this.get(this.memoryLimitInMBVariable);
        return Number(value);
      }
      getFunctionName() {
        return this.get(this.functionNameVariable);
      }
      getFunctionVersion() {
        return this.get(this.functionVersionVariable);
      }
      getLogEvent() {
        const value = this.get(this.logEventVariable);
        return this.isValueTrue(value);
      }
      getLogLevel() {
        return this.get(this.logLevelVariable);
      }
      getSampleRateValue() {
        const value = this.get(this.sampleRateValueVariable);
        return value && value.length > 0 ? Number(value) : void 0;
      }
      isDevMode() {
        const value = this.get(this.devModeVariable);
        return this.isValueTrue(value);
      }
    };
    exports.EnvironmentVariablesService = EnvironmentVariablesService;
  }
});

// node_modules/@aws-lambda-powertools/logger/lib/config/index.js
var require_config2 = __commonJS({
  "node_modules/@aws-lambda-powertools/logger/lib/config/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_ConfigServiceInterface(), exports);
    __exportStar(require_EnvironmentVariablesService2(), exports);
  }
});

// node_modules/@aws-lambda-powertools/logger/lib/Logger.js
var require_Logger = __commonJS({
  "node_modules/@aws-lambda-powertools/logger/lib/Logger.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Logger = void 0;
    var node_crypto_1 = require("node:crypto");
    var node_console_1 = require("node:console");
    var commons_1 = require_lib2();
    var formatter_1 = require_formatter();
    var log_1 = require_log();
    var lodash_merge_1 = __importDefault(require_lodash());
    var config_1 = require_config2();
    var Logger2 = class _Logger extends commons_1.Utility {
      get level() {
        return this.logLevel;
      }
      constructor(options = {}) {
        super();
        this.logEvent = false;
        this.logIndentation = 0;
        this.logLevel = 12;
        this.logLevelThresholds = {
          DEBUG: 8,
          INFO: 12,
          WARN: 16,
          ERROR: 20,
          CRITICAL: 24,
          SILENT: 28
        };
        this.logsSampled = false;
        this.persistentLogAttributes = {};
        this.powertoolLogData = {};
        this.setOptions(options);
      }
      addContext(context) {
        const lambdaContext = {
          invokedFunctionArn: context.invokedFunctionArn,
          coldStart: this.getColdStart(),
          awsRequestId: context.awsRequestId,
          memoryLimitInMB: Number(context.memoryLimitInMB),
          functionName: context.functionName,
          functionVersion: context.functionVersion
        };
        this.addToPowertoolLogData({
          lambdaContext
        });
      }
      addPersistentLogAttributes(attributes2) {
        (0, lodash_merge_1.default)(this.persistentLogAttributes, attributes2);
      }
      appendKeys(attributes2) {
        this.addPersistentLogAttributes(attributes2);
      }
      createChild(options = {}) {
        const parentsOptions = {
          logLevel: this.getLevelName(),
          customConfigService: this.getCustomConfigService(),
          logFormatter: this.getLogFormatter()
        };
        const parentsPowertoolsLogData = this.getPowertoolLogData();
        const childLogger = this.createLogger((0, lodash_merge_1.default)(parentsOptions, parentsPowertoolsLogData, options));
        const parentsPersistentLogAttributes = this.getPersistentLogAttributes();
        childLogger.addPersistentLogAttributes(parentsPersistentLogAttributes);
        if (parentsPowertoolsLogData.lambdaContext) {
          childLogger.addContext(parentsPowertoolsLogData.lambdaContext);
        }
        return childLogger;
      }
      critical(input, ...extraInput) {
        this.processLogItem(24, input, extraInput);
      }
      debug(input, ...extraInput) {
        this.processLogItem(8, input, extraInput);
      }
      error(input, ...extraInput) {
        this.processLogItem(20, input, extraInput);
      }
      getLevelName() {
        return this.getLogLevelNameFromNumber(this.logLevel);
      }
      getLogEvent() {
        return this.logEvent;
      }
      getLogsSampled() {
        return this.logsSampled;
      }
      getPersistentLogAttributes() {
        return this.persistentLogAttributes;
      }
      info(input, ...extraInput) {
        this.processLogItem(12, input, extraInput);
      }
      injectLambdaContext(options) {
        return (_target, _propertyKey, descriptor) => {
          const originalMethod = descriptor.value;
          const loggerRef = this;
          descriptor.value = async function(event, context, callback) {
            let initialPersistentAttributes = {};
            if (options && options.clearState === true) {
              initialPersistentAttributes = {
                ...loggerRef.getPersistentLogAttributes()
              };
            }
            _Logger.injectLambdaContextBefore(loggerRef, event, context, options);
            let result;
            try {
              result = await originalMethod.apply(this, [event, context, callback]);
            } catch (error) {
              throw error;
            } finally {
              _Logger.injectLambdaContextAfterOrOnError(loggerRef, initialPersistentAttributes, options);
            }
            return result;
          };
        };
      }
      static injectLambdaContextAfterOrOnError(logger2, initialPersistentAttributes, options) {
        if (options && options.clearState === true) {
          logger2.setPersistentLogAttributes(initialPersistentAttributes);
        }
      }
      static injectLambdaContextBefore(logger2, event, context, options) {
        logger2.addContext(context);
        let shouldLogEvent = void 0;
        if (options && options.hasOwnProperty("logEvent")) {
          shouldLogEvent = options.logEvent;
        }
        logger2.logEventIfEnabled(event, shouldLogEvent);
      }
      logEventIfEnabled(event, overwriteValue) {
        if (!this.shouldLogEvent(overwriteValue)) {
          return;
        }
        this.info("Lambda invocation event", { event });
      }
      refreshSampleRateCalculation() {
        this.setLogsSampled();
      }
      removeKeys(keys) {
        this.removePersistentLogAttributes(keys);
      }
      removePersistentLogAttributes(keys) {
        keys.forEach((key) => {
          if (this.persistentLogAttributes && key in this.persistentLogAttributes) {
            delete this.persistentLogAttributes[key];
          }
        });
      }
      setLogLevel(logLevel) {
        if (this.isValidLogLevel(logLevel)) {
          this.logLevel = this.logLevelThresholds[logLevel];
        } else {
          throw new Error(`Invalid log level: ${logLevel}`);
        }
      }
      setPersistentLogAttributes(attributes2) {
        this.persistentLogAttributes = attributes2;
      }
      setSampleRateValue(sampleRateValue) {
        this.powertoolLogData.sampleRateValue = sampleRateValue || this.getCustomConfigService()?.getSampleRateValue() || this.getEnvVarsService().getSampleRateValue();
      }
      shouldLogEvent(overwriteValue) {
        if (typeof overwriteValue === "boolean") {
          return overwriteValue;
        }
        return this.getLogEvent();
      }
      warn(input, ...extraInput) {
        this.processLogItem(16, input, extraInput);
      }
      createLogger(options) {
        return new _Logger(options);
      }
      shouldPrint(logLevel) {
        if (logLevel >= this.logLevel) {
          return true;
        }
        return this.getLogsSampled();
      }
      addToPowertoolLogData(...attributesArray) {
        attributesArray.forEach((attributes2) => {
          (0, lodash_merge_1.default)(this.powertoolLogData, attributes2);
        });
      }
      createAndPopulateLogItem(logLevel, input, extraInput) {
        const unformattedBaseAttributes = (0, lodash_merge_1.default)({
          logLevel: this.getLogLevelNameFromNumber(logLevel),
          timestamp: /* @__PURE__ */ new Date(),
          message: typeof input === "string" ? input : input.message,
          xRayTraceId: this.envVarsService.getXrayTraceId()
        }, this.getPowertoolLogData());
        const logItem = new log_1.LogItem({
          baseAttributes: this.getLogFormatter().formatAttributes(unformattedBaseAttributes),
          persistentAttributes: this.getPersistentLogAttributes()
        });
        if (typeof input !== "string") {
          logItem.addAttributes(input);
        }
        extraInput.forEach((item) => {
          const attributes2 = item instanceof Error ? { error: item } : typeof item === "string" ? { extra: item } : item;
          logItem.addAttributes(attributes2);
        });
        return logItem;
      }
      getCustomConfigService() {
        return this.customConfigService;
      }
      getEnvVarsService() {
        return this.envVarsService;
      }
      getLogFormatter() {
        return this.logFormatter;
      }
      getLogLevelNameFromNumber(logLevel) {
        const found = Object.entries(this.logLevelThresholds).find(([key, value]) => {
          if (value === logLevel) {
            return key;
          }
        });
        return found[0];
      }
      getPowertoolLogData() {
        return this.powertoolLogData;
      }
      getReplacer() {
        const references = /* @__PURE__ */ new WeakSet();
        return (key, value) => {
          let item = value;
          if (item instanceof Error) {
            item = this.getLogFormatter().formatError(item);
          }
          if (typeof item === "bigint") {
            return item.toString();
          }
          if (typeof item === "object" && value !== null) {
            if (references.has(item)) {
              return;
            }
            references.add(item);
          }
          return item;
        };
      }
      getSampleRateValue() {
        if (!this.powertoolLogData.sampleRateValue) {
          this.setSampleRateValue();
        }
        return this.powertoolLogData.sampleRateValue;
      }
      isValidLogLevel(logLevel) {
        return typeof logLevel === "string" && logLevel in this.logLevelThresholds;
      }
      printLog(logLevel, log) {
        log.prepareForPrint();
        const consoleMethod = logLevel === 24 ? "error" : this.getLogLevelNameFromNumber(logLevel).toLowerCase();
        this.console[consoleMethod](JSON.stringify(log.getAttributes(), this.getReplacer(), this.logIndentation));
      }
      processLogItem(logLevel, input, extraInput) {
        if (!this.shouldPrint(logLevel)) {
          return;
        }
        this.printLog(logLevel, this.createAndPopulateLogItem(logLevel, input, extraInput));
      }
      setConsole() {
        if (!this.getEnvVarsService().isDevMode()) {
          this.console = new node_console_1.Console({
            stdout: process.stdout,
            stderr: process.stderr
          });
        } else {
          this.console = console;
        }
      }
      setCustomConfigService(customConfigService) {
        this.customConfigService = customConfigService ? customConfigService : void 0;
      }
      setEnvVarsService() {
        this.envVarsService = new config_1.EnvironmentVariablesService();
      }
      setInitialLogLevel(logLevel) {
        const constructorLogLevel = logLevel?.toUpperCase();
        if (this.isValidLogLevel(constructorLogLevel)) {
          this.logLevel = this.logLevelThresholds[constructorLogLevel];
          return;
        }
        const customConfigValue = this.getCustomConfigService()?.getLogLevel()?.toUpperCase();
        if (this.isValidLogLevel(customConfigValue)) {
          this.logLevel = this.logLevelThresholds[customConfigValue];
          return;
        }
        const envVarsValue = this.getEnvVarsService()?.getLogLevel()?.toUpperCase();
        if (this.isValidLogLevel(envVarsValue)) {
          this.logLevel = this.logLevelThresholds[envVarsValue];
          return;
        }
      }
      setLogEvent() {
        if (this.getEnvVarsService().getLogEvent()) {
          this.logEvent = true;
        }
      }
      setLogFormatter(logFormatter) {
        this.logFormatter = logFormatter || new formatter_1.PowertoolLogFormatter();
      }
      setLogIndentation() {
        if (this.getEnvVarsService().isDevMode()) {
          this.logIndentation = 4;
        }
      }
      setLogsSampled() {
        const sampleRateValue = this.getSampleRateValue();
        this.logsSampled = sampleRateValue !== void 0 && (sampleRateValue === 1 || (0, node_crypto_1.randomInt)(0, 100) / 100 <= sampleRateValue);
      }
      setOptions(options) {
        const { logLevel, serviceName: serviceName2, sampleRateValue, logFormatter, customConfigService, persistentLogAttributes, environment } = options;
        this.setEnvVarsService();
        this.setConsole();
        this.setCustomConfigService(customConfigService);
        this.setInitialLogLevel(logLevel);
        this.setSampleRateValue(sampleRateValue);
        this.setLogsSampled();
        this.setLogFormatter(logFormatter);
        this.setPowertoolLogData(serviceName2, environment);
        this.setLogEvent();
        this.setLogIndentation();
        this.addPersistentLogAttributes(persistentLogAttributes);
        return this;
      }
      setPowertoolLogData(serviceName2, environment, persistentLogAttributes = {}) {
        this.addToPowertoolLogData({
          awsRegion: this.getEnvVarsService().getAwsRegion(),
          environment: environment || this.getCustomConfigService()?.getCurrentEnvironment() || this.getEnvVarsService().getCurrentEnvironment(),
          sampleRateValue: this.getSampleRateValue(),
          serviceName: serviceName2 || this.getCustomConfigService()?.getServiceName() || this.getEnvVarsService().getServiceName() || this.getDefaultServiceName()
        }, persistentLogAttributes);
      }
    };
    exports.Logger = Logger2;
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/middleware/constants.js
var require_constants = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/middleware/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IDEMPOTENCY_KEY = exports.LOGGER_KEY = exports.METRICS_KEY = exports.TRACER_KEY = exports.PREFIX = void 0;
    var PREFIX = "powertools-for-aws";
    exports.PREFIX = PREFIX;
    var TRACER_KEY = `${PREFIX}.tracer`;
    exports.TRACER_KEY = TRACER_KEY;
    var METRICS_KEY = `${PREFIX}.metrics`;
    exports.METRICS_KEY = METRICS_KEY;
    var LOGGER_KEY = `${PREFIX}.logger`;
    exports.LOGGER_KEY = LOGGER_KEY;
    var IDEMPOTENCY_KEY = `${PREFIX}.idempotency`;
    exports.IDEMPOTENCY_KEY = IDEMPOTENCY_KEY;
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/middleware/cleanupMiddlewares.js
var require_cleanupMiddlewares = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/middleware/cleanupMiddlewares.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cleanupMiddlewares = void 0;
    var constants_1 = require_constants();
    var isFunction = (obj) => {
      return typeof obj === "function";
    };
    var cleanupMiddlewares = async (request) => {
      const cleanupFunctionNames = [
        constants_1.TRACER_KEY,
        constants_1.METRICS_KEY,
        constants_1.LOGGER_KEY,
        constants_1.IDEMPOTENCY_KEY
      ];
      for (const functionName of cleanupFunctionNames) {
        if (Object(request.internal).hasOwnProperty(functionName)) {
          const functionReference = request.internal[functionName];
          if (isFunction(functionReference)) {
            await functionReference(request);
          }
        }
      }
    };
    exports.cleanupMiddlewares = cleanupMiddlewares;
  }
});

// node_modules/@aws-lambda-powertools/commons/lib/middleware/index.js
var require_middleware = __commonJS({
  "node_modules/@aws-lambda-powertools/commons/lib/middleware/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_cleanupMiddlewares(), exports);
    __exportStar(require_constants(), exports);
  }
});

// node_modules/@aws-lambda-powertools/logger/lib/middleware/middy.js
var require_middy2 = __commonJS({
  "node_modules/@aws-lambda-powertools/logger/lib/middleware/middy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.injectLambdaContext = void 0;
    var Logger_1 = require_Logger();
    var middleware_1 = require_middleware();
    var injectLambdaContext = (target, options) => {
      const loggers = target instanceof Array ? target : [target];
      const persistentAttributes = [];
      const isClearState = options && options.clearState === true;
      const setCleanupFunction = (request) => {
        request.internal = {
          ...request.internal,
          [middleware_1.LOGGER_KEY]: injectLambdaContextAfterOrOnError
        };
      };
      const injectLambdaContextBefore = async (request) => {
        loggers.forEach((logger2, index) => {
          if (isClearState) {
            persistentAttributes[index] = {
              ...logger2.getPersistentLogAttributes()
            };
            setCleanupFunction(request);
          }
          Logger_1.Logger.injectLambdaContextBefore(logger2, request.event, request.context, options);
        });
      };
      const injectLambdaContextAfterOrOnError = async () => {
        if (isClearState) {
          loggers.forEach((logger2, index) => {
            Logger_1.Logger.injectLambdaContextAfterOrOnError(logger2, persistentAttributes[index], options);
          });
        }
      };
      return {
        before: injectLambdaContextBefore,
        after: injectLambdaContextAfterOrOnError,
        onError: injectLambdaContextAfterOrOnError
      };
    };
    exports.injectLambdaContext = injectLambdaContext;
  }
});

// node_modules/@aws-lambda-powertools/logger/lib/middleware/index.js
var require_middleware2 = __commonJS({
  "node_modules/@aws-lambda-powertools/logger/lib/middleware/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_middy2(), exports);
  }
});

// node_modules/@aws-lambda-powertools/logger/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/@aws-lambda-powertools/logger/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_helpers2(), exports);
    __exportStar(require_Logger(), exports);
    __exportStar(require_middleware2(), exports);
    __exportStar(require_formatter(), exports);
  }
});

// node_modules/@aws-lambda-powertools/tracer/lib/helpers.js
var require_helpers3 = __commonJS({
  "node_modules/@aws-lambda-powertools/tracer/lib/helpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createTracer = void 0;
    var _1 = require_lib5();
    var createTracer = (options = {}) => new _1.Tracer(options);
    exports.createTracer = createTracer;
  }
});

// node_modules/@aws-lambda-powertools/tracer/lib/config/ConfigServiceInterface.js
var require_ConfigServiceInterface2 = __commonJS({
  "node_modules/@aws-lambda-powertools/tracer/lib/config/ConfigServiceInterface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@aws-lambda-powertools/tracer/lib/config/EnvironmentVariablesService.js
var require_EnvironmentVariablesService3 = __commonJS({
  "node_modules/@aws-lambda-powertools/tracer/lib/config/EnvironmentVariablesService.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EnvironmentVariablesService = void 0;
    var commons_1 = require_lib2();
    var EnvironmentVariablesService = class extends commons_1.EnvironmentVariablesService {
      constructor() {
        super(...arguments);
        this.awsExecutionEnv = "AWS_EXECUTION_ENV";
        this.samLocalVariable = "AWS_SAM_LOCAL";
        this.tracerCaptureErrorVariable = "POWERTOOLS_TRACER_CAPTURE_ERROR";
        this.tracerCaptureHTTPsRequestsVariable = "POWERTOOLS_TRACER_CAPTURE_HTTPS_REQUESTS";
        this.tracerCaptureResponseVariable = "POWERTOOLS_TRACER_CAPTURE_RESPONSE";
        this.tracingEnabledVariable = "POWERTOOLS_TRACE_ENABLED";
      }
      getAwsExecutionEnv() {
        return this.get(this.awsExecutionEnv);
      }
      getCaptureHTTPsRequests() {
        return this.get(this.tracerCaptureHTTPsRequestsVariable);
      }
      getSamLocal() {
        return this.get(this.samLocalVariable);
      }
      getTracingCaptureError() {
        return this.get(this.tracerCaptureErrorVariable);
      }
      getTracingCaptureResponse() {
        return this.get(this.tracerCaptureResponseVariable);
      }
      getTracingEnabled() {
        return this.get(this.tracingEnabledVariable);
      }
    };
    exports.EnvironmentVariablesService = EnvironmentVariablesService;
  }
});

// node_modules/@aws-lambda-powertools/tracer/lib/config/index.js
var require_config3 = __commonJS({
  "node_modules/@aws-lambda-powertools/tracer/lib/config/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_ConfigServiceInterface2(), exports);
    __exportStar(require_EnvironmentVariablesService3(), exports);
  }
});

// node_modules/shimmer/index.js
var require_shimmer = __commonJS({
  "node_modules/shimmer/index.js"(exports, module2) {
    "use strict";
    function isFunction(funktion) {
      return typeof funktion === "function";
    }
    var logger2 = console.error.bind(console);
    function defineProperty(obj, name, value) {
      var enumerable = !!obj[name] && obj.propertyIsEnumerable(name);
      Object.defineProperty(obj, name, {
        configurable: true,
        enumerable,
        writable: true,
        value
      });
    }
    function shimmer(options) {
      if (options && options.logger) {
        if (!isFunction(options.logger))
          logger2("new logger isn't a function, not replacing");
        else
          logger2 = options.logger;
      }
    }
    function wrap(nodule, name, wrapper) {
      if (!nodule || !nodule[name]) {
        logger2("no original function " + name + " to wrap");
        return;
      }
      if (!wrapper) {
        logger2("no wrapper function");
        logger2(new Error().stack);
        return;
      }
      if (!isFunction(nodule[name]) || !isFunction(wrapper)) {
        logger2("original object and wrapper must be functions");
        return;
      }
      var original = nodule[name];
      var wrapped = wrapper(original, name);
      defineProperty(wrapped, "__original", original);
      defineProperty(wrapped, "__unwrap", function() {
        if (nodule[name] === wrapped)
          defineProperty(nodule, name, original);
      });
      defineProperty(wrapped, "__wrapped", true);
      defineProperty(nodule, name, wrapped);
      return wrapped;
    }
    function massWrap(nodules, names, wrapper) {
      if (!nodules) {
        logger2("must provide one or more modules to patch");
        logger2(new Error().stack);
        return;
      } else if (!Array.isArray(nodules)) {
        nodules = [nodules];
      }
      if (!(names && Array.isArray(names))) {
        logger2("must provide one or more functions to wrap on modules");
        return;
      }
      nodules.forEach(function(nodule) {
        names.forEach(function(name) {
          wrap(nodule, name, wrapper);
        });
      });
    }
    function unwrap(nodule, name) {
      if (!nodule || !nodule[name]) {
        logger2("no function to unwrap.");
        logger2(new Error().stack);
        return;
      }
      if (!nodule[name].__unwrap) {
        logger2("no original to unwrap to -- has " + name + " already been unwrapped?");
      } else {
        return nodule[name].__unwrap();
      }
    }
    function massUnwrap(nodules, names) {
      if (!nodules) {
        logger2("must provide one or more modules to patch");
        logger2(new Error().stack);
        return;
      } else if (!Array.isArray(nodules)) {
        nodules = [nodules];
      }
      if (!(names && Array.isArray(names))) {
        logger2("must provide one or more functions to unwrap on modules");
        return;
      }
      nodules.forEach(function(nodule) {
        names.forEach(function(name) {
          unwrap(nodule, name);
        });
      });
    }
    shimmer.wrap = wrap;
    shimmer.massWrap = massWrap;
    shimmer.unwrap = unwrap;
    shimmer.massUnwrap = massUnwrap;
    module2.exports = shimmer;
  }
});

// node_modules/emitter-listener/listener.js
var require_listener = __commonJS({
  "node_modules/emitter-listener/listener.js"(exports, module2) {
    "use strict";
    var shimmer = require_shimmer();
    var wrap = shimmer.wrap;
    var unwrap = shimmer.unwrap;
    var SYMBOL = "wrap@before";
    function defineProperty(obj, name, value) {
      var enumerable = !!obj[name] && obj.propertyIsEnumerable(name);
      Object.defineProperty(obj, name, {
        configurable: true,
        enumerable,
        writable: true,
        value
      });
    }
    function _process(self2, listeners) {
      var l = listeners.length;
      for (var p = 0; p < l; p++) {
        var listener = listeners[p];
        var before = self2[SYMBOL];
        if (typeof before === "function") {
          before(listener);
        } else if (Array.isArray(before)) {
          var length = before.length;
          for (var i = 0; i < length; i++)
            before[i](listener);
        }
      }
    }
    function _listeners(self2, event) {
      var listeners;
      listeners = self2._events && self2._events[event];
      if (!Array.isArray(listeners)) {
        if (listeners) {
          listeners = [listeners];
        } else {
          listeners = [];
        }
      }
      return listeners;
    }
    function _findAndProcess(self2, event, before) {
      var after = _listeners(self2, event);
      var unprocessed = after.filter(function(fn) {
        return before.indexOf(fn) === -1;
      });
      if (unprocessed.length > 0)
        _process(self2, unprocessed);
    }
    function _wrap(unwrapped, visit) {
      if (!unwrapped)
        return;
      var wrapped = unwrapped;
      if (typeof unwrapped === "function") {
        wrapped = visit(unwrapped);
      } else if (Array.isArray(unwrapped)) {
        wrapped = [];
        for (var i = 0; i < unwrapped.length; i++) {
          wrapped[i] = visit(unwrapped[i]);
        }
      }
      return wrapped;
    }
    module2.exports = function wrapEmitter(emitter, onAddListener, onEmit) {
      if (!emitter || !emitter.on || !emitter.addListener || !emitter.removeListener || !emitter.emit) {
        throw new Error("can only wrap real EEs");
      }
      if (!onAddListener)
        throw new Error("must have function to run on listener addition");
      if (!onEmit)
        throw new Error("must have function to wrap listeners when emitting");
      function adding(on) {
        return function added(event, listener) {
          var existing = _listeners(this, event).slice();
          try {
            var returned = on.call(this, event, listener);
            _findAndProcess(this, event, existing);
            return returned;
          } finally {
            if (!this.on.__wrapped)
              wrap(this, "on", adding);
            if (!this.addListener.__wrapped)
              wrap(this, "addListener", adding);
          }
        };
      }
      function emitting(emit) {
        return function emitted(event) {
          if (!this._events || !this._events[event])
            return emit.apply(this, arguments);
          var unwrapped = this._events[event];
          function remover(removeListener) {
            return function removed() {
              this._events[event] = unwrapped;
              try {
                return removeListener.apply(this, arguments);
              } finally {
                unwrapped = this._events[event];
                this._events[event] = _wrap(unwrapped, onEmit);
              }
            };
          }
          wrap(this, "removeListener", remover);
          try {
            this._events[event] = _wrap(unwrapped, onEmit);
            return emit.apply(this, arguments);
          } finally {
            unwrap(this, "removeListener");
            this._events[event] = unwrapped;
          }
        };
      }
      if (!emitter[SYMBOL]) {
        defineProperty(emitter, SYMBOL, onAddListener);
      } else if (typeof emitter[SYMBOL] === "function") {
        defineProperty(emitter, SYMBOL, [emitter[SYMBOL], onAddListener]);
      } else if (Array.isArray(emitter[SYMBOL])) {
        emitter[SYMBOL].push(onAddListener);
      }
      if (!emitter.__wrapped) {
        wrap(emitter, "addListener", adding);
        wrap(emitter, "on", adding);
        wrap(emitter, "emit", emitting);
        defineProperty(emitter, "__unwrap", function() {
          unwrap(emitter, "addListener");
          unwrap(emitter, "on");
          unwrap(emitter, "emit");
          delete emitter[SYMBOL];
          delete emitter.__wrapped;
        });
        defineProperty(emitter, "__wrapped", true);
      }
    };
  }
});

// node_modules/cls-hooked/context.js
var require_context = __commonJS({
  "node_modules/cls-hooked/context.js"(exports, module2) {
    "use strict";
    var util = require("util");
    var assert = require("assert");
    var wrapEmitter = require_listener();
    var async_hooks = require("async_hooks");
    var CONTEXTS_SYMBOL = "cls@contexts";
    var ERROR_SYMBOL = "error@context";
    var DEBUG_CLS_HOOKED = process.env.DEBUG_CLS_HOOKED;
    var currentUid = -1;
    module2.exports = {
      getNamespace,
      createNamespace,
      destroyNamespace,
      reset,
      ERROR_SYMBOL
    };
    function Namespace(name) {
      this.name = name;
      this.active = null;
      this._set = [];
      this.id = null;
      this._contexts = /* @__PURE__ */ new Map();
      this._indent = 0;
    }
    Namespace.prototype.set = function set(key, value) {
      if (!this.active) {
        throw new Error("No context available. ns.run() or ns.bind() must be called first.");
      }
      this.active[key] = value;
      if (DEBUG_CLS_HOOKED) {
        const indentStr = " ".repeat(this._indent < 0 ? 0 : this._indent);
        debug2(indentStr + "CONTEXT-SET KEY:" + key + "=" + value + " in ns:" + this.name + " currentUid:" + currentUid + " active:" + util.inspect(this.active, { showHidden: true, depth: 2, colors: true }));
      }
      return value;
    };
    Namespace.prototype.get = function get(key) {
      if (!this.active) {
        if (DEBUG_CLS_HOOKED) {
          const asyncHooksCurrentId = async_hooks.currentId();
          const triggerId = async_hooks.triggerAsyncId();
          const indentStr = " ".repeat(this._indent < 0 ? 0 : this._indent);
          debug2(`${indentStr}CONTEXT-GETTING KEY NO ACTIVE NS: (${this.name}) ${key}=undefined currentUid:${currentUid} asyncHooksCurrentId:${asyncHooksCurrentId} triggerId:${triggerId} len:${this._set.length}`);
        }
        return void 0;
      }
      if (DEBUG_CLS_HOOKED) {
        const asyncHooksCurrentId = async_hooks.executionAsyncId();
        const triggerId = async_hooks.triggerAsyncId();
        const indentStr = " ".repeat(this._indent < 0 ? 0 : this._indent);
        debug2(indentStr + "CONTEXT-GETTING KEY:" + key + "=" + this.active[key] + " (" + this.name + ") currentUid:" + currentUid + " active:" + util.inspect(this.active, { showHidden: true, depth: 2, colors: true }));
        debug2(`${indentStr}CONTEXT-GETTING KEY: (${this.name}) ${key}=${this.active[key]} currentUid:${currentUid} asyncHooksCurrentId:${asyncHooksCurrentId} triggerId:${triggerId} len:${this._set.length} active:${util.inspect(this.active)}`);
      }
      return this.active[key];
    };
    Namespace.prototype.createContext = function createContext() {
      let context = Object.create(this.active ? this.active : Object.prototype);
      context._ns_name = this.name;
      context.id = currentUid;
      if (DEBUG_CLS_HOOKED) {
        const asyncHooksCurrentId = async_hooks.executionAsyncId();
        const triggerId = async_hooks.triggerAsyncId();
        const indentStr = " ".repeat(this._indent < 0 ? 0 : this._indent);
        debug2(`${indentStr}CONTEXT-CREATED Context: (${this.name}) currentUid:${currentUid} asyncHooksCurrentId:${asyncHooksCurrentId} triggerId:${triggerId} len:${this._set.length} context:${util.inspect(context, { showHidden: true, depth: 2, colors: true })}`);
      }
      return context;
    };
    Namespace.prototype.run = function run(fn) {
      let context = this.createContext();
      this.enter(context);
      try {
        if (DEBUG_CLS_HOOKED) {
          const triggerId = async_hooks.triggerAsyncId();
          const asyncHooksCurrentId = async_hooks.executionAsyncId();
          const indentStr = " ".repeat(this._indent < 0 ? 0 : this._indent);
          debug2(`${indentStr}CONTEXT-RUN BEGIN: (${this.name}) currentUid:${currentUid} triggerId:${triggerId} asyncHooksCurrentId:${asyncHooksCurrentId} len:${this._set.length} context:${util.inspect(context)}`);
        }
        fn(context);
        return context;
      } catch (exception) {
        if (exception) {
          exception[ERROR_SYMBOL] = context;
        }
        throw exception;
      } finally {
        if (DEBUG_CLS_HOOKED) {
          const triggerId = async_hooks.triggerAsyncId();
          const asyncHooksCurrentId = async_hooks.executionAsyncId();
          const indentStr = " ".repeat(this._indent < 0 ? 0 : this._indent);
          debug2(`${indentStr}CONTEXT-RUN END: (${this.name}) currentUid:${currentUid} triggerId:${triggerId} asyncHooksCurrentId:${asyncHooksCurrentId} len:${this._set.length} ${util.inspect(context)}`);
        }
        this.exit(context);
      }
    };
    Namespace.prototype.runAndReturn = function runAndReturn(fn) {
      let value;
      this.run(function(context) {
        value = fn(context);
      });
      return value;
    };
    Namespace.prototype.runPromise = function runPromise(fn) {
      let context = this.createContext();
      this.enter(context);
      let promise = fn(context);
      if (!promise || !promise.then || !promise.catch) {
        throw new Error("fn must return a promise.");
      }
      if (DEBUG_CLS_HOOKED) {
        debug2("CONTEXT-runPromise BEFORE: (" + this.name + ") currentUid:" + currentUid + " len:" + this._set.length + " " + util.inspect(context));
      }
      return promise.then((result) => {
        if (DEBUG_CLS_HOOKED) {
          debug2("CONTEXT-runPromise AFTER then: (" + this.name + ") currentUid:" + currentUid + " len:" + this._set.length + " " + util.inspect(context));
        }
        this.exit(context);
        return result;
      }).catch((err) => {
        err[ERROR_SYMBOL] = context;
        if (DEBUG_CLS_HOOKED) {
          debug2("CONTEXT-runPromise AFTER catch: (" + this.name + ") currentUid:" + currentUid + " len:" + this._set.length + " " + util.inspect(context));
        }
        this.exit(context);
        throw err;
      });
    };
    Namespace.prototype.bind = function bindFactory(fn, context) {
      if (!context) {
        if (!this.active) {
          context = this.createContext();
        } else {
          context = this.active;
        }
      }
      let self2 = this;
      return function clsBind() {
        self2.enter(context);
        try {
          return fn.apply(this, arguments);
        } catch (exception) {
          if (exception) {
            exception[ERROR_SYMBOL] = context;
          }
          throw exception;
        } finally {
          self2.exit(context);
        }
      };
    };
    Namespace.prototype.enter = function enter(context) {
      assert.ok(context, "context must be provided for entering");
      if (DEBUG_CLS_HOOKED) {
        const asyncHooksCurrentId = async_hooks.executionAsyncId();
        const triggerId = async_hooks.triggerAsyncId();
        const indentStr = " ".repeat(this._indent < 0 ? 0 : this._indent);
        debug2(`${indentStr}CONTEXT-ENTER: (${this.name}) currentUid:${currentUid} triggerId:${triggerId} asyncHooksCurrentId:${asyncHooksCurrentId} len:${this._set.length} ${util.inspect(context)}`);
      }
      this._set.push(this.active);
      this.active = context;
    };
    Namespace.prototype.exit = function exit(context) {
      assert.ok(context, "context must be provided for exiting");
      if (DEBUG_CLS_HOOKED) {
        const asyncHooksCurrentId = async_hooks.executionAsyncId();
        const triggerId = async_hooks.triggerAsyncId();
        const indentStr = " ".repeat(this._indent < 0 ? 0 : this._indent);
        debug2(`${indentStr}CONTEXT-EXIT: (${this.name}) currentUid:${currentUid} triggerId:${triggerId} asyncHooksCurrentId:${asyncHooksCurrentId} len:${this._set.length} ${util.inspect(context)}`);
      }
      if (this.active === context) {
        assert.ok(this._set.length, "can't remove top context");
        this.active = this._set.pop();
        return;
      }
      let index = this._set.lastIndexOf(context);
      if (index < 0) {
        if (DEBUG_CLS_HOOKED) {
          debug2("??ERROR?? context exiting but not entered - ignoring: " + util.inspect(context));
        }
        assert.ok(index >= 0, "context not currently entered; can't exit. \n" + util.inspect(this) + "\n" + util.inspect(context));
      } else {
        assert.ok(index, "can't remove top context");
        this._set.splice(index, 1);
      }
    };
    Namespace.prototype.bindEmitter = function bindEmitter(emitter) {
      assert.ok(emitter.on && emitter.addListener && emitter.emit, "can only bind real EEs");
      let namespace = this;
      let thisSymbol = "context@" + this.name;
      function attach(listener) {
        if (!listener) {
          return;
        }
        if (!listener[CONTEXTS_SYMBOL]) {
          listener[CONTEXTS_SYMBOL] = /* @__PURE__ */ Object.create(null);
        }
        listener[CONTEXTS_SYMBOL][thisSymbol] = {
          namespace,
          context: namespace.active
        };
      }
      function bind(unwrapped) {
        if (!(unwrapped && unwrapped[CONTEXTS_SYMBOL])) {
          return unwrapped;
        }
        let wrapped = unwrapped;
        let unwrappedContexts = unwrapped[CONTEXTS_SYMBOL];
        Object.keys(unwrappedContexts).forEach(function(name) {
          let thunk = unwrappedContexts[name];
          wrapped = thunk.namespace.bind(wrapped, thunk.context);
        });
        return wrapped;
      }
      wrapEmitter(emitter, attach, bind);
    };
    Namespace.prototype.fromException = function fromException(exception) {
      return exception[ERROR_SYMBOL];
    };
    function getNamespace(name) {
      return process.namespaces[name];
    }
    function createNamespace(name) {
      assert.ok(name, "namespace must be given a name.");
      if (DEBUG_CLS_HOOKED) {
        debug2(`NS-CREATING NAMESPACE (${name})`);
      }
      let namespace = new Namespace(name);
      namespace.id = currentUid;
      const hook = async_hooks.createHook({
        init(asyncId, type, triggerId, resource) {
          currentUid = async_hooks.executionAsyncId();
          if (namespace.active) {
            namespace._contexts.set(asyncId, namespace.active);
            if (DEBUG_CLS_HOOKED) {
              const indentStr = " ".repeat(namespace._indent < 0 ? 0 : namespace._indent);
              debug2(`${indentStr}INIT [${type}] (${name}) asyncId:${asyncId} currentUid:${currentUid} triggerId:${triggerId} active:${util.inspect(namespace.active, { showHidden: true, depth: 2, colors: true })} resource:${resource}`);
            }
          } else if (currentUid === 0) {
            const triggerId2 = async_hooks.triggerAsyncId();
            const triggerIdContext = namespace._contexts.get(triggerId2);
            if (triggerIdContext) {
              namespace._contexts.set(asyncId, triggerIdContext);
              if (DEBUG_CLS_HOOKED) {
                const indentStr = " ".repeat(namespace._indent < 0 ? 0 : namespace._indent);
                debug2(`${indentStr}INIT USING CONTEXT FROM TRIGGERID [${type}] (${name}) asyncId:${asyncId} currentUid:${currentUid} triggerId:${triggerId2} active:${util.inspect(namespace.active, { showHidden: true, depth: 2, colors: true })} resource:${resource}`);
              }
            } else if (DEBUG_CLS_HOOKED) {
              const indentStr = " ".repeat(namespace._indent < 0 ? 0 : namespace._indent);
              debug2(`${indentStr}INIT MISSING CONTEXT [${type}] (${name}) asyncId:${asyncId} currentUid:${currentUid} triggerId:${triggerId2} active:${util.inspect(namespace.active, { showHidden: true, depth: 2, colors: true })} resource:${resource}`);
            }
          }
          if (DEBUG_CLS_HOOKED && type === "PROMISE") {
            debug2(util.inspect(resource, { showHidden: true }));
            const parentId = resource.parentId;
            const indentStr = " ".repeat(namespace._indent < 0 ? 0 : namespace._indent);
            debug2(`${indentStr}INIT RESOURCE-PROMISE [${type}] (${name}) parentId:${parentId} asyncId:${asyncId} currentUid:${currentUid} triggerId:${triggerId} active:${util.inspect(namespace.active, { showHidden: true, depth: 2, colors: true })} resource:${resource}`);
          }
        },
        before(asyncId) {
          currentUid = async_hooks.executionAsyncId();
          let context;
          context = namespace._contexts.get(asyncId) || namespace._contexts.get(currentUid);
          if (context) {
            if (DEBUG_CLS_HOOKED) {
              const triggerId = async_hooks.triggerAsyncId();
              const indentStr = " ".repeat(namespace._indent < 0 ? 0 : namespace._indent);
              debug2(`${indentStr}BEFORE (${name}) asyncId:${asyncId} currentUid:${currentUid} triggerId:${triggerId} active:${util.inspect(namespace.active, { showHidden: true, depth: 2, colors: true })} context:${util.inspect(context)}`);
              namespace._indent += 2;
            }
            namespace.enter(context);
          } else if (DEBUG_CLS_HOOKED) {
            const triggerId = async_hooks.triggerAsyncId();
            const indentStr = " ".repeat(namespace._indent < 0 ? 0 : namespace._indent);
            debug2(`${indentStr}BEFORE MISSING CONTEXT (${name}) asyncId:${asyncId} currentUid:${currentUid} triggerId:${triggerId} active:${util.inspect(namespace.active, { showHidden: true, depth: 2, colors: true })} namespace._contexts:${util.inspect(namespace._contexts, { showHidden: true, depth: 2, colors: true })}`);
            namespace._indent += 2;
          }
        },
        after(asyncId) {
          currentUid = async_hooks.executionAsyncId();
          let context;
          context = namespace._contexts.get(asyncId) || namespace._contexts.get(currentUid);
          if (context) {
            if (DEBUG_CLS_HOOKED) {
              const triggerId = async_hooks.triggerAsyncId();
              namespace._indent -= 2;
              const indentStr = " ".repeat(namespace._indent < 0 ? 0 : namespace._indent);
              debug2(`${indentStr}AFTER (${name}) asyncId:${asyncId} currentUid:${currentUid} triggerId:${triggerId} active:${util.inspect(namespace.active, { showHidden: true, depth: 2, colors: true })} context:${util.inspect(context)}`);
            }
            namespace.exit(context);
          } else if (DEBUG_CLS_HOOKED) {
            const triggerId = async_hooks.triggerAsyncId();
            namespace._indent -= 2;
            const indentStr = " ".repeat(namespace._indent < 0 ? 0 : namespace._indent);
            debug2(`${indentStr}AFTER MISSING CONTEXT (${name}) asyncId:${asyncId} currentUid:${currentUid} triggerId:${triggerId} active:${util.inspect(namespace.active, { showHidden: true, depth: 2, colors: true })} context:${util.inspect(context)}`);
          }
        },
        destroy(asyncId) {
          currentUid = async_hooks.executionAsyncId();
          if (DEBUG_CLS_HOOKED) {
            const triggerId = async_hooks.triggerAsyncId();
            const indentStr = " ".repeat(namespace._indent < 0 ? 0 : namespace._indent);
            debug2(`${indentStr}DESTROY (${name}) currentUid:${currentUid} asyncId:${asyncId} triggerId:${triggerId} active:${util.inspect(namespace.active, { showHidden: true, depth: 2, colors: true })} context:${util.inspect(namespace._contexts.get(currentUid))}`);
          }
          namespace._contexts.delete(asyncId);
        }
      });
      hook.enable();
      process.namespaces[name] = namespace;
      return namespace;
    }
    function destroyNamespace(name) {
      let namespace = getNamespace(name);
      assert.ok(namespace, `can't delete nonexistent namespace! "` + name + '"');
      assert.ok(namespace.id, "don't assign to process.namespaces directly! " + util.inspect(namespace));
      process.namespaces[name] = null;
    }
    function reset() {
      if (process.namespaces) {
        Object.keys(process.namespaces).forEach(function(name) {
          destroyNamespace(name);
        });
      }
      process.namespaces = /* @__PURE__ */ Object.create(null);
    }
    process.namespaces = {};
    function debug2(...args) {
      if (DEBUG_CLS_HOOKED) {
        process._rawDebug(`${util.format(...args)}`);
      }
    }
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/logger.js
var require_logger = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/logger.js"(exports, module2) {
    "use strict";
    var validLogLevels = ["debug", "info", "warn", "error", "silent"];
    var defaultLogLevel = validLogLevels.indexOf("error");
    var logLevel = calculateLogLevel(process.env.AWS_XRAY_DEBUG_MODE ? "debug" : process.env.AWS_XRAY_LOG_LEVEL);
    var logger2 = {
      error: createLoggerForLevel("error"),
      info: createLoggerForLevel("info"),
      warn: createLoggerForLevel("warn"),
      debug: createLoggerForLevel("debug")
    };
    function createLoggerForLevel(level) {
      var loggerLevel = validLogLevels.indexOf(level);
      var consoleMethod = console[level] || console.log || (() => {
      });
      if (loggerLevel >= logLevel) {
        return (message, meta) => {
          if (message || meta) {
            consoleMethod(formatLogMessage(level, message, meta));
          }
        };
      } else {
        return () => {
        };
      }
    }
    function calculateLogLevel(level) {
      if (level) {
        var normalisedLevel = level.toLowerCase();
        var index = validLogLevels.indexOf(normalisedLevel);
        return index >= 0 ? index : defaultLogLevel;
      }
      return defaultLogLevel;
    }
    function createTimestamp(date) {
      var tzo = -date.getTimezoneOffset(), dif = tzo >= 0 ? "+" : "-", pad = function(num) {
        var norm = Math.floor(Math.abs(num));
        return (norm < 10 ? "0" : "") + norm;
      };
      return new Date(date.getTime() + tzo * 60 * 1e3).toISOString().replace(/T/, " ").replace(/Z/, " ") + dif + pad(tzo / 60) + ":" + pad(tzo % 60);
    }
    function isLambdaFunction() {
      return process.env.LAMBDA_TASK_ROOT !== void 0;
    }
    function formatLogMessage(level, message, meta) {
      var messageParts = [];
      if (!isLambdaFunction()) {
        messageParts.push(createTimestamp(/* @__PURE__ */ new Date()));
        messageParts.push(`[${level.toUpperCase()}]`);
      }
      if (message) {
        messageParts.push(message);
      }
      var logString = messageParts.join(" ");
      var metaDataString = formatMetaData(meta);
      return [logString, metaDataString].filter((str) => str.length > 0).join("\n  ");
    }
    function formatMetaData(meta) {
      if (!meta) {
        return "";
      }
      return typeof meta === "string" ? meta : JSON.stringify(meta);
    }
    var logging = {
      setLogger: function setLogger(logObj) {
        logger2 = logObj;
      },
      getLogger: function getLogger() {
        return logger2;
      }
    };
    module2.exports = logging;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/segments/attributes/captured_exception.js
var require_captured_exception = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/segments/attributes/captured_exception.js"(exports, module2) {
    "use strict";
    var crypto = require("crypto");
    function CapturedException(err, remote) {
      this.init(err, remote);
    }
    CapturedException.prototype.init = function init(err, remote) {
      var e = typeof err === "string" || err instanceof String ? { message: err, name: "" } : err;
      this.message = e.message;
      this.type = e.name;
      this.stack = [];
      this.remote = !!remote;
      this.id = crypto.randomBytes(8).toString("hex");
      if (e.stack) {
        var stack = e.stack.split("\n");
        stack.shift();
        stack.forEach((stackline) => {
          var line = stackline.trim().replace(/\(|\)/g, "");
          line = line.substring(line.indexOf(" ") + 1);
          var label = line.lastIndexOf(" ") >= 0 ? line.slice(0, line.lastIndexOf(" ")) : null;
          var path = Array.isArray(label) && !label.length ? line : line.slice(line.lastIndexOf(" ") + 1);
          path = path.split(":");
          var entry = {
            path: path[0],
            line: parseInt(path[1]),
            label: label || "anonymous"
          };
          this.stack.push(entry);
        }, this);
      }
    };
    module2.exports = CapturedException;
  }
});

// node_modules/atomic-batcher/index.js
var require_atomic_batcher = __commonJS({
  "node_modules/atomic-batcher/index.js"(exports, module2) {
    "use strict";
    module2.exports = batcher;
    function batcher(run) {
      var running = false;
      var pendingBatch = null;
      var pendingCallbacks = null;
      var callbacks = null;
      return append;
      function done(err) {
        if (callbacks)
          callAll(callbacks, err);
        running = false;
        callbacks = pendingCallbacks;
        var nextBatch = pendingBatch;
        pendingBatch = null;
        pendingCallbacks = null;
        if (!nextBatch || !nextBatch.length) {
          if (!callbacks || !callbacks.length) {
            callbacks = null;
            return;
          }
          if (!nextBatch)
            nextBatch = [];
        }
        running = true;
        run(nextBatch, done);
      }
      function append(val2, cb) {
        if (running) {
          if (!pendingBatch) {
            pendingBatch = [];
            pendingCallbacks = [];
          }
          pushAll(pendingBatch, val2);
          if (cb)
            pendingCallbacks.push(cb);
        } else {
          if (cb)
            callbacks = [cb];
          running = true;
          run(Array.isArray(val2) ? val2 : [val2], done);
        }
      }
    }
    function pushAll(list, val2) {
      if (Array.isArray(val2))
        pushArray(list, val2);
      else
        list.push(val2);
    }
    function pushArray(list, val2) {
      for (var i = 0; i < val2.length; i++)
        list.push(val2[i]);
    }
    function callAll(list, err) {
      for (var i = 0; i < list.length; i++)
        list[i](err);
    }
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/daemon_config.js
var require_daemon_config = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/daemon_config.js"(exports, module2) {
    "use strict";
    var logger2 = require_logger();
    var DaemonConfig = {
      udp_ip: "127.0.0.1",
      udp_port: 2e3,
      tcp_ip: "127.0.0.1",
      tcp_port: 2e3,
      setDaemonAddress: function setDaemonAddress(address) {
        if (!process.env.AWS_XRAY_DAEMON_ADDRESS) {
          processAddress(address);
          logger2.getLogger().info("Configured daemon address to " + address + ".");
        } else {
          logger2.getLogger().warn("Ignoring call to setDaemonAddress as AWS_XRAY_DAEMON_ADDRESS is set. The current daemon address will not be changed.");
        }
      }
    };
    var processAddress = function processAddress2(address) {
      if (address.indexOf(":") === -1) {
        throw new Error("Invalid Daemon Address. You must specify an ip and port.");
      } else {
        var splitAddress = address.split(" ");
        if (splitAddress.length === 1) {
          if (address.indexOf("udp") > -1 || address.indexOf("tcp") > -1) {
            throw new Error("Invalid Daemon Address. You must specify both tcp and udp addresses.");
          }
          var addr = address.split(":");
          if (!addr[0]) {
            throw new Error("Invalid Daemon Address. You must specify an ip.");
          }
          DaemonConfig.udp_ip = addr[0];
          DaemonConfig.tcp_ip = addr[0];
          DaemonConfig.udp_port = addr[1];
          DaemonConfig.tcp_port = addr[1];
        } else if (splitAddress.length === 2) {
          var part_1 = splitAddress[0].split(":");
          var part_2 = splitAddress[1].split(":");
          var addr_map = {};
          addr_map[part_1[0]] = part_1;
          addr_map[part_2[0]] = part_2;
          DaemonConfig.udp_ip = addr_map["udp"][1];
          DaemonConfig.udp_port = parseInt(addr_map["udp"][2]);
          DaemonConfig.tcp_ip = addr_map["tcp"][1];
          DaemonConfig.tcp_port = parseInt(addr_map["tcp"][2]);
          if (!DaemonConfig.udp_port || !DaemonConfig.tcp_port) {
            throw new Error("Invalid Daemon Address. You must specify port number.");
          }
        }
      }
    };
    if (process.env.AWS_XRAY_DAEMON_ADDRESS) {
      processAddress(process.env.AWS_XRAY_DAEMON_ADDRESS);
    }
    module2.exports = DaemonConfig;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/segment_emitter.js
var require_segment_emitter = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/segment_emitter.js"(exports, module2) {
    "use strict";
    var dgram = require("dgram");
    var batcher = require_atomic_batcher();
    var logger2 = require_logger();
    var PROTOCOL_HEADER = '{"format":"json","version":1}';
    var PROTOCOL_DELIMITER = "\n";
    function batchSendData(ops, callback) {
      var client = dgram.createSocket("udp4");
      executeSendData(client, ops, 0, function() {
        try {
          client.close();
        } finally {
          callback();
        }
      });
    }
    function executeSendData(client, ops, index, callback) {
      if (index >= ops.length) {
        callback();
        return;
      }
      sendMessage(client, ops[index], function() {
        executeSendData(client, ops, index + 1, callback);
      });
    }
    function sendMessage(client, data, batchCallback) {
      var msg = data.msg;
      var offset = data.offset;
      var length = data.length;
      var port = data.port;
      var address = data.address;
      var callback = data.callback;
      client.send(msg, offset, length, port, address, function(err) {
        try {
          callback(err);
        } finally {
          batchCallback();
        }
      });
    }
    function BatchingTemporarySocket() {
      this.batchSend = batcher(batchSendData);
    }
    BatchingTemporarySocket.prototype.send = function(msg, offset, length, port, address, callback) {
      var work = {
        msg,
        offset,
        length,
        port,
        address,
        callback
      };
      this.batchSend(work);
    };
    var SegmentEmitter = {
      daemonConfig: require_daemon_config(),
      /**
       * Returns the formatted segment JSON string.
       * @param {Segment} segment - The segment to format.
       */
      format: function format(segment) {
        return PROTOCOL_HEADER + PROTOCOL_DELIMITER + segment.toString();
      },
      /**
       * Creates a UDP socket connection and send the formatted segment.
       * @param {Segment} segment - The segment to send to the daemon.
       */
      send: function send(segment) {
        if (!this.socket) {
          if (this.useBatchingTemporarySocket) {
            this.socket = new BatchingTemporarySocket();
          } else {
            this.socket = dgram.createSocket("udp4").unref();
          }
        }
        var client = this.socket;
        var formatted = segment.format();
        var data = PROTOCOL_HEADER + PROTOCOL_DELIMITER + formatted;
        var message = Buffer.from(data);
        var short = '{"trace_id:"' + segment.trace_id + '","id":"' + segment.id + '"}';
        var type = segment.type === "subsegment" ? "Subsegment" : "Segment";
        client.send(message, 0, message.length, this.daemonConfig.udp_port, this.daemonConfig.udp_ip, function(err) {
          if (err) {
            if (err.code === "EMSGSIZE") {
              logger2.getLogger().error(type + " too large to send: " + short + " (" + message.length + " bytes).");
            } else {
              logger2.getLogger().error("Error occured sending segment: ", err);
            }
          } else {
            logger2.getLogger().debug(type + ' sent: {"trace_id:"' + segment.trace_id + '","id":"' + segment.id + '"}');
            logger2.getLogger().debug("UDP message sent: " + segment);
          }
        });
      },
      /**
       * Configures the address and/or port the daemon is expected to be on.
       * @param {string} address - Address of the daemon the segments should be sent to. Should be formatted as an IPv4 address.
       * @module SegmentEmitter
       * @function setDaemonAddress
       */
      setDaemonAddress: function setDaemonAddress(address) {
        this.daemonConfig.setDaemonAddress(address);
      },
      /**
       * Get the UDP IP the emitter is configured to.
       * @module SegmentEmitter
       * @function getIp
       */
      getIp: function getIp() {
        return this.daemonConfig.udp_ip;
      },
      /**
       * Get the UDP port the emitter is configured to.
       * @module SegmentEmitter
       * @function getPort
       */
      getPort: function getPort() {
        return this.daemonConfig.udp_port;
      },
      /**
       * Forces the segment emitter to create a new socket on send, and close it on complete.
       * @module SegmentEmitter
       * @function disableReusableSocket
       */
      disableReusableSocket: function() {
        this.useBatchingTemporarySocket = true;
      }
    };
    module2.exports = SegmentEmitter;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/segments/attributes/trace_id.js
var require_trace_id = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/segments/attributes/trace_id.js"(exports, module2) {
    "use strict";
    var crypto = require("crypto");
    var logger2 = require_logger();
    var TraceID = class _TraceID {
      /**
       * Constructs a new trace ID using the current time.
       * @param {string} [tsHex] - time stamp to use for trace ID in hexadecimal format
       * @param {string} [numberhex] - string of hexadecimal characters for random portion of Trace ID
       * @constructor
       */
      constructor(tsHex, numberhex) {
        this.version = 1;
        this.timestamp = tsHex || Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3).toString(16);
        this.id = numberhex || crypto.randomBytes(12).toString("hex");
      }
      /**
       * @returns {TraceID} - a hardcoded trace ID using zeroed timestamp and random ID
       */
      static Invalid() {
        return new _TraceID("00000000", "000000000000000000000000");
      }
      /**
       * Constructs a new trace ID from provided string. If no string is provided or the provided string is invalid,
       * log an error but a new trace ID still returned. This can be used as a trace ID string validator.
       * @param {string} [rawID] - string to create a Trace ID object from.
       */
      static FromString(rawID) {
        const DELIMITER = "-";
        var traceID = new _TraceID();
        var version, timestamp;
        if (!rawID || typeof rawID !== "string") {
          logger2.getLogger().error("Empty or non-string trace ID provided");
          return traceID;
        }
        const parts = rawID.trim().split(DELIMITER);
        if (parts.length !== 3) {
          logger2.getLogger().error("Unrecognized trace ID format");
          return traceID;
        }
        version = parseInt(parts[0]);
        if (isNaN(version) || version < 1) {
          logger2.getLogger().error("Trace ID version must be positive integer");
          return traceID;
        }
        timestamp = parseInt(parts[1], 16).toString(16);
        if (timestamp === "NaN") {
          logger2.getLogger().error("Trace ID timestamp must be a hex-encoded value");
          return traceID;
        }
        traceID.version = version;
        traceID.timestamp = timestamp;
        traceID.id = parts[2];
        return traceID;
      }
      /**
       * Returns a string representation of the trace ID.
       * @returns {string} - stringified trace ID, e.g. 1-57fbe041-2c7ad569f5d6ff149137be86
       */
      toString() {
        return `${this.version.toString()}-${this.timestamp}-${this.id}`;
      }
    };
    module2.exports = TraceID;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/utils.js
var require_utils3 = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/utils.js"(exports, module2) {
    "use strict";
    var crypto = require("crypto");
    var logger2 = require_logger();
    var TraceID = require_trace_id();
    var utils = {
      /**
       * Checks a HTTP response code, where 4xx are 'error' and 5xx are 'fault'.
       * @param {string} status - the HTTP response status code.
       * @returns [string] - 'error', 'fault' or nothing on no match
       * @alias module:utils.getCauseTypeFromHttpStatus
       */
      getCauseTypeFromHttpStatus: function getCauseTypeFromHttpStatus(status) {
        var stat = status.toString();
        if (stat.match(/^[4][0-9]{2}$/) !== null) {
          return "error";
        } else if (stat.match(/^[5][0-9]{2}$/) !== null) {
          return "fault";
        }
      },
      /**
       * Removes the query string parameters from a given http request path
       * as it may contain sensitive information
       *
       * Related issue: https://github.com/aws/aws-xray-sdk-node/issues/246
       *
       * Node documentation: https://nodejs.org/api/http.html#http_http_request_url_options_callback
       *
       * @param {string} path - options.path in a http.request callback
       * @returns [string] - removes query string element from path
       * @alias module:utils.stripQueryStringFromPath
       */
      stripQueryStringFromPath: function stripQueryStringFromPath(path) {
        return path ? path.split("?")[0] : "";
      },
      /**
       * Performs a case-insensitive wildcard match against two strings. This method works with pseduo-regex chars; specifically ? and * are supported.
       *   An asterisk (*) represents any combination of characters
       *   A question mark (?) represents any single character
       *
       * @param {string} pattern - the regex-like pattern to be compared against.
       * @param {string} text - the string to compare against the pattern.
       * @returns boolean
       * @alias module:utils.wildcardMatch
       */
      wildcardMatch: function wildcardMatch(pattern, text) {
        if (pattern === void 0 || text === void 0) {
          return false;
        }
        if (pattern.length === 1 && pattern.charAt(0) === "*") {
          return true;
        }
        var patternLength = pattern.length;
        var textLength = text.length;
        var indexOfGlob = pattern.indexOf("*");
        pattern = pattern.toLowerCase();
        text = text.toLowerCase();
        if (indexOfGlob === -1 || indexOfGlob === patternLength - 1) {
          var match = function simpleWildcardMatch() {
            var j2 = 0;
            for (var i2 = 0; i2 < patternLength; i2++) {
              var patternChar2 = pattern.charAt(i2);
              if (patternChar2 === "*") {
                return true;
              } else if (patternChar2 === "?") {
                if (j2 === textLength) {
                  return false;
                }
                j2++;
              } else {
                if (j2 >= textLength || patternChar2 != text.charAt(j2)) {
                  return false;
                }
                j2++;
              }
            }
            return j2 === textLength;
          };
          return match();
        }
        var matchArray = [];
        matchArray[0] = true;
        for (var j = 0; j < patternLength; j++) {
          var i;
          var patternChar = pattern.charAt(j);
          if (patternChar != "*") {
            for (i = textLength - 1; i >= 0; i--) {
              matchArray[i + 1] = !!matchArray[i] && (patternChar === "?" || patternChar === text.charAt(i));
            }
          } else {
            i = 0;
            while (i <= textLength && !matchArray[i]) {
              i++;
            }
            for (i; i <= textLength; i++) {
              matchArray[i] = true;
            }
          }
          matchArray[0] = matchArray[0] && patternChar === "*";
        }
        return matchArray[textLength];
      },
      LambdaUtils: {
        validTraceData: function(xAmznTraceId) {
          var valid = false;
          if (xAmznTraceId) {
            var data = utils.processTraceData(xAmznTraceId);
            valid = !!(data && data.root && data.parent && data.sampled);
          }
          return valid;
        },
        /**
         * Populates trace ID, parent ID, and sampled decision of given segment. Will always populate valid values,
         * even if xAmznTraceId contains missing or invalid values. This ensures downstream services receive valid
         * headers.
         * @param {Segment} segment - Facade segment to be populated
         * @param {String} xAmznTraceId - Raw Trace Header to supply trace data
         * @returns {Boolean} - true if required fields are present and Trace ID is valid, false otherwise
         */
        populateTraceData: function(segment, xAmznTraceId) {
          logger2.getLogger().debug("Lambda trace data found: " + xAmznTraceId);
          let traceData = utils.processTraceData(xAmznTraceId);
          var valid = false;
          if (!traceData) {
            traceData = {};
            logger2.getLogger().error("_X_AMZN_TRACE_ID is empty or has an invalid format");
          } else if (!traceData.root || !traceData.parent || !traceData.sampled) {
            logger2.getLogger().error("_X_AMZN_TRACE_ID is missing required information");
          } else {
            valid = true;
          }
          segment.trace_id = TraceID.FromString(traceData.root).toString();
          segment.id = traceData.parent || crypto.randomBytes(8).toString("hex");
          if (traceData.root && segment.trace_id !== traceData.root) {
            logger2.getLogger().error("_X_AMZN_TRACE_ID contains invalid trace ID");
            valid = false;
          }
          if (!parseInt(traceData.sampled)) {
            segment.notTraced = true;
          } else {
            delete segment.notTraced;
          }
          if (traceData.data) {
            segment.additionalTraceData = traceData.data;
          }
          logger2.getLogger().debug("Segment started: " + JSON.stringify(traceData));
          return valid;
        }
      },
      /**
       * Splits out the data from the trace id format.  Used by the middleware.
       * @param {String} traceData - The additional trace data (typically in req.headers.x-amzn-trace-id).
       * @returns {object}
       * @alias module:mw_utils.processTraceData
       */
      processTraceData: function processTraceData(traceData) {
        var amznTraceData = {};
        var data = {};
        var reservedKeywords = ["root", "parent", "sampled", "self"];
        var remainingBytes = 256;
        if (!(typeof traceData === "string" && traceData)) {
          return amznTraceData;
        }
        traceData.split(";").forEach(function(header) {
          if (!header) {
            return;
          }
          var pair = header.split("=");
          if (pair[0] && pair[1]) {
            let key = pair[0].trim();
            let value = pair[1].trim();
            let lowerCaseKey = key.toLowerCase();
            let reserved = reservedKeywords.indexOf(lowerCaseKey) !== -1;
            if (reserved) {
              amznTraceData[lowerCaseKey] = value;
            } else if (!reserved && remainingBytes - (lowerCaseKey.length + value.length) >= 0) {
              data[key] = value;
              remainingBytes -= key.length + value.length;
            }
          }
        });
        amznTraceData["data"] = data;
        return amznTraceData;
      },
      /**
       * Makes a shallow copy of an object without given keys - keeps prototype
       * @param {Object} obj - The object to copy
       * @param {string[]} [keys=[]] - The keys that won't be copied
       * @param {boolean} [preservePrototype=false] - If true also copy prototype properties
       * @returns {}
       */
      objectWithoutProperties: function objectWithoutProperties(obj, keys, preservePrototype) {
        keys = Array.isArray(keys) ? keys : [];
        preservePrototype = typeof preservePrototype === "boolean" ? preservePrototype : false;
        var target = preservePrototype ? Object.create(Object.getPrototypeOf(obj)) : {};
        for (var property in obj) {
          if (keys.indexOf(property) >= 0) {
            continue;
          }
          if (!Object.prototype.hasOwnProperty.call(obj, property)) {
            continue;
          }
          target[property] = obj[property];
        }
        return target;
      },
      /**
       * Safely gets an integer from a string or number
       * @param {String | Number} - input to cast to integer
       * @returns {Number} - Integer representation of input, or 0 if input is not castable to int
       */
      safeParseInt: (val2) => {
        if (!val2 || isNaN(val2)) {
          return 0;
        }
        return parseInt(val2);
      }
    };
    module2.exports = utils;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/segments/segment_utils.js
var require_segment_utils = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/segments/segment_utils.js"(exports, module2) {
    "use strict";
    var { safeParseInt } = require_utils3();
    var logger2 = require_logger();
    var DEFAULT_STREAMING_THRESHOLD = 100;
    var utils = {
      streamingThreshold: DEFAULT_STREAMING_THRESHOLD,
      getCurrentTime: function getCurrentTime() {
        return Date.now() / 1e3;
      },
      setOrigin: function setOrigin(origin) {
        this.origin = origin;
      },
      setPluginData: function setPluginData(pluginData) {
        this.pluginData = pluginData;
      },
      setSDKData: function setSDKData(sdkData) {
        this.sdkData = sdkData;
      },
      setServiceData: function setServiceData(serviceData) {
        this.serviceData = serviceData;
      },
      /**
       * Overrides the default streaming threshold (100).
       * The threshold represents the maximum number of subsegments on a single segment before
       * the SDK beings to send the completed subsegments out of band of the main segment.
       * Reduce this threshold if you see the 'Segment too large to send' error.
       * @param {number} threshold - The new threshold to use.
       * @memberof AWSXRay
       */
      setStreamingThreshold: function setStreamingThreshold(threshold) {
        if (isFinite(threshold) && threshold >= 0) {
          utils.streamingThreshold = threshold;
          logger2.getLogger().debug("Subsegment streaming threshold set to: " + threshold);
        } else {
          logger2.getLogger().error("Invalid threshold: " + threshold + ". Must be a whole number >= 0.");
        }
      },
      getStreamingThreshold: function getStreamingThreshold() {
        return utils.streamingThreshold;
      },
      /**
       * Parses an HTTP response object to return an X-Ray compliant HTTP response object.
       * @param {http.ServerResponse} res
       * @returns {Object} - X-Ray response object to be added to (sub)segment
       */
      getHttpResponseData: (res) => {
        const ret = {};
        if (!res) {
          return ret;
        }
        const status = safeParseInt(res.statusCode);
        if (status !== 0) {
          ret.status = status;
        }
        if (res.headers && res.headers["content-length"]) {
          ret.content_length = safeParseInt(res.headers["content-length"]);
        }
        return ret;
      }
    };
    module2.exports = utils;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/segments/attributes/remote_request_data.js
var require_remote_request_data = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/segments/attributes/remote_request_data.js"(exports, module2) {
    "use strict";
    var { getHttpResponseData } = require_segment_utils();
    var { stripQueryStringFromPath } = require_utils3();
    function RemoteRequestData(req, res, downstreamXRayEnabled) {
      this.init(req, res, downstreamXRayEnabled);
    }
    RemoteRequestData.prototype.init = function init(req, res, downstreamXRayEnabled) {
      this.request = {
        url: req.agent && req.agent.protocol ? req.agent.protocol + "//" + (req.host || req.getHeader("host")) + stripQueryStringFromPath(req.path) : "",
        method: req.method || ""
      };
      if (downstreamXRayEnabled) {
        this.request.traced = true;
      }
      if (res) {
        this.response = getHttpResponseData(res);
      }
    };
    module2.exports = RemoteRequestData;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/segments/attributes/subsegment.js
var require_subsegment = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/segments/attributes/subsegment.js"(exports, module2) {
    "use strict";
    var crypto = require("crypto");
    var CapturedException = require_captured_exception();
    var RemoteRequestData = require_remote_request_data();
    var SegmentEmitter = require_segment_emitter();
    var SegmentUtils = require_segment_utils();
    var Utils = require_utils3();
    var logger2 = require_logger();
    function Subsegment(name) {
      this.init(name);
    }
    Subsegment.prototype.init = function init(name) {
      if (typeof name != "string") {
        throw new Error("Subsegment name must be of type string.");
      }
      this.id = crypto.randomBytes(8).toString("hex");
      this.name = name;
      this.start_time = SegmentUtils.getCurrentTime();
      this.in_progress = true;
      this.counter = 0;
      this.notTraced = false;
    };
    Subsegment.prototype.addNewSubsegment = function addNewSubsegment(name) {
      const subsegment = new Subsegment(name);
      this.addSubsegment(subsegment);
      return subsegment;
    };
    Subsegment.prototype.addSubsegmentWithoutSampling = function addSubsegmentWithoutSampling(subsegment) {
      this.addSubsegment(subsegment);
      subsegment.notTraced = true;
    };
    Subsegment.prototype.addNewSubsegmentWithoutSampling = function addNewSubsegmentWithoutSampling(name) {
      const subsegment = new Subsegment(name);
      this.addSubsegment(subsegment);
      subsegment.notTraced = true;
      return subsegment;
    };
    Subsegment.prototype.addSubsegment = function(subsegment) {
      if (!(subsegment instanceof Subsegment)) {
        throw new Error("Failed to add subsegment:" + subsegment + ' to subsegment "' + this.name + '".  Not a subsegment.');
      }
      if (this.subsegments === void 0) {
        this.subsegments = [];
      }
      subsegment.segment = this.segment;
      subsegment.parent = this;
      subsegment.notTraced = subsegment.parent.notTraced;
      if (subsegment.end_time === void 0) {
        this.incrementCounter(subsegment.counter);
      }
      this.subsegments.push(subsegment);
    };
    Subsegment.prototype.removeSubsegment = function removeSubsegment(subsegment) {
      if (!(subsegment instanceof Subsegment)) {
        throw new Error("Failed to remove subsegment:" + subsegment + ' from subsegment "' + this.name + '".  Not a subsegment.');
      }
      if (this.subsegments !== void 0) {
        var index = this.subsegments.indexOf(subsegment);
        if (index >= 0) {
          this.subsegments.splice(index, 1);
        }
      }
    };
    Subsegment.prototype.addAttribute = function addAttribute(name, data) {
      this[name] = data;
    };
    Subsegment.prototype.addPrecursorId = function(id) {
      if (typeof id !== "string") {
        logger2.getLogger().error("Failed to add id:" + id + " to subsegment " + this.name + ".  Precursor Ids must be of type string.");
      }
      if (this.precursor_ids === void 0) {
        this.precursor_ids = [];
      }
      this.precursor_ids.push(id);
    };
    Subsegment.prototype.addAnnotation = function(key, value) {
      if (typeof value !== "boolean" && typeof value !== "string" && !isFinite(value)) {
        logger2.getLogger().error("Failed to add annotation key: " + key + " value: " + value + " to subsegment " + this.name + ". Value must be of type string, number or boolean.");
        return;
      }
      if (typeof key !== "string") {
        logger2.getLogger().error("Failed to add annotation key: " + key + " value: " + value + " to subsegment " + this.name + ". Key must be of type string.");
        return;
      }
      if (this.annotations === void 0) {
        this.annotations = {};
      }
      this.annotations[key] = value;
    };
    Subsegment.prototype.addMetadata = function(key, value, namespace) {
      if (typeof key !== "string") {
        logger2.getLogger().error("Failed to add metadata key: " + key + " value: " + value + " to subsegment " + this.name + ". Key must be of type string.");
        return;
      }
      if (namespace && typeof namespace !== "string") {
        logger2.getLogger().error("Failed to add metadata key: " + key + " value: " + value + " to subsegment " + this.name + ". Namespace must be of type string.");
        return;
      }
      var ns = namespace || "default";
      if (!this.metadata) {
        this.metadata = {};
      }
      if (!this.metadata[ns]) {
        this.metadata[ns] = {};
      }
      if (ns !== "__proto__") {
        this.metadata[ns][key] = value !== null && value !== void 0 ? value : "";
      }
    };
    Subsegment.prototype.addSqlData = function addSqlData(sqlData) {
      this.sql = sqlData;
    };
    Subsegment.prototype.addError = function addError(err, remote) {
      if (err == null || typeof err !== "object" && typeof err !== "string") {
        logger2.getLogger().error("Failed to add error:" + err + ' to subsegment "' + this.name + '".  Not an object or string literal.');
        return;
      }
      this.addFaultFlag();
      if (this.segment && this.segment.exception) {
        if (err === this.segment.exception.ex) {
          this.fault = true;
          this.cause = { id: this.segment.exception.cause, exceptions: [] };
          return;
        }
        delete this.segment.exception;
      }
      if (this.segment) {
        this.segment.exception = {
          ex: err,
          cause: this.id
        };
      } else {
      }
      if (this.cause === void 0) {
        this.cause = {
          working_directory: process.cwd(),
          exceptions: []
        };
      }
      this.cause.exceptions.unshift(new CapturedException(err, remote));
    };
    Subsegment.prototype.addRemoteRequestData = function addRemoteRequestData(req, res, downstreamXRayEnabled) {
      this.http = new RemoteRequestData(req, res, downstreamXRayEnabled);
      if ("traced" in this.http.request) {
        this.traced = this.http.request.traced;
        delete this.http.request.traced;
      }
    };
    Subsegment.prototype.addFaultFlag = function addFaultFlag() {
      this.fault = true;
    };
    Subsegment.prototype.addErrorFlag = function addErrorFlag() {
      this.error = true;
    };
    Subsegment.prototype.addThrottleFlag = function addThrottleFlag() {
      this.throttle = true;
    };
    Subsegment.prototype.close = function close(err, remote) {
      var root = this.segment;
      this.end_time = SegmentUtils.getCurrentTime();
      delete this.in_progress;
      if (err) {
        this.addError(err, remote);
      }
      if (this.parent) {
        this.parent.decrementCounter();
      }
      if (root && root.counter > SegmentUtils.getStreamingThreshold()) {
        if (this.streamSubsegments() && this.parent) {
          this.parent.removeSubsegment(this);
        }
      }
    };
    Subsegment.prototype.incrementCounter = function incrementCounter(additional) {
      this.counter = additional ? this.counter + additional + 1 : this.counter + 1;
      if (this.parent) {
        this.parent.incrementCounter(additional);
      }
    };
    Subsegment.prototype.decrementCounter = function decrementCounter() {
      this.counter--;
      if (this.parent) {
        this.parent.decrementCounter();
      }
    };
    Subsegment.prototype.isClosed = function isClosed() {
      return !this.in_progress;
    };
    Subsegment.prototype.flush = function flush() {
      if (!this.parent || !this.segment) {
        logger2.getLogger().error("Failed to flush subsegment: " + this.name + ". Subsegment must be added to a segment chain to flush.");
        return;
      }
      if (this.segment.trace_id) {
        if (this.segment.notTraced !== true && !this.notTraced) {
          SegmentEmitter.send(this);
        } else {
          logger2.getLogger().debug("Ignoring flush on subsegment " + this.id + ". Associated segment is marked as not sampled.");
        }
      } else {
        logger2.getLogger().debug("Ignoring flush on subsegment " + this.id + ". Associated segment is missing a trace ID.");
      }
    };
    Subsegment.prototype.streamSubsegments = function streamSubsegments() {
      if (this.isClosed() && this.counter <= 0) {
        this.flush();
        return true;
      } else if (this.subsegments && this.subsegments.length > 0) {
        var open = [];
        this.subsegments.forEach(function(child) {
          if (!child.streamSubsegments()) {
            open.push(child);
          }
        });
        this.subsegments = open;
      }
    };
    Subsegment.prototype.format = function format() {
      this.type = "subsegment";
      if (this.parent) {
        this.parent_id = this.parent.id;
      }
      if (this.segment) {
        this.trace_id = this.segment.trace_id;
      }
      return JSON.stringify(this);
    };
    Subsegment.prototype.toString = function toString() {
      return JSON.stringify(this);
    };
    Subsegment.prototype.toJSON = function toJSON() {
      var ignore = ["segment", "parent", "counter"];
      if (this.subsegments == null || this.subsegments.length === 0) {
        ignore.push("subsegments");
      }
      var thisCopy = Utils.objectWithoutProperties(this, ignore, false);
      return thisCopy;
    };
    module2.exports = Subsegment;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/segments/segment.js
var require_segment = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/segments/segment.js"(exports, module2) {
    "use strict";
    var crypto = require("crypto");
    var CapturedException = require_captured_exception();
    var SegmentEmitter = require_segment_emitter();
    var SegmentUtils = require_segment_utils();
    var Subsegment = require_subsegment();
    var TraceID = require_trace_id();
    var Utils = require_utils3();
    var logger2 = require_logger();
    function Segment(name, rootId, parentId) {
      this.init(name, rootId, parentId);
    }
    Segment.prototype.init = function init(name, rootId, parentId) {
      if (typeof name != "string") {
        throw new Error("Segment name must be of type string.");
      }
      var traceId;
      if (rootId && typeof rootId == "string") {
        traceId = TraceID.FromString(rootId);
      } else {
        traceId = new TraceID();
      }
      var id = crypto.randomBytes(8).toString("hex");
      var startTime = SegmentUtils.getCurrentTime();
      this.trace_id = traceId.toString();
      this.id = id;
      this.start_time = startTime;
      this.name = name || "";
      this.in_progress = true;
      this.counter = 0;
      if (parentId) {
        this.parent_id = parentId;
      }
      if (SegmentUtils.serviceData) {
        this.setServiceData(SegmentUtils.serviceData);
      }
      if (SegmentUtils.pluginData) {
        this.addPluginData(SegmentUtils.pluginData);
      }
      if (SegmentUtils.origin) {
        this.origin = SegmentUtils.origin;
      }
      if (SegmentUtils.sdkData) {
        this.setSDKData(SegmentUtils.sdkData);
      }
    };
    Segment.prototype.addIncomingRequestData = function addIncomingRequestData(data) {
      this.http = data;
    };
    Segment.prototype.addAnnotation = function addAnnotation(key, value) {
      if (typeof value !== "boolean" && typeof value !== "string" && !isFinite(value)) {
        logger2.getLogger().error("Failed to add annotation key: " + key + " value: " + value + " to subsegment " + this.name + ". Value must be of type string, number or boolean.");
        return;
      }
      if (typeof key !== "string") {
        logger2.getLogger().error("Failed to add annotation key: " + key + " value: " + value + " to subsegment " + this.name + ". Key must be of type string.");
        return;
      }
      if (this.annotations === void 0) {
        this.annotations = {};
      }
      this.annotations[key] = value;
    };
    Segment.prototype.setUser = function(user) {
      if (typeof user !== "string") {
        logger2.getLogger().error("Set user: " + user + " failed. User IDs must be of type string.");
      }
      this.user = user;
    };
    Segment.prototype.addMetadata = function(key, value, namespace) {
      if (typeof key !== "string") {
        logger2.getLogger().error("Failed to add metadata key: " + key + " value: " + value + " to segment " + this.name + ". Key must be of type string.");
        return;
      }
      if (namespace && typeof namespace !== "string") {
        logger2.getLogger().error("Failed to add metadata key: " + key + " value: " + value + " to segment " + this.name + ". Namespace must be of type string.");
        return;
      }
      var ns = namespace || "default";
      if (!this.metadata) {
        this.metadata = {};
      }
      if (!this.metadata[ns]) {
        this.metadata[ns] = {};
      }
      if (ns !== "__proto__") {
        this.metadata[ns][key] = value !== null && value !== void 0 ? value : "";
      }
    };
    Segment.prototype.setSDKData = function setSDKData(data) {
      if (!data) {
        logger2.getLogger().error("Add SDK data: " + data + " failed.Must not be empty.");
        return;
      }
      if (!this.aws) {
        this.aws = {};
      }
      this.aws.xray = data;
    };
    Segment.prototype.setMatchedSamplingRule = function setMatchedSamplingRule(ruleName) {
      if (this.aws) {
        this.aws = JSON.parse(JSON.stringify(this.aws));
      }
      if (this.aws && this.aws["xray"]) {
        this.aws.xray["rule_name"] = ruleName;
      } else {
        this.aws = { xray: { "rule_name": ruleName } };
      }
    };
    Segment.prototype.setServiceData = function setServiceData(data) {
      if (!data) {
        logger2.getLogger().error("Add service data: " + data + " failed.Must not be empty.");
        return;
      }
      this.service = data;
    };
    Segment.prototype.addPluginData = function addPluginData(data) {
      if (this.aws === void 0) {
        this.aws = {};
      }
      Object.assign(this.aws, data);
    };
    Segment.prototype.addNewSubsegment = function addNewSubsegment(name) {
      var subsegment = new Subsegment(name);
      this.addSubsegment(subsegment);
      return subsegment;
    };
    Segment.prototype.addSubsegmentWithoutSampling = function addSubsegmentWithoutSampling(subsegment) {
      this.addSubsegment(subsegment);
      subsegment.notTraced = true;
    };
    Segment.prototype.addNewSubsegmentWithoutSampling = function addNewSubsegmentWithoutSampling(name) {
      const subsegment = new Subsegment(name);
      this.addSubsegment(subsegment);
      subsegment.notTraced = true;
      return subsegment;
    };
    Segment.prototype.addSubsegment = function addSubsegment(subsegment) {
      if (!(subsegment instanceof Subsegment)) {
        throw new Error("Cannot add subsegment: " + subsegment + ". Not a subsegment.");
      }
      if (this.subsegments === void 0) {
        this.subsegments = [];
      }
      subsegment.segment = this;
      subsegment.parent = this;
      subsegment.notTraced = subsegment.parent.notTraced;
      this.subsegments.push(subsegment);
      if (!subsegment.end_time) {
        this.incrementCounter(subsegment.counter);
      }
    };
    Segment.prototype.removeSubsegment = function removeSubsegment(subsegment) {
      if (!(subsegment instanceof Subsegment)) {
        throw new Error("Failed to remove subsegment:" + subsegment + ' from subsegment "' + this.name + '".  Not a subsegment.');
      }
      if (this.subsegments !== void 0) {
        var index = this.subsegments.indexOf(subsegment);
        if (index >= 0) {
          this.subsegments.splice(index, 1);
        }
      }
    };
    Segment.prototype.addError = function addError(err, remote) {
      if (err == null || typeof err !== "object" && typeof err !== "string") {
        logger2.getLogger().error("Failed to add error:" + err + ' to subsegment "' + this.name + '".  Not an object or string literal.');
        return;
      }
      this.addFaultFlag();
      if (this.exception) {
        if (err === this.exception.ex) {
          this.cause = { id: this.exception.cause };
          delete this.exception;
          return;
        }
        delete this.exception;
      }
      if (this.cause === void 0) {
        this.cause = {
          working_directory: process.cwd(),
          exceptions: []
        };
      }
      this.cause.exceptions.push(new CapturedException(err, remote));
    };
    Segment.prototype.addFaultFlag = function addFaultFlag() {
      this.fault = true;
    };
    Segment.prototype.addErrorFlag = function addErrorFlag() {
      this.error = true;
    };
    Segment.prototype.addThrottleFlag = function addThrottleFlag() {
      this.throttle = true;
    };
    Segment.prototype.isClosed = function isClosed() {
      return !this.in_progress;
    };
    Segment.prototype.incrementCounter = function incrementCounter(additional) {
      this.counter = additional ? this.counter + additional + 1 : this.counter + 1;
      if (this.counter > SegmentUtils.streamingThreshold && this.subsegments && this.subsegments.length > 0) {
        var open = [];
        this.subsegments.forEach(function(child) {
          if (!child.streamSubsegments()) {
            open.push(child);
          }
        });
        this.subsegments = open;
      }
    };
    Segment.prototype.decrementCounter = function decrementCounter() {
      this.counter--;
      if (this.counter <= 0 && this.isClosed()) {
        this.flush();
      }
    };
    Segment.prototype.close = function(err, remote) {
      if (!this.end_time) {
        this.end_time = SegmentUtils.getCurrentTime();
      }
      if (err !== void 0) {
        this.addError(err, remote);
      }
      delete this.in_progress;
      delete this.exception;
      if (this.counter <= 0) {
        this.flush();
      }
    };
    Segment.prototype.flush = function flush() {
      if (this.notTraced !== true) {
        delete this.exception;
        var thisCopy = Utils.objectWithoutProperties(this, ["counter", "notTraced"], true);
        SegmentEmitter.send(thisCopy);
      }
    };
    Segment.prototype.format = function format() {
      var ignore = ["segment", "parent", "counter"];
      if (this.subsegments == null || this.subsegments.length === 0) {
        ignore.push("subsegments");
      }
      var thisCopy = Utils.objectWithoutProperties(this, ignore, false);
      return JSON.stringify(thisCopy);
    };
    Segment.prototype.toString = function toString() {
      return JSON.stringify(this);
    };
    module2.exports = Segment;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/context_utils.js
var require_context_utils = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/context_utils.js"(exports, module2) {
    "use strict";
    var cls = require_context();
    var logger2 = require_logger();
    var Segment = require_segment();
    var Subsegment = require_subsegment();
    var cls_mode = true;
    var NAMESPACE = "AWSXRay";
    var SEGMENT = "segment";
    var contextOverride = false;
    var contextUtils = {
      CONTEXT_MISSING_STRATEGY: {
        RUNTIME_ERROR: {
          contextMissing: function contextMissingRuntimeError(message) {
            throw new Error(message);
          }
        },
        LOG_ERROR: {
          contextMissing: function contextMissingLogError(message) {
            var err = new Error(message);
            logger2.getLogger().error(err.stack);
          }
        },
        IGNORE_ERROR: {
          contextMissing: function contextMissingIgnoreError() {
          }
        }
      },
      contextMissingStrategy: {},
      /**
       * Resolves the segment or subsegment given manual mode and params on the call required.
       * @param [Segment|Subsegment] segment - The segment manually provided via params.XraySegment, if provided.
       * @returns {Segment|Subsegment}
       * @alias module:context_utils.resolveManualSegmentParams
       */
      resolveManualSegmentParams: function resolveManualSegmentParams(params) {
        if (params && !contextUtils.isAutomaticMode()) {
          var xraySegment = params.XRaySegment || params.XraySegment;
          var segment = params.Segment;
          var found = null;
          if (xraySegment && (xraySegment instanceof Segment || xraySegment instanceof Subsegment)) {
            found = xraySegment;
            delete params.XRaySegment;
            delete params.XraySegment;
          } else if (segment && (segment instanceof Segment || segment instanceof Subsegment)) {
            found = segment;
            delete params.Segment;
          }
          return found;
        }
      },
      /**
       * Gets current CLS namespace for X-Ray SDK or creates one if absent.
       * @returns {Namespace}
       * @alias module:context_utils.getNamespace
       */
      getNamespace: function getNamespace() {
        return cls.getNamespace(NAMESPACE) || cls.createNamespace(NAMESPACE);
      },
      /**
       * Resolves the segment or subsegment given manual or automatic mode.
       * @param [Segment|Subsegment] segment - The segment manually provided, if provided.
       * @returns {Segment|Subsegment}
       * @alias module:context_utils.resolveSegment
       */
      resolveSegment: function resolveSegment(segment) {
        if (cls_mode) {
          return this.getSegment();
        } else if (segment && !cls_mode) {
          return segment;
        } else if (!segment && !cls_mode) {
          contextUtils.contextMissingStrategy.contextMissing("No sub/segment specified. A sub/segment must be provided for manual mode.");
        }
      },
      /**
       * Returns the current segment or subsegment.  For use with in automatic mode only.
       * @returns {Segment|Subsegment}
       * @alias module:context_utils.getSegment
       */
      getSegment: function getSegment() {
        if (cls_mode) {
          var segment = contextUtils.getNamespace(NAMESPACE).get(SEGMENT);
          if (!segment) {
            contextUtils.contextMissingStrategy.contextMissing("Failed to get the current sub/segment from the context.");
          } else if (segment instanceof Segment && process.env.LAMBDA_TASK_ROOT && segment.facade == true) {
            segment.resolveLambdaTraceData();
          }
          return segment;
        } else {
          contextUtils.contextMissingStrategy.contextMissing("Cannot get sub/segment from context. Not supported in manual mode.");
        }
      },
      /**
       * Sets the current segment or subsegment.  For use with in automatic mode only.
       * @param [Segment|Subsegment] segment - The sub/segment to set.
       * @returns {Segment|Subsegment}
       * @alias module:context_utils.setSegment
       */
      setSegment: function setSegment(segment) {
        if (cls_mode) {
          if (!contextUtils.getNamespace(NAMESPACE).set(SEGMENT, segment)) {
            logger2.getLogger().warn("Failed to set the current sub/segment on the context.");
          }
        } else {
          contextUtils.contextMissingStrategy.contextMissing("Cannot set sub/segment on context. Not supported in manual mode.");
        }
      },
      /**
       * Returns true if in automatic mode, otherwise false.
       * @returns {Segment|Subsegment}
       * @alias module:context_utils.isAutomaticMode
       */
      isAutomaticMode: function isAutomaticMode() {
        return cls_mode;
      },
      /**
       * Enables automatic mode. Automatic mode uses 'cls-hooked'.
       * @see https://github.com/jeff-lewis/cls-hooked
       * @alias module:context_utils.enableAutomaticMode
       */
      enableAutomaticMode: function enableAutomaticMode() {
        cls_mode = true;
        contextUtils.getNamespace(NAMESPACE);
        logger2.getLogger().debug("Overriding AWS X-Ray SDK mode. Set to automatic mode.");
      },
      /**
       * Disables automatic mode. Current segment or subsegment then must be passed manually
       * via the parent optional on captureFunc, captureAsyncFunc etc.
       * @alias module:context_utils.enableManualMode
       */
      enableManualMode: function enableManualMode() {
        cls_mode = false;
        if (cls.getNamespace(NAMESPACE)) {
          cls.destroyNamespace(NAMESPACE);
        }
        logger2.getLogger().debug("Overriding AWS X-Ray SDK mode. Set to manual mode.");
      },
      /**
       * Sets the context missing strategy if no context missing strategy is set using the environment variable with
       * key AWS_XRAY_CONTEXT_MISSING. The context missing strategy's contextMissing function will be called whenever
       * trace context is not found.
       * @param {string|function} strategy - The strategy to set. Valid string values are 'LOG_ERROR' and 'RUNTIME_ERROR'.
       *                                     Alternatively, a custom function can be supplied, which takes a error message string.
       */
      setContextMissingStrategy: function setContextMissingStrategy(strategy) {
        if (!contextOverride) {
          if (typeof strategy === "string") {
            var lookupStrategy = contextUtils.CONTEXT_MISSING_STRATEGY[strategy.toUpperCase()];
            if (lookupStrategy) {
              contextUtils.contextMissingStrategy.contextMissing = lookupStrategy.contextMissing;
              if (process.env.AWS_XRAY_CONTEXT_MISSING) {
                logger2.getLogger().debug("AWS_XRAY_CONTEXT_MISSING is set. Configured context missing strategy to " + process.env.AWS_XRAY_CONTEXT_MISSING + ".");
              } else {
                logger2.getLogger().debug("Configured context missing strategy to: " + strategy);
              }
            } else {
              throw new Error("Invalid context missing strategy: " + strategy + ". Valid values are " + Object.keys(contextUtils.CONTEXT_MISSING_STRATEGY) + ".");
            }
          } else if (typeof strategy === "function") {
            contextUtils.contextMissingStrategy.contextMissing = strategy;
            logger2.getLogger().info("Configured custom context missing strategy to function: " + strategy.name);
          } else {
            throw new Error("Context missing strategy must be either a string or a custom function.");
          }
        } else {
          logger2.getLogger().warn("Ignoring call to setContextMissingStrategy as AWS_XRAY_CONTEXT_MISSING is set. The current context missing strategy will not be changed.");
        }
      }
    };
    if (process.env.AWS_XRAY_MANUAL_MODE) {
      cls_mode = false;
      logger2.getLogger().debug("Starting the AWS X-Ray SDK in manual mode.");
    } else {
      cls.createNamespace(NAMESPACE);
      logger2.getLogger().debug("Starting the AWS X-Ray SDK in automatic mode (default).");
    }
    if (process.env.AWS_XRAY_CONTEXT_MISSING) {
      contextUtils.setContextMissingStrategy(process.env.AWS_XRAY_CONTEXT_MISSING);
      contextOverride = true;
    } else {
      contextUtils.contextMissingStrategy.contextMissing = contextUtils.CONTEXT_MISSING_STRATEGY.LOG_ERROR.contextMissing;
      logger2.getLogger().debug("Using default context missing strategy: LOG_ERROR");
    }
    module2.exports = contextUtils;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/middleware/incoming_request_data.js
var require_incoming_request_data = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/middleware/incoming_request_data.js"(exports, module2) {
    "use strict";
    var { getHttpResponseData } = require_segment_utils();
    function IncomingRequestData(req) {
      this.init(req);
    }
    IncomingRequestData.prototype.init = function init(req) {
      var forwarded = !!req.headers["x-forwarded-for"];
      var url;
      if (req.connection) {
        url = (req.connection.secure || req.connection.encrypted ? "https://" : "http://") + ((req.headers["host"] || "") + (req.url || ""));
      }
      this.request = {
        method: req.method || "",
        user_agent: req.headers["user-agent"] || "",
        client_ip: getClientIp(req) || "",
        url: url || ""
      };
      if (forwarded) {
        this.request.x_forwarded_for = forwarded;
      }
    };
    var getClientIp = function getClientIp2(req) {
      var clientIp;
      if (req.headers["x-forwarded-for"]) {
        clientIp = (req.headers["x-forwarded-for"] || "").split(",")[0];
      } else if (req.connection && req.connection.remoteAddress) {
        clientIp = req.connection.remoteAddress;
      } else if (req.socket && req.socket.remoteAddress) {
        clientIp = req.socket.remoteAddress;
      } else if (req.connection && req.connection.socket && req.connection.socket.remoteAddress) {
        clientIp = req.connection.socket.remoteAddress;
      }
      return clientIp;
    };
    IncomingRequestData.prototype.close = function close(res) {
      this.response = getHttpResponseData(res);
    };
    module2.exports = IncomingRequestData;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/middleware/sampling/local_reservoir.js
var require_local_reservoir = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/middleware/sampling/local_reservoir.js"(exports, module2) {
    "use strict";
    function LocalReservoir(fixedTarget, fallbackRate) {
      this.init(fixedTarget, fallbackRate);
    }
    LocalReservoir.prototype.init = function init(fixedTarget, fallbackRate) {
      this.usedThisSecond = 0;
      if (typeof fixedTarget === "number" && fixedTarget % 1 === 0 && fixedTarget >= 0) {
        this.fixedTarget = fixedTarget;
      } else {
        throw new Error('Error in sampling file. Rule attribute "fixed_target" must be a non-negative integer.');
      }
      if (typeof fallbackRate === "number" && fallbackRate >= 0 && fallbackRate <= 1) {
        this.fallbackRate = fallbackRate;
      } else {
        throw new Error('Error in sampling file. Rule attribute "rate" must be a number between 0 and 1 inclusive.');
      }
    };
    LocalReservoir.prototype.isSampled = function isSampled() {
      var now = Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3);
      if (now !== this.thisSecond) {
        this.usedThisSecond = 0;
        this.thisSecond = now;
      }
      if (this.usedThisSecond >= this.fixedTarget) {
        return Math.random() < this.fallbackRate;
      }
      this.usedThisSecond++;
      return true;
    };
    module2.exports = LocalReservoir;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/resources/default_sampling_rules.json
var require_default_sampling_rules = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/resources/default_sampling_rules.json"(exports, module2) {
    module2.exports = {
      default: {
        fixed_target: 1,
        rate: 0.05
      },
      version: 2
    };
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/middleware/sampling/local_sampler.js
var require_local_sampler = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/middleware/sampling/local_sampler.js"(exports, module2) {
    "use strict";
    var fs = require("fs");
    var LocalReservoir = require_local_reservoir();
    var Utils = require_utils3();
    var defaultRules = require_default_sampling_rules();
    var logger2 = require_logger();
    var LocalSampler = {
      /**
       * Makes a sample decision based on the sample request.
       * @param {object} sampleRequest - Contains information for rules matching.
       * @module LocalSampler
       * @function shouldSample
       */
      shouldSample: function shouldSample(sampleRequest) {
        var host = sampleRequest.host;
        var httpMethod = sampleRequest.httpMethod;
        var urlPath = sampleRequest.urlPath;
        var formatted = "{ http_method: " + httpMethod + ", host: " + host + ", url_path: " + urlPath + " }";
        var matched;
        this.rules.some(function(rule) {
          if (rule.default || (host == null || Utils.wildcardMatch(rule.host, host) && (httpMethod == null || Utils.wildcardMatch(rule.http_method, httpMethod)) && (urlPath == null || Utils.wildcardMatch(rule.url_path, urlPath)))) {
            matched = rule.reservoir;
            logger2.getLogger().debug("Local sampling rule match found for " + formatted + ". Matched " + (rule.default ? "default" : "{ http_method: " + rule.http_method + ", host: " + rule.host + ", url_path: " + rule.url_path + " }") + ". Using fixed_target: " + matched.fixedTarget + " and rate: " + matched.fallbackRate + ".");
            return true;
          }
        });
        if (matched) {
          return matched.isSampled();
        } else {
          logger2.getLogger().debug("No sampling rule matched for " + formatted);
          return false;
        }
      },
      /**
       * Set local rules for making sampling decisions.
       * @module LocalSampler
       * @function setLocalRules
       */
      setLocalRules: function setLocalRules(source) {
        if (source) {
          if (typeof source === "string") {
            logger2.getLogger().info("Using custom sampling rules file: " + source);
            this.rules = loadRulesConfig(JSON.parse(fs.readFileSync(source, "utf8")));
          } else {
            logger2.getLogger().info("Using custom sampling rules source.");
            this.rules = loadRulesConfig(source);
          }
        } else {
          this.rules = parseRulesConfig(defaultRules);
        }
      }
    };
    var loadRulesConfig = function loadRulesConfig2(config) {
      if (!config.version) {
        throw new Error('Error in sampling file. Missing "version" attribute.');
      }
      if (config.version === 1 || config.version === 2) {
        return parseRulesConfig(config);
      } else {
        throw new Error('Error in sampling file. Unknown version "' + config.version + '".');
      }
    };
    var parseRulesConfig = function parseRulesConfig2(config) {
      var defaultRule;
      var rules = [];
      if (config.default) {
        var missing = [];
        for (var key in config.default) {
          if (key !== "fixed_target" && key !== "rate") {
            throw new Error("Error in sampling file. Invalid attribute for default: " + key + '. Valid attributes for default are "fixed_target" and "rate".');
          } else if (typeof config.default[key] !== "number") {
            throw new Error("Error in sampling file. Default " + key + " must be a number.");
          }
        }
        if (typeof config.default.fixed_target === "undefined") {
          missing.push("fixed_target");
        }
        if (typeof config.default.rate === "undefined") {
          missing.push("rate");
        }
        if (missing.length !== 0) {
          throw new Error("Error in sampling file. Missing required attributes for default: " + missing + ".");
        }
        defaultRule = { default: true, reservoir: new LocalReservoir(config.default.fixed_target, config.default.rate) };
      } else {
        throw new Error('Error in sampling file. Expecting "default" object to be defined with attributes "fixed_target" and "rate".');
      }
      if (Array.isArray(config.rules)) {
        config.rules.forEach(function(rawRule) {
          var params = {};
          var required;
          if (config.version === 2) {
            required = { host: 1, http_method: 1, url_path: 1, fixed_target: 1, rate: 1 };
          }
          if (config.version === 1) {
            required = { service_name: 1, http_method: 1, url_path: 1, fixed_target: 1, rate: 1 };
          }
          for (var key2 in rawRule) {
            var value = rawRule[key2];
            if (!required[key2] && key2 != "description") {
              throw new Error("Error in sampling file. Rule " + JSON.stringify(rawRule) + " has invalid attribute: " + key2 + ".");
            } else if (key2 != "description" && !value && value !== 0) {
              throw new Error("Error in sampling file. Rule " + JSON.stringify(rawRule) + ' attribute "' + key2 + '" has invalid value: ' + value + ".");
            } else {
              if (config.version === 2) {
                params[key2] = value;
              }
              if (config.version === 1 && key2 === "service_name") {
                params["host"] = value;
              } else {
                params[key2] = value;
              }
              delete required[key2];
            }
          }
          if (Object.keys(required).length !== 0 && required.constructor === Object) {
            throw new Error("Error in sampling file. Rule " + JSON.stringify(rawRule) + " is missing required attributes: " + Object.keys(required) + ".");
          }
          var rule = params;
          rule.reservoir = new LocalReservoir(rawRule.fixed_target, rawRule.rate);
          rules.push(rule);
        });
      }
      rules.push(defaultRule);
      return rules;
    };
    LocalSampler.setLocalRules();
    module2.exports = LocalSampler;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/middleware/sampling/reservoir.js
var require_reservoir = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/middleware/sampling/reservoir.js"(exports, module2) {
    "use strict";
    function Reservoir() {
      this.init();
    }
    Reservoir.prototype.init = function init() {
      this.quota = null;
      this.TTL = null;
      this.takenThisSec = 0;
      this.borrowedThisSec = 0;
      this.reportInterval = 1;
      this.reportElapsed = 0;
    };
    Reservoir.prototype.borrowOrTake = function borrowOrTake(now, canBorrow) {
      this.adjustThisSec(now);
      if (this.quota >= 0 && this.TTL >= now) {
        if (this.takenThisSec >= this.quota) {
          return false;
        }
        this.takenThisSec++;
        return "take";
      }
      if (canBorrow) {
        if (this.borrowedThisSec >= 1) {
          return false;
        }
        this.borrowedThisSec++;
        return "borrow";
      }
    };
    Reservoir.prototype.adjustThisSec = function adjustThisSec(now) {
      if (now !== this.thisSec) {
        this.takenThisSec = 0;
        this.borrowedThisSec = 0;
        this.thisSec = now;
      }
    };
    Reservoir.prototype.loadNewQuota = function loadNewQuota(quota, TTL, interval) {
      if (quota) {
        this.quota = quota;
      }
      if (TTL) {
        this.TTL = TTL;
      }
      if (interval) {
        this.reportInterval = interval / 10;
      }
    };
    Reservoir.prototype.timeToReport = function timeToReport() {
      if (this.reportElapsed + 1 >= this.reportInterval) {
        this.reportElapsed = 0;
        return true;
      } else {
        this.reportElapsed += 1;
        return false;
      }
    };
    module2.exports = Reservoir;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/middleware/sampling/sampling_rule.js
var require_sampling_rule = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/middleware/sampling/sampling_rule.js"(exports, module2) {
    "use strict";
    var Utils = require_utils3();
    var Reservoir = require_reservoir();
    function SamplingRule(name, priority, rate, reservoirSize, host, httpMethod, urlPath, serviceName2, serviceType) {
      this.init(name, priority, rate, reservoirSize, host, httpMethod, urlPath, serviceName2, serviceType);
    }
    SamplingRule.prototype.init = function init(name, priority, rate, reservoirSize, host, httpMethod, urlPath, serviceName2, serviceType) {
      this.name = name;
      this.priority = priority;
      this.rate = rate;
      this.host = host;
      this.httpMethod = httpMethod;
      this.urlPath = urlPath;
      this.serviceName = serviceName2;
      this.serviceType = serviceType;
      this.reservoir = new Reservoir();
      this.borrow = !!reservoirSize;
      this.resetStatistics();
    };
    SamplingRule.prototype.match = function match(sampleRequest) {
      var host = sampleRequest.host;
      var httpMethod = sampleRequest.httpMethod;
      var serviceName2 = sampleRequest.serviceName;
      var urlPath = sampleRequest.urlPath;
      var serviceType = sampleRequest.serviceType;
      return this.isDefault() || (!host || Utils.wildcardMatch(this.host, host)) && (!httpMethod || Utils.wildcardMatch(this.httpMethod, httpMethod)) && (!serviceName2 || Utils.wildcardMatch(this.serviceName, serviceName2)) && (!urlPath || Utils.wildcardMatch(this.urlPath, urlPath)) && (!serviceType || Utils.wildcardMatch(this.serviceType, serviceType));
    };
    SamplingRule.prototype.snapshotStatistics = function snapshotStatistics() {
      var statistics = {
        requestCount: this.requestCount,
        borrowCount: this.borrowCount,
        sampledCount: this.sampledCount
      };
      this.resetStatistics();
      return statistics;
    };
    SamplingRule.prototype.merge = function merge(rule) {
      this.reservoir = rule.reservoir;
      this.requestCount = rule.requestCount;
      this.borrowCount = rule.borrowCount;
      this.sampledCount = rule.sampledCount;
      rule = null;
    };
    SamplingRule.prototype.isDefault = function isDefault() {
      return this.name === "Default";
    };
    SamplingRule.prototype.incrementRequestCount = function incrementRequestCount() {
      this.requestCount++;
    };
    SamplingRule.prototype.incrementBorrowCount = function incrementBorrowCount() {
      this.borrowCount++;
    };
    SamplingRule.prototype.incrementSampledCount = function incrementSampledCount() {
      this.sampledCount++;
    };
    SamplingRule.prototype.setRate = function setRate(rate) {
      this.rate = rate;
    };
    SamplingRule.prototype.getRate = function getRate() {
      return this.rate;
    };
    SamplingRule.prototype.getName = function getName() {
      return this.name;
    };
    SamplingRule.prototype.getPriority = function getPriority() {
      return this.priority;
    };
    SamplingRule.prototype.getReservoir = function getReservoir() {
      return this.reservoir;
    };
    SamplingRule.prototype.resetStatistics = function resetStatistics() {
      this.requestCount = 0;
      this.borrowCount = 0;
      this.sampledCount = 0;
    };
    SamplingRule.prototype.canBorrow = function canBorrow() {
      return this.borrow;
    };
    SamplingRule.prototype.everMatched = function everMatched() {
      return this.requestCount > 0;
    };
    SamplingRule.prototype.timeToReport = function timeToReport() {
      return this.reservoir.timeToReport();
    };
    module2.exports = SamplingRule;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/middleware/sampling/service_connector.js
var require_service_connector = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/middleware/sampling/service_connector.js"(exports, module2) {
    "use strict";
    var crypto = require("crypto");
    var logger2 = require_logger();
    var SamplingRule = require_sampling_rule();
    var DaemonConfig = require_daemon_config();
    var util = require("util");
    var http = require("http");
    var ServiceConnector = {
      // client_id is a 12 byte cryptographically secure random hex
      // identifying the SDK instance and is generated during SDK initialization/
      // This is required when reporting sampling to X-Ray back-end.
      clientId: crypto.randomBytes(12).toString("hex"),
      samplingRulesPath: "/GetSamplingRules",
      samplingTargetsPath: "/SamplingTargets",
      logger: logger2,
      httpClient: http,
      fetchSamplingRules: function fetchSamplingRules(callback) {
        const body = "{}";
        const options = getOptions(this.samplingRulesPath, body.length);
        const httpReq = this.httpClient.__request ? this.httpClient.__request : this.httpClient.request;
        const req = httpReq(options, (res) => {
          var data = "";
          res.on("data", (d) => {
            data += d;
          });
          res.on("error", (error) => {
            callback(error);
          });
          res.on("end", () => {
            var dataObj;
            try {
              dataObj = JSON.parse(data);
            } catch (err) {
              callback(err);
              return;
            }
            if (!dataObj) {
              callback(new Error("AWS X-Ray GetSamplingRules API returned empty response"));
              return;
            }
            var newRules = assembleRules(dataObj);
            callback(null, newRules);
          });
        });
        req.on("error", () => {
          callback(new Error(`Failed to connect to X-Ray daemon at ${options.hostname}:${options.port} to get sampling rules.`));
        });
        req.write(body);
        req.end();
      },
      fetchTargets: function fetchTargets(rules, callback) {
        const body = JSON.stringify(constructStatisticsDocs(rules));
        const options = getOptions(this.samplingTargetsPath, body.length);
        const httpReq = this.httpClient.__request ? this.httpClient.__request : this.httpClient.request;
        const req = httpReq(options, (res) => {
          var data = "";
          res.on("data", (d) => {
            data += d;
          });
          res.on("error", (error) => {
            callback(error);
          });
          res.on("end", () => {
            var dataObj;
            try {
              dataObj = JSON.parse(data);
            } catch (err) {
              callback(err);
              return;
            }
            if (!dataObj || typeof dataObj["LastRuleModification"] != "number") {
              callback(new Error("AWS X-Ray SamplingTargets API returned invalid response"));
              return;
            }
            var targetsMapping = assembleTargets(dataObj);
            var ruleFreshness = dateToEpoch(dataObj["LastRuleModification"]);
            callback(null, targetsMapping, ruleFreshness);
          });
        });
        req.on("error", () => {
          callback(new Error(`Failed to connect to X-Ray daemon at ${options.hostname}:${options.port} to get sampling targets.`));
        });
        req.write(body);
        req.end();
      }
    };
    var constructStatisticsDocs = function constructStatisticsDocs2(rules) {
      var documents = [];
      var now = Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3);
      rules.forEach(function(rule) {
        var statistics = rule.snapshotStatistics();
        var doc = {
          "RuleName": rule.getName(),
          "ClientID": ServiceConnector.clientId,
          "RequestCount": statistics.requestCount,
          "BorrowCount": statistics.borrowCount,
          "SampledCount": statistics.sampledCount,
          "Timestamp": now
        };
        documents.push(doc);
      });
      return { SamplingStatisticsDocuments: documents };
    };
    var assembleRules = function assembleRules2(data) {
      var newRules = [];
      var ruleList = data["SamplingRuleRecords"] || [];
      ruleList.forEach(function(ruleRecord) {
        ruleRecord = ruleRecord["SamplingRule"];
        if (isRuleValid(ruleRecord)) {
          var newRule = new SamplingRule(ruleRecord["RuleName"], ruleRecord["Priority"], ruleRecord["FixedRate"], ruleRecord["ReservoirSize"], ruleRecord["Host"], ruleRecord["HTTPMethod"], ruleRecord["URLPath"], ruleRecord["ServiceName"], ruleRecord["ServiceType"]);
          newRules.push(newRule);
        }
      });
      return newRules;
    };
    var assembleTargets = function assembleTargets2(data) {
      var docs = data["SamplingTargetDocuments"] || [];
      var targetsMapping = {};
      docs.forEach(function(doc) {
        var newTarget = {
          rate: doc["FixedRate"],
          quota: doc["ReservoirQuota"],
          TTL: dateToEpoch(doc["ReservoirQuotaTTL"]),
          interval: doc["Interval"]
        };
        targetsMapping[doc["RuleName"]] = newTarget;
      });
      return targetsMapping;
    };
    var isRuleValid = function isRuleValid2(record) {
      return record["Version"] === 1 && record["ResourceARN"] === "*" && record["Attributes"] && Object.keys(record["Attributes"]).length === 0 && record["ServiceType"] && record["RuleName"] && record["Priority"] && typeof record["FixedRate"] == "number";
    };
    var dateToEpoch = function dateToEpoch2(date) {
      return new Date(date).getTime() / 1e3;
    };
    var getOptions = function getOptions2(path, contentLength) {
      const options = {
        hostname: DaemonConfig.tcp_ip,
        port: DaemonConfig.tcp_port,
        method: "POST",
        path,
        headers: {
          "Content-Type": "application/json",
          "Content-Length": contentLength,
          "Host": util.format("%s:%d", DaemonConfig.tcp_ip, DaemonConfig.tcp_port)
        }
      };
      return options;
    };
    module2.exports = ServiceConnector;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/middleware/sampling/rule_cache.js
var require_rule_cache = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/middleware/sampling/rule_cache.js"(exports, module2) {
    "use strict";
    var TTL = 60 * 60;
    var RuleCache = {
      rules: [],
      lastUpdated: null,
      /**
       * Tries to find a valid rule that matches the sample request.
       * @param {object} sampleRequest - Contains information for rules matching.
       * @param {number} now - Current epoch in seconds.
       * @module RuleCache
       * @function getMatchedRule
       */
      getMatchedRule: function getMatchedRule(sampleRequest, now) {
        if (isExpired(now)) {
          return null;
        }
        var matchedRule;
        this.rules.forEach(function(rule) {
          if (!matchedRule && rule.match(sampleRequest)) {
            matchedRule = rule;
          }
          if (rule.isDefault() && !matchedRule) {
            matchedRule = rule;
          }
        });
        return matchedRule;
      },
      /**
       * Load rules fetched from X-Ray service in order sorted by priorities.
       * @param {object} rules - Newly fetched rules to load.
       * @module RuleCache
       * @function loadRules
       */
      loadRules: function loadRules(rules) {
        var oldRules = {};
        this.rules.forEach(function(rule) {
          oldRules[rule.getName()] = rule;
        });
        this.rules = rules;
        this.rules.forEach(function(rule) {
          var oldRule = oldRules[rule.getName()];
          if (oldRule) {
            rule.merge(oldRule);
          }
        });
        this.rules.sort(function(a, b) {
          var v = a.getPriority() - b.getPriority();
          if (v !== 0) {
            return v;
          }
          if (a.getName() > b.getName()) {
            return 1;
          } else {
            return -1;
          }
        });
      },
      /**
       * Load targets fetched from X-Ray service.
       * @param {object} targetsMapping - Newly fetched targets map with rule name as key.
       * @module RuleCache
       * @function loadTargets
       */
      loadTargets: function loadTargets(targetsMapping) {
        this.rules.forEach(function(rule) {
          var target = targetsMapping[rule.getName()];
          if (target) {
            rule.getReservoir().loadNewQuota(target.quota, target.TTL, target.interval);
            rule.setRate(target.rate);
          }
        });
      },
      getRules: function getRules() {
        return this.rules;
      },
      timestamp: function timestamp(now) {
        this.lastUpdated = now;
      },
      getLastUpdated: function getLastUpdated() {
        return this.lastUpdated;
      }
    };
    var isExpired = function isExpired2(now) {
      if (!RuleCache.getLastUpdated()) {
        return true;
      }
      return now > RuleCache.getLastUpdated() + TTL;
    };
    module2.exports = RuleCache;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/middleware/sampling/rule_poller.js
var require_rule_poller = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/middleware/sampling/rule_poller.js"(exports, module2) {
    "use strict";
    var logger2 = require_logger();
    var ServiceConnector = require_service_connector();
    var ruleCache = require_rule_cache();
    var DEFAULT_INTERVAL = 5 * 60 * 1e3;
    var RulePoller = {
      start: function start() {
        if (this.poller) {
          clearInterval(this.poller);
        }
        refresh(false);
        this.poller = setInterval(refresh, DEFAULT_INTERVAL);
        this.poller.unref();
      }
    };
    var refresh = function refresh2(jitter) {
      jitter = typeof jitter === "undefined" ? true : jitter;
      if (jitter) {
        var delay = getJitter();
        setTimeout(refreshWithFirewall, delay);
      } else {
        refreshWithFirewall();
      }
    };
    var refreshWithFirewall = function refreshWithFirewall2() {
      try {
        refreshCache();
      } catch (e) {
        logger2.getLogger().warn("Encountered unexpected exception when fetching sampling rules: " + e);
      }
    };
    var refreshCache = function refreshCache2() {
      var now = Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3);
      ServiceConnector.fetchSamplingRules(function(err, newRules) {
        if (err) {
          logger2.getLogger().warn("Failed to retrieve sampling rules from X-Ray service:", err);
        } else if (newRules.length !== 0) {
          ruleCache.loadRules(newRules);
          ruleCache.timestamp(now);
          logger2.getLogger().info("Successfully refreshed centralized sampling rule cache.");
        }
      });
    };
    var getJitter = function getJitter2() {
      return Math.random() * 5;
    };
    module2.exports = RulePoller;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/middleware/sampling/target_poller.js
var require_target_poller = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/middleware/sampling/target_poller.js"(exports, module2) {
    "use strict";
    var rulePoller = require_rule_poller();
    var serviceConnector = require_service_connector();
    var ruleCache = require_rule_cache();
    var logger2 = require_logger();
    var DEFAULT_INTERVAL = 10 * 1e3;
    var TargetPoller = {
      interval: DEFAULT_INTERVAL,
      start: function start() {
        this.poller = setInterval(refreshWithFirewall, DEFAULT_INTERVAL + getJitter());
        this.poller.unref();
      }
    };
    var refreshWithFirewall = function refreshWithFirewall2() {
      try {
        refresh();
      } catch (e) {
        logger2.getLogger().warn("Encountered unexpected exception when fetching sampling targets: " + e);
      }
    };
    var refresh = function refresh2() {
      var candidates = getCandidates();
      if (candidates && candidates.length > 0) {
        serviceConnector.fetchTargets(candidates, function(err, targetsMapping, ruleFreshness) {
          if (err) {
            logger2.getLogger().warn("Failed to retrieve sampling targets from X-Ray service:", err);
            return;
          }
          ruleCache.loadTargets(targetsMapping);
          if (ruleFreshness > ruleCache.getLastUpdated()) {
            logger2.getLogger().info("Performing out-of-band sampling rule polling to fetch updated rules.");
            rulePoller.start();
          }
          logger2.getLogger().info("Successfully reported rule statistics to get new sampling quota.");
        });
      }
    };
    var getCandidates = function getCandidates2() {
      var rules = ruleCache.getRules();
      var candidates = [];
      rules.forEach(function(rule) {
        if (rule.everMatched() && rule.timeToReport()) {
          candidates.push(rule);
        }
      });
      return candidates;
    };
    var getJitter = function getJitter2() {
      return Math.random() / TargetPoller.interval;
    };
    module2.exports = TargetPoller;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/middleware/sampling/default_sampler.js
var require_default_sampler = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/middleware/sampling/default_sampler.js"(exports, module2) {
    "use strict";
    var logger2 = require_logger();
    var util = require("util");
    var SegmentUtils = require_segment_utils();
    var DefaultSampler = {
      localSampler: require_local_sampler(),
      rulePoller: require_rule_poller(),
      targetPoller: require_target_poller(),
      ruleCache: require_rule_cache(),
      started: false,
      /**
       * Makes a sample decision based on the sample request.
       * @param {object} sampleRequest - Contains information for rules matching.
       * @module DefaultSampler
       * @function shouldSample
       */
      shouldSample: function shouldSample(sampleRequest) {
        try {
          if (!this.started) {
            this.start();
          }
          if (!sampleRequest.serviceType) {
            sampleRequest.serviceType = SegmentUtils.origin;
          }
          var now = Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3);
          var matchedRule = this.ruleCache.getMatchedRule(sampleRequest, now);
          if (matchedRule) {
            logger2.getLogger().debug(util.format("Rule %s is matched.", matchedRule.getName()));
            return processMatchedRule(matchedRule, now);
          } else {
            logger2.getLogger().info("No effective centralized sampling rule match. Fallback to local rules.");
            return this.localSampler.shouldSample(sampleRequest);
          }
        } catch (err) {
          logger2.getLogger().error("Unhandled exception by the SDK during making sampling decisions: " + err);
        }
      },
      /**
       * Set local rules in case there is a need to fallback.
       * @module DefaultSampler
       * @function setLocalRules
       */
      setLocalRules: function setLocalRules(source) {
        this.localSampler.setLocalRules(source);
      },
      /**
       * Start the pollers to poll sampling rules and targets from X-Ray service.
       * @module DefaultSampler
       * @function start
       */
      start: function start() {
        if (!this.started) {
          this.rulePoller.start();
          this.targetPoller.start();
          this.started = true;
        }
      }
    };
    var processMatchedRule = function processMatchedRule2(rule, now) {
      rule.incrementRequestCount();
      var reservoir = rule.getReservoir();
      var sample = true;
      var decision = reservoir.borrowOrTake(now, rule.canBorrow());
      if (decision === "borrow") {
        rule.incrementBorrowCount();
      } else if (decision === "take") {
        rule.incrementSampledCount();
      } else if (Math.random() <= rule.getRate()) {
        rule.incrementSampledCount();
      } else {
        sample = false;
      }
      if (sample) {
        return rule.getName();
      } else {
        return false;
      }
    };
    module2.exports = DefaultSampler;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/middleware/mw_utils.js
var require_mw_utils = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/middleware/mw_utils.js"(exports, module2) {
    "use strict";
    var Segment = require_segment();
    var IncomingRequestData = require_incoming_request_data();
    var logger2 = require_logger();
    var coreUtils = require_utils3();
    var wildcardMatch = require_utils3().wildcardMatch;
    var processTraceData = require_utils3().processTraceData;
    var XRAY_HEADER = "x-amzn-trace-id";
    var overrideFlag = !!process.env.AWS_XRAY_TRACING_NAME;
    var utils = {
      defaultName: process.env.AWS_XRAY_TRACING_NAME,
      dynamicNaming: false,
      hostPattern: null,
      sampler: require_default_sampler(),
      /**
       * Enables dynamic naming for segments via the middleware. Use 'AWSXRay.middleware.enableDynamicNaming()'.
       * @param {string} [hostPattern] - The pattern to match the host header. See the README on dynamic and fixed naming modes.
       * @alias module:mw_utils.enableDynamicNaming
       */
      enableDynamicNaming: function(hostPattern) {
        this.dynamicNaming = true;
        if (hostPattern && typeof hostPattern !== "string") {
          throw new Error("Host pattern must be a string.");
        }
        this.hostPattern = hostPattern || null;
      },
      /**
       * Splits out the 'x-amzn-trace-id' header params from the incoming request.  Used by the middleware.
       * @param {http.IncomingMessage|https.IncomingMessage} req - The request object from the incoming call.
       * @returns {object}
       * @alias module:mw_utils.processHeaders
       */
      processHeaders: function processHeaders(req) {
        var amznTraceHeader = {};
        if (req && req.headers && req.headers[XRAY_HEADER]) {
          amznTraceHeader = processTraceData(req.headers[XRAY_HEADER]);
        }
        return amznTraceHeader;
      },
      /**
       * Resolves the name of the segment as determined by fixed or dynamic mode options. Used by the middleware.
       * @param {string} hostHeader - The string from the request.headers.host property.
       * @returns {string}
       * @alias module:mw_utils.resolveName
       */
      resolveName: function resolveName(hostHeader) {
        var name;
        if (this.dynamicNaming && hostHeader) {
          name = this.hostPattern ? wildcardMatch(this.hostPattern, hostHeader) ? hostHeader : this.defaultName : hostHeader;
        } else {
          name = this.defaultName;
        }
        return name;
      },
      /**
       * Resolves the sampling decision as determined by the values given and options set. Used by the middleware.
       * @param {object} amznTraceHeader - The object as returned by the processHeaders function.
       * @param {Segment} segment - The string from the request.headers.host property.
       * @param {http.ServerResponse|https.ServerResponse} res - The response object from the incoming call.
       * @returns {boolean}
       * @alias module:mw_utils.resolveSampling
       */
      resolveSampling: function resolveSampling(amznTraceHeader, segment, res) {
        var isSampled;
        if (amznTraceHeader.sampled === "1") {
          isSampled = true;
        } else if (amznTraceHeader.sampled === "0") {
          isSampled = false;
        } else {
          var sampleRequest = {
            host: res.req.headers.host,
            httpMethod: res.req.method,
            urlPath: res.req.url,
            serviceName: segment.name
          };
          isSampled = this.sampler.shouldSample(sampleRequest);
          if (isSampled instanceof String || typeof isSampled === "string") {
            segment.setMatchedSamplingRule(isSampled);
            isSampled = true;
          }
        }
        if (amznTraceHeader.sampled === "?") {
          res.header[XRAY_HEADER] = "Root=" + amznTraceHeader.root + ";Sampled=" + (isSampled ? "1" : "0");
        }
        if (!isSampled) {
          segment.notTraced = true;
        }
      },
      /**
       * Sets the default name of created segments. Used with the middleware.
       * Can be overridden by the AWS_XRAY_TRACING_NAME environment variable.
       * @param {string} name - The default name for segments created in the middleware.
       * @alias module:mw_utils.setDefaultName
       */
      setDefaultName: function setDefaultName(name) {
        if (!overrideFlag) {
          this.defaultName = name;
        }
      },
      disableCentralizedSampling: function disableCentralizedSampling() {
        this.sampler = require_local_sampler();
      },
      /**
       * Overrides the default sampling rules file to specify at what rate to sample at for specific routes.
       * The base sampling rules file can be found at /lib/resources/default_sampling_rules.json
       * @param {string|Object} source - The path to the custom sampling rules file, or the source JSON object.
       * @memberof AWSXRay
       */
      setSamplingRules: function setSamplingRules(source) {
        if (!source || source instanceof String || !(typeof source === "string" || source instanceof Object)) {
          throw new Error("Please specify a path to the local sampling rules file, or supply an object containing the rules.");
        }
        this.sampler.setLocalRules(source);
      },
      /**
       * Logs a debug message including core request and segment information
       * @param {string} message - The message to be logged
       * @param {string} url - The request url being traced
       * @param {Segment} - The current segment
       */
      middlewareLog: function middlewareLog(message, url, segment) {
        logger2.getLogger().debug(message + ": { url: " + url + ", name: " + segment.name + ", trace_id: " + segment.trace_id + ", id: " + segment.id + ", sampled: " + !segment.notTraced + " }");
      },
      /**
       * Traces the request/response cycle of an http.IncomingMessage / http.ServerResponse pair.
       * Resolves sampling rules, creates a segment, adds the core request / response data adding
       * throttling / error / fault flags based on the response status code.
       * @param {http.IncomingMessage} req - The incoming request.
       * @param {http.ServerResponse} res - The server response.
       * @returns {Segment}
       * @memberof AWSXRay
       */
      traceRequestResponseCycle: function traceRequestResponseCycle(req, res) {
        var amznTraceHeader = this.processHeaders(req);
        var name = this.resolveName(req.headers.host);
        var segment = new Segment(name, amznTraceHeader.root, amznTraceHeader.parent);
        var responseWithEmbeddedRequest = Object.assign({}, res, { req });
        this.resolveSampling(amznTraceHeader, segment, responseWithEmbeddedRequest);
        segment.addIncomingRequestData(new IncomingRequestData(req));
        this.middlewareLog("Starting middleware segment", req.url, segment);
        var middlewareLog = this.middlewareLog;
        var didEnd = false;
        var endSegment = function() {
          if (didEnd) {
            return;
          }
          didEnd = true;
          if (res.statusCode === 429) {
            segment.addThrottleFlag();
          }
          const cause = coreUtils.getCauseTypeFromHttpStatus(res.statusCode);
          if (cause) {
            segment[cause] = true;
          }
          segment.http.close(res);
          segment.close();
          middlewareLog("Closed middleware segment successfully", req.url, segment);
        };
        res.on("finish", endSegment);
        res.on("close", endSegment);
        return segment;
      }
    };
    module2.exports = utils;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/env/aws_lambda.js
var require_aws_lambda = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/env/aws_lambda.js"(exports, module2) {
    "use strict";
    var contextUtils = require_context_utils();
    var mwUtils = require_mw_utils();
    var LambdaUtils = require_utils3().LambdaUtils;
    var Segment = require_segment();
    var SegmentEmitter = require_segment_emitter();
    var SegmentUtils = require_segment_utils();
    var logger2 = require_logger();
    var TraceID = require_trace_id();
    var xAmznTraceIdPrev = null;
    module2.exports.init = function init() {
      contextUtils.enableManualMode = function() {
        logger2.getLogger().warn("AWS Lambda does not support AWS X-Ray manual mode.");
      };
      SegmentEmitter.disableReusableSocket();
      SegmentUtils.setStreamingThreshold(0);
      logger2.getLogger().info("Disabling centralized sampling in Lambda environment.");
      mwUtils.disableCentralizedSampling();
      var namespace = contextUtils.getNamespace();
      namespace.enter(namespace.createContext());
      contextUtils.setSegment(facadeSegment());
    };
    var facadeSegment = function facadeSegment2() {
      var segment = new Segment("facade");
      var whitelistFcn = ["addNewSubsegment", "addSubsegment", "removeSubsegment", "toString", "addSubsegmentWithoutSampling", "addNewSubsegmentWithoutSampling"];
      var silentFcn = ["incrementCounter", "decrementCounter", "isClosed", "close", "format", "flush"];
      var xAmznTraceId = process.env._X_AMZN_TRACE_ID;
      for (var key in segment) {
        if (typeof segment[key] === "function" && whitelistFcn.indexOf(key) === -1) {
          if (silentFcn.indexOf(key) === -1) {
            segment[key] = function() {
              var func = key;
              return function facade() {
                logger2.getLogger().warn('Function "' + func + '" cannot be called on an AWS Lambda segment. Please use a subsegment to record data.');
                return;
              };
            }();
          } else {
            segment[key] = function facade() {
              return;
            };
          }
        }
      }
      segment.trace_id = TraceID.Invalid().toString();
      segment.isClosed = function() {
        return true;
      };
      segment.in_progress = false;
      segment.counter = 1;
      segment.notTraced = true;
      segment.facade = true;
      segment.reset = function reset() {
        this.trace_id = TraceID.Invalid().toString();
        this.id = "00000000";
        delete this.subsegments;
        this.notTraced = true;
      };
      segment.resolveLambdaTraceData = function resolveLambdaTraceData() {
        var xAmznLambda = process.env._X_AMZN_TRACE_ID;
        if (xAmznLambda) {
          if (xAmznLambda != xAmznTraceIdPrev) {
            this.reset();
            if (LambdaUtils.populateTraceData(segment, xAmznLambda)) {
              xAmznTraceIdPrev = xAmznLambda;
            }
          }
        } else {
          this.reset();
          contextUtils.contextMissingStrategy.contextMissing("Missing AWS Lambda trace data for X-Ray. Ensure Active Tracing is enabled and no subsegments are created outside the function handler.");
        }
      };
      if (LambdaUtils.validTraceData(xAmznTraceId)) {
        if (LambdaUtils.populateTraceData(segment, xAmznTraceId)) {
          xAmznTraceIdPrev = xAmznTraceId;
        }
      }
      return segment;
    };
  }
});

// node_modules/aws-xray-sdk-core/package.json
var require_package = __commonJS({
  "node_modules/aws-xray-sdk-core/package.json"(exports, module2) {
    module2.exports = {
      name: "aws-xray-sdk-core",
      version: "3.5.2",
      description: "AWS X-Ray SDK for Javascript",
      author: "Amazon Web Services",
      contributors: [
        "Sandra McMullen <mcmuls@amazon.com>",
        "William Armiros <armiros@amazon.com>",
        "Moritz Onken <onken@netcubed.de>"
      ],
      files: [
        "dist/lib/**/*",
        "LICENSE",
        "README.md"
      ],
      main: "dist/lib/index.js",
      types: "dist/lib/index.d.ts",
      engines: {
        node: ">= 14.x"
      },
      directories: {
        test: "test"
      },
      "//": "@types/cls-hooked is exposed in API so must be in dependencies, not devDependencies",
      dependencies: {
        "@aws-sdk/service-error-classification": "^3.4.1",
        "@aws-sdk/types": "^3.4.1",
        "@types/cls-hooked": "^4.3.3",
        "atomic-batcher": "^1.0.2",
        "cls-hooked": "^4.2.2",
        semver: "^7.5.3"
      },
      scripts: {
        prepare: "npm run compile",
        compile: "tsc && npm run copy-lib && npm run copy-test",
        "copy-lib": "find lib -type f \\( -name '*.d.ts' -o -name '*.json' \\) | xargs -I % ../../scripts/cp-with-structure.sh % dist",
        "copy-test": "find test -name '*.json' | xargs -I % ../../scripts/cp-with-structure.sh % dist",
        lint: "eslint .",
        "lint:fix": "eslint . --fix",
        test: "npm run compile && mocha --recursive ./dist/test/ -R spec && tsd && mocha --recursive ./dist/test_async/ -R spec",
        "test-d": "tsd",
        "test-async": "npm run compile && mocha --recursive ./dist/test_async/ -R spec",
        clean: "rm -rf dist && rm -rf node_modules",
        testcov: "nyc npm run test",
        reportcov: "nyc report --reporter=text-lcov > coverage.lcov && codecov"
      },
      keywords: [
        "amazon",
        "api",
        "aws",
        "core",
        "xray",
        "x-ray",
        "x ray"
      ],
      license: "Apache-2.0",
      repository: "https://github.com/aws/aws-xray-sdk-node/tree/master/packages/core",
      gitHead: "6a9f9991c4aa3eead1609f986ea9354d50f5436f"
    };
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/segments/plugins/plugin.js
var require_plugin = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/segments/plugins/plugin.js"(exports, module2) {
    "use strict";
    var http = require("http");
    var Plugin = {
      METADATA_TIMEOUT: 1e3,
      /**
       * Asynchronously retrieves metadata from on-instance endpoint with an HTTP request using retries for
       * requests that time out.
       * @param {object} options - The HTTP options to make the request with
       * @param {function} callback - callback to plugin
       */
      getPluginMetadata: function(options, callback) {
        const METADATA_RETRY_TIMEOUT = 250;
        const METADATA_RETRIES = 5;
        var retries = METADATA_RETRIES;
        var getMetadata = function() {
          var httpReq = http.__request ? http.__request : http.request;
          var req = httpReq(options, function(res) {
            var body = "";
            res.on("data", function(chunk) {
              body += chunk;
            });
            res.on("end", function() {
              if (this.statusCode === 200 || this.statusCode === 300) {
                try {
                  body = JSON.parse(body);
                } catch (e) {
                  callback(e);
                  return;
                }
                callback(null, body);
              } else if (retries > 0 && Math.floor(this.statusCode / 100) === 5) {
                retries--;
                setTimeout(getMetadata, METADATA_RETRY_TIMEOUT);
              } else {
                callback(new Error(`Failed to retrieve metadata with options: ${options}`));
              }
            });
          });
          req.on("error", function(err) {
            callback(err);
          });
          req.on("timeout", function() {
            req.abort();
          });
          req.setTimeout(Plugin.METADATA_TIMEOUT);
          req.end();
        };
        getMetadata();
      }
    };
    module2.exports = Plugin;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/segments/plugins/ec2_plugin.js
var require_ec2_plugin = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/segments/plugins/ec2_plugin.js"(exports, module2) {
    "use strict";
    var Plugin = require_plugin();
    var logger2 = require_logger();
    var http = require("http");
    var EC2Plugin = {
      /**
       * A function to get the instance data from the EC2 metadata service.
       * @param {function} callback - The callback for the plugin loader.
       */
      getData: function(callback) {
        const METADATA_PATH = "/latest/dynamic/instance-identity/document";
        function populateMetadata(token) {
          const options = getOptions(METADATA_PATH, "GET", token ? { "X-aws-ec2-metadata-token": token } : {});
          Plugin.getPluginMetadata(options, function(err, data) {
            if (err || !data) {
              logger2.getLogger().error("Error loading EC2 plugin metadata: ", err ? err.toString() : "Could not retrieve data from IMDS.");
              callback();
              return;
            }
            const metadata = {
              ec2: {
                instance_id: data.instanceId,
                availability_zone: data.availabilityZone,
                instance_size: data.instanceType,
                ami_id: data.imageId
              }
            };
            callback(metadata);
          });
        }
        getToken(function(token) {
          if (token === null) {
            logger2.getLogger().debug("EC2Plugin failed to get token from IMDSv2. Falling back to IMDSv1.");
          }
          populateMetadata(token);
        });
      },
      originName: "AWS::EC2::Instance"
    };
    function getToken(callback) {
      const httpReq = http.__request ? http.__request : http.request;
      const TTL = 60;
      const TOKEN_PATH = "/latest/api/token";
      const options = getOptions(TOKEN_PATH, "PUT", {
        "X-aws-ec2-metadata-token-ttl-seconds": TTL
      });
      let req = httpReq(options, function(res) {
        let body = "";
        res.on("data", function(chunk) {
          body += chunk;
        });
        res.on("end", function() {
          if (this.statusCode === 200 || this.statusCode === 300) {
            callback(body);
          } else {
            callback(null);
          }
        });
      });
      req.on("error", function() {
        callback(null);
      });
      req.on("timeout", function() {
        req.abort();
        callback(null);
      });
      req.setTimeout(Plugin.METADATA_TIMEOUT);
      req.end();
    }
    function getOptions(path, method, headers) {
      if (!method) {
        method = "GET";
      }
      if (!headers) {
        headers = {};
      }
      return {
        host: "169.254.169.254",
        path,
        method,
        headers
      };
    }
    module2.exports = EC2Plugin;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/segments/plugins/ecs_plugin.js
var require_ecs_plugin = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/segments/plugins/ecs_plugin.js"(exports, module2) {
    "use strict";
    var os = require("os");
    var ECSPlugin = {
      /**
       * A function to get the instance data from the ECS instance.
       * @param {function} callback - The callback for the plugin loader.
       */
      getData: function(callback) {
        callback({ ecs: { container: os.hostname() } });
      },
      originName: "AWS::ECS::Container"
    };
    module2.exports = ECSPlugin;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/segments/plugins/elastic_beanstalk_plugin.js
var require_elastic_beanstalk_plugin = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/segments/plugins/elastic_beanstalk_plugin.js"(exports, module2) {
    "use strict";
    var fs = require("fs");
    var logger2 = require_logger();
    var ENV_CONFIG_LOCATION = "/var/elasticbeanstalk/xray/environment.conf";
    var ElasticBeanstalkPlugin = {
      /**
       * A function to get data from the Elastic Beanstalk environment configuration file.
       * @param {function} callback - The callback for the plugin loader.
       */
      getData: function(callback) {
        fs.readFile(ENV_CONFIG_LOCATION, "utf8", function(err, rawData) {
          if (err) {
            logger2.getLogger().error("Error loading Elastic Beanstalk plugin:", err.stack);
            callback();
          } else {
            var data = JSON.parse(rawData);
            var metadata = {
              elastic_beanstalk: {
                environment: data.environment_name,
                version_label: data.version_label,
                deployment_id: data.deployment_id
              }
            };
            callback(metadata);
          }
        });
      },
      originName: "AWS::ElasticBeanstalk::Environment"
    };
    module2.exports = ElasticBeanstalkPlugin;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/resources/aws_whitelist.json
var require_aws_whitelist = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/resources/aws_whitelist.json"(exports, module2) {
    module2.exports = {
      services: {
        dynamodb: {
          operations: {
            batchGetItem: {
              request_descriptors: {
                RequestItems: {
                  get_keys: true,
                  rename_to: "table_names"
                }
              },
              response_parameters: [
                "ConsumedCapacity"
              ]
            },
            batchWriteItem: {
              request_descriptors: {
                RequestItems: {
                  get_keys: true,
                  rename_to: "table_names"
                }
              },
              response_parameters: [
                "ConsumedCapacity",
                "ItemCollectionMetrics"
              ]
            },
            createTable: {
              request_parameters: [
                "GlobalSecondaryIndexes",
                "LocalSecondaryIndexes",
                "ProvisionedThroughput",
                "TableName"
              ]
            },
            deleteItem: {
              request_parameters: [
                "TableName"
              ],
              response_parameters: [
                "ConsumedCapacity",
                "ItemCollectionMetrics"
              ]
            },
            deleteTable: {
              request_parameters: [
                "TableName"
              ]
            },
            describeTable: {
              request_parameters: [
                "TableName"
              ]
            },
            getItem: {
              request_parameters: [
                "ConsistentRead",
                "ProjectionExpression",
                "TableName"
              ],
              response_parameters: [
                "ConsumedCapacity"
              ]
            },
            listTables: {
              request_parameters: [
                "ExclusiveStartTableName",
                "Limit"
              ],
              response_descriptors: {
                TableNames: {
                  list: true,
                  get_count: true,
                  rename_to: "table_count"
                }
              }
            },
            putItem: {
              request_parameters: [
                "TableName"
              ],
              response_parameters: [
                "ConsumedCapacity",
                "ItemCollectionMetrics"
              ]
            },
            query: {
              request_parameters: [
                "AttributesToGet",
                "ConsistentRead",
                "IndexName",
                "Limit",
                "ProjectionExpression",
                "ScanIndexForward",
                "Select",
                "TableName"
              ],
              response_parameters: [
                "ConsumedCapacity"
              ]
            },
            scan: {
              request_parameters: [
                "AttributesToGet",
                "ConsistentRead",
                "IndexName",
                "Limit",
                "ProjectionExpression",
                "Segment",
                "Select",
                "TableName",
                "TotalSegments"
              ],
              response_parameters: [
                "ConsumedCapacity",
                "Count",
                "ScannedCount"
              ]
            },
            updateItem: {
              request_parameters: [
                "TableName"
              ],
              response_parameters: [
                "ConsumedCapacity",
                "ItemCollectionMetrics"
              ]
            },
            updateTable: {
              request_parameters: [
                "AttributeDefinitions",
                "GlobalSecondaryIndexUpdates",
                "ProvisionedThroughput",
                "TableName"
              ]
            }
          }
        },
        sqs: {
          operations: {
            addPermission: {
              request_parameters: [
                "Label",
                "QueueUrl"
              ]
            },
            changeMessageVisibility: {
              request_parameters: [
                "QueueUrl",
                "VisibilityTimeout"
              ]
            },
            changeMessageVisibilityBatch: {
              request_parameters: [
                "QueueUrl"
              ],
              response_parameters: [
                "Failed"
              ]
            },
            createQueue: {
              request_parameters: [
                "Attributes",
                "QueueName"
              ]
            },
            deleteMessage: {
              request_parameters: [
                "QueueUrl"
              ]
            },
            deleteMessageBatch: {
              request_parameters: [
                "QueueUrl"
              ],
              response_parameters: [
                "Failed"
              ]
            },
            deleteQueue: {
              request_parameters: [
                "QueueUrl"
              ]
            },
            getQueueAttributes: {
              request_parameters: [
                "QueueUrl"
              ],
              response_parameters: [
                "Attributes"
              ]
            },
            getQueueUrl: {
              request_parameters: [
                "QueueName",
                "QueueOwnerAWSAccountId"
              ],
              response_parameters: [
                "QueueUrl"
              ]
            },
            listDeadLetterSourceQueues: {
              request_parameters: [
                "QueueUrl"
              ],
              response_parameters: [
                "QueueUrls"
              ]
            },
            listQueues: {
              request_parameters: [
                "QueueNamePrefix"
              ],
              response_descriptors: {
                QueueUrls: {
                  list: true,
                  get_count: true,
                  rename_to: "queue_count"
                }
              }
            },
            purgeQueue: {
              request_parameters: [
                "QueueUrl"
              ]
            },
            receiveMessage: {
              request_parameters: [
                "AttributeNames",
                "MaxNumberOfMessages",
                "MessageAttributeNames",
                "QueueUrl",
                "VisibilityTimeout",
                "WaitTimeSeconds"
              ],
              response_descriptors: {
                Messages: {
                  list: true,
                  get_count: true,
                  rename_to: "message_count"
                }
              }
            },
            removePermission: {
              request_parameters: [
                "QueueUrl"
              ]
            },
            sendMessage: {
              request_parameters: [
                "DelaySeconds",
                "QueueUrl"
              ],
              request_descriptors: {
                MessageAttributes: {
                  get_keys: true,
                  rename_to: "message_attribute_names"
                }
              },
              response_parameters: [
                "MessageId"
              ]
            },
            sendMessageBatch: {
              request_parameters: [
                "QueueUrl"
              ],
              request_descriptors: {
                Entries: {
                  list: true,
                  get_count: true,
                  rename_to: "message_count"
                }
              },
              response_descriptors: {
                Failed: {
                  list: true,
                  get_count: true,
                  rename_to: "failed_count"
                },
                Successful: {
                  list: true,
                  get_count: true,
                  rename_to: "successful_count"
                }
              }
            },
            setQueueAttributes: {
              request_parameters: [
                "QueueUrl"
              ],
              request_descriptors: {
                Attributes: {
                  get_keys: true,
                  rename_to: "attribute_names"
                }
              }
            }
          }
        },
        sns: {
          operations: {
            publish: {
              request_parameters: [
                "TopicArn"
              ]
            },
            publishBatch: {
              request_parameters: [
                "TopicArn"
              ]
            }
          }
        },
        lambda: {
          operations: {
            invoke: {
              request_parameters: [
                "FunctionName",
                "InvocationType",
                "LogType",
                "Qualifier"
              ],
              response_parameters: [
                "FunctionError",
                "StatusCode"
              ]
            },
            invokeAsync: {
              request_parameters: [
                "FunctionName"
              ],
              response_parameters: [
                "Status"
              ]
            }
          }
        },
        s3: {
          operations: {
            abortMultipartUpload: {
              request_parameters: [
                "Key"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            completeMultipartUpload: {
              request_parameters: [
                "Key"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            copyObject: {
              request_parameters: [
                "CopySource",
                "Key"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            createBucket: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            createMultipartUpload: {
              request_parameters: [
                "Key"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            deleteBucket: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            deleteBucketAnalyticsConfiguration: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            deleteBucketCors: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            deleteBucketEncryption: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            deleteBucketInventoryConfiguration: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            deleteBucketLifecycle: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            deleteBucketMetricsConfiguration: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            deleteBucketPolicy: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            deleteBucketReplication: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            deleteBucketTagging: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            deleteBucketWebsite: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            deleteObject: {
              request_parameters: [
                "Key",
                "VersionId"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            deleteObjectTagging: {
              request_parameters: [
                "Key",
                "VersionId"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            deleteObjects: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getBucketAccelerateConfiguration: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getBucketAcl: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getBucketAnalyticsConfiguration: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getBucketCors: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getBucketEncryption: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getBucketInventoryConfiguration: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getBucketLifecycle: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getBucketLifecycleConfiguration: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getBucketLocation: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getBucketLogging: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getBucketMetricsConfiguration: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getBucketNotification: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getBucketNotificationConfiguration: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getBucketPolicy: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getBucketReplication: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getBucketRequestPayment: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getBucketTagging: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getBucketVersioning: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getBucketWebsite: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getObject: {
              request_parameters: [
                "Key",
                "VersionId"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getObjectAcl: {
              request_parameters: [
                "Key",
                "VersionId"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getObjectTagging: {
              request_parameters: [
                "Key",
                "VersionId"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            getObjectTorrent: {
              request_parameters: [
                "Key"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            headBucket: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            headObject: {
              request_parameters: [
                "Key",
                "VersionId"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            listBucketAnalyticsConfigurations: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            listBucketInventoryConfigurations: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            listBucketMetricsConfigurations: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            listMultipartUploads: {
              request_parameters: [
                "Prefix"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            listObjectVersions: {
              request_parameters: [
                "Prefix"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            listObjects: {
              request_parameters: [
                "Prefix"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            listObjectsV2: {
              request_parameters: [
                "Prefix"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            listParts: {
              request_parameters: [
                "Key"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putBucketAccelerateConfiguration: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putBucketAcl: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putBucketAnalyticsConfiguration: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putBucketCors: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putBucketEncryption: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putBucketInventoryConfiguration: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putBucketLifecycle: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putBucketLifecycleConfiguration: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putBucketLogging: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putBucketMetricsConfiguration: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putBucketNotification: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putBucketNotificationConfiguration: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putBucketPolicy: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putBucketReplication: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putBucketRequestPayment: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putBucketTagging: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putBucketVersioning: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putBucketWebsite: {
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putObject: {
              request_parameters: [
                "Key"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putObjectAcl: {
              request_parameters: [
                "Key",
                "VersionId"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            putObjectTagging: {
              request_parameters: [
                "Key",
                "VersionId"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            restoreObject: {
              request_parameters: [
                "Key",
                "VersionId"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            uploadPart: {
              request_parameters: [
                "Key"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            },
            uploadPartCopy: {
              request_parameters: [
                "CopySource",
                "Key"
              ],
              request_descriptors: {
                Bucket: {
                  rename_to: "bucket_name"
                }
              }
            }
          }
        },
        sagemakerruntime: {
          operations: {
            invokeEndpoint: {
              request_parameters: [
                "EndpointName"
              ]
            }
          }
        }
      }
    };
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/patchers/call_capturer.js
var require_call_capturer = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/patchers/call_capturer.js"(exports, module2) {
    "use strict";
    var fs = require("fs");
    var logger2 = require_logger();
    var whitelist = require_aws_whitelist();
    var paramTypes = {
      REQ_DESC: "request_descriptors",
      REQ_PARAMS: "request_parameters",
      RES_DESC: "response_descriptors",
      RES_PARAMS: "response_parameters"
    };
    function CallCapturer(source) {
      this.init(source);
    }
    CallCapturer.prototype.init = function init(source) {
      if (source) {
        if (typeof source === "string") {
          logger2.getLogger().info("Using custom AWS whitelist file: " + source);
          this.services = loadWhitelist(JSON.parse(fs.readFileSync(source, "utf8")));
        } else {
          logger2.getLogger().info("Using custom AWS whitelist source.");
          this.services = loadWhitelist(source);
        }
      } else {
        this.services = whitelist.services;
      }
    };
    CallCapturer.prototype.append = function append(source) {
      var newServices = {};
      if (typeof source === "string") {
        logger2.getLogger().info("Appending AWS whitelist with custom file: " + source);
        newServices = loadWhitelist(JSON.parse(fs.readFileSync(source, "utf8")));
      } else {
        logger2.getLogger().info("Appending AWS whitelist with a custom source.");
        newServices = loadWhitelist(source);
      }
      for (var attribute in newServices) {
        this.services[attribute] = newServices[attribute];
      }
    };
    CallCapturer.prototype.capture = function capture(serviceName2, response) {
      var operation = response.request.operation;
      var call = this.services[serviceName2] !== void 0 ? this.services[serviceName2].operations[operation] : null;
      if (call === null) {
        logger2.getLogger().debug('Call "' + serviceName2 + "." + operation + '" is not whitelisted for additional data capturing. Ignoring.');
        return;
      }
      var dataCaptured = {};
      for (var paramType in call) {
        var params = call[paramType];
        if (paramType === paramTypes.REQ_PARAMS) {
          captureCallParams(params, response.request.params, dataCaptured);
        } else if (paramType === paramTypes.REQ_DESC) {
          captureDescriptors(params, response.request.params, dataCaptured);
        } else if (paramType === paramTypes.RES_PARAMS) {
          if (response.data) {
            captureCallParams(params, response.data, dataCaptured);
          }
        } else if (paramType === paramTypes.RES_DESC) {
          if (response.data) {
            captureDescriptors(params, response.data, dataCaptured);
          }
        } else {
          logger2.getLogger().error('Unknown parameter type "' + paramType + '". Must be "request_descriptors", "response_descriptors", "request_parameters" or "response_parameters".');
        }
      }
      return dataCaptured;
    };
    function captureCallParams(params, call, data) {
      params.forEach(function(param) {
        if (typeof call[param] !== "undefined") {
          var formatted = toSnakeCase(param);
          this[formatted] = call[param];
        }
      }, data);
    }
    function captureDescriptors(descriptors, params, data) {
      for (var paramName in descriptors) {
        var attributes2 = descriptors[paramName];
        if (typeof params[paramName] !== "undefined") {
          var paramData;
          if (attributes2.list && attributes2.get_count) {
            paramData = params[paramName] ? params[paramName].length : 0;
          } else {
            paramData = attributes2.get_keys === true ? Object.keys(params[paramName]) : params[paramName];
          }
          if (typeof attributes2.rename_to === "string") {
            data[attributes2.rename_to] = paramData;
          } else {
            var formatted = toSnakeCase(paramName);
            data[formatted] = paramData;
          }
        }
      }
    }
    function toSnakeCase(param) {
      if (param === "IPAddress") {
        return "ip_address";
      } else {
        return param.split(/(?=[A-Z])/).join("_").toLowerCase();
      }
    }
    function loadWhitelist(source) {
      var doc = source;
      if (doc.services === void 0) {
        throw new Error('Document formatting is incorrect. Expecting "services" param.');
      }
      return doc.services;
    }
    module2.exports = CallCapturer;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/segments/attributes/aws.js
var require_aws = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/segments/attributes/aws.js"(exports, module2) {
    "use strict";
    var CallCapturer = require_call_capturer();
    var capturer = new CallCapturer();
    function Aws(res, serviceName2) {
      this.init(res, serviceName2);
    }
    Aws.prototype.init = function init(res, serviceName2) {
      this.operation = formatOperation(res.request.operation) || "";
      if (res && res.request && res.request.httpRequest && res.request.httpRequest.region) {
        this.region = res.request.httpRequest.region;
      }
      if (res && res.requestId) {
        this.request_id = res.requestId;
      }
      this.retries = res.retryCount || 0;
      if (res.extendedRequestId && serviceName2 && serviceName2.toLowerCase() === "s3") {
        this.id_2 = res.extendedRequestId;
      }
      if (serviceName2) {
        this.addData(capturer.capture(serviceName2.toLowerCase(), res));
      }
    };
    Aws.prototype.addData = function addData(data) {
      for (var attribute in data) {
        this[attribute] = data[attribute];
      }
    };
    var setAWSWhitelist = function setAWSWhitelist2(source) {
      if (!source || source instanceof String || !(typeof source === "string" || source instanceof Object)) {
        throw new Error("Please specify a path to the local whitelist file, or supply a whitelist source object.");
      }
      capturer = new CallCapturer(source);
    };
    var appendAWSWhitelist = function appendAWSWhitelist2(source) {
      if (!source || source instanceof String || !(typeof source === "string" || source instanceof Object)) {
        throw new Error("Please specify a path to the local whitelist file, or supply a whitelist source object.");
      }
      capturer.append(source);
    };
    function formatOperation(operation) {
      if (!operation) {
        return;
      }
      return operation.charAt(0).toUpperCase() + operation.slice(1);
    }
    module2.exports = Aws;
    module2.exports.appendAWSWhitelist = appendAWSWhitelist;
    module2.exports.setAWSWhitelist = setAWSWhitelist;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/capture.js
var require_capture = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/capture.js"(exports, module2) {
    "use strict";
    var contextUtils = require_context_utils();
    var logger2 = require_logger();
    var captureFunc = function captureFunc2(name, fcn, parent) {
      validate(name, fcn);
      var current, executeFcn;
      var parentSeg = contextUtils.resolveSegment(parent);
      if (!parentSeg) {
        logger2.getLogger().warn("Failed to capture function.");
        return fcn();
      }
      current = parentSeg.addNewSubsegment(name);
      executeFcn = captureFcn(fcn, current);
      try {
        const response = executeFcn(current);
        current.close();
        return response;
      } catch (e) {
        current.close(e);
        throw e;
      }
    };
    var captureAsyncFunc = function captureAsyncFunc2(name, fcn, parent) {
      validate(name, fcn);
      var current, executeFcn;
      var parentSeg = contextUtils.resolveSegment(parent);
      if (!parentSeg) {
        logger2.getLogger().warn("Failed to capture async function.");
        return fcn();
      }
      current = parentSeg.addNewSubsegment(name);
      executeFcn = captureFcn(fcn, current);
      try {
        return executeFcn(current);
      } catch (e) {
        current.close(e);
        throw e;
      }
    };
    var captureCallbackFunc = function captureCallbackFunc2(name, fcn, parent) {
      validate(name, fcn);
      var base = contextUtils.resolveSegment(parent);
      if (!base) {
        logger2.getLogger().warn("Failed to capture callback function.");
        return fcn;
      }
      base.incrementCounter();
      return function() {
        var parentSeg = contextUtils.resolveSegment(parent);
        var args = Array.prototype.slice.call(arguments);
        captureFunc(name, fcn.bind.apply(fcn, [null].concat(args)), parentSeg);
        base.decrementCounter();
      }.bind(this);
    };
    function captureFcn(fcn, current) {
      var executeFcn;
      if (contextUtils.isAutomaticMode()) {
        var session = contextUtils.getNamespace();
        var contextFcn = function() {
          var value;
          session.run(function() {
            contextUtils.setSegment(current);
            value = fcn(current);
          });
          return value;
        };
        executeFcn = contextFcn;
      } else {
        executeFcn = fcn;
      }
      return executeFcn;
    }
    function validate(name, fcn) {
      var error;
      if (!name || typeof name !== "string") {
        error = 'Param "name" must be a non-empty string.';
        logger2.getLogger().error(error);
        throw new Error(error);
      } else if (typeof fcn !== "function") {
        error = 'Param "fcn" must be a function.';
        logger2.getLogger().error(error);
        throw new Error(error);
      }
    }
    module2.exports.captureFunc = captureFunc;
    module2.exports.captureAsyncFunc = captureAsyncFunc;
    module2.exports.captureCallbackFunc = captureCallbackFunc;
  }
});

// node_modules/semver/internal/constants.js
var require_constants2 = __commonJS({
  "node_modules/semver/internal/constants.js"(exports, module2) {
    "use strict";
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module2.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "node_modules/semver/internal/debug.js"(exports, module2) {
    "use strict";
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module2.exports = debug;
  }
});

// node_modules/semver/internal/re.js
var require_re = __commonJS({
  "node_modules/semver/internal/re.js"(exports, module2) {
    "use strict";
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants2();
    var debug = require_debug();
    exports = module2.exports = {};
    var re = exports.re = [];
    var safeRe = exports.safeRe = [];
    var src = exports.src = [];
    var t = exports.t = {};
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    var createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCE", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "node_modules/semver/internal/parse-options.js"(exports, module2) {
    "use strict";
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = (options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    };
    module2.exports = parseOptions;
  }
});

// node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "node_modules/semver/internal/identifiers.js"(exports, module2) {
    "use strict";
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a, b) => {
      const anum = numeric.test(a);
      const bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    };
    var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
    module2.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "node_modules/semver/classes/semver.js"(exports, module2) {
    "use strict";
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants2();
    var { safeRe: re, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class _SemVer {
      constructor(version, options) {
        options = parseOptions(options);
        if (version instanceof _SemVer) {
          if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b = other.prerelease[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b = other.build[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (!identifier && identifierBase === false) {
              throw new Error("invalid increment argument: identifier is empty");
            }
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module2.exports = SemVer;
  }
});

// node_modules/semver/functions/parse.js
var require_parse = __commonJS({
  "node_modules/semver/functions/parse.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var parse = (version, options, throwErrors = false) => {
      if (version instanceof SemVer) {
        return version;
      }
      try {
        return new SemVer(version, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    };
    module2.exports = parse;
  }
});

// node_modules/semver/functions/valid.js
var require_valid = __commonJS({
  "node_modules/semver/functions/valid.js"(exports, module2) {
    "use strict";
    var parse = require_parse();
    var valid = (version, options) => {
      const v = parse(version, options);
      return v ? v.version : null;
    };
    module2.exports = valid;
  }
});

// node_modules/semver/functions/clean.js
var require_clean = __commonJS({
  "node_modules/semver/functions/clean.js"(exports, module2) {
    "use strict";
    var parse = require_parse();
    var clean = (version, options) => {
      const s = parse(version.trim().replace(/^[=v]+/, ""), options);
      return s ? s.version : null;
    };
    module2.exports = clean;
  }
});

// node_modules/semver/functions/inc.js
var require_inc = __commonJS({
  "node_modules/semver/functions/inc.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var inc = (version, release, options, identifier, identifierBase) => {
      if (typeof options === "string") {
        identifierBase = identifier;
        identifier = options;
        options = void 0;
      }
      try {
        return new SemVer(
          version instanceof SemVer ? version.version : version,
          options
        ).inc(release, identifier, identifierBase).version;
      } catch (er) {
        return null;
      }
    };
    module2.exports = inc;
  }
});

// node_modules/semver/functions/diff.js
var require_diff = __commonJS({
  "node_modules/semver/functions/diff.js"(exports, module2) {
    "use strict";
    var parse = require_parse();
    var diff = (version1, version2) => {
      const v1 = parse(version1, null, true);
      const v2 = parse(version2, null, true);
      const comparison = v1.compare(v2);
      if (comparison === 0) {
        return null;
      }
      const v1Higher = comparison > 0;
      const highVersion = v1Higher ? v1 : v2;
      const lowVersion = v1Higher ? v2 : v1;
      const highHasPre = !!highVersion.prerelease.length;
      const lowHasPre = !!lowVersion.prerelease.length;
      if (lowHasPre && !highHasPre) {
        if (!lowVersion.patch && !lowVersion.minor) {
          return "major";
        }
        if (highVersion.patch) {
          return "patch";
        }
        if (highVersion.minor) {
          return "minor";
        }
        return "major";
      }
      const prefix = highHasPre ? "pre" : "";
      if (v1.major !== v2.major) {
        return prefix + "major";
      }
      if (v1.minor !== v2.minor) {
        return prefix + "minor";
      }
      if (v1.patch !== v2.patch) {
        return prefix + "patch";
      }
      return "prerelease";
    };
    module2.exports = diff;
  }
});

// node_modules/semver/functions/major.js
var require_major = __commonJS({
  "node_modules/semver/functions/major.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var major = (a, loose) => new SemVer(a, loose).major;
    module2.exports = major;
  }
});

// node_modules/semver/functions/minor.js
var require_minor = __commonJS({
  "node_modules/semver/functions/minor.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var minor = (a, loose) => new SemVer(a, loose).minor;
    module2.exports = minor;
  }
});

// node_modules/semver/functions/patch.js
var require_patch = __commonJS({
  "node_modules/semver/functions/patch.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var patch = (a, loose) => new SemVer(a, loose).patch;
    module2.exports = patch;
  }
});

// node_modules/semver/functions/prerelease.js
var require_prerelease = __commonJS({
  "node_modules/semver/functions/prerelease.js"(exports, module2) {
    "use strict";
    var parse = require_parse();
    var prerelease = (version, options) => {
      const parsed = parse(version, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    };
    module2.exports = prerelease;
  }
});

// node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "node_modules/semver/functions/compare.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
    module2.exports = compare;
  }
});

// node_modules/semver/functions/rcompare.js
var require_rcompare = __commonJS({
  "node_modules/semver/functions/rcompare.js"(exports, module2) {
    "use strict";
    var compare = require_compare();
    var rcompare = (a, b, loose) => compare(b, a, loose);
    module2.exports = rcompare;
  }
});

// node_modules/semver/functions/compare-loose.js
var require_compare_loose = __commonJS({
  "node_modules/semver/functions/compare-loose.js"(exports, module2) {
    "use strict";
    var compare = require_compare();
    var compareLoose = (a, b) => compare(a, b, true);
    module2.exports = compareLoose;
  }
});

// node_modules/semver/functions/compare-build.js
var require_compare_build = __commonJS({
  "node_modules/semver/functions/compare-build.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var compareBuild = (a, b, loose) => {
      const versionA = new SemVer(a, loose);
      const versionB = new SemVer(b, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB);
    };
    module2.exports = compareBuild;
  }
});

// node_modules/semver/functions/sort.js
var require_sort = __commonJS({
  "node_modules/semver/functions/sort.js"(exports, module2) {
    "use strict";
    var compareBuild = require_compare_build();
    var sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
    module2.exports = sort;
  }
});

// node_modules/semver/functions/rsort.js
var require_rsort = __commonJS({
  "node_modules/semver/functions/rsort.js"(exports, module2) {
    "use strict";
    var compareBuild = require_compare_build();
    var rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
    module2.exports = rsort;
  }
});

// node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "node_modules/semver/functions/gt.js"(exports, module2) {
    "use strict";
    var compare = require_compare();
    var gt = (a, b, loose) => compare(a, b, loose) > 0;
    module2.exports = gt;
  }
});

// node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "node_modules/semver/functions/lt.js"(exports, module2) {
    "use strict";
    var compare = require_compare();
    var lt = (a, b, loose) => compare(a, b, loose) < 0;
    module2.exports = lt;
  }
});

// node_modules/semver/functions/eq.js
var require_eq = __commonJS({
  "node_modules/semver/functions/eq.js"(exports, module2) {
    "use strict";
    var compare = require_compare();
    var eq = (a, b, loose) => compare(a, b, loose) === 0;
    module2.exports = eq;
  }
});

// node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "node_modules/semver/functions/neq.js"(exports, module2) {
    "use strict";
    var compare = require_compare();
    var neq = (a, b, loose) => compare(a, b, loose) !== 0;
    module2.exports = neq;
  }
});

// node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "node_modules/semver/functions/gte.js"(exports, module2) {
    "use strict";
    var compare = require_compare();
    var gte = (a, b, loose) => compare(a, b, loose) >= 0;
    module2.exports = gte;
  }
});

// node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "node_modules/semver/functions/lte.js"(exports, module2) {
    "use strict";
    var compare = require_compare();
    var lte = (a, b, loose) => compare(a, b, loose) <= 0;
    module2.exports = lte;
  }
});

// node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "node_modules/semver/functions/cmp.js"(exports, module2) {
    "use strict";
    var eq = require_eq();
    var neq = require_neq();
    var gt = require_gt();
    var gte = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = (a, op, b, loose) => {
      switch (op) {
        case "===":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a === b;
        case "!==":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a !== b;
        case "":
        case "=":
        case "==":
          return eq(a, b, loose);
        case "!=":
          return neq(a, b, loose);
        case ">":
          return gt(a, b, loose);
        case ">=":
          return gte(a, b, loose);
        case "<":
          return lt(a, b, loose);
        case "<=":
          return lte(a, b, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    };
    module2.exports = cmp;
  }
});

// node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "node_modules/semver/functions/coerce.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var parse = require_parse();
    var { safeRe: re, t } = require_re();
    var coerce = (version, options) => {
      if (version instanceof SemVer) {
        return version;
      }
      if (typeof version === "number") {
        version = String(version);
      }
      if (typeof version !== "string") {
        return null;
      }
      options = options || {};
      let match = null;
      if (!options.rtl) {
        match = version.match(re[t.COERCE]);
      } else {
        let next;
        while ((next = re[t.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
        }
        re[t.COERCERTL].lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      return parse(`${match[2]}.${match[3] || "0"}.${match[4] || "0"}`, options);
    };
    module2.exports = coerce;
  }
});

// node_modules/yallist/iterator.js
var require_iterator = __commonJS({
  "node_modules/yallist/iterator.js"(exports, module2) {
    "use strict";
    module2.exports = function(Yallist) {
      Yallist.prototype[Symbol.iterator] = function* () {
        for (let walker = this.head; walker; walker = walker.next) {
          yield walker.value;
        }
      };
    };
  }
});

// node_modules/yallist/yallist.js
var require_yallist = __commonJS({
  "node_modules/yallist/yallist.js"(exports, module2) {
    "use strict";
    module2.exports = Yallist;
    Yallist.Node = Node;
    Yallist.create = Yallist;
    function Yallist(list) {
      var self2 = this;
      if (!(self2 instanceof Yallist)) {
        self2 = new Yallist();
      }
      self2.tail = null;
      self2.head = null;
      self2.length = 0;
      if (list && typeof list.forEach === "function") {
        list.forEach(function(item) {
          self2.push(item);
        });
      } else if (arguments.length > 0) {
        for (var i = 0, l = arguments.length; i < l; i++) {
          self2.push(arguments[i]);
        }
      }
      return self2;
    }
    Yallist.prototype.removeNode = function(node) {
      if (node.list !== this) {
        throw new Error("removing node which does not belong to this list");
      }
      var next = node.next;
      var prev = node.prev;
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (node === this.head) {
        this.head = next;
      }
      if (node === this.tail) {
        this.tail = prev;
      }
      node.list.length--;
      node.next = null;
      node.prev = null;
      node.list = null;
      return next;
    };
    Yallist.prototype.unshiftNode = function(node) {
      if (node === this.head) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var head = this.head;
      node.list = this;
      node.next = head;
      if (head) {
        head.prev = node;
      }
      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
      this.length++;
    };
    Yallist.prototype.pushNode = function(node) {
      if (node === this.tail) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var tail = this.tail;
      node.list = this;
      node.prev = tail;
      if (tail) {
        tail.next = node;
      }
      this.tail = node;
      if (!this.head) {
        this.head = node;
      }
      this.length++;
    };
    Yallist.prototype.push = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        push(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.unshift = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        unshift(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.pop = function() {
      if (!this.tail) {
        return void 0;
      }
      var res = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.shift = function() {
      if (!this.head) {
        return void 0;
      }
      var res = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.forEach = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.head, i = 0; walker !== null; i++) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.next;
      }
    };
    Yallist.prototype.forEachReverse = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.prev;
      }
    };
    Yallist.prototype.get = function(n) {
      for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
        walker = walker.next;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.getReverse = function(n) {
      for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
        walker = walker.prev;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.map = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.head; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
      }
      return res;
    };
    Yallist.prototype.mapReverse = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.tail; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
      }
      return res;
    };
    Yallist.prototype.reduce = function(fn, initial) {
      var acc;
      var walker = this.head;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = 0; walker !== null; i++) {
        acc = fn(acc, walker.value, i);
        walker = walker.next;
      }
      return acc;
    };
    Yallist.prototype.reduceReverse = function(fn, initial) {
      var acc;
      var walker = this.tail;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = this.length - 1; walker !== null; i--) {
        acc = fn(acc, walker.value, i);
        walker = walker.prev;
      }
      return acc;
    };
    Yallist.prototype.toArray = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.head; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.next;
      }
      return arr;
    };
    Yallist.prototype.toArrayReverse = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.tail; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.prev;
      }
      return arr;
    };
    Yallist.prototype.slice = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
        walker = walker.next;
      }
      for (; walker !== null && i < to; i++, walker = walker.next) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.sliceReverse = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
        walker = walker.prev;
      }
      for (; walker !== null && i > from; i--, walker = walker.prev) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
      if (start > this.length) {
        start = this.length - 1;
      }
      if (start < 0) {
        start = this.length + start;
      }
      for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
        walker = walker.next;
      }
      var ret = [];
      for (var i = 0; walker && i < deleteCount; i++) {
        ret.push(walker.value);
        walker = this.removeNode(walker);
      }
      if (walker === null) {
        walker = this.tail;
      }
      if (walker !== this.head && walker !== this.tail) {
        walker = walker.prev;
      }
      for (var i = 0; i < nodes.length; i++) {
        walker = insert(this, walker, nodes[i]);
      }
      return ret;
    };
    Yallist.prototype.reverse = function() {
      var head = this.head;
      var tail = this.tail;
      for (var walker = head; walker !== null; walker = walker.prev) {
        var p = walker.prev;
        walker.prev = walker.next;
        walker.next = p;
      }
      this.head = tail;
      this.tail = head;
      return this;
    };
    function insert(self2, node, value) {
      var inserted = node === self2.head ? new Node(value, null, node, self2) : new Node(value, node, node.next, self2);
      if (inserted.next === null) {
        self2.tail = inserted;
      }
      if (inserted.prev === null) {
        self2.head = inserted;
      }
      self2.length++;
      return inserted;
    }
    function push(self2, item) {
      self2.tail = new Node(item, self2.tail, null, self2);
      if (!self2.head) {
        self2.head = self2.tail;
      }
      self2.length++;
    }
    function unshift(self2, item) {
      self2.head = new Node(item, null, self2.head, self2);
      if (!self2.tail) {
        self2.tail = self2.head;
      }
      self2.length++;
    }
    function Node(value, prev, next, list) {
      if (!(this instanceof Node)) {
        return new Node(value, prev, next, list);
      }
      this.list = list;
      this.value = value;
      if (prev) {
        prev.next = this;
        this.prev = prev;
      } else {
        this.prev = null;
      }
      if (next) {
        next.prev = this;
        this.next = next;
      } else {
        this.next = null;
      }
    }
    try {
      require_iterator()(Yallist);
    } catch (er) {
    }
  }
});

// node_modules/semver/node_modules/lru-cache/index.js
var require_lru_cache = __commonJS({
  "node_modules/semver/node_modules/lru-cache/index.js"(exports, module2) {
    "use strict";
    var Yallist = require_yallist();
    var MAX = Symbol("max");
    var LENGTH = Symbol("length");
    var LENGTH_CALCULATOR = Symbol("lengthCalculator");
    var ALLOW_STALE = Symbol("allowStale");
    var MAX_AGE = Symbol("maxAge");
    var DISPOSE = Symbol("dispose");
    var NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
    var LRU_LIST = Symbol("lruList");
    var CACHE = Symbol("cache");
    var UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");
    var naiveLength = () => 1;
    var LRUCache = class {
      constructor(options) {
        if (typeof options === "number")
          options = { max: options };
        if (!options)
          options = {};
        if (options.max && (typeof options.max !== "number" || options.max < 0))
          throw new TypeError("max must be a non-negative number");
        const max = this[MAX] = options.max || Infinity;
        const lc = options.length || naiveLength;
        this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
        this[ALLOW_STALE] = options.stale || false;
        if (options.maxAge && typeof options.maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        this[MAX_AGE] = options.maxAge || 0;
        this[DISPOSE] = options.dispose;
        this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
        this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
        this.reset();
      }
      // resize the cache when the max changes.
      set max(mL) {
        if (typeof mL !== "number" || mL < 0)
          throw new TypeError("max must be a non-negative number");
        this[MAX] = mL || Infinity;
        trim(this);
      }
      get max() {
        return this[MAX];
      }
      set allowStale(allowStale) {
        this[ALLOW_STALE] = !!allowStale;
      }
      get allowStale() {
        return this[ALLOW_STALE];
      }
      set maxAge(mA) {
        if (typeof mA !== "number")
          throw new TypeError("maxAge must be a non-negative number");
        this[MAX_AGE] = mA;
        trim(this);
      }
      get maxAge() {
        return this[MAX_AGE];
      }
      // resize the cache when the lengthCalculator changes.
      set lengthCalculator(lC) {
        if (typeof lC !== "function")
          lC = naiveLength;
        if (lC !== this[LENGTH_CALCULATOR]) {
          this[LENGTH_CALCULATOR] = lC;
          this[LENGTH] = 0;
          this[LRU_LIST].forEach((hit) => {
            hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
            this[LENGTH] += hit.length;
          });
        }
        trim(this);
      }
      get lengthCalculator() {
        return this[LENGTH_CALCULATOR];
      }
      get length() {
        return this[LENGTH];
      }
      get itemCount() {
        return this[LRU_LIST].length;
      }
      rforEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].tail; walker !== null; ) {
          const prev = walker.prev;
          forEachStep(this, fn, walker, thisp);
          walker = prev;
        }
      }
      forEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].head; walker !== null; ) {
          const next = walker.next;
          forEachStep(this, fn, walker, thisp);
          walker = next;
        }
      }
      keys() {
        return this[LRU_LIST].toArray().map((k) => k.key);
      }
      values() {
        return this[LRU_LIST].toArray().map((k) => k.value);
      }
      reset() {
        if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
          this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value));
        }
        this[CACHE] = /* @__PURE__ */ new Map();
        this[LRU_LIST] = new Yallist();
        this[LENGTH] = 0;
      }
      dump() {
        return this[LRU_LIST].map((hit) => isStale(this, hit) ? false : {
          k: hit.key,
          v: hit.value,
          e: hit.now + (hit.maxAge || 0)
        }).toArray().filter((h) => h);
      }
      dumpLru() {
        return this[LRU_LIST];
      }
      set(key, value, maxAge) {
        maxAge = maxAge || this[MAX_AGE];
        if (maxAge && typeof maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        const now = maxAge ? Date.now() : 0;
        const len = this[LENGTH_CALCULATOR](value, key);
        if (this[CACHE].has(key)) {
          if (len > this[MAX]) {
            del(this, this[CACHE].get(key));
            return false;
          }
          const node = this[CACHE].get(key);
          const item = node.value;
          if (this[DISPOSE]) {
            if (!this[NO_DISPOSE_ON_SET])
              this[DISPOSE](key, item.value);
          }
          item.now = now;
          item.maxAge = maxAge;
          item.value = value;
          this[LENGTH] += len - item.length;
          item.length = len;
          this.get(key);
          trim(this);
          return true;
        }
        const hit = new Entry(key, value, len, now, maxAge);
        if (hit.length > this[MAX]) {
          if (this[DISPOSE])
            this[DISPOSE](key, value);
          return false;
        }
        this[LENGTH] += hit.length;
        this[LRU_LIST].unshift(hit);
        this[CACHE].set(key, this[LRU_LIST].head);
        trim(this);
        return true;
      }
      has(key) {
        if (!this[CACHE].has(key))
          return false;
        const hit = this[CACHE].get(key).value;
        return !isStale(this, hit);
      }
      get(key) {
        return get(this, key, true);
      }
      peek(key) {
        return get(this, key, false);
      }
      pop() {
        const node = this[LRU_LIST].tail;
        if (!node)
          return null;
        del(this, node);
        return node.value;
      }
      del(key) {
        del(this, this[CACHE].get(key));
      }
      load(arr) {
        this.reset();
        const now = Date.now();
        for (let l = arr.length - 1; l >= 0; l--) {
          const hit = arr[l];
          const expiresAt = hit.e || 0;
          if (expiresAt === 0)
            this.set(hit.k, hit.v);
          else {
            const maxAge = expiresAt - now;
            if (maxAge > 0) {
              this.set(hit.k, hit.v, maxAge);
            }
          }
        }
      }
      prune() {
        this[CACHE].forEach((value, key) => get(this, key, false));
      }
    };
    var get = (self2, key, doUse) => {
      const node = self2[CACHE].get(key);
      if (node) {
        const hit = node.value;
        if (isStale(self2, hit)) {
          del(self2, node);
          if (!self2[ALLOW_STALE])
            return void 0;
        } else {
          if (doUse) {
            if (self2[UPDATE_AGE_ON_GET])
              node.value.now = Date.now();
            self2[LRU_LIST].unshiftNode(node);
          }
        }
        return hit.value;
      }
    };
    var isStale = (self2, hit) => {
      if (!hit || !hit.maxAge && !self2[MAX_AGE])
        return false;
      const diff = Date.now() - hit.now;
      return hit.maxAge ? diff > hit.maxAge : self2[MAX_AGE] && diff > self2[MAX_AGE];
    };
    var trim = (self2) => {
      if (self2[LENGTH] > self2[MAX]) {
        for (let walker = self2[LRU_LIST].tail; self2[LENGTH] > self2[MAX] && walker !== null; ) {
          const prev = walker.prev;
          del(self2, walker);
          walker = prev;
        }
      }
    };
    var del = (self2, node) => {
      if (node) {
        const hit = node.value;
        if (self2[DISPOSE])
          self2[DISPOSE](hit.key, hit.value);
        self2[LENGTH] -= hit.length;
        self2[CACHE].delete(hit.key);
        self2[LRU_LIST].removeNode(node);
      }
    };
    var Entry = class {
      constructor(key, value, length, now, maxAge) {
        this.key = key;
        this.value = value;
        this.length = length;
        this.now = now;
        this.maxAge = maxAge || 0;
      }
    };
    var forEachStep = (self2, fn, node, thisp) => {
      let hit = node.value;
      if (isStale(self2, hit)) {
        del(self2, node);
        if (!self2[ALLOW_STALE])
          hit = void 0;
      }
      if (hit)
        fn.call(thisp, hit.value, hit.key, self2);
    };
    module2.exports = LRUCache;
  }
});

// node_modules/semver/classes/range.js
var require_range = __commonJS({
  "node_modules/semver/classes/range.js"(exports, module2) {
    "use strict";
    var Range = class _Range {
      constructor(range, options) {
        options = parseOptions(options);
        if (range instanceof _Range) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new _Range(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.format();
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        this.raw = range.trim().split(/\s+/).join(" ");
        this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c) => !isNullSet(c[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c of this.set) {
              if (c.length === 1 && isAny(c[0])) {
                this.set = [c];
                break;
              }
            }
          }
        }
        this.format();
      }
      format() {
        this.range = this.set.map((comps) => comps.join(" ").trim()).join("||").trim();
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug("hyphen replace", range);
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug("comparator trim", range);
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug("tilde trim", range);
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug("caret trim", range);
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug("loose invalid filter", comp, this.options);
            return !!comp.match(re[t.COMPARATORLOOSE]);
          });
        }
        debug("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result = [...rangeMap.values()];
        cache.set(memoKey, result);
        return result;
      }
      intersects(range, options) {
        if (!(range instanceof _Range)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }
      // if ANY of the sets match ALL of its comparators, then pass
      test(version) {
        if (!version) {
          return false;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i = 0; i < this.set.length; i++) {
          if (testSet(this.set[i], version, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module2.exports = Range;
    var LRU = require_lru_cache();
    var cache = new LRU({ max: 1e3 });
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug = require_debug();
    var SemVer = require_semver();
    var {
      safeRe: re,
      t,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants2();
    var isNullSet = (c) => c.value === "<0.0.0-0";
    var isAny = (c) => c.value === "";
    var isSatisfiable = (comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    };
    var parseComparator = (comp, options) => {
      debug("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug("caret", comp);
      comp = replaceTildes(comp, options);
      debug("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug("xrange", comp);
      comp = replaceStars(comp, options);
      debug("stars", comp);
      return comp;
    };
    var isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
    var replaceTildes = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
    };
    var replaceTilde = (comp, options) => {
      const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("tilde", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
          debug("replaceTilde pr", pr);
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug("tilde return", ret);
        return ret;
      });
    };
    var replaceCarets = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
    };
    var replaceCaret = (comp, options) => {
      debug("caret", comp, options);
      const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
      const z = options.includePrerelease ? "-0" : "";
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("caret", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          if (M === "0") {
            ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
          }
        } else if (pr) {
          debug("replaceCaret pr", pr);
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
          }
        } else {
          debug("no pr");
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
          }
        }
        debug("caret return", ret);
        return ret;
      });
    };
    var replaceXRanges = (comp, options) => {
      debug("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
    };
    var replaceXRange = (comp, options) => {
      comp = comp.trim();
      const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
      return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
        debug("xRange", comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m = 0;
          }
          p = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
          ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug("xRange return", ret);
        return ret;
      });
    };
    var replaceStars = (comp, options) => {
      debug("replaceStars", comp, options);
      return comp.trim().replace(re[t.STAR], "");
    };
    var replaceGTE0 = (comp, options) => {
      debug("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
    };
    var hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    };
    var testSet = (set, version, options) => {
      for (let i = 0; i < set.length; i++) {
        if (!set[i].test(version)) {
          return false;
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        for (let i = 0; i < set.length; i++) {
          debug(set[i].semver);
          if (set[i].semver === Comparator.ANY) {
            continue;
          }
          if (set[i].semver.prerelease.length > 0) {
            const allowed = set[i].semver;
            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    };
  }
});

// node_modules/semver/classes/comparator.js
var require_comparator = __commonJS({
  "node_modules/semver/classes/comparator.js"(exports, module2) {
    "use strict";
    var ANY = Symbol("SemVer ANY");
    var Comparator = class _Comparator {
      static get ANY() {
        return ANY;
      }
      constructor(comp, options) {
        options = parseOptions(options);
        if (comp instanceof _Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        comp = comp.trim().split(/\s+/).join(" ");
        debug("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug("comp", this);
      }
      parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== void 0 ? m[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version) {
        debug("Comparator.test", version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
          return true;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version, this.operator, this.semver, this.options);
      }
      intersects(comp, options) {
        if (!(comp instanceof _Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
          return false;
        }
        if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
          return false;
        }
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
          return true;
        }
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
          return true;
        }
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
          return true;
        }
        if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
          return true;
        }
        if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
          return true;
        }
        return false;
      }
    };
    module2.exports = Comparator;
    var parseOptions = require_parse_options();
    var { safeRe: re, t } = require_re();
    var cmp = require_cmp();
    var debug = require_debug();
    var SemVer = require_semver();
    var Range = require_range();
  }
});

// node_modules/semver/functions/satisfies.js
var require_satisfies = __commonJS({
  "node_modules/semver/functions/satisfies.js"(exports, module2) {
    "use strict";
    var Range = require_range();
    var satisfies = (version, range, options) => {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version);
    };
    module2.exports = satisfies;
  }
});

// node_modules/semver/ranges/to-comparators.js
var require_to_comparators = __commonJS({
  "node_modules/semver/ranges/to-comparators.js"(exports, module2) {
    "use strict";
    var Range = require_range();
    var toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
    module2.exports = toComparators;
  }
});

// node_modules/semver/ranges/max-satisfying.js
var require_max_satisfying = __commonJS({
  "node_modules/semver/ranges/max-satisfying.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range();
    var maxSatisfying = (versions, range, options) => {
      let max = null;
      let maxSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!max || maxSV.compare(v) === -1) {
            max = v;
            maxSV = new SemVer(max, options);
          }
        }
      });
      return max;
    };
    module2.exports = maxSatisfying;
  }
});

// node_modules/semver/ranges/min-satisfying.js
var require_min_satisfying = __commonJS({
  "node_modules/semver/ranges/min-satisfying.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range();
    var minSatisfying = (versions, range, options) => {
      let min = null;
      let minSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!min || minSV.compare(v) === 1) {
            min = v;
            minSV = new SemVer(min, options);
          }
        }
      });
      return min;
    };
    module2.exports = minSatisfying;
  }
});

// node_modules/semver/ranges/min-version.js
var require_min_version = __commonJS({
  "node_modules/semver/ranges/min-version.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range();
    var gt = require_gt();
    var minVersion = (range, loose) => {
      range = new Range(range, loose);
      let minver = new SemVer("0.0.0");
      if (range.test(minver)) {
        return minver;
      }
      minver = new SemVer("0.0.0-0");
      if (range.test(minver)) {
        return minver;
      }
      minver = null;
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator) => {
          const compver = new SemVer(comparator.semver.version);
          switch (comparator.operator) {
            case ">":
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
            case "":
            case ">=":
              if (!setMin || gt(compver, setMin)) {
                setMin = compver;
              }
              break;
            case "<":
            case "<=":
              break;
            default:
              throw new Error(`Unexpected operation: ${comparator.operator}`);
          }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
          minver = setMin;
        }
      }
      if (minver && range.test(minver)) {
        return minver;
      }
      return null;
    };
    module2.exports = minVersion;
  }
});

// node_modules/semver/ranges/valid.js
var require_valid2 = __commonJS({
  "node_modules/semver/ranges/valid.js"(exports, module2) {
    "use strict";
    var Range = require_range();
    var validRange = (range, options) => {
      try {
        return new Range(range, options).range || "*";
      } catch (er) {
        return null;
      }
    };
    module2.exports = validRange;
  }
});

// node_modules/semver/ranges/outside.js
var require_outside = __commonJS({
  "node_modules/semver/ranges/outside.js"(exports, module2) {
    "use strict";
    var SemVer = require_semver();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var Range = require_range();
    var satisfies = require_satisfies();
    var gt = require_gt();
    var lt = require_lt();
    var lte = require_lte();
    var gte = require_gte();
    var outside = (version, range, hilo, options) => {
      version = new SemVer(version, options);
      range = new Range(range, options);
      let gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case ">":
          gtfn = gt;
          ltefn = lte;
          ltfn = lt;
          comp = ">";
          ecomp = ">=";
          break;
        case "<":
          gtfn = lt;
          ltefn = gte;
          ltfn = gt;
          comp = "<";
          ecomp = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (satisfies(version, range, options)) {
        return false;
      }
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator) => {
          if (comparator.semver === ANY) {
            comparator = new Comparator(">=0.0.0");
          }
          high = high || comparator;
          low = low || comparator;
          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return false;
        }
      }
      return true;
    };
    module2.exports = outside;
  }
});

// node_modules/semver/ranges/gtr.js
var require_gtr = __commonJS({
  "node_modules/semver/ranges/gtr.js"(exports, module2) {
    "use strict";
    var outside = require_outside();
    var gtr = (version, range, options) => outside(version, range, ">", options);
    module2.exports = gtr;
  }
});

// node_modules/semver/ranges/ltr.js
var require_ltr = __commonJS({
  "node_modules/semver/ranges/ltr.js"(exports, module2) {
    "use strict";
    var outside = require_outside();
    var ltr = (version, range, options) => outside(version, range, "<", options);
    module2.exports = ltr;
  }
});

// node_modules/semver/ranges/intersects.js
var require_intersects = __commonJS({
  "node_modules/semver/ranges/intersects.js"(exports, module2) {
    "use strict";
    var Range = require_range();
    var intersects = (r1, r2, options) => {
      r1 = new Range(r1, options);
      r2 = new Range(r2, options);
      return r1.intersects(r2, options);
    };
    module2.exports = intersects;
  }
});

// node_modules/semver/ranges/simplify.js
var require_simplify = __commonJS({
  "node_modules/semver/ranges/simplify.js"(exports, module2) {
    "use strict";
    var satisfies = require_satisfies();
    var compare = require_compare();
    module2.exports = (versions, range, options) => {
      const set = [];
      let first = null;
      let prev = null;
      const v = versions.sort((a, b) => compare(a, b, options));
      for (const version of v) {
        const included = satisfies(version, range, options);
        if (included) {
          prev = version;
          if (!first) {
            first = version;
          }
        } else {
          if (prev) {
            set.push([first, prev]);
          }
          prev = null;
          first = null;
        }
      }
      if (first) {
        set.push([first, null]);
      }
      const ranges = [];
      for (const [min, max] of set) {
        if (min === max) {
          ranges.push(min);
        } else if (!max && min === v[0]) {
          ranges.push("*");
        } else if (!max) {
          ranges.push(`>=${min}`);
        } else if (min === v[0]) {
          ranges.push(`<=${max}`);
        } else {
          ranges.push(`${min} - ${max}`);
        }
      }
      const simplified = ranges.join(" || ");
      const original = typeof range.raw === "string" ? range.raw : String(range);
      return simplified.length < original.length ? simplified : range;
    };
  }
});

// node_modules/semver/ranges/subset.js
var require_subset = __commonJS({
  "node_modules/semver/ranges/subset.js"(exports, module2) {
    "use strict";
    var Range = require_range();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var satisfies = require_satisfies();
    var compare = require_compare();
    var subset = (sub, dom, options = {}) => {
      if (sub === dom) {
        return true;
      }
      sub = new Range(sub, options);
      dom = new Range(dom, options);
      let sawNonNull = false;
      OUTER:
        for (const simpleSub of sub.set) {
          for (const simpleDom of dom.set) {
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
              continue OUTER;
            }
          }
          if (sawNonNull) {
            return false;
          }
        }
      return true;
    };
    var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
    var minimumVersion = [new Comparator(">=0.0.0")];
    var simpleSubset = (sub, dom, options) => {
      if (sub === dom) {
        return true;
      }
      if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
          return true;
        } else if (options.includePrerelease) {
          sub = minimumVersionWithPreRelease;
        } else {
          sub = minimumVersion;
        }
      }
      if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
          return true;
        } else {
          dom = minimumVersion;
        }
      }
      const eqSet = /* @__PURE__ */ new Set();
      let gt, lt;
      for (const c of sub) {
        if (c.operator === ">" || c.operator === ">=") {
          gt = higherGT(gt, c, options);
        } else if (c.operator === "<" || c.operator === "<=") {
          lt = lowerLT(lt, c, options);
        } else {
          eqSet.add(c.semver);
        }
      }
      if (eqSet.size > 1) {
        return null;
      }
      let gtltComp;
      if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
          return null;
        } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
          return null;
        }
      }
      for (const eq of eqSet) {
        if (gt && !satisfies(eq, String(gt), options)) {
          return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
          return null;
        }
        for (const c of dom) {
          if (!satisfies(eq, String(c), options)) {
            return false;
          }
        }
        return true;
      }
      let higher, lower;
      let hasDomLT, hasDomGT;
      let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
      let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
      if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
      }
      for (const c of dom) {
        hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
        hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
        if (gt) {
          if (needDomGTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
              needDomGTPre = false;
            }
          }
          if (c.operator === ">" || c.operator === ">=") {
            higher = higherGT(gt, c, options);
            if (higher === c && higher !== gt) {
              return false;
            }
          } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c), options)) {
            return false;
          }
        }
        if (lt) {
          if (needDomLTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
              needDomLTPre = false;
            }
          }
          if (c.operator === "<" || c.operator === "<=") {
            lower = lowerLT(lt, c, options);
            if (lower === c && lower !== lt) {
              return false;
            }
          } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c), options)) {
            return false;
          }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
          return false;
        }
      }
      if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
      }
      if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
      }
      if (needDomGTPre || needDomLTPre) {
        return false;
      }
      return true;
    };
    var higherGT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare(a.semver, b.semver, options);
      return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
    };
    var lowerLT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare(a.semver, b.semver, options);
      return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
    };
    module2.exports = subset;
  }
});

// node_modules/semver/index.js
var require_semver2 = __commonJS({
  "node_modules/semver/index.js"(exports, module2) {
    "use strict";
    var internalRe = require_re();
    var constants = require_constants2();
    var SemVer = require_semver();
    var identifiers = require_identifiers();
    var parse = require_parse();
    var valid = require_valid();
    var clean = require_clean();
    var inc = require_inc();
    var diff = require_diff();
    var major = require_major();
    var minor = require_minor();
    var patch = require_patch();
    var prerelease = require_prerelease();
    var compare = require_compare();
    var rcompare = require_rcompare();
    var compareLoose = require_compare_loose();
    var compareBuild = require_compare_build();
    var sort = require_sort();
    var rsort = require_rsort();
    var gt = require_gt();
    var lt = require_lt();
    var eq = require_eq();
    var neq = require_neq();
    var gte = require_gte();
    var lte = require_lte();
    var cmp = require_cmp();
    var coerce = require_coerce();
    var Comparator = require_comparator();
    var Range = require_range();
    var satisfies = require_satisfies();
    var toComparators = require_to_comparators();
    var maxSatisfying = require_max_satisfying();
    var minSatisfying = require_min_satisfying();
    var minVersion = require_min_version();
    var validRange = require_valid2();
    var outside = require_outside();
    var gtr = require_gtr();
    var ltr = require_ltr();
    var intersects = require_intersects();
    var simplifyRange = require_simplify();
    var subset = require_subset();
    module2.exports = {
      parse,
      valid,
      clean,
      inc,
      diff,
      major,
      minor,
      patch,
      prerelease,
      compare,
      rcompare,
      compareLoose,
      compareBuild,
      sort,
      rsort,
      gt,
      lt,
      eq,
      neq,
      gte,
      lte,
      cmp,
      coerce,
      Comparator,
      Range,
      satisfies,
      toComparators,
      maxSatisfying,
      minSatisfying,
      minVersion,
      validRange,
      outside,
      gtr,
      ltr,
      intersects,
      simplifyRange,
      subset,
      SemVer,
      re: internalRe.re,
      src: internalRe.src,
      tokens: internalRe.t,
      SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: constants.RELEASE_TYPES,
      compareIdentifiers: identifiers.compareIdentifiers,
      rcompareIdentifiers: identifiers.rcompareIdentifiers
    };
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/patchers/aws_p.js
var require_aws_p = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/patchers/aws_p.js"(exports, module2) {
    "use strict";
    var semver = require_semver2();
    var Aws = require_aws();
    var contextUtils = require_context_utils();
    var Utils = require_utils3();
    var logger2 = require_logger();
    var minVersion = "2.7.15";
    var throttledErrorDefault = function throttledErrorDefault2() {
      return false;
    };
    var captureAWS = function captureAWS2(awssdk) {
      if (!semver.gte(awssdk.VERSION, minVersion)) {
        throw new Error("AWS SDK version " + minVersion + " or greater required.");
      }
      for (var prop in awssdk) {
        if (awssdk[prop].serviceIdentifier) {
          var Service2 = awssdk[prop];
          Service2.prototype.customizeRequests(captureAWSRequest);
        }
      }
      return awssdk;
    };
    var captureAWSClient = function captureAWSClient2(service) {
      service.customizeRequests(captureAWSRequest);
      return service;
    };
    function captureAWSRequest(req) {
      var parent = contextUtils.resolveSegment(contextUtils.resolveManualSegmentParams(req.params));
      if (!parent) {
        var output = this.serviceIdentifier + "." + req.operation;
        if (!contextUtils.isAutomaticMode()) {
          logger2.getLogger().info("Call " + output + ' requires a segment object on the request params as "XRaySegment" for tracing in manual mode. Ignoring.');
        } else {
          logger2.getLogger().info("Call " + output + " is missing the sub/segment context for automatic mode. Ignoring.");
        }
        return req;
      }
      var throttledError = this.throttledError || throttledErrorDefault;
      var stack = new Error().stack;
      let subsegment;
      if (parent.notTraced) {
        subsegment = parent.addNewSubsegmentWithoutSampling(this.serviceIdentifier);
      } else {
        subsegment = parent.addNewSubsegment(this.serviceIdentifier);
      }
      var traceId = parent.segment ? parent.segment.trace_id : parent.trace_id;
      const data = parent.segment ? parent.segment.additionalTraceData : parent.additionalTraceData;
      var buildListener = function(req2) {
        let traceHeader = "Root=" + traceId + ";Parent=" + subsegment.id + ";Sampled=" + (subsegment.notTraced ? "0" : "1");
        if (data != null) {
          for (const [key, value] of Object.entries(data)) {
            traceHeader += ";" + key + "=" + value;
          }
        }
        req2.httpRequest.headers["X-Amzn-Trace-Id"] = traceHeader;
      };
      var completeListener = function(res) {
        subsegment.addAttribute("namespace", "aws");
        subsegment.addAttribute("aws", new Aws(res, subsegment.name));
        var httpRes = res.httpResponse;
        if (httpRes) {
          subsegment.addAttribute("http", new HttpResponse(httpRes));
          if (httpRes.statusCode === 429 || res.error && throttledError(res.error)) {
            subsegment.addThrottleFlag();
          }
        }
        if (res.error) {
          var err = { message: res.error.message, name: res.error.code, stack };
          if (httpRes && httpRes.statusCode) {
            if (Utils.getCauseTypeFromHttpStatus(httpRes.statusCode) == "error") {
              subsegment.addErrorFlag();
            }
            subsegment.close(err, true);
          } else {
            subsegment.close(err);
          }
        } else {
          if (httpRes && httpRes.statusCode) {
            var cause = Utils.getCauseTypeFromHttpStatus(httpRes.statusCode);
            if (cause) {
              subsegment[cause] = true;
            }
          }
          subsegment.close();
        }
      };
      req.on("beforePresign", function(req2) {
        parent.removeSubsegment(subsegment);
        parent.decrementCounter();
        req2.removeListener("build", buildListener);
        req2.removeListener("complete", completeListener);
      });
      req.on("build", buildListener).on("complete", completeListener);
      if (!req.__send) {
        req.__send = req.send;
        req.send = function(callback) {
          if (contextUtils.isAutomaticMode()) {
            var session = contextUtils.getNamespace();
            session.run(function() {
              contextUtils.setSegment(subsegment);
              req.__send(callback);
            });
          } else {
            req.__send(callback);
          }
        };
      }
    }
    function HttpResponse(res) {
      this.init(res);
    }
    HttpResponse.prototype.init = function init(res) {
      this.response = {
        status: res.statusCode || ""
      };
      if (res.headers && res.headers["content-length"]) {
        this.response.content_length = res.headers["content-length"];
      }
    };
    module2.exports.captureAWSClient = captureAWSClient;
    module2.exports.captureAWS = captureAWS;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/patchers/aws3_p.js
var require_aws3_p = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/patchers/aws3_p.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.captureAWSClient = void 0;
    var service_error_classification_1 = require("@aws-sdk/service-error-classification");
    var aws_1 = __importDefault(require_aws());
    var querystring_1 = require("querystring");
    var subsegment_1 = __importDefault(require_subsegment());
    var contextUtils = require_context_utils();
    var logger2 = require_logger();
    var { safeParseInt } = require_utils3();
    var utils_1 = require_utils3();
    var XRAY_PLUGIN_NAME = "XRaySDKInstrumentation";
    var buildAttributesFromMetadata = async (service, operation, region, commandInput, res, error) => {
      var _a, _b, _c;
      const { extendedRequestId, requestId, httpStatusCode: statusCode, attempts } = ((_a = res === null || res === void 0 ? void 0 : res.output) === null || _a === void 0 ? void 0 : _a.$metadata) || (error === null || error === void 0 ? void 0 : error.$metadata);
      const aws = new aws_1.default({
        extendedRequestId,
        requestId,
        retryCount: attempts,
        data: res === null || res === void 0 ? void 0 : res.output,
        request: {
          operation,
          params: commandInput,
          httpRequest: {
            region,
            statusCode
          }
        }
      }, service);
      const http = {};
      if (statusCode) {
        http.response = {};
        http.response.status = statusCode;
      }
      if (((_b = res === null || res === void 0 ? void 0 : res.response) === null || _b === void 0 ? void 0 : _b.headers) && ((_c = res === null || res === void 0 ? void 0 : res.response) === null || _c === void 0 ? void 0 : _c.headers["content-length"]) !== void 0) {
        if (!http.response) {
          http.response = {};
        }
        http.response.content_length = safeParseInt(res.response.headers["content-length"]);
      }
      return [aws, http];
    };
    function addFlags(http, subsegment, err) {
      var _a, _b, _c;
      if (err && (0, service_error_classification_1.isThrottlingError)(err)) {
        subsegment.addThrottleFlag();
      } else if (safeParseInt((_a = http.response) === null || _a === void 0 ? void 0 : _a.status) === 429 || safeParseInt((_b = err === null || err === void 0 ? void 0 : err.$metadata) === null || _b === void 0 ? void 0 : _b.httpStatusCode) === 429) {
        subsegment.addThrottleFlag();
      }
      const cause = (0, utils_1.getCauseTypeFromHttpStatus)(safeParseInt((_c = http.response) === null || _c === void 0 ? void 0 : _c.status));
      if (cause === "fault") {
        subsegment.addFaultFlag();
      } else if (cause === "error") {
        subsegment.addErrorFlag();
      }
    }
    var getXRayMiddleware = (config, manualSegment) => (next, context) => async (args) => {
      var _a;
      const segment = contextUtils.isAutomaticMode() ? contextUtils.resolveSegment() : manualSegment;
      const { clientName, commandName } = context;
      const commandInput = (_a = args === null || args === void 0 ? void 0 : args.input) !== null && _a !== void 0 ? _a : {};
      const commandOperation = commandName.slice(0, -7);
      const operation = commandOperation.charAt(0).toLowerCase() + commandOperation.slice(1);
      const service = clientName.slice(0, -6);
      if (!segment) {
        const output = service + "." + operation;
        if (!contextUtils.isAutomaticMode()) {
          logger2.getLogger().info("Call " + output + " requires a segment object passed to captureAWSv3Client for tracing in manual mode. Ignoring.");
        } else {
          logger2.getLogger().info("Call " + output + " is missing the sub/segment context for automatic mode. Ignoring.");
        }
        return next(args);
      }
      let subsegment;
      if (segment.notTraced) {
        subsegment = segment.addNewSubsegmentWithoutSampling(service);
      } else {
        subsegment = segment.addNewSubsegment(service);
      }
      subsegment.addAttribute("namespace", "aws");
      const parent = segment instanceof subsegment_1.default ? segment.segment : segment;
      const data = parent.segment ? parent.segment.additionalTraceData : parent.additionalTraceData;
      let traceHeader = (0, querystring_1.stringify)({
        Root: parent.trace_id,
        Parent: subsegment.id,
        Sampled: subsegment.notTraced ? "0" : "1"
      }, ";");
      if (data != null) {
        for (const [key, value] of Object.entries(data)) {
          traceHeader += ";" + key + "=" + value;
        }
      }
      args.request.headers["X-Amzn-Trace-Id"] = traceHeader;
      let res;
      try {
        res = await next(args);
        if (!res) {
          throw new Error("Failed to get response from instrumented AWS Client.");
        }
        const [aws, http] = await buildAttributesFromMetadata(service, operation, await config.region(), commandInput, res, null);
        subsegment.addAttribute("aws", aws);
        subsegment.addAttribute("http", http);
        addFlags(http, subsegment);
        subsegment.close();
        return res;
      } catch (err) {
        if (err.$metadata) {
          const [aws, http] = await buildAttributesFromMetadata(service, operation, await config.region(), commandInput, null, err);
          subsegment.addAttribute("aws", aws);
          subsegment.addAttribute("http", http);
          addFlags(http, subsegment, err);
        }
        const errObj = { message: err.message, name: err.name, stack: err.stack || new Error().stack };
        subsegment.close(errObj, true);
        throw err;
      }
    };
    var xRayMiddlewareOptions = {
      name: XRAY_PLUGIN_NAME,
      step: "build"
    };
    var getXRayPlugin = (config, manualSegment) => ({
      applyToStack: (stack) => {
        stack.add(getXRayMiddleware(config, manualSegment), xRayMiddlewareOptions);
      }
    });
    function captureAWSClient(client, manualSegment) {
      client.middlewareStack.remove(XRAY_PLUGIN_NAME);
      client.middlewareStack.use(getXRayPlugin(client.config, manualSegment));
      return client;
    }
    exports.captureAWSClient = captureAWSClient;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/patchers/http_p.js
var require_http_p = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/patchers/http_p.js"(exports, module2) {
    "use strict";
    var url = require("url");
    var contextUtils = require_context_utils();
    var Utils = require_utils3();
    var logger2 = require_logger();
    var events = require("events");
    var captureHTTPsGlobal = function captureHTTPsGlobal2(module3, downstreamXRayEnabled, subsegmentCallback) {
      if (!module3.__request) {
        enableCapture(module3, downstreamXRayEnabled, subsegmentCallback);
      }
    };
    var captureHTTPs = function captureHTTPs2(module3, downstreamXRayEnabled, subsegmentCallback) {
      if (module3.__request) {
        return module3;
      }
      var tracedModule = {};
      Object.keys(module3).forEach(function(val2) {
        tracedModule[val2] = module3[val2];
      });
      enableCapture(tracedModule, downstreamXRayEnabled, subsegmentCallback);
      return tracedModule;
    };
    function enableCapture(module3, downstreamXRayEnabled, subsegmentCallback) {
      function captureOutgoingHTTPs(baseFunc, ...args) {
        let options;
        let callback;
        let hasUrl;
        let urlObj;
        let arg0 = args[0];
        if (typeof args[1] === "object") {
          hasUrl = true;
          urlObj = typeof arg0 === "string" ? new url.URL(arg0) : arg0;
          options = args[1], callback = args[2];
        } else {
          hasUrl = false;
          options = arg0;
          callback = args[1];
        }
        if (!options || options.headers && options.headers["X-Amzn-Trace-Id"]) {
          return baseFunc(...args);
        }
        if (typeof options === "string") {
          options = new url.URL(options);
        }
        if (!hasUrl) {
          urlObj = options;
        }
        const parent = contextUtils.resolveSegment(contextUtils.resolveManualSegmentParams(options));
        const hostname = options.hostname || options.host || urlObj.hostname || urlObj.host || "Unknown host";
        if (!parent) {
          let output = "[ host: " + hostname;
          output = options.method ? output + ", method: " + options.method : output;
          output += ", path: " + (urlObj.pathname || Utils.stripQueryStringFromPath(options.path)) + " ]";
          if (!contextUtils.isAutomaticMode()) {
            logger2.getLogger().info("Options for request " + output + ' requires a segment object on the options params as "XRaySegment" for tracing in manual mode. Ignoring.');
          } else {
            logger2.getLogger().info("Options for request " + output + " is missing the sub/segment context for automatic mode. Ignoring.");
          }
          return baseFunc(...args);
        }
        let subsegment;
        if (parent.notTraced) {
          subsegment = parent.addNewSubsegmentWithoutSampling(hostname);
        } else {
          subsegment = parent.addNewSubsegment(hostname);
        }
        const root = parent.segment ? parent.segment : parent;
        subsegment.namespace = "remote";
        if (!options.headers) {
          options.headers = {};
        }
        options.headers["X-Amzn-Trace-Id"] = "Root=" + root.trace_id + ";Parent=" + subsegment.id + ";Sampled=" + (subsegment.notTraced ? "0" : "1");
        const errorCapturer = function errorCapturer2(e) {
          if (subsegmentCallback) {
            subsegmentCallback(subsegment, this, null, e);
          }
          if (subsegment.http && subsegment.http.response) {
            if (Utils.getCauseTypeFromHttpStatus(subsegment.http.response.status) === "error") {
              subsegment.addErrorFlag();
            }
            subsegment.close(e, true);
          } else {
            const madeItToDownstream = e.code !== "ECONNREFUSED";
            subsegment.addRemoteRequestData(this, null, madeItToDownstream && downstreamXRayEnabled);
            subsegment.close(e);
          }
        };
        const optionsCopy = Utils.objectWithoutProperties(options, ["Segment"], true);
        let req = baseFunc(...hasUrl ? [arg0, optionsCopy] : [options], function(res) {
          res.on("end", function() {
            if (subsegmentCallback) {
              subsegmentCallback(subsegment, this.req, res);
            }
            if (res.statusCode === 429) {
              subsegment.addThrottleFlag();
            }
            const cause = Utils.getCauseTypeFromHttpStatus(res.statusCode);
            if (cause) {
              subsegment[cause] = true;
            }
            subsegment.addRemoteRequestData(res.req, res, !!downstreamXRayEnabled);
            subsegment.close();
          });
          if (typeof callback === "function") {
            if (contextUtils.isAutomaticMode()) {
              const session = contextUtils.getNamespace();
              session.run(function() {
                contextUtils.setSegment(subsegment);
                callback(res);
              });
            } else {
              callback(res);
            }
          } else if (res.req && res.req.listenerCount("response") === 0) {
            res.resume();
          }
        });
        req.on(events.errorMonitor || "error", errorCapturer);
        return req;
      }
      module3.__request = module3.request;
      function captureHTTPsRequest(...args) {
        return captureOutgoingHTTPs(module3.__request, ...args);
      }
      module3.__get = module3.get;
      function captureHTTPsGet(...args) {
        return captureOutgoingHTTPs(module3.__get, ...args);
      }
      Object.defineProperties(module3, {
        request: { value: captureHTTPsRequest, configurable: true, enumerable: true, writable: true },
        get: { value: captureHTTPsGet, configurable: true, enumerable: true, writable: true }
      });
    }
    module2.exports.captureHTTPsGlobal = captureHTTPsGlobal;
    module2.exports.captureHTTPs = captureHTTPs;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/patchers/promise_p.js
var require_promise_p = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/patchers/promise_p.js"(exports, module2) {
    "use strict";
    var contextUtils = require_context_utils();
    var originalThen = Symbol("original then");
    var originalCatch = Symbol("original catch");
    function patchPromise(Promise2) {
      const then = Promise2.prototype.then;
      if (!then[originalThen]) {
        Promise2.prototype.then = function(onFulfilled, onRejected) {
          if (contextUtils.isAutomaticMode() && tryGetCurrentSegment()) {
            const ns = contextUtils.getNamespace();
            onFulfilled = onFulfilled && ns.bind(onFulfilled);
            onRejected = onRejected && ns.bind(onRejected);
          }
          return then.call(this, onFulfilled, onRejected);
        };
        Promise2.prototype.then[originalThen] = then;
      }
      const origCatch = Promise2.prototype.catch;
      if (origCatch && !origCatch[originalCatch]) {
        Promise2.prototype.catch = function(onRejected) {
          if (contextUtils.isAutomaticMode() && tryGetCurrentSegment()) {
            const ns = contextUtils.getNamespace();
            onRejected = onRejected && ns.bind(onRejected);
          }
          return origCatch.call(this, onRejected);
        };
        Promise2.prototype.catch[originalCatch] = origCatch;
      }
    }
    function unpatchPromise(Promise2) {
      const then = Promise2.prototype.then;
      if (then[originalThen]) {
        Promise2.prototype.then = then[originalThen];
      }
      const origCatch = Promise2.prototype.catch;
      if (origCatch && origCatch[originalCatch]) {
        Promise2.prototype.catch = origCatch[originalCatch];
      }
    }
    function tryGetCurrentSegment() {
      try {
        return contextUtils.getSegment();
      } catch (e) {
        return void 0;
      }
    }
    function capturePromise() {
      patchPromise(Promise);
    }
    function uncapturePromise() {
      unpatchPromise(Promise);
    }
    capturePromise.patchThirdPartyPromise = patchPromise;
    module2.exports.capturePromise = capturePromise;
    module2.exports.uncapturePromise = uncapturePromise;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/database/sql_data.js
var require_sql_data = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/database/sql_data.js"(exports, module2) {
    "use strict";
    function SqlData(databaseVer, driverVer, user, url, queryType) {
      this.init(databaseVer, driverVer, user, url, queryType);
    }
    SqlData.prototype.init = function init(databaseVer, driverVer, user, url, queryType) {
      if (databaseVer) {
        this.database_version = databaseVer;
      }
      if (driverVer) {
        this.driver_version = driverVer;
      }
      if (queryType) {
        this.preparation = queryType;
      }
      this.url = url;
      this.user = user;
    };
    module2.exports = SqlData;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/aws-xray.js
var require_aws_xray = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/aws-xray.js"(exports, module2) {
    "use strict";
    var contextUtils = require_context_utils();
    var logging = require_logger();
    var segmentUtils = require_segment_utils();
    var utils = require_utils3();
    var LambdaEnv = require_aws_lambda();
    var pkginfo = {};
    try {
      pkginfo = require_package();
    } catch (err) {
      logging.getLogger().debug("Failed to load SDK data:", err);
    }
    var UNKNOWN = "unknown";
    var AWSXRay = {
      /**
       * @memberof AWSXRay
       * @type {object}
       * @namespace AWSXRay.plugins
       */
      plugins: {
        /**
         * Exposes the AWS EC2 plugin.
         * @memberof AWSXRay.plugins
         */
        EC2Plugin: require_ec2_plugin(),
        /**
         * Exposes the AWS ECS plugin.
         * @memberof AWSXRay.plugins
         */
        ECSPlugin: require_ecs_plugin(),
        /**
         * Exposes the AWS Elastic Beanstalk plugin.
         * @memberof AWSXRay.plugins
         */
        ElasticBeanstalkPlugin: require_elastic_beanstalk_plugin()
      },
      /**
       * Enables use of plugins to capture additional data for segments.
       * @param {Array} plugins - A configurable subset of AWSXRay.plugins.
       * @memberof AWSXRay
       * @see AWSXRay.plugins
       */
      config: function(plugins) {
        var pluginData = {};
        plugins.forEach(function(plugin) {
          plugin.getData(function(data) {
            if (data) {
              for (var attribute in data) {
                pluginData[attribute] = data[attribute];
              }
            }
          });
          segmentUtils.setOrigin(plugin.originName);
          segmentUtils.setPluginData(pluginData);
        });
      },
      /**
       * Overrides the default whitelisting file to specify what params to capture on each AWS Service call.
       * If a service or API is not listed, no additional data is captured.
       * The base whitelisting file can be found at /lib/resources/aws_whitelist.json
       * @param {string|Object} source - The path to the custom whitelist file, or a whitelist source JSON object.
       * @memberof AWSXRay
       */
      setAWSWhitelist: require_aws().setAWSWhitelist,
      /**
       * Appends to the current whitelisting file.
       * In the case of a duplicate service API listed, the new source will override the previous values.
       * @param {string|Object} source - The path to the custom whitelist file, or a whitelist source JSON object.
       * @memberof AWSXRay
       */
      appendAWSWhitelist: require_aws().appendAWSWhitelist,
      /**
       * Overrides the default streaming threshold (100).
       * The threshold represents the maximum number of subsegments on a single segment before
       * the SDK begins to send the completed subsegments out of band of the main segment.
       * Reduce this threshold if you see the 'Segment too large to send' error.
       * @param {number} threshold - The new threshold to use.
       * @memberof AWSXRay
       */
      setStreamingThreshold: segmentUtils.setStreamingThreshold,
      /**
       * Set your own logger for the SDK.
       * @param {Object} logger - A logger which responds to debug/info/warn/error calls.
       * @memberof AWSXRay
       */
      setLogger: logging.setLogger,
      /**
       * Gets the set logger for the SDK.
       * @memberof AWSXRay
       */
      getLogger: logging.getLogger,
      /**
       * Configures the address and port the daemon is expected to be on.
       * @param {string} address - Address of the daemon the segments should be sent to.  Expects 'x.x.x.x', ':yyyy' or 'x.x.x.x:yyyy' IPv4 formats.
       * @module DaemonConfig
       * @memberof AWSXRay
       * @function
       * @see module:DaemonConfig.setDaemonAddress
       */
      setDaemonAddress: require_daemon_config().setDaemonAddress,
      /**
       * @param {string} name - The name of the new subsegment.
       * @param {function} fcn - The function conext to wrap.
       * @param {Segment|Subsegment} [parent] - The parent for the new subsegment, for manual mode.
       * @memberof AWSXRay
       * @function
       * @see module:capture.captureFunc
       */
      captureFunc: require_capture().captureFunc,
      /**
       * @param {string} name - The name of the new subsegment.
       * @param {function} fcn - The function conext to wrap.
       * @param {Segment|Subsegment} [parent] - The parent for the new subsegment, for manual mode.
       * @memberof AWSXRay
       * @function
       * @see module:capture.captureAsyncFunc
       */
      captureAsyncFunc: require_capture().captureAsyncFunc,
      /**
       * @param {string} name - The name of the new subsegment.
       * @param {function} fcn - The function conext to wrap.
       * @param {Segment|Subsegment} [parent] - The parent for the new subsegment, for manual mode.
       * @memberof AWSXRay
       * @function
       * @see module:capture.captureCallbackFunc
       */
      captureCallbackFunc: require_capture().captureCallbackFunc,
      /**
       * @param {AWS} awssdk - The Javascript AWS SDK.
       * @memberof AWSXRay
       * @function
       * @see module:aws_p.captureAWS
       */
      captureAWS: require_aws_p().captureAWS,
      /**
       * @param {AWS.Service} service - An instance of a AWS service to wrap.
       * @memberof AWSXRay
       * @function
       * @see module:aws_p.captureAWSClient
       */
      captureAWSClient: require_aws_p().captureAWSClient,
      /**
       * @param {AWSv3.Service} service - An instance of a AWS SDK v3 service to wrap.
       * @param {Segment|Subsegment} segment - Optional segment for manual mode.
       * @memberof AWSXRay
       * @function
       * @see module:aws3_p.captureAWSClient
       */
      captureAWSv3Client: require_aws3_p().captureAWSClient,
      /**
       * @param {http|https} module - The built in Node.js HTTP or HTTPS module.
       * @memberof AWSXRay
       * @function
       * @returns {http|https}
       * @see module:http_p.captureHTTPs
       */
      captureHTTPs: require_http_p().captureHTTPs,
      /**
       * @param {http|https} module - The built in Node.js HTTP or HTTPS module.
       * @memberof AWSXRay
       * @function
       * @see module:http_p.captureHTTPsGlobal
       */
      captureHTTPsGlobal: require_http_p().captureHTTPsGlobal,
      /**
       * @memberof AWSXRay
       * @function
       * @see module:promise_p.capturePromise
       */
      capturePromise: require_promise_p().capturePromise,
      /**
       * Exposes various helper methods.
       * @memberof AWSXRay
       * @function
       * @see module:utils
       */
      utils,
      /**
       * @memberof AWSXRay
       * @type {object}
       * @namespace AWSXRay.database
       */
      database: {
        /**
         * Exposes the SqlData class.
         * @memberof AWSXRay.database
         * @see SqlData
         */
        SqlData: require_sql_data()
      },
      /**
       * Exposes the Middleware Utils class.
       * @memberof AWSXRay
       * @function
       * @see module:mw_utils
       */
      middleware: require_mw_utils(),
      /**
       * Gets the current namespace of the context.
       * Used for supporting functions that can be used in automatic mode.
       * @memberof AWSXRay
       * @function
       * @returns {Segment|Subsegment}
       * @see module:context_utils.getNamespace
       */
      getNamespace: contextUtils.getNamespace,
      /**
       * Resolves the current segment or subsegment, checks manual and automatic modes.
       * Used for supporting functions that can be used in both manual and automatic modes.
       * @memberof AWSXRay
       * @function
       * @returns {Segment|Subsegment}
       * @see module:context_utils.resolveSegment
       */
      resolveSegment: contextUtils.resolveSegment,
      /**
       * Returns the current segment or subsegment. For use with automatic mode only.
       * @memberof AWSXRay
       * @function
       * @returns {Segment|Subsegment}
       * @see module:context_utils.getSegment
       */
      getSegment: contextUtils.getSegment,
      /**
       * Sets the current segment or subsegment.  For use with automatic mode only.
       * @memberof AWSXRay
       * @function
       * @see module:context_utils.setSegment
       */
      setSegment: contextUtils.setSegment,
      /**
       * Returns true if automatic mode is enabled, otherwise false.
       * @memberof AWSXRay
       * @function
       * @see module:context_utils.isAutomaticMode
       */
      isAutomaticMode: contextUtils.isAutomaticMode,
      /**
       * Enables automatic mode. Automatic mode uses 'cls-hooked'.
       * @see https://github.com/jeff-lewis/cls-hooked
       * @memberof AWSXRay
       * @function
       * @see module:context_utils.enableAutomaticMode
       */
      enableAutomaticMode: contextUtils.enableAutomaticMode,
      /**
       * Disables automatic mode. Current segment or subsegment must be passed manually
       * via the parent optional on captureFunc, captureAsyncFunc etc.
       * @memberof AWSXRay
       * @function
       * @see module:context_utils.enableManualMode
       */
      enableManualMode: contextUtils.enableManualMode,
      /**
       * Sets the context missing strategy.
       * @param {Object} strategy - The strategy to set. This object's contextMissing function will be called whenever trace context is not found.
       */
      setContextMissingStrategy: contextUtils.setContextMissingStrategy,
      /**
       * Exposes the segment class.
       * @memberof AWSXRay
       * @function
       */
      Segment: require_segment(),
      /**
       * Exposes the subsegment class.
       * @memberof AWSXRay
       * @see Subsegment
       */
      Subsegment: require_subsegment(),
      SegmentUtils: segmentUtils
    };
    AWSXRay.middleware.IncomingRequestData = require_incoming_request_data(), function() {
      var data = {
        runtime: process.release && process.release.name ? process.release.name : UNKNOWN,
        runtime_version: process.version,
        version: process.env.npm_package_version || UNKNOWN,
        name: process.env.npm_package_name || UNKNOWN
      };
      var sdkData = {
        sdk: "X-Ray for Node.js",
        sdk_version: pkginfo.version ? pkginfo.version : UNKNOWN,
        package: pkginfo.name ? pkginfo.name : UNKNOWN
      };
      segmentUtils.setSDKData(sdkData);
      segmentUtils.setServiceData(data);
      if (process.env.LAMBDA_TASK_ROOT) {
        LambdaEnv.init();
      }
    }();
    module2.exports = AWSXRay;
  }
});

// node_modules/aws-xray-sdk-core/dist/lib/index.js
var require_lib4 = __commonJS({
  "node_modules/aws-xray-sdk-core/dist/lib/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_aws_xray();
  }
});

// node_modules/@aws-lambda-powertools/tracer/lib/provider/ProviderService.js
var require_ProviderService = __commonJS({
  "node_modules/@aws-lambda-powertools/tracer/lib/provider/ProviderService.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProviderService = void 0;
    var aws_xray_sdk_core_1 = require_lib4();
    var commons_1 = require_lib2();
    var ProviderService = class {
      captureAWS(awssdk) {
        return (0, aws_xray_sdk_core_1.captureAWS)(awssdk);
      }
      captureAWSClient(service) {
        return (0, aws_xray_sdk_core_1.captureAWSClient)(service);
      }
      captureAWSv3Client(service) {
        (0, commons_1.addUserAgentMiddleware)(service, "tracer");
        return (0, aws_xray_sdk_core_1.captureAWSv3Client)(service);
      }
      captureAsyncFunc(name, fcn, _parent) {
        return (0, aws_xray_sdk_core_1.captureAsyncFunc)(name, fcn);
      }
      captureFunc(name, fcn, _parent) {
        return (0, aws_xray_sdk_core_1.captureFunc)(name, fcn);
      }
      captureHTTPsGlobal() {
        (0, aws_xray_sdk_core_1.captureHTTPsGlobal)(require("http"));
        (0, aws_xray_sdk_core_1.captureHTTPsGlobal)(require("https"));
      }
      getNamespace() {
        return (0, aws_xray_sdk_core_1.getNamespace)();
      }
      getSegment() {
        return (0, aws_xray_sdk_core_1.getSegment)();
      }
      putAnnotation(key, value) {
        const segment = this.getSegment();
        if (segment === void 0) {
          console.warn("No active segment or subsegment found, skipping annotation");
          return;
        }
        if (segment instanceof aws_xray_sdk_core_1.Segment) {
          console.warn("You cannot annotate the main segment in a Lambda execution environment");
          return;
        }
        segment.addAnnotation(key, value);
      }
      putMetadata(key, value, namespace) {
        const segment = this.getSegment();
        if (segment === void 0) {
          console.warn("No active segment or subsegment found, skipping metadata addition");
          return;
        }
        if (segment instanceof aws_xray_sdk_core_1.Segment) {
          console.warn("You cannot add metadata to the main segment in a Lambda execution environment");
          return;
        }
        segment.addMetadata(key, value, namespace);
      }
      setContextMissingStrategy(strategy) {
        (0, aws_xray_sdk_core_1.setContextMissingStrategy)(strategy);
      }
      setDaemonAddress(address) {
        (0, aws_xray_sdk_core_1.setDaemonAddress)(address);
      }
      setLogger(logObj) {
        (0, aws_xray_sdk_core_1.setLogger)(logObj);
      }
      setSegment(segment) {
        (0, aws_xray_sdk_core_1.setSegment)(segment);
      }
    };
    exports.ProviderService = ProviderService;
  }
});

// node_modules/@aws-lambda-powertools/tracer/lib/provider/ProviderServiceInterface.js
var require_ProviderServiceInterface = __commonJS({
  "node_modules/@aws-lambda-powertools/tracer/lib/provider/ProviderServiceInterface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@aws-lambda-powertools/tracer/lib/provider/index.js
var require_provider = __commonJS({
  "node_modules/@aws-lambda-powertools/tracer/lib/provider/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_ProviderService(), exports);
    __exportStar(require_ProviderServiceInterface(), exports);
  }
});

// node_modules/@aws-lambda-powertools/tracer/lib/Tracer.js
var require_Tracer = __commonJS({
  "node_modules/@aws-lambda-powertools/tracer/lib/Tracer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tracer = void 0;
    var commons_1 = require_lib2();
    var config_1 = require_config3();
    var provider_1 = require_provider();
    var aws_xray_sdk_core_1 = require_lib4();
    var Tracer2 = class extends commons_1.Utility {
      constructor(options = {}) {
        super();
        this.captureError = true;
        this.captureHTTPsRequests = true;
        this.captureResponse = true;
        this.tracingEnabled = true;
        this.setOptions(options);
        this.provider = new provider_1.ProviderService();
        if (this.isTracingEnabled() && this.captureHTTPsRequests) {
          this.provider.captureHTTPsGlobal();
        }
        if (!this.isTracingEnabled()) {
          this.provider.setContextMissingStrategy(() => ({}));
        }
      }
      addErrorAsMetadata(error, remote) {
        if (!this.isTracingEnabled()) {
          return;
        }
        const subsegment = this.getSegment();
        if (subsegment === void 0) {
          return;
        }
        if (!this.captureError) {
          subsegment.addErrorFlag();
          return;
        }
        subsegment.addError(error, remote || false);
      }
      addResponseAsMetadata(data, methodName) {
        if (data === void 0 || !this.captureResponse || !this.isTracingEnabled()) {
          return;
        }
        this.putMetadata(`${methodName} response`, data);
      }
      addServiceNameAnnotation() {
        if (!this.isTracingEnabled()) {
          return;
        }
        this.putAnnotation("Service", this.serviceName);
      }
      annotateColdStart() {
        if (this.isTracingEnabled()) {
          this.putAnnotation("ColdStart", this.getColdStart());
        }
      }
      captureAWS(aws) {
        if (!this.isTracingEnabled())
          return aws;
        return this.provider.captureAWS(aws);
      }
      captureAWSClient(service) {
        if (!this.isTracingEnabled())
          return service;
        try {
          return this.provider.captureAWSClient(service);
        } catch (error) {
          try {
            this.provider.captureAWSClient(service.service);
            return service;
          } catch {
            throw error;
          }
        }
      }
      captureAWSv3Client(service) {
        if (!this.isTracingEnabled())
          return service;
        return this.provider.captureAWSv3Client(service);
      }
      captureLambdaHandler(options) {
        return (_target, _propertyKey, descriptor) => {
          const originalMethod = descriptor.value;
          const tracerRef = this;
          descriptor.value = function(event, context, callback) {
            const handlerRef = this;
            if (!tracerRef.isTracingEnabled()) {
              return originalMethod.apply(handlerRef, [event, context, callback]);
            }
            return tracerRef.provider.captureAsyncFunc(`## ${process.env._HANDLER}`, async (subsegment) => {
              tracerRef.annotateColdStart();
              tracerRef.addServiceNameAnnotation();
              let result;
              try {
                result = await originalMethod.apply(handlerRef, [
                  event,
                  context,
                  callback
                ]);
                if (options?.captureResponse ?? true) {
                  tracerRef.addResponseAsMetadata(result, process.env._HANDLER);
                }
              } catch (error) {
                tracerRef.addErrorAsMetadata(error);
                throw error;
              } finally {
                try {
                  subsegment?.close();
                } catch (error) {
                  console.warn(`Failed to close or serialize segment, ${subsegment?.name}. We are catching the error but data might be lost.`, error);
                }
              }
              return result;
            });
          };
          return descriptor;
        };
      }
      captureMethod(options) {
        return (_target, propertyKey, descriptor) => {
          const originalMethod = descriptor.value;
          const tracerRef = this;
          descriptor.value = function(...args) {
            if (!tracerRef.isTracingEnabled()) {
              return originalMethod.apply(this, [...args]);
            }
            const methodName = String(propertyKey);
            const subsegmentName = options?.subSegmentName ? options.subSegmentName : `### ${methodName}`;
            return tracerRef.provider.captureAsyncFunc(subsegmentName, async (subsegment) => {
              let result;
              try {
                result = await originalMethod.apply(this, [...args]);
                if (options?.captureResponse ?? true) {
                  tracerRef.addResponseAsMetadata(result, methodName);
                }
              } catch (error) {
                tracerRef.addErrorAsMetadata(error);
                throw error;
              } finally {
                try {
                  subsegment?.close();
                } catch (error) {
                  console.warn(`Failed to close or serialize segment, ${subsegment?.name}. We are catching the error but data might be lost.`, error);
                }
              }
              return result;
            });
          };
          return descriptor;
        };
      }
      getRootXrayTraceId() {
        return this.envVarsService.getXrayTraceId();
      }
      getSegment() {
        if (!this.isTracingEnabled()) {
          return new aws_xray_sdk_core_1.Subsegment("## Dummy segment");
        }
        const segment = this.provider.getSegment();
        if (segment === void 0) {
          console.warn("Failed to get the current sub/segment from the context, this is likely because you are not using the Tracer in a Lambda function.");
        }
        return segment;
      }
      isTraceSampled() {
        if (!this.isTracingEnabled())
          return false;
        return this.envVarsService.getXrayTraceSampled();
      }
      isTracingEnabled() {
        return this.tracingEnabled;
      }
      putAnnotation(key, value) {
        if (!this.isTracingEnabled())
          return;
        this.provider.putAnnotation(key, value);
      }
      putMetadata(key, value, namespace) {
        if (!this.isTracingEnabled())
          return;
        this.provider.putMetadata(key, value, namespace || this.serviceName);
      }
      setSegment(segment) {
        if (!this.isTracingEnabled())
          return;
        return this.provider.setSegment(segment);
      }
      getCustomConfigService() {
        return this.customConfigService;
      }
      getEnvVarsService() {
        return this.envVarsService;
      }
      isAmplifyCli() {
        return this.getEnvVarsService().getAwsExecutionEnv() === "AWS_Lambda_amplify-mock";
      }
      isLambdaExecutionEnv() {
        return this.getEnvVarsService().getAwsExecutionEnv() !== "";
      }
      isLambdaSamCli() {
        return this.getEnvVarsService().getSamLocal() !== "";
      }
      setCaptureError() {
        const customConfigValue = this.getCustomConfigService()?.getTracingCaptureError();
        if (customConfigValue !== void 0 && customConfigValue.toLowerCase() === "false") {
          this.captureError = false;
          return;
        }
        const envVarsValue = this.getEnvVarsService().getTracingCaptureError();
        if (envVarsValue.toLowerCase() === "false") {
          this.captureError = false;
          return;
        }
      }
      setCaptureHTTPsRequests(enabled) {
        if (enabled !== void 0 && !enabled) {
          this.captureHTTPsRequests = false;
          return;
        }
        const customConfigValue = this.getCustomConfigService()?.getCaptureHTTPsRequests();
        if (customConfigValue !== void 0 && customConfigValue.toLowerCase() === "false") {
          this.captureHTTPsRequests = false;
          return;
        }
        const envVarsValue = this.getEnvVarsService().getCaptureHTTPsRequests();
        if (envVarsValue.toLowerCase() === "false") {
          this.captureHTTPsRequests = false;
          return;
        }
      }
      setCaptureResponse() {
        const customConfigValue = this.getCustomConfigService()?.getTracingCaptureResponse();
        if (customConfigValue !== void 0 && customConfigValue.toLowerCase() === "false") {
          this.captureResponse = false;
          return;
        }
        const envVarsValue = this.getEnvVarsService().getTracingCaptureResponse();
        if (envVarsValue.toLowerCase() === "false") {
          this.captureResponse = false;
          return;
        }
      }
      setCustomConfigService(customConfigService) {
        this.customConfigService = customConfigService ? customConfigService : void 0;
      }
      setEnvVarsService() {
        this.envVarsService = new config_1.EnvironmentVariablesService();
      }
      setOptions(options) {
        const { enabled, serviceName: serviceName2, captureHTTPsRequests, customConfigService } = options;
        this.setEnvVarsService();
        this.setCustomConfigService(customConfigService);
        this.setTracingEnabled(enabled);
        this.setCaptureResponse();
        this.setCaptureError();
        this.setServiceName(serviceName2);
        this.setCaptureHTTPsRequests(captureHTTPsRequests);
        return this;
      }
      setServiceName(serviceName2) {
        if (serviceName2 !== void 0 && this.isValidServiceName(serviceName2)) {
          this.serviceName = serviceName2;
          return;
        }
        const customConfigValue = this.getCustomConfigService()?.getServiceName();
        if (customConfigValue !== void 0 && this.isValidServiceName(customConfigValue)) {
          this.serviceName = customConfigValue;
          return;
        }
        const envVarsValue = this.getEnvVarsService().getServiceName();
        if (envVarsValue !== void 0 && this.isValidServiceName(envVarsValue)) {
          this.serviceName = envVarsValue;
          return;
        }
        this.serviceName = this.getDefaultServiceName();
      }
      setTracingEnabled(enabled) {
        if (enabled !== void 0 && !enabled) {
          this.tracingEnabled = enabled;
          return;
        }
        const customConfigValue = this.getCustomConfigService()?.getTracingEnabled();
        if (customConfigValue !== void 0 && customConfigValue.toLowerCase() === "false") {
          this.tracingEnabled = false;
          return;
        }
        const envVarsValue = this.getEnvVarsService().getTracingEnabled();
        if (envVarsValue.toLowerCase() === "false") {
          this.tracingEnabled = false;
          return;
        }
        if (this.isAmplifyCli() || this.isLambdaSamCli() || !this.isLambdaExecutionEnv()) {
          this.tracingEnabled = false;
        }
      }
    };
    exports.Tracer = Tracer2;
  }
});

// node_modules/@aws-lambda-powertools/tracer/lib/TracerInterface.js
var require_TracerInterface = __commonJS({
  "node_modules/@aws-lambda-powertools/tracer/lib/TracerInterface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@aws-lambda-powertools/tracer/lib/middleware/middy.js
var require_middy3 = __commonJS({
  "node_modules/@aws-lambda-powertools/tracer/lib/middleware/middy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.captureLambdaHandler = void 0;
    var middleware_1 = require_middleware();
    var captureLambdaHandler2 = (target, options) => {
      let lambdaSegment;
      let handlerSegment;
      const setCleanupFunction = (request) => {
        request.internal = {
          ...request.internal,
          [middleware_1.TRACER_KEY]: close
        };
      };
      const open = () => {
        const segment = target.getSegment();
        if (segment === void 0) {
          return;
        }
        lambdaSegment = segment;
        handlerSegment = lambdaSegment.addNewSubsegment(`## ${process.env._HANDLER}`);
        target.setSegment(handlerSegment);
      };
      const close = () => {
        if (handlerSegment === void 0 || lambdaSegment === null) {
          return;
        }
        try {
          handlerSegment.close();
        } catch (error) {
          console.warn(`Failed to close or serialize segment, ${handlerSegment.name}. We are catching the error but data might be lost.`, error);
        }
        target.setSegment(lambdaSegment);
      };
      const captureLambdaHandlerBefore = async (request) => {
        if (target.isTracingEnabled()) {
          open();
          setCleanupFunction(request);
          target.annotateColdStart();
          target.addServiceNameAnnotation();
        }
      };
      const captureLambdaHandlerAfter = async (request) => {
        if (target.isTracingEnabled()) {
          if (options?.captureResponse ?? true) {
            target.addResponseAsMetadata(request.response, process.env._HANDLER);
          }
          close();
        }
      };
      const captureLambdaHandlerError = async (request) => {
        if (target.isTracingEnabled()) {
          target.addErrorAsMetadata(request.error);
          close();
        }
      };
      return {
        before: captureLambdaHandlerBefore,
        after: captureLambdaHandlerAfter,
        onError: captureLambdaHandlerError
      };
    };
    exports.captureLambdaHandler = captureLambdaHandler2;
  }
});

// node_modules/@aws-lambda-powertools/tracer/lib/index.js
var require_lib5 = __commonJS({
  "node_modules/@aws-lambda-powertools/tracer/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_helpers3(), exports);
    __exportStar(require_Tracer(), exports);
    __exportStar(require_TracerInterface(), exports);
    __exportStar(require_middy3(), exports);
  }
});

// src/Route53Writer/stream-handler.lambda.ts
var stream_handler_lambda_exports = {};
__export(stream_handler_lambda_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(stream_handler_lambda_exports);
var import_util_dynamodb = require("@aws-sdk/util-dynamodb");

// src/database.ts
var import_client_dynamodb = require("@aws-sdk/client-dynamodb");
var import_lib_dynamodb = require("@aws-sdk/lib-dynamodb");
var import_electrodb = __toESM(require_electrodb());

// src/runtime.ts
var import_logger = __toESM(require_lib3());
var import_tracer = __toESM(require_lib5());

// node_modules/@middy/core/index.js
var import_node_stream = require("node:stream");
var import_promises = require("node:stream/promises");
var import_promises2 = require("node:timers/promises");
var defaultLambdaHandler = () => {
};
var defaultPlugin = {
  timeoutEarlyInMillis: 5,
  timeoutEarlyResponse: () => {
    throw new Error("Timeout");
  },
  streamifyResponse: false
  // Deprecate need for this when AWS provides a flag for when it's looking for it
};
var middy = (lambdaHandler = defaultLambdaHandler, plugin = {}) => {
  if (typeof lambdaHandler !== "function") {
    plugin = lambdaHandler;
    lambdaHandler = defaultLambdaHandler;
  }
  plugin = {
    ...defaultPlugin,
    ...plugin
  };
  plugin.timeoutEarly = plugin.timeoutEarlyInMillis > 0;
  plugin.beforePrefetch?.();
  const beforeMiddlewares = [];
  const afterMiddlewares = [];
  const onErrorMiddlewares = [];
  const middyHandler = (event = {}, context = {}) => {
    plugin.requestStart?.();
    const request = {
      event,
      context,
      response: void 0,
      error: void 0,
      internal: plugin.internal ?? {}
    };
    return runRequest(request, [
      ...beforeMiddlewares
    ], lambdaHandler, [
      ...afterMiddlewares
    ], [
      ...onErrorMiddlewares
    ], plugin);
  };
  const middy2 = plugin.streamifyResponse ? awslambda.streamifyResponse(async (event, responseStream, context) => {
    const handlerResponse = await middyHandler(event, context);
    let handlerBody = handlerResponse;
    if (handlerResponse.statusCode) {
      handlerBody = handlerResponse.body ?? "";
      responseStream = awslambda.HttpResponseStream.from(responseStream, handlerResponse);
    }
    let handlerStream;
    if (handlerBody._readableState) {
      handlerStream = handlerBody;
    } else if (typeof handlerBody === "string") {
      function* iterator(input) {
        const size = 16384;
        let position = 0;
        const length = input.length;
        while (position < length) {
          yield input.substring(position, position + size);
          position += size;
        }
      }
      handlerStream = import_node_stream.Readable.from(iterator(handlerBody));
    }
    if (!handlerStream) {
      throw new Error("handler response not a ReadableStream");
    }
    await (0, import_promises.pipeline)(handlerStream, responseStream);
  }) : middyHandler;
  middy2.use = (middlewares) => {
    if (!Array.isArray(middlewares)) {
      middlewares = [
        middlewares
      ];
    }
    for (const middleware of middlewares) {
      const { before, after, onError } = middleware;
      if (!before && !after && !onError) {
        throw new Error('Middleware must be an object containing at least one key among "before", "after", "onError"');
      }
      if (before)
        middy2.before(before);
      if (after)
        middy2.after(after);
      if (onError)
        middy2.onError(onError);
    }
    return middy2;
  };
  middy2.before = (beforeMiddleware) => {
    beforeMiddlewares.push(beforeMiddleware);
    return middy2;
  };
  middy2.after = (afterMiddleware) => {
    afterMiddlewares.unshift(afterMiddleware);
    return middy2;
  };
  middy2.onError = (onErrorMiddleware) => {
    onErrorMiddlewares.unshift(onErrorMiddleware);
    return middy2;
  };
  middy2.handler = (replaceLambdaHandler) => {
    lambdaHandler = replaceLambdaHandler;
    return middy2;
  };
  return middy2;
};
var runRequest = async (request, beforeMiddlewares, lambdaHandler, afterMiddlewares, onErrorMiddlewares, plugin) => {
  let timeoutAbort;
  const timeoutEarly = plugin.timeoutEarly && request.context.getRemainingTimeInMillis;
  try {
    await runMiddlewares(request, beforeMiddlewares, plugin);
    if (typeof request.response === "undefined") {
      plugin.beforeHandler?.();
      const handlerAbort = new AbortController();
      if (timeoutEarly)
        timeoutAbort = new AbortController();
      request.response = await Promise.race([
        lambdaHandler(request.event, request.context, {
          signal: handlerAbort.signal
        }),
        timeoutEarly ? (0, import_promises2.setTimeout)(request.context.getRemainingTimeInMillis() - plugin.timeoutEarlyInMillis, void 0, {
          signal: timeoutAbort.signal
        }).then(() => {
          handlerAbort.abort();
          return plugin.timeoutEarlyResponse();
        }) : Promise.race([])
      ]);
      timeoutAbort?.abort();
      plugin.afterHandler?.();
      await runMiddlewares(request, afterMiddlewares, plugin);
    }
  } catch (e) {
    timeoutAbort?.abort();
    request.response = void 0;
    request.error = e;
    try {
      await runMiddlewares(request, onErrorMiddlewares, plugin);
    } catch (e2) {
      e2.originalError = request.error;
      request.error = e2;
      throw request.error;
    }
    if (typeof request.response === "undefined")
      throw request.error;
  } finally {
    await plugin.requestEnd?.(request);
  }
  return request.response;
};
var runMiddlewares = async (request, middlewares, plugin) => {
  for (const nextMiddleware of middlewares) {
    plugin.beforeMiddleware?.(nextMiddleware.name);
    const res = await nextMiddleware(request);
    plugin.afterMiddleware?.(nextMiddleware.name);
    if (typeof res !== "undefined") {
      request.response = res;
      return;
    }
  }
};
var core_default = middy;

// src/runtime.ts
var serviceName = "cdk-ecs-dns";
var tracer = new import_tracer.Tracer({
  serviceName
});
var logger = new import_logger.Logger({
  serviceName
});
function AppHandler(handler2) {
  return core_default(handler2).use((0, import_tracer.captureLambdaHandler)(tracer));
}

// src/database.ts
var EcsTaskIps = new import_electrodb.Entity({
  model: {
    service: serviceName,
    entity: "EcsTaskIps",
    version: "1"
  },
  attributes: {
    taskArn: {
      type: "string",
      required: true
    },
    publicIps: {
      type: "set",
      items: "string",
      required: true,
      default: []
    },
    expiresAt: {
      type: "number"
    }
  },
  indexes: {
    main: {
      pk: {
        field: "pk",
        composite: ["taskArn"]
      },
      sk: {
        field: "sk",
        composite: []
      }
    }
  }
});
var DnsRecord = new import_electrodb.Entity({
  model: {
    service: serviceName,
    entity: "DnsRecord",
    version: "1"
  },
  attributes: {
    hostedZoneId: {
      type: "string",
      required: true
    },
    name: {
      type: "string",
      required: true
    },
    version: {
      type: "number",
      required: true,
      default: 0
    },
    ips: {
      type: "set",
      items: "string",
      required: true,
      default: []
    }
  },
  indexes: {
    main: {
      pk: {
        field: "pk",
        composite: ["hostedZoneId"]
      },
      sk: {
        field: "sk",
        composite: ["name"]
      }
    }
  }
});
var database = new import_electrodb.Service({
  EcsTaskIps,
  DnsRecord
}, {
  table: process.env.TABLE,
  client: import_lib_dynamodb.DynamoDBDocumentClient.from(new import_client_dynamodb.DynamoDBClient({}), {
    marshallOptions: {
      removeUndefinedValues: true,
      convertEmptyValues: true
    }
  })
});
function getDnsRecordIps(dnsRecord) {
  return dnsRecord.ips ?? [];
}

// src/Route53Writer/runtime.ts
var import_client_route_53 = require("@aws-sdk/client-route-53");
var r53 = new import_client_route_53.Route53Client({});
async function upsertRecordSet(dnsRecord) {
  let ips = getDnsRecordIps(dnsRecord);
  tracer.putMetadata("ips", ips);
  if (ips.length > 100) {
    logger.warn(`Too many IPs. Mitigating the risk of exceeding the maximum recordset size by truncating ${ips.length} records to 100.`);
    ips = ips.slice(0, 100);
    tracer.putMetadata("ipsTruncated", ips);
  }
  logger.info(`Setting ${dnsRecord.name} to ${ips.join(", ")}`);
  await r53.send(
    new import_client_route_53.ChangeResourceRecordSetsCommand({
      HostedZoneId: dnsRecord.hostedZoneId,
      ChangeBatch: {
        Changes: [
          {
            Action: "UPSERT",
            ResourceRecordSet: {
              Type: "A",
              Name: dnsRecord.name,
              ResourceRecords: ips.map((ip) => ({ Value: ip })),
              TTL: 30
            }
          }
        ]
      }
    })
  );
}
async function deleteRecordSet(dnsRecord) {
  const recordSet = await getRecordSet(dnsRecord);
  if (!recordSet) {
    logger.info("Record not found in Route53", { record: dnsRecord });
    return;
  }
  await r53.send(
    new import_client_route_53.ChangeResourceRecordSetsCommand(
      {
        HostedZoneId: dnsRecord.hostedZoneId,
        ChangeBatch: {
          Changes: [{
            Action: "DELETE",
            ResourceRecordSet: recordSet
          }]
        }
      }
    )
  );
  logger.info("Deleted record from Route53", { record: dnsRecord });
}
async function getRecordSet(record) {
  const listResult = await r53.send(
    new import_client_route_53.ListResourceRecordSetsCommand({
      HostedZoneId: record.hostedZoneId,
      StartRecordName: record.name,
      StartRecordType: "A",
      MaxItems: 1
    })
  );
  const [recordSet] = listResult.ResourceRecordSets ?? [];
  if (!recordSet || recordSet.Name !== `${record.name}.` || recordSet.Type !== "A") {
    return;
  }
  return recordSet;
}

// src/Route53Writer/stream-handler.lambda.ts
var handler = AppHandler(async function(event) {
  logger.info("DynamoDBStreamEvent", { event });
  const [firstRecord] = event.Records;
  if (!firstRecord) {
    logger.info("No records in event");
    return;
  }
  logger.info(`Processing ${event.Records.length} records`);
  const firstRecordDate = firstRecord.dynamodb?.ApproximateCreationDateTime;
  const firstRecordAge = firstRecordDate ? Date.now() / 1e3 - firstRecordDate : void 0;
  tracer.putMetadata("firstRecordDate", firstRecordDate);
  tracer.putMetadata("firstRecordAge", firstRecordAge);
  tracer.putMetadata("sequenceNumber", firstRecord?.dynamodb?.SequenceNumber);
  const dnsRecordEvents = findLatestDnsRecordEvents(event);
  logger.info(`Processing ${dnsRecordEvents.length} dns records`);
  for (const dnsRecordEvent of dnsRecordEvents) {
    const subSegment = tracer.getSegment()?.addNewSubsegment("update-dns-record");
    subSegment && tracer.setSegment(subSegment);
    try {
      logger.info("Processing dns record event", { dnsRecordEvent });
      const {
        eventName,
        dnsRecord
      } = dnsRecordEvent;
      tracer.putAnnotation("hostedZoneId", dnsRecord.hostedZoneId);
      tracer.putAnnotation("recordName", dnsRecord.name);
      let ips = getDnsRecordIps(dnsRecord);
      if (eventName === "REMOVE" || ips.length === 0) {
        await deleteRecordSet(dnsRecord);
      } else {
        await upsertRecordSet(dnsRecord);
      }
      subSegment?.close();
    } catch (e) {
      logger.error("Failed to process dns record event", { e });
    } finally {
      subSegment && tracer.setSegment(subSegment.parent);
    }
  }
});
function findLatestDnsRecordEvents(event) {
  const map = /* @__PURE__ */ new Map();
  for (const record of event.Records.reverse()) {
    let itemImage = record.dynamodb?.NewImage ?? record.dynamodb?.OldImage;
    if (!itemImage) {
      logger.info("Skipping record without image", { record });
      continue;
    }
    const item = (0, import_util_dynamodb.unmarshall)(itemImage);
    const { data: dnsRecord } = database.entities.DnsRecord.parse({ Item: item });
    if (!dnsRecord) {
      logger.info("Skipping record image that does not parse to a DnsRecord", { item });
      continue;
    }
    const key = JSON.stringify({
      hostedZoneId: dnsRecord.hostedZoneId,
      name: dnsRecord.name
    });
    if (!map.has(key)) {
      logger.info("Selecting DnsRecord", { dnsRecord });
      map.set(key, {
        eventName: record.eventName,
        dnsRecord
      });
    } else {
      logger.info("Skipping duplicate DnsRecord", { dnsRecord });
    }
  }
  return [...map.values()];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
