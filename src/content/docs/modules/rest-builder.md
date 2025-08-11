---
title: REST Builder
description: Liferay REST Builder Module
---

Generates REST APIs **automatically** from an OpenAPI (Swagger) YAML file.

- Design-first API development (define schema before coding).
- Auto-generate CRUD endpoints for entities.

### Implementation

#### Create the Module

```bash
blade create -t rest-builder library-api
```

#### Define the OpenAPI Spec

```yaml
# library-api/src/main/resources/openapi.yaml
paths:
  /books:
    get:
      summary: Get all books
      responses:
        200:
          description: List of books
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Book"
components:
  schemas:
    Book:
      type: object
      properties:
        id:
          type: integer
        title:
          type: string
```

#### Build and Deploy

Liferay auto-generates endpoints at:  
`http://localhost:8080/o/library-api/books`

### Use Cases

- **Rapid Prototyping**: Quickly scaffold APIs.
- **Standardized APIs**: Enforce OpenAPI compliance.
