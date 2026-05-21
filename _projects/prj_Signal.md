---
layout: page
title: Real-time Knee Pressure Signal
description: Real-time Monitoring Using Matlab
img: assets/img/prj_Signal.gif
importance: 3
category: Work
related_publications: true
---



<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/prj_Signal.gif" title="Signal" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Wireless Bluetooth data from the in vivo rabbit implant was captured and visualized in real-time using a custom MATLAB application.
</div>


To enable real-time physiological monitoring of an implantable knee sensor, I developed the complete end-to-end software architecture for a wireless data aquisition system. This involved writing the low-level embedded firmware in C for an nRF52840 Bluetooth System-on-Chip (SoC) using SEGGER Embedded Studio to manage low-latency data packaging and wireless transmission. On the receiving end, I engineered a custom data acquisition application in MATLAB, building a graphical user interface (GUI) that processes the incoming digital stream, executes real-time calibration algorithms to convert raw electronic signals into physical pressure metrics, and visualizes the results on a live, dynamic plot.


This technique was implemented to {% cite SciAdv2026 %}.
