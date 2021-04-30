"use strict";

let content = document.getElementById("content-container");
let hide = document.getElementById("hide");
let percent = content.style.marginBottom
content.style.marginBottom = "0px";
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
      element.style.animation = "javascript 1s";
    }
  }
}

let home = document.getElementById("home");
home.addEventListener("click", scrollHome);
function scrollHome() { window.scrollTo({top: 0, behavior: "smooth"}); }

// Remove Pico-8 if on a mobile device
if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  let mobile = document.getElementById("gem-mobile");
  let gem = document.getElementById("gem-container");
  mobile.style.display = "block";
  gem.style.display = "none";
}
