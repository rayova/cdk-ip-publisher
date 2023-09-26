# replace this
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IpPublisher <a name="IpPublisher" id="@rayova/cdk-ecs-addresses.IpPublisher"></a>

#### Initializers <a name="Initializers" id="@rayova/cdk-ecs-addresses.IpPublisher.Initializer"></a>

```typescript
import { IpPublisher } from '@rayova/cdk-ecs-addresses'

new IpPublisher(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rayova/cdk-ecs-addresses.IpPublisher.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@rayova/cdk-ecs-addresses.IpPublisher.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@rayova/cdk-ecs-addresses.IpPublisher.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@rayova/cdk-ecs-addresses.IpPublisher.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rayova/cdk-ecs-addresses.IpPublisher.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@rayova/cdk-ecs-addresses.IpPublisher.publishEcsService">publishEcsService</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@rayova/cdk-ecs-addresses.IpPublisher.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `publishEcsService` <a name="publishEcsService" id="@rayova/cdk-ecs-addresses.IpPublisher.publishEcsService"></a>

```typescript
public publishEcsService(id: string, params: PublishEcsServiceParams): void
```

###### `id`<sup>Required</sup> <a name="id" id="@rayova/cdk-ecs-addresses.IpPublisher.publishEcsService.parameter.id"></a>

- *Type:* string

---

###### `params`<sup>Required</sup> <a name="params" id="@rayova/cdk-ecs-addresses.IpPublisher.publishEcsService.parameter.params"></a>

- *Type:* <a href="#@rayova/cdk-ecs-addresses.PublishEcsServiceParams">PublishEcsServiceParams</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rayova/cdk-ecs-addresses.IpPublisher.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@rayova/cdk-ecs-addresses.IpPublisher.isConstruct"></a>

```typescript
import { IpPublisher } from '@rayova/cdk-ecs-addresses'

IpPublisher.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@rayova/cdk-ecs-addresses.IpPublisher.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rayova/cdk-ecs-addresses.IpPublisher.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@rayova/cdk-ecs-addresses.IpPublisher.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### PublishEcsServiceParams <a name="PublishEcsServiceParams" id="@rayova/cdk-ecs-addresses.PublishEcsServiceParams"></a>

#### Initializer <a name="Initializer" id="@rayova/cdk-ecs-addresses.PublishEcsServiceParams.Initializer"></a>

```typescript
import { PublishEcsServiceParams } from '@rayova/cdk-ecs-addresses'

const publishEcsServiceParams: PublishEcsServiceParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rayova/cdk-ecs-addresses.PublishEcsServiceParams.property.hostedZone">hostedZone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | *No description.* |
| <code><a href="#@rayova/cdk-ecs-addresses.PublishEcsServiceParams.property.service">service</a></code> | <code>aws-cdk-lib.aws_ecs.BaseService</code> | *No description.* |
| <code><a href="#@rayova/cdk-ecs-addresses.PublishEcsServiceParams.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `hostedZone`<sup>Required</sup> <a name="hostedZone" id="@rayova/cdk-ecs-addresses.PublishEcsServiceParams.property.hostedZone"></a>

```typescript
public readonly hostedZone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

---

##### `service`<sup>Required</sup> <a name="service" id="@rayova/cdk-ecs-addresses.PublishEcsServiceParams.property.service"></a>

```typescript
public readonly service: BaseService;
```

- *Type:* aws-cdk-lib.aws_ecs.BaseService

---

##### `name`<sup>Optional</sup> <a name="name" id="@rayova/cdk-ecs-addresses.PublishEcsServiceParams.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---



