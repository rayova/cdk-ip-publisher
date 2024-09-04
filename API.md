# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IpPublisher <a name="IpPublisher" id="@rayova/cdk-ip-publisher.IpPublisher"></a>

#### Initializers <a name="Initializers" id="@rayova/cdk-ip-publisher.IpPublisher.Initializer"></a>

```typescript
import { IpPublisher } from '@rayova/cdk-ip-publisher'

new IpPublisher(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rayova/cdk-ip-publisher.IpPublisher.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@rayova/cdk-ip-publisher.IpPublisher.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@rayova/cdk-ip-publisher.IpPublisher.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@rayova/cdk-ip-publisher.IpPublisher.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rayova/cdk-ip-publisher.IpPublisher.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@rayova/cdk-ip-publisher.IpPublisher.publishEcsService">publishEcsService</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@rayova/cdk-ip-publisher.IpPublisher.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `publishEcsService` <a name="publishEcsService" id="@rayova/cdk-ip-publisher.IpPublisher.publishEcsService"></a>

```typescript
public publishEcsService(id: string, params: PublishEcsServiceParams): void
```

###### `id`<sup>Required</sup> <a name="id" id="@rayova/cdk-ip-publisher.IpPublisher.publishEcsService.parameter.id"></a>

- *Type:* string

---

###### `params`<sup>Required</sup> <a name="params" id="@rayova/cdk-ip-publisher.IpPublisher.publishEcsService.parameter.params"></a>

- *Type:* <a href="#@rayova/cdk-ip-publisher.PublishEcsServiceParams">PublishEcsServiceParams</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rayova/cdk-ip-publisher.IpPublisher.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@rayova/cdk-ip-publisher.IpPublisher.isConstruct"></a>

```typescript
import { IpPublisher } from '@rayova/cdk-ip-publisher'

IpPublisher.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@rayova/cdk-ip-publisher.IpPublisher.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rayova/cdk-ip-publisher.IpPublisher.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@rayova/cdk-ip-publisher.IpPublisher.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### PublishEcsServiceParams <a name="PublishEcsServiceParams" id="@rayova/cdk-ip-publisher.PublishEcsServiceParams"></a>

#### Initializer <a name="Initializer" id="@rayova/cdk-ip-publisher.PublishEcsServiceParams.Initializer"></a>

```typescript
import { PublishEcsServiceParams } from '@rayova/cdk-ip-publisher'

const publishEcsServiceParams: PublishEcsServiceParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rayova/cdk-ip-publisher.PublishEcsServiceParams.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | *No description.* |
| <code><a href="#@rayova/cdk-ip-publisher.PublishEcsServiceParams.property.hostedZone">hostedZone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | *No description.* |
| <code><a href="#@rayova/cdk-ip-publisher.PublishEcsServiceParams.property.service">service</a></code> | <code>aws-cdk-lib.aws_ecs.IService</code> | *No description.* |
| <code><a href="#@rayova/cdk-ip-publisher.PublishEcsServiceParams.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@rayova/cdk-ip-publisher.PublishEcsServiceParams.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster

---

##### `hostedZone`<sup>Required</sup> <a name="hostedZone" id="@rayova/cdk-ip-publisher.PublishEcsServiceParams.property.hostedZone"></a>

```typescript
public readonly hostedZone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

---

##### `service`<sup>Required</sup> <a name="service" id="@rayova/cdk-ip-publisher.PublishEcsServiceParams.property.service"></a>

```typescript
public readonly service: IService;
```

- *Type:* aws-cdk-lib.aws_ecs.IService

---

##### `name`<sup>Optional</sup> <a name="name" id="@rayova/cdk-ip-publisher.PublishEcsServiceParams.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---



