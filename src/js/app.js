import "../scss/style.scss";
import anime from 'animejs/lib/anime.es.js';

import * as flsFunctions from "./files/functions.js";

flsFunctions.isWebp();


// import "./files/sliders.js";

let tabNavs = document.querySelectorAll(".tabs__nav-item");
let tabPanes = document.querySelectorAll(".tab__pane");

for (var i = 0; i < tabNavs.length; i++) {
    tabNavs[i].addEventListener("click", function (e) {
        e.preventDefault();
        let activeTabAttr = e.target.getAttribute("data-tab");

        for (let j = 0; j < tabNavs.length; j++) {
            let contentAttr = tabPanes[j].getAttribute("data-tab-content");

            if (activeTabAttr === contentAttr) {
                tabNavs[j].classList.add("active");
                tabPanes[j].classList.add("active");
            } else {
                tabNavs[j].classList.remove("active");
                tabPanes[j].classList.remove("active");
            }
        }
    });
}




anime({
    targets: '.active',
    // translateX: 25,
    width: 1000
});
