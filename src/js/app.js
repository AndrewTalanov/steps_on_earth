import "../scss/style.scss";
import anime from 'animejs/lib/anime.es.js';

import * as flsFunctions from "./files/functions.js";
import "./files/nav.js";
import "./files/sessionStorage.js";

flsFunctions.isWebp();


// import "./files/sliders.js";

// ТАБЫ В НАЧАЛЕ

// АНИМАЦИЯ ПРИ ЗАПУСКЕ САЙТА
var tb = anime.timeline({
    easing: 'easeOutExpo',
    duration: 500
});
// описание эры уходит
tb.add({
    targets: '.tab-2__description',
    opacity: '0',
}, '-=400')
// высота второго блока уменьшается
tb.add({
    targets: '.tabs-animation__tab-2',
    height: '135px',
}, '-=400')
// ширина второго блока уменьшается
tb.add({
    targets: '.tabs-animation__tab-2',
    width: '47%',
}, '-=400');
// второй блок исчезает
tb.add({
    targets: '.tabs-animation__tab-2',
    opacity: '0',
}, '-=400');
// ..............

let btnTabOne = document.querySelector('.tab-11');
let btnTabTwo = document.querySelector('.tab-22');

let tabContentOne = document.querySelector('#tab_1');
let tabContentTwo = document.querySelector('#tab_2');


if (btnTabOne != null) {
    btnTabOne.addEventListener("click", () => {

        // функционал
        tabContentOne.style.display = "flex";
        tabContentTwo.style.display = "none";

        // анимация
        var tb = anime.timeline({
            easing: 'easeOutExpo',
            duration: 300
        });
        // первый блок появляется
        tb.add({
            targets: '.tabs-animation__tab-1',
            opacity: '1',
            easing: 'easeInOutQuad'
        })
        // описание эры уходит
        tb.add({
            targets: '.tab-2__description',
            opacity: '0',
            easing: 'easeInOutQuad'
        })
        // высота второго блока уменьшается
        tb.add({
            targets: '.tabs-animation__tab-2',
            height: '135px',
            width: '44%',
            easing: 'easeInOutQuad'
        })
        // ширина первого блока увеличивается
        tb.add({
            targets: '.tabs-animation__tab-1',
            width: '47%',
            height: '220px',
            easing: 'easeInOutQuad'
        })
        // второй блок исчезает
        tb.add({
            targets: '.tabs-animation__tab-2',
            opacity: '0',
            easing: 'easeInOutQuad'
        })
        // описание первого блока появляется
        tb.add({
            targets: '.tab-1__description',
            opacity: '1',
            easing: 'easeInOutQuad'
        })
    });
}

if (btnTabTwo != null) {
    btnTabTwo.addEventListener("click", () => {

        // функционал
        tabContentTwo.style.display = "flex";
        tabContentOne.style.display = "none";


        // анимация
        var tb = anime.timeline({
            easing: 'easeOutExpo',
            duration: 300
        });
        // костыль
        tb.add({
            targets: '.tabs-animation__tab-2',
            width: '44%',
            easing: 'easeInOutQuad'
        }, '-=300')
        // второй блок появляется
        tb.add({
            targets: '.tabs-animation__tab-2',
            opacity: '1',
            easing: 'easeInOutQuad'
        })
        // описание первого блока уходит
        tb.add({
            targets: '.tab-1__description',
            opacity: '0',
            easing: 'easeInOutQuad'
        })
        // ширина первого блока уменьшается
        tb.add({
            targets: '.tabs-animation__tab-1',
            width: '44%',
            height: '135px',
            easing: 'easeInOutQuad'
        })
        // ширина второго блока увеличивается
        tb.add({
            targets: '.tabs-animation__tab-2',
            width: '47%',
            height: '220px',
            easing: 'easeInOutQuad'
        })
        // первый блок исчезает
        tb.add({
            targets: '.tabs-animation__tab-1',
            opacity: '0',
            easing: 'easeInOutQuad'
        })
        // описание второго блока появляется
        tb.add({
            targets: '.tab-2__description',
            left: '0',
            opacity: '1',
            easing: 'easeInOutQuad'
        })
    });
}


