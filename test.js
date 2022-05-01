"use strict"

let css_head = document.getElementById("css_head");
let element = document.getElementById("inject");

let css_inject = `
<meta property = "og:type" content = "website">
<meta property = "og:url" content = "https://www.camden-pettijohn.com/">
<meta property = "og:title" content = "Camden Pettijohn">
<meta property = "og:description" content = "Everything about Camden Pettijohn!">
<meta property = "og:image" content = "https://www.camden-pettijohn.com/static/General/Display.png">
<meta charset = "utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href = "static/General/reset.css" rel = "stylesheet" type = "text/css"/>
<link rel = "preconnect" href = "https://fonts.googleapis.com">
<link rel = "preconnect" href = "https://fonts.gstatic.com" crossorigin>
<link href = "https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel = "stylesheet">`;

css_inject += document.head.innerHTML;
document.head.innerHTML = css_inject;
