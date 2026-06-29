---
layout: page
title: Real-time Wireless Pressure Monitoring for an Implantable Knee Sensor
description: Custom firmware and MATLAB application enabling real-time wireless acquisition and calibration of in vivo pressure data from an implantable knee sensor.
img: assets/img/prj_Signal.gif
importance: 1
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


Monitoring joint load from an implanted sensor in a living animal requires solving two problems simultaneously: getting data off the implant reliably and converting raw sensor output into meaningful physical units in real time. This project addressed both.

On the embedded side, I wrote firmware in C for an nRF52840 Bluetooth SoC using SEGGER Embedded Studio, managing low-latency data packaging and wireless transmission from the implant to an external receiver. The firmware was designed to maintain stable Bluetooth connectivity during in vivo recording sessions while minimizing transmission latency to preserve the fidelity of dynamic pressure waveforms during joint loading.

On the receiving end, I developed a custom MATLAB application that processes the incoming digital stream and renders a live dynamic plot of joint pressure in real time. The sensor output had been pre-characterized against known external forces prior to implantation, with the resulting sensor output vs. force relationship following a linear regression with R² approaching ~99%. The MATLAB application applies this calibration function continuously, converting raw digital counts into physical pressure values on the fly so that joint loading can be interpreted directly during the recording session without post-processing.

The result was a complete wireless acquisition pipeline, from implanted sensor to calibrated pressure trace, that operated reliably across chronic in vivo recording sessions in a rabbit osteoarthritis model.


This technique was implemented to {% cite SciAdv2026 %}.
