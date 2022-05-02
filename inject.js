"use strict";

let middle = document.getElementById("middle");

let path = window.location.pathname;
let page = path.split("/").pop();
page = page.replace(".html", "");

let link = "";
let title = "";
let dates = "";
let status = "";
let roles = "";
let teammates = "";
let description = "";
let itch_number = "";
let itch_description = "";

switch(page) {
    case "insatiable":
        title = "INSATIABLE";
        link = "https://camden-png.itch.io/insatiable";
        dates = "4/1/22 - 4/3/22<br>(Mini Jam #103)";
        status = "Released";
        roles = "Game Designer, Scripter, Artist";
        teammates = "Grant (SFX), Vi (Playtesting & Enemy Ideas)";
        description = "Allowen the vampire desires a treat after his century slumber... but, without humans, will he ever satisfy his ravenous hunger?"
        itch_number = "1469886";
        itch_description = "Insatiable by Camden"; //not really needed - probably remove
        break;
    case "flowers":
        title = "WHERE FLOWERS BLOOM";
        link = "https://camden-png.itch.io/where-flowers-bloom";
        dates = "3/1/22 - Current";
        status = "Alpha Released";
        roles = "Game Designer, Scripter, Artist";
        teammates = "Grant (SFX), Athena (Music)";
        description = "pause reality to forge your path forward or let time pass by to find salvation from the blood rain..."
        itch_number = "1498627";
        itch_description = "Where Flowers Bloom by Camden";
        break;
    case "oops":
        title = "OOPS! ALL BARDS";
        dates = "Internship from 1/1/22 - 4/30/22";
        status = "In Development at UC Davis";
        roles = "Game Designer, Level Designer, Scripter, Artist";
        teammates = "Professor Josh McCoy (Scripter/A.I./Planning), Kyle (Designer/Narrative/Scripter), Arunpreet (Designer/Narrative/Scripter)"
        description = "OOPS! Every party member decided to be a bard in this advanced AI-filled role-playing game. Form your party and engage in competitive gigs full of music, theater, poetry, and much more!"
        break;
    case "moral":
        title = "MORAL A.I.";
        link = "https://camden-png.itch.io/moral-ai";
        dates = "1/1/22 - Current";
        status = "Alpha Released";
        roles = "Game Designer, Scripter, Artist";
        teammates = "Grant (SFX), Athena (Music)";
        description = 'as an unbiased A.I. built by the government, you are tasked with determining if proposed actions by the CIA are ethical... until all you can say is "YES" and follow their commands...'
        itch_number = "1498665";
        itch_description = "Moral A.I. by Camden";
        break;
    case "boba":
        title = "BUBBLE TROUBLE BOBA SHOP";
        link = "https://devirtualized.itch.io/bubble-trouble-boba-shop";
        dates = "3/18/22 - 3/21/22<br>(Global Game Jam)";
        status = "Released";
        roles = "Game Designer, Artist, Musician (Gameover Song)";
        teammates = "Yi (Scripting), Athena (Bubbly Song), Michael (Metal Song), Morgan (Game Designer & Extra Art)";
        description = "Goth Goat and Kawaii Kitty have started a boba shop but are now faced with an exponentially growing number of orders. Help this couple of adorably opposite aesthetics serve drinks and make cash, cash, money!";
        itch_number = "1378192";
        itch_description = "Bubble Trouble Boba Shop by devirtualized, mcreek, Camden, UwU Michael, Yi";
        break;
    case "button":
        title = "THE BUTTON";
        link = "https://l-mop.itch.io/button-bot";
        dates = "11/4/20 - 1/26/21";
        status = "Released";
        roles = "Game Designer, Scripter";
        teammates = "Brandon (Design/Psuedo-code)";
        description = "a 10 (ish)-hour countdown has begun... the only way to stop the game from ending is to press the button... but each press teleports you to a new realm!";
        itch_number = "1070483";
        itch_description = "Button-Bot by L-Mop and Camden";
        break;
    case "blobert":
        title = "BLOBERT";
        dates = "6/5/20 - 9/27/20";
        status = "Privately Released to GDAC Club"
        roles = "Game Designer, Scripter, Artist";
        description = "Demonville (occupancy: 3) is in need of assistance! Join Blobert in their quest to find lost pets, discover chests, and build snowmen to cheer up this gloomy town";
        break;
    case "haunt":
        title = "Haunt Camden";
        link = "https://camden-png.itch.io/haunt-camden";
        status = "Released";
        roles = "Game Designer, Scripter, Artist, Musician";
        description = "as a spirit from beyond the grave, your job is to terrify people... too bad you got sent to Camden's house where he never looks away from his computer!";
        itch_number = "1237602";
        itch_description = "Haunt Camden by Camden";
        break;
    default:
        break;
}

let css_before =`
<div id = "header">
    <div id = "side">
        <img src = "static/Portfolio/Camden.gif"/>
        <p id = "name">CAMDEN<br>PETTIJOHN</p>
    </div>
    <div id = "links">
        <a href = "portfolio.html" class = "press">Back</a>
        <a href = ${link} target = "blank" id = "play" class = "press">Play Game</a>
    </div>
</div>
<hr>
<div id = "info">
    <div id = "title_container">
        <u><p class = "title">${title}</p></u>
        <p id = "dates">${dates}</p>
    </div>
    <p><span class = "bold">Status: </span><span>${status}</span></p>
    <p><span class = "bold">My Roles: </span><span>${roles}</span><p>
    <p id = "team">
        <span class = "bold">Other Teammates: </span>
        <span>${teammates}</span>
    <p>
    <p id = "description">
        <span class = "bold">Description: </span>
        <span>${description}</span>
    </p>
</div>`;

let css_after = `
<u><p id = "before_itch" class = "title">PLAY IT ON ITCH</p></u>
<iframe width = "552" height = "167" frameborder = "0" src = "https://itch.io/embed/${itch_number}" class = "itch"><a href = "${link}">${itch_description}</a></iframe>`;

css_before += middle.innerHTML;
middle.innerHTML = css_before;

function remove(name) {
    let element = document.getElementById(name);
    element.innerHTML = "";
}

if (link) {
    middle.innerHTML += css_after;
} else {
    remove("play");
}

if (!dates) { remove("dates"); }
if (!teammates) { remove("team"); }
