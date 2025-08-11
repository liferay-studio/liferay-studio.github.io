---
title: Service Builder
description: Liferay Service Builder Module
---

Liferay’s **code generator** for database-driven applications (creates `*LocalService` and `*ServiceImpl`).

- Automate CRUD operations for custom tables.
- Handle SQL/JPA boilerplate.

### Implementation

#### Create the Module

```bash
blade create -t service-builder bookstore
```

#### Define Entities in `service.xml`

```xml
<!-- bookstore/service.xml -->
<entity name="Book" local-service="true">
    <column name="bookId" type="long" primary="true" />
    <column name="title" type="String" />
    <column name="author" type="String" />
</entity>
```

#### Build Services

Run:

```bash
blade gw buildService
```

This generates:

- `BookLocalService` (interface).
- `BookLocalServiceImpl` (your custom logic).

#### Use the Service

```java
// In a portlet or another module
@Reference
private BookLocalService _bookLocalService;

public void addBook(String title, String author) {
    Book book = _bookLocalService.createBook(0L);
    book.setTitle(title);
    book.setAuthor(author);
    _bookLocalService.addBook(book);
}
```

### Use Cases

- **Custom Tables**: Store application-specific data (e.g., "Book", "Order").
- **Legacy Data Migration**: Map external databases to Liferay.
