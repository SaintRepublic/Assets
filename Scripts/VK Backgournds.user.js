// ==UserScript==
// @name         VK Backgournds
// @namespace    https://github.com/SaintRepublic/
// @version      1.0
// @description  Beauty VK!
// @author       SaintRepublic
// @match        *://vk.com/*
// @grant        none
// ==/UserScript==

(function() {

    var images = [
        'https://raw.githubusercontent.com/SaintRepublic/Assets/master/Scripts/Toxic%20VK/Killzone.jpg',
        'https://raw.githubusercontent.com/SaintRepublic/Assets/master/Scripts/Toxic%20VK/Metro.jpg'
    ]

    var ads = document.getElementById("ads_left");
    var menu = document.getElementById("side_bar_inner");
    var element = menu.getElementsByTagName("nav")[0];
    //===============================================
    //Remove ads
    if (ads) ads.remove();
    //===============================================
    //Modify background
    var i = Math.floor(Math.random() * (images.length - 0))
    document.body.style.background = "url("+images[i]+")";
    document.body.style.backgroundSize="100%";
    //===============================================
    //Modify menu
    element.className += " page_block";
    element.style.padding = "10px 0px 5px 10px";
    element.style.margin = "0px";
    //===============================================
    //Modify small shit
    var elements = menu.getElementsByClassName("left_menu_nav_wrap");
    for(i = 0, elements.length; i < elements.length; i++) {
        element = elements[i]
        element.className += " page_block";
        element.style.padding = "8px 0px 6px 10px";
    }
})();
