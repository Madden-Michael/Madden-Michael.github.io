---
title: "Car Volume Knob — CAN Bus, 3D Print, and Arduino"
excerpt: "Personal project to fix a daily annoyance: added an external, reliable volume control by interfacing with the vehicle's CAN bus, using 3D printing, Arduino firmware, and custom electronics. The system applies real-time embedded communication principles relevant to flight software."
teaser_line: "CAN bus + Arduino + 3D printing to fix car audio UX."
tags: [arduino, CAN bus, 3d printing, electronics, embedded, flight software]
categories: [personal]
featured: false
order: 25
header:
  teaser: /assets/images/teasers/VolumeKnob.jpg
---

### Problem
The car’s factory volume controls were unreliable and awkward to use while driving. I needed a robust, low-latency control surface that could interface directly with the vehicle's internal network, a challenge similar to handling communication buses in flight software systems.

### Solution
- **CAN Bus Integration:** Interfaced with the car's Controller Area Network (CAN bus) to send and receive deterministic volume commands.
- **Embedded Firmware:** Wrote Arduino C++ firmware to process real-time input and handle hardware-level messaging. 
- **Hardware Design:** Designed and 3D‑printed a compact, ergonomic housing and knob for the control interface.
- **Electronics:** Built and soldered a custom perfboard circuit, ensuring clean wiring and mounting that could withstand the automotive environment.

![CAD Design Placeholder](/assets/images/placeholders/cad_placeholder.jpg)

### Result
An elegant, highly reliable control that significantly improved daily UX. By treating the project as a critical embedded system with real-time CAN bus messaging, it demonstrated practical parallels to the strict timing and hardware interfacing required in aerospace engineering and flight software.

![Car Installation Placeholder](/assets/images/placeholders/car_install_placeholder.jpg)
