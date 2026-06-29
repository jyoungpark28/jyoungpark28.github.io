---
layout: page
title: PCB Design for a Subcutaneously Implantable Wireless Pressure Acquisition System
description: Custom 3-layer PCB enabling charge amplification and Bluetooth telemetry from a biodegradable piezoelectric knee pressure sensor, implanted subcutaneously in a rabbit osteoarthritis model.
img: assets/img/prj_PCB1.png
importance: 2
category: Work
---


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/prj_PCB1.png" title="Schematic Diagram" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/prj_PCB2.png" title="PCB Layout" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Schematic Diagram (left) and PCB Layout (right). I engineered a custom printed circuit board (PCB) using EAGLE CAD to interface with the piezoelectric materials. The primary function of the circuit is to acquire and amplify the generated input charge, enabling wireless telemetry to an external receiver. To achieve this wireless data transmission, I programmed an nRF52840 Bluetooth System-on-Chip (SoC) utilizing SEGGER Embedded Studio.
</div>

<br>
Acquiring a usable signal from a piezoelectric pressure sensor operating inside a living joint requires solving a low-signal, low-power, low-noise problem within a footprint small enough to implant. The sensor output, on the order of millivolts and picocoulombs, needed to be amplified cleanly before wireless transmission, all running from a 3V coin battery with no opportunity for recharging or replacement after implantation.

I designed the complete circuit in EAGLE CAD, centered around an AD8605ARTZ operational amplifier selected for its 8 nV/√Hz input voltage noise, rail-to-rail output on a single 3V supply, and 1 mA typical supply current. These characteristics were critical for amplifying millivolt-level piezoelectric signals without burying them in noise, maximizing dynamic range on a constrained supply, and preserving battery life in a subcutaneous implant. A low-dropout regulator was included to protect the nRF52840 Bluetooth SoC from transient current spikes during wireless transmission, which can destabilize microcontroller operation on a coin cell supply.

The board uses a 3-layer architecture: the primary layer is largely a ground plane to minimize noise coupling and ensure signal integrity, the second layer carries input signal connections, and the third handles power distribution. The final footprint is 21.59 x 24.13 mm, sized to balance subcutaneous implantability with enough surface area for manual soldering to the programming pads used for Bluetooth firmware configuration via PC. This is a proof-of-concept form factor with clear headroom for further miniaturization in a production iteration.

Wireless firmware was written in C using SEGGER Embedded Studio for the nRF52840 SoC, managing data packaging and low-latency Bluetooth transmission to the external MATLAB acquisition application.
<br>

