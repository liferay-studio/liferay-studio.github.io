---
title: REST Module
description: Liferay REST Module Module
---

Exposes **custom REST APIs** using JAX-RS (Java API for RESTful Web Services).

- Allow external systems to interact with Liferay (e.g., mobile apps).
- Build headless applications.

### Implementation

#### Create the Module

```bash
blade create -t rest book-rest-api
```

#### Define a REST Endpoint

```java
// book-rest-api/src/main/java/com/example/book/rest/BookResource.java
@Path("/books")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class BookResource {
    @GET
    public List<Book> getBooks() {
        return BookService.getBooks();  // Your service logic
    }

    @POST
    public Response addBook(Book book) {
        BookService.addBook(book);
        return Response.ok().build();
    }
}
```

#### Test the API

```bash
curl http://localhost:8080/o/book-rest-api/books
```

### Use Cases

- **Mobile Apps**: Fetch Liferay data via REST.
- **Third-Party Integrations**: Sync data with CRM/ERP systems.
