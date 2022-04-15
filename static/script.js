"use strict";

let debug = false;

let original = "Game Designer | Programmer | Artist"
let left = document.getElementById("gemleft");
let right = document.getElementById("gemright");
let camden = document.getElementById("camden");
let name = document.getElementById("name");
let about = document.getElementById("about");
let social = document.getElementById("socials");
let middle = document.getElementById("middle");
let inside = document.getElementById("inside");

let desktop = true;
if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    desktop = false;
} else {
    left.style.display = "block";
    right.style.display = "block";
}

if (!debug) {
    setTimeout(camden_wait, 300);
    function camden_wait() {
        camden.style.animation = "appear 1s linear";
        camden.style.visibility = "visible";
    }
    setTimeout(name_wait, 900);
    function name_wait() {
        name.style.animation = "appear 1s linear";
        name.style.visibility = "visible";
    }
    setTimeout(about_wait, 1500);
    function about_wait() {
        about.style.animation = "appear 1s linear";
        about.style.visibility = "visible";
    }
    setTimeout(social_wait, 2100);
    function social_wait() {
        social.style.animation = "appear 1s linear";
        social.style.visibility = "visible";
    }
    setTimeout(middle_wait, 2700);
    function middle_wait() {
        middle.style.animation = "appear 1s linear";
        middle.style.visibility = "visible";
        inside.style.animation = "appear 1s linear";
        inside.style.visibility = "visible";
    }
} else {
    camden.style.visibility = "visible";
    name.style.visibility = "visible";
    about.style.visibility = "visible";
    social.style.visibility = "visible";
    middle.style.visibility = "visible";
    inside.style.visibility = "visible";
}

function gemleft_hide() { gemleft.style.display = "none"; }
function gemright_hide() { gemright.style.display = "none"; }

function resize_window() {
    let visible = window.getComputedStyle(gemleft).display;
    let width = document.documentElement.clientWidth;
    if (width <= 492) {
        about.innerHTML = "Game Designer<br>Programmer<br>Artist";
    } else if (width <= 610) {
        about.innerHTML = "Game Designer | Programmer<br>Artist";
    } else {
        about.innerHTML = original;
    }
    if (desktop) {
        if (visible == "block" && width <= 1220) {
            gemleft.style.animation = "disappear 1s linear";
            setTimeout(gemleft_hide, 999);
            gemright.style.animation = "disappear 1s linear";
            setTimeout(gemright_hide, 999);
        } else if (visible == "none" && width > 1220) {
            gemleft.style.animation = "appear 1s linear";
            gemleft.style.display = "block";
            gemright.style.animation = "appear 1s linear";
            gemright.style.display = "block";
        }
    }
}

window.addEventListener("resize", resize_window);

resize_window();
