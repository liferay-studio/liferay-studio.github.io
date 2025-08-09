---
title: Form Field
description: Liferay Form Field Module
---

A **custom field type** for Liferay Forms (e.g., rating stars, location picker).

- Extend default form fields (text, checkbox, etc.).
- Reuse complex inputs (e.g., color picker).

### Implementation

#### Create the Field

```bash
blade create -t form-field rating-stars
```

#### Define the Field UI (React)

```javascript
// rating-stars/src/main/resources/META-INF/resources/rating/rating.es.js
export default function Rating({ field, onChange }) {
  const [value, setValue] = useState(0);
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          onClick={() => {
            setValue(star);
            onChange(star);
          }}
        >
          {star <= value ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}
```

#### Register the Field

```json
// rating-stars/src/main/resources/META-INF/resources/configuration.json
{
  "fieldTypes": ["rating"],
  "systemJSModules": ["Rating.es"]
}
```

### Use Cases

- **Surveys**: Star ratings for products.
- **Custom Inputs**: Geolocation picker for event forms.
