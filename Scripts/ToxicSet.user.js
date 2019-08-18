// ==UserScript==
// @name         ToxicSet
// @namespace    https://github.com/SaintRepublic/
// @version      1.0
// @description  Beauty VK!
// @author       SaintRepublic
// @match        *://vk.com/*
// @grant        none
// ==/UserScript==

(function() {

    var images = ['https://thumb.cloud.mail.ru/thumb/xw1/Cloud%20Media/Picture/Toxic%20Set/Killzone.jpg?x-email=saintrepublic%40bk.ru',
                  'https://thumb.cloud.mail.ru/thumb/xw1/Cloud%20Media/Picture/Toxic%20Set/Metro.jpg?x-email=saintrepublic%40bk.ru'
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
    console.log(i)
    document.body.style.background = "url("+images[i]+")";
    document.body.style.backgroundSize="100%";
    //===============================================
    //Modify menu
    element.className += " page_block";
    element.style.padding = "10px 0px 5px 10px";
    element.style.margin = "0px";
    //===============================================
    //Modify small shit
    element = menu.getElementsByClassName("left_menu_nav_wrap")[0];
    element.className += " page_block";
    element.style.padding = "8px 0px 6px 10px";
})();