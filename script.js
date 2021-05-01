"use strict";

let content = document.getElementById("content-container");
let hide = document.getElementById("hide");
let percent = content.style.marginBottom
content.style.marginBottom = "70px";
hide.style.display = "none";
setTimeout(wait, 2000);
function wait() {
  content.style.marginBottom = percent;
  hide.style.display = "";
}

let passed = false;
hide.addEventListener("animationend", animationEnded);
function animationEnded() { passed = true; }

let yPos = 0;
document.addEventListener("scroll", scroll)
function scroll() {
  yPos = window.scrollY;
  if (yPos > 600 && !passed) {
    passed = true;
    let array = ["h2", "h3", "h4", "hide"];
    for (let i = 0; i < array.length; i++) {
      let element = document.getElementById(array[i]);
      element.style.animation = "appear 0s";
    }
  }
}

if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  let mobile = document.getElementById("gem-mobile");
  let gem = document.getElementById("gem-container");
  mobile.style.display = "block";
  gem.style.display = "none";
}

let home = document.getElementById("home");
home.addEventListener("touchstart", scrollPhone);
home.addEventListener("click", scrollDesktop);

function scrollPhone() { recurse(); }

function scrollDesktop() { window.scrollTo({top: 0, behavior: "smooth"}); }

function recurse() {
  if (window.pageYOffset > 1) {
    window.pageYOffset;
    window.scrollTo({top: window.pageYOffset - 15});
    setTimeout(recurse, 1);
  }
}

let string = "Artist | Video-Editor<br>Programmer | Game Designer";
let h3 = document.getElementById("h3");

window.addEventListener("resize", resizeWindow);

resizeWindow();
function resizeWindow() {
  let value = document.getElementById("javascript-value");
  value = window.getComputedStyle(value);
  value = value.getPropertyValue("font-size");
  value = parseFloat(value);
  if (value == 1) {
    h3.innerHTML = string;
  } else {
    h3.innerHTML = string.replace("<br>", " | ");
  }
}
