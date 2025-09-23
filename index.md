---
layout: single
author_profile: true
title: "Mechanical and Aerospace Engineer — Satellite Design, Manufacturing, and Systems Engineering"
classes: full
excerpt: "Hands-on engineer: Delivering and manufacturing validated designs for aerospace systems. V10-ProjectsChanges"
header:
  overlay_color: "#0b1020"
  overlay_filter: "0.3"
  actions:
    - label: "Download Resume (PDF)"
      url: /files/MichaelMaddenAerospaceResume.pdf
      new_window: true
      btn_class: "btn--primary"
---

## Featured Project
{% assign featured = site.projects | where: "featured", true | slice: 1 %}
{% for p in featured %}
<div class="archive__item">
	<div class="archive__item-teaser">
		<a href="{{ p.url }}">
			<img src="{{ p.header.teaser | default: site.logo }}" alt="{{ p.title }} teaser" />
		</a>
	</div>
	<h3 class="archive__item-title">
		<a href="{{ p.url }}">{{ p.title }}</a>
	</h3>
	<p class="archive__item-excerpt">{{ p.excerpt }}</p>
</div>
{% endfor %}
