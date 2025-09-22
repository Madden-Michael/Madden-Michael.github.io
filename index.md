---
layout: single
author_profile: true
title: "Mechanical and Aerospace Engineer — Satellite Design, Manufacturing, and Systems Engineering"
classes: full
excerpt: "Hands-on engineer: Delivering and manufacturing validated designs for aerospace systems. V9-LeftBarBio"
---

{% include button url="/files/MichaelMaddenAerospaceResume.pdf" label="Download Resume (PDF)" class="btn--primary" icon="fas fa-file-pdf" %}

## Featured Projects
{% assign featured = site.projects | where: "featured", true | slice: 3 %}
{% for p in featured %}
- [{{ p.title }}]({{ p.url }}) — {{ p.teaser_line }}
{% endfor %}
