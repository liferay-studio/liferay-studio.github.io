---
title: Portlet Toolbar Contributor
description: Liferay Portlet Toolbar Contributor Module
---

Adds **custom buttons or actions** to a portlet's toolbar (e.g., "Publish", "Share").

- Extend default portlet functionality (e.g., add "Export to PDF").
- Provide quick actions without modifying the original portlet.

### Implementation

#### Create the Module

```bash
blade create -t portlet-toolbar-contributor pdf-export-contributor
```

#### Add a Toolbar Button

```java
// pdf-export-contributor/src/main/java/com/example/pdfexport/PdfExportContributor.java
@Component(
    property = {
        "javax.portlet.name=" + MyPortletKeys.MY_PORTLET,  // Target portlet
        "mvc.command.name=/export/pdf"  // Action command
    },
    service = PortletToolbarContributor.class
)
public class PdfExportContributor implements PortletToolbarContributor {
    @Override
    public void contribute(
        PortletToolbarContext portletToolbarContext,
        HttpServletRequest httpServletRequest
    ) {
        portletToolbarContext.addButton(
            "export-pdf",  // Button ID
            "Export PDF",  // Label
            "download",    // Lexicon icon
            "javascript:exportToPdf()"  // JS action
        );
    }
}
```

#### Add JavaScript Logic

```javascript
// In your portlet's JS file
function exportToPdf() {
  Liferay.Util.fetch("/o/pdf-export-contributor/export/pdf")
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      window.open(url);
    });
}
```

### Use Cases

- **Document Export**: Export portlet data as PDF/CSV.
- **Custom Actions**: "Share on Social Media" button.
