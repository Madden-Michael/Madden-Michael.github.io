---
layout: home
author_profile: true
title: "Michael Madden — Mechanical/Aerospace Engineer"
classes: full
excerpt: "Hands-on engineer: Delivering and manufacturing validated designs for aerospace systems."
header:
  overlay_color: "#0b1020"
  overlay_filter: "0.3"
  actions:
    - label: "Download Resume (PDF)"
      url: /files/MichaelMaddenAerospaceResume.pdf
      new_window: true
      btn_class: "btn--primary"
---

## Featured Projects

{% assign featured = site.projects | where: "featured", true %}

<div class="entries-grid">
  {% for post in featured %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

## All Projects

<div class="entries-grid">
  {% for post in site.projects %}
    {% unless post.featured %}
      {% include archive-single.html type="grid" %}
    {% endunless %}
  {% endfor %}
</div>
