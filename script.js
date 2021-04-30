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

let phone = false;
// Remove Pico-8 if on a mobile device
if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  let mobile = document.getElementById("gem-mobile");
  let gem = document.getElementById("gem-container");
  mobile.style.display = "block";
  gem.style.display = "none";
  phone = true;
}

let home = document.getElementById("home");
home.addEventListener("click", scrollHome);
function scrollHome() {
  if (!phone) {
    window.scrollTo({top: 0, behavior: "smooth"});
  } else {
    recurse();
  }
}

// Scroll fails on phones, this solution "fixes" it
function recurse() {
  if (window.pageYOffset > 5) {
    window.pageYOffset;
    window.scrollTo({top: window.pageYOffset - 15});
    setTimeout(recurse, 1);
  }
}
