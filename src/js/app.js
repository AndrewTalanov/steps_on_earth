import "../scss/style.scss";
import anime from 'animejs/lib/anime.es.js';

import * as flsFunctions from "./files/functions.js";

flsFunctions.isWebp();


// import "./files/sliders.js";

let tabsBtn = document.querySelectorAll(".tabs__nav-item");
let tabPanes = document.querySelectorAll(".tab__pane");

tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });

            tabPanes.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
            
            // anime({
            //     targets: '.active',
            //     height: 215,
            //   });
        }
    });
});


// nav menu
var i = 1;

document.querySelector(".search__icon").addEventListener("click", () => {

    if (i % 2 == 1) {
        var tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 500
        });
        tl.
        add({
            targets: '.search__nav',
            width: '400px',
            opacity: '1',
            easing: 'easeInOutQuad'
        });
        tl.
        add({
            targets: '.search__nav',
            height: '610px',
            easing: 'easeInOutQuad'
        });
        tl.
        add({
            targets: '.nav-li-1',
            opacity: 1,
            left: 0,
            easing: 'easeInOutQuad'
        }, '-=200');
        tl.
        add({
            targets: '.nav-li-2',
            opacity: 1,
            left: 0,
            easing: 'easeInOutQuad'
        }, '-=300');
        tl.
        add({
            targets: '.nav-li-3',
            opacity: 1,
            left: 0,
            easing: 'easeInOutQuad'
        }, '-=300');
        tl.
        add({
            targets: '.nav-li-4',
            opacity: 1,
            left: 0,
            easing: 'easeInOutQuad'
        }, '-=300');
        tl.
        add({
            targets: '.nav-li-5',
            opacity: 1,
            left: 0,
            easing: 'easeInOutQuad'
        }, '-=300');
        tl.
        add({
            targets: '.nav-li-6',
            opacity: 1,
            left: 0,
            easing: 'easeInOutQuad'
        }, '-=300');
        tl.
        add({
            targets: '.nav-li-7',
            opacity: 1,
            left: 0,
            easing: 'easeInOutQuad'
        }, '-=300');
        tl.
        add({
            targets: '.nav-li-8',
            opacity: 1,
            left: 0,
            easing: 'easeInOutQuad'
        }, '-=300');


        i++;
    } else {

        var tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 200
        });

        tl.
        add({
            targets: '.nav-li-8',
            opacity: 0,
            left: 80,
            easing: 'easeInOutQuad'
        }, '-=100');
        tl.
        add({
            targets: '.nav-li-7',
            opacity: 0,
            left: 80,
            easing: 'easeInOutQuad'
        }, '-=100');
        tl.
        add({
            targets: '.nav-li-6',
            opacity: 0,
            left: 80,
            easing: 'easeInOutQuad'
        }, '-=100');
        tl.
        add({
            targets: '.nav-li-5',
            opacity: 0,
            left: 80,
            easing: 'easeInOutQuad'
        }, '-=100');
        tl.
        add({
            targets: '.nav-li-4',
            opacity: 0,
            left: 80,
            easing: 'easeInOutQuad'
        }, '-=100');
        tl.
        add({
            targets: '.nav-li-3',
            opacity: 0,
            left: 80,
            easing: 'easeInOutQuad'
        }, '-=100');
        tl.
        add({
            targets: '.nav-li-2',
            opacity: 0,
            left: 80,
            easing: 'easeInOutQuad'
        }, '-=100');
        tl.
        add({
            targets: '.nav-li-1',
            opacity: 0,
            left: 80,
            easing: 'easeInOutQuad'
        }, '-=100');

        tl.
        add({
            targets: '.search__nav',
            height: '0px',
            opacity: '1',
            easing: 'easeInOutQuad'
        });
        tl.
        add({
            targets: '.search__nav',
            width: '0px',
            opacity: '0',
            easing: 'easeInOutQuad'
        });
        

        i++;
    }

    
    
    
});