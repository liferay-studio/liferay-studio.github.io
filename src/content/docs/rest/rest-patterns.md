---
title: Liferay REST Patterns
description: Liferay REST Patterns
---

Liferay REST modules are OSGi-based components that allow developers to create custom RESTful endpoints within the Liferay platform. These modules follow JAX-RS standards while integrating seamlessly with Liferay's security and dependency injection systems.

```mermaid
graph TD
    A[REST Module] --> B[OSGi Component]
    A --> C[JAX-RS Implementation]
    A --> D[Liferay Integration]
    D --> E[Security]
    D --> F[Service Builder]
    D --> G[DTOs]
```

## Types of REST Modules in Liferay

### 1. Basic Resource Modules

The simplest form of REST modules that expose standard CRUD operations.

```mermaid
classDiagram
    class BasicResourceModule {
        +@Path("/basic")
        +@GET getItems()
        +@POST createItem()
        +@PUT updateItem()
        +@DELETE removeItem()
    }
```

### 2. Headless Delivery Modules

Extensions of Liferay's headless delivery system for custom content types.

```mermaid
graph LR
    H[Headless Delivery Module] --> A[Content]
    H --> B[Documents]
    H --> C[Custom Types]
    H --> D[Structured Content]
```

### 3. Admin REST Modules

For administrative operations that require elevated permissions.

```mermaid
pie
    title Admin Module Endpoints
    "User Management" : 40
    "Role Management" : 30
    "Site Configuration" : 20
    "System Settings" : 10
```

### 4. Composite Resource Modules

Modules that aggregate multiple resources or services into single endpoints.

```mermaid
flowchart TB
    subgraph CompositeModule
        A[User Data] --> C[Endpoint]
        B[Profile Data] --> C
        D[Preferences] --> C
    end
```

### 5. Proxy REST Modules

Modules that act as intermediaries between Liferay and external systems.

```mermaid
sequenceDiagram
    Client->>ProxyModule: Request
    ProxyModule->>ExternalSystem: Forward
    ExternalSystem->>ProxyModule: Response
    ProxyModule->>Client: Return
```

## REST Module Structure

### Core Components

```mermaid
graph TD
    Module --> ApplicationClass
    Module --> ResourceClasses
    Module --> ExceptionMappers
    Module --> Filters

    ApplicationClass -->|Registers| ResourceClasses
    ApplicationClass -->|Configures| Filters
```

### Annotations Overview

```mermaid
pie
    title Common REST Module Annotations
    "@Path" : 30
    "@GET/POST/PUT/DELETE" : 25
    "@Produces/@Consumes" : 20
    "@Provider" : 15
    "Liferay-specific" : 10
```

## REST Module Implementation Patterns

### 1. Resource-Oriented Pattern

```mermaid
graph LR
    Resources --> Users
    Resources --> Documents
    Resources --> Blogs

    %% Each resource has full CRUD operations
    Users -->|GET| ReadUser
    Users -->|POST| CreateUser
    Documents -->|PUT| UpdateDocument
    Blogs -->|DELETE| RemoveBlog
```

### 2. Controller Pattern

```mermaid
flowchart TB
    Controller --> Service1
    Controller --> Service2
    Controller --> UnifiedResponse

    Service1 -->|Business Logic| Database
    Service2 -->|Business Logic| ExternalSystem
```

### 3. Microservice Gateway Pattern

```mermaid
graph TD
    GatewayModule --> ServiceA
    GatewayModule --> ServiceB
    GatewayModule --> ServiceC

    ServiceA -->|Data| MicroserviceA
    ServiceB -->|Data| MicroserviceB
    ServiceC -->|Data| MicroserviceC
```

## Key Characteristics of Liferay REST Modules

1. **OSGi-based**: Deployed as modular components
2. **JAX-RS Compliant**: Standard implementation
3. **Liferay Integrated**: Security, DTOs, exceptions
4. **Versionable**: Support for API versioning
5. **Documentable**: OpenAPI/Swagger support

```mermaid
graph LR
    Characteristics --> Scalability
    Characteristics --> Security
    Characteristics --> Maintainability
    Characteristics --> StandardCompliance
```
