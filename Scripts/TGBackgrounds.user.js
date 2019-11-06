// ==UserScript==
// @name         TG Backgrounds
// @namespace    https://github.com/SaintRepublic/
// @version      1.0
// @description  Beauty TG!
// @author       SaintRepublic
// @match        *://web2.tlgrm.eu/*
// @grant        none
// ==/UserScript==

(function() {

    var images = ['https://thumb.cloud.mail.ru/thumb/xw1/Cloud%20Media/Picture/Backgrounds/Killzone.jpg?x-email=saintrepublic%40bk.ru',
                  'https://thumb.cloud.mail.ru/thumb/xw1/Cloud%20Media/Picture/Backgrounds/Metro.jpg?x-email=saintrepublic%40bk.ru',
                  'https://thumb.cloud.mail.ru/thumb/xw1/Cloud%20Media/Picture/Backgrounds/Neon%20City.jpg?x-email=saintrepublic%40bk.ru',
                  'https://thumb.cloud.mail.ru/thumb/xw1/Cloud%20Media/Picture/Backgrounds/Cyberpunk%20City.jpg?x-email=saintrepublic%40bk.ru'
                 ]

    var i = Math.floor(Math.random() * (images.length - 0))
    var body = document.body.getElementsByTagName("div")[0];
    body.style.backgroundImage = "url("+images[i]+")";
})();
