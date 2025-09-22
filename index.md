---
layout: splash
author_profile: false
title: "Mechanical and Aerospace Engineer — Satellite Design, Manufacturing, and Systems Engineering"
excerpt: "Hands-on engineer: Delivering and manufacturing validated designs for aerospace systems. V5"
header:
  overlay_color: "#0b1020"
  overlay_filter: "0.3"
  actions:
    - label: "Download Resume (PDF)"
      url: /files/MichaelMaddenAerospaceResume.pdf
      new_window: true
      btn_class: "btn--primary"
---

### Featured Projects
{% assign featured = site.projects | where: "featured", true | slice: 3 %}
{% for p in featured %}
- [{{ p.title }}]({{ p.url }}) — {{ p.teaser_line }}
{% endfor %}
