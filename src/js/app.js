import "../scss/style.scss";
import anime from 'animejs/lib/anime.es.js';

import * as flsFunctions from "./files/functions.js";

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

btnTabOne.addEventListener("click", () => {

    // функционал
    tabContentOne.style.display = "flex";
    tabContentTwo.style.display = "none";

    // анимация
    var tb = anime.timeline({
        easing: 'easeOutExpo',
        duration: 500
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

btnTabTwo.addEventListener("click", () => {

    // функционал
    tabContentTwo.style.display = "flex";
    tabContentOne.style.display = "none";


    // анимация
    var tb = anime.timeline({
        easing: 'easeOutExpo',
        duration: 500
    });
    // костыль
    tb.add({
        targets: '.tabs-animation__tab-2',
        width: '44%',
        easing: 'easeInOutQuad'
    }, '-=500')
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

// Открытие закрытие акардеонов, каждый отдельно открывается и закрывается
const dropBtn = document.querySelectorAll('.dropdown-info');

const showArrowContentAnimation = anime.timeline({
    easing: 'easeOutExpo',
    autoplay: false
});


var el1 = document.querySelector('#drop_1');
var el2 = document.querySelector('#drop_2');
// let el3 = document.querySelector('#drop_3');
// let el4 = document.querySelector('#drop_4');
// let el5 = document.querySelector('#drop_5');

showArrowContentAnimation
    .add({
        targets: el1,
        translateY: 40,
        direction: 'alternate',
        easing: 'easeInOutSine',
        opacity: [0, 1],
        duration: 500,
    })
    .add({
        targets: el2,
        translateY: 40,
        direction: 'alternate',
        easing: 'easeInOutSine',
        opacity: [0, 1],
        duration: 500,
    });

dropBtn.forEach(function (item) {
    item.addEventListener("click", function () {

        let currentBtn = item;

        let dropId = currentBtn.getAttribute("data-drop");
        let currentTab = document.querySelector(dropId);

        currentBtn.classList.toggle('active');
        currentTab.classList.toggle('active');

        //Условия служит чтобы анимация не угасала резко а плавно работала в обратном направлении
        if (showArrowContentAnimation.began) {
            showArrowContentAnimation.reverse();
            if (
                showArrowContentAnimation.progress === 0 &&
                showArrowContentAnimation.direction === "reverse"
            ) {
                showArrowContentAnimation.completed = false;
            }
        }

        if (showArrowContentAnimation.paused) {
            showArrowContentAnimation.play();
        }

    });
});