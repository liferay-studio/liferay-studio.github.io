---
title: Simulation Panel Entry
description: Liferay Simulation Panel Entry Module
---

Adds **custom device profiles** to Liferay's Device Simulation panel (used for responsive testing).

- Test how pages render on custom devices (e.g., kiosks, IoT screens).
- Preview themes for specific screen sizes.

### Implementation

#### Create the Module

```bash
blade create -t simulation-panel-entry kiosk-device
```

#### Define the Device Profile

```java
// kiosk-device/src/main/java/com/example/kiosk/KioskSimulationPanelEntry.java
@Component(property = "panel.category.key=simulation")
public class KioskSimulationPanelEntry implements SimulationPanelEntry {
    @Override
    public String getLabel() {
        return "Kiosk Mode";
    }

    @Override
    public Map<String, Object> getSimulationData() {
        return Map.of(
            "screenSize", Map.of("width", 1080, "height", 1920),
            "touch", false,
            "os", "kioskOS"
        );
    }
}
```

### Use Cases

- **Digital Signage**: Test full-screen kiosk layouts.
- **Custom Hardware**: Preview for unusual resolutions.
