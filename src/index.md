---
title: Hello World
layout: "base.njk"
---

Hello Jamstack family!

{% for post in collections.posts %}

- [{{ post.data.title}}]({{ post.url }})
  {% endfor %}
