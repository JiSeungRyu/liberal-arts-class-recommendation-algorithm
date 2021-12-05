---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<html>
  <head>
    <meta charset="utf-8">
    <title>{{ page.title }}</title>
  </head>
  <body>
    <h1>{{ "LACRAS" }}</h1>
    LACRAS Mission Statement<br>
    The LACRAS project develops open-source software.
    Create a recommended site for Liberal Arts only for Sejong University, which is convenient and accurate. We hope the open source we develop will help freshmen or enrolled students.
  </body>
</html>


<h1>Latest News</h1>

<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    </li>
  {% endfor %}
</ul>
