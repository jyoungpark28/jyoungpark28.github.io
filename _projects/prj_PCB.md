---
layout: page
title: PCB Citcuit Design
description: Bluetooth/Amplifier/LDO/Voltage Divider
img: assets/img/prj_PCB1.png
importance: 1
category: Hardware Prototyping
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
The custom PCB utilizes a 3-layer architecture to maximize the effective ground area and ensure efficient power distribution, both of which are critical for maintaining signal integrity and stable wireless transmission. While implementing this multi-layer design, I carefully optimized the board's footprint for miniaturization. The final layout successfully balances a highly compact size with just enough surface area to allow for manual soldering to the programming pads for Bluetooth firmware configuration via PC.
<br>

