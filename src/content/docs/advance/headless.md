---
title: Liferay Headless API
description: Liferay Headless API
---

Liferay's Headless APIs provide a way to interact with Liferay DXP's functionality without being tied to its traditional portal interface. These RESTful APIs follow modern web standards and allow developers to build:

- Mobile applications
- Progressive Web Apps (PWAs)
- Single Page Applications (SPAs)
- Microservices architectures
- IoT integrations
- Third-party system integrations

```mermaid
graph TD
    A[Client Applications] -->|HTTP Requests| B[Liferay Headless APIs]
    B --> C[Liferay DXP Core Services]
    C --> D[Database/Persistence]
```

## Types of Headless Solutions in Liferay

### 1. Headless Delivery APIs

```mermaid
pie
    title Headless Delivery APIs
    "Structured Content" : 35
    "Documents & Media" : 25
    "Knowledge Base" : 15
    "Blogs" : 15
    "Web Content" : 10
```

- **Web Content Management**: CRUD operations for web content articles, structures, and templates
- **Documents and Media**: Manage and retrieve documents, folders, and file entries
- **Blogs**: Create, read, update blog posts and handle comments
- **Knowledge Base**: Manage knowledge base articles and folders

### 2. Headless Admin APIs

```mermaid
classDiagram
    class HeadlessAdminAPIs {
        +UserManagement
        +RoleManagement
        +SiteManagement
        +OrganizationManagement
        +AccountManagement
    }
```

- User and role management
- Site and organization administration
- Account management for B2B scenarios
- Permission checking and assignment

### 3. Headless Commerce APIs

```mermaid
flowchart LR
    E[Products] --> F[Catalogs]
    E --> G[Price Lists]
    E --> H[Discounts]
    F --> I[Categories]
    G --> J[Channels]
```

- Product management
- Catalog operations
- Price lists and discounts
- Order processing
- Inventory management

### 4. Headless Workflow APIs

```mermaid
sequenceDiagram
    Client->>+API: Submit Content for Review
    API->>+WorkflowEngine: Start Workflow
    WorkflowEngine-->>-API: Workflow Status
    API-->>-Client: Approval Status
```

- Submit content for review
- Check workflow status
- Handle workflow tasks
- Manage workflow definitions

## Key Technical Features

### 1. RESTful Architecture

```mermaid
graph LR
    GET-->Retrieve
    POST-->Create
    PUT-->Update
    PATCH-->PartialUpdate
    DELETE-->Remove
```

- Standard HTTP methods (GET, POST, PUT, PATCH, DELETE)
- Resource-oriented URLs
- JSON payloads by default

### 2. Authentication Options

```mermaid
pie
    title Authentication Methods
    "OAuth2" : 60
    "Basic Auth" : 30
    "Token Based" : 10
```

- OAuth2 (recommended for production)
- Basic Authentication (for development/testing)
- Custom token-based authentication

### 3. Pagination and Filtering

```mermaid
flowchart TD
    A[Request] --> B[pageSize]
    A --> C[page]
    A --> D[filter]
    A --> E[sort]
    B --> F[Control result count]
    C --> G[Page number]
    D --> H[Field filtering]
    E --> I[Sort order]
```

- `pageSize` and `page` parameters
- Field filtering with `filter` parameter
- Sorting with `sort` parameter

## Developer Workflow with Headless APIs

### 1. API Exploration

```mermaid
journey
    title API Exploration Process
    section Discover
      Visit API Explorer: 5: Developer
      Browse Endpoints: 5: Developer
    section Test
      Make Sample Calls: 5: Developer
      Review Responses: 5: Developer
    section Implement
      Integrate with App: 5: Developer
```

1. Use Liferay's built-in API Explorer (`/o/api`)
2. Review OpenAPI (Swagger) documentation
3. Test endpoints directly from the browser

### 2. Typical Integration Pattern

```mermaid
sequenceDiagram
    Client->>Liferay: GET /o/headless-delivery/v1.0/sites/{siteId}/blog-postings
    Liferay->>Database: Query blog posts
    Database-->>Liferay: Return data
    Liferay-->>Client: Return JSON response
    Client->>Liferay: POST /o/headless-delivery/v1.0/blog-postings
    Liferay->>Workflow: Submit for approval
    Workflow-->>Liferay: Status update
    Liferay-->>Client: Return created entity
```

## Best Practices for Liferay Developers

1. **Use DTOs (Data Transfer Objects)**: Always work with the provided DTOs rather than internal Liferay models
2. **Handle Permissions**: Check scoped permissions before operations
3. **Implement Caching**: Cache frequently accessed data at client side
4. **Error Handling**: Properly handle Liferay-specific error codes
5. **Batch Operations**: Use batch endpoints for bulk operations

## Advanced Features

### 1. GraphQL Support

```mermaid
graph TD
    G[GraphQL Client] -->|Query| H[Liferay GraphQL Endpoint]
    H --> I[Resolve Data]
    I --> J[Return Combined Result]
```

- Single endpoint for complex queries
- Reduced over-fetching of data
- Type-safe operations

### 2. Webhooks

```mermaid
sequenceDiagram
    participant C as Client App
    participant L as Liferay
    C->>L: Register Webhook URL
    L->>L: Monitor Events
    L->>C: POST Event Data
```

- Subscribe to system events
- Receive real-time notifications
- Implement event-driven architectures

## Versioning Strategy

Liferay maintains API versioning through the URL path:

```
/o/[api-name]/v[version-number]/[resource-path]
```

Example:

```
/o/headless-delivery/v1.0/sites/20121/blog-postings
```

## Development Tools

1. **Liferay API Explorer**: Built-in interactive documentation
2. **Postman**: API testing and collection management
3. **OpenAPI Generator**: Client SDK generation
4. **Liferay Workspace**: For custom API extensions

## Custom Headless APIs

Developers can create custom headless APIs using:

- **JAX-RS** annotations
- **OpenAPI** specifications
- **GraphQL** extensions

```mermaid
classDiagram
    class CustomEndpoint {
        +@GET
        +@Path("/my-resource")
        +@Produces("application/json")
        getResource() : MyDTO
    }
```

## Conclusion

This comprehensive approach to Liferay Headless APIs provides developers with the flexibility to build modern, decoupled applications while leveraging Liferay's robust content and user management capabilities.
