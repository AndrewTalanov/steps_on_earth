// Подключение стилей
import "../scss/style.scss";


/* БИБЛИОТЕКИ */

// анимации
import anime from 'animejs/lib/anime.es.js';
// переход между страницами
import barba from '@barba/core';


/* import ФУНКЦИОНАЛА */

// Проверка браузера на поддержку WEBP 
import * as flsFunctions from "./files/functions.js";
flsFunctions.isWebp();

// блок с периодами
// import "./files/periods.js";

/* ЯДРО */
function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  debug: true,
  transitions: [{
    sync: true,
    name: 'base',
    async once(data) {
      addEventOnLinkNavMenu();
      navMenuOpenClose();
      choiseDisplayDefinitions();

      animationOpenSiteTabs();
      toggleTabs();
    },
    async leave(data) {
      const done = this.async();
      pageAnimIn();
      await delay(1000);
      done();
    },
    async beforeEnter(data) {
      await navMenuOpenClose();
      await animationOpenSiteTabs();
      await toggleTabs();
    },
    async enter(data) {
      data.next.container.querySelector('.search__icon').addEventListener("click", () => {
        addEventOnLinkNavMenu();
        animationToggleNavMenu();
      })
      choiseDisplayDefinitions();
    },
  }]
});
// ..........

// 1. Получаем все элементы навигационного меню со страницы и навешиваем на них обработчик событий
// 2. Записываем в sessionStorage id нажатой ссылки из nav menu
function addEventOnLinkNavMenu() {
  let links = document.querySelectorAll('.search__nav ul li a');

  links.forEach((item, id) => {
    item.addEventListener("click", () => {
      sessionStorage.setItem('key-nav', id);
    });
  });
}

// 1. Определение какой блок "определений" показать
// 2. Display block для подходящего блока
function choiseDisplayDefinitions() {
  let contentDefinitions = document.querySelectorAll('.content-ids');
  // получение, номера контента что отображать на странице определений
  let idNav = sessionStorage.getItem('key-nav');

  if (idNav != null) {
    if (contentDefinitions[idNav] != undefined || contentDefinitions[0] != null) {
      if (idNav > 8) {
        idNav = 9 % idNav;
      }
      contentDefinitions[idNav].style.display = 'block';
    }
  } else {
    if (contentDefinitions[0] != undefined || contentDefinitions[0] != null) {
      contentDefinitions[0].style.display = 'block';
    }
  }
}

// 1. По умолчанию записываем в sessionStorage флаг 1
// 2. Получаем кнопку взаимодействия с нав меню со страницы, навешиваем обработчик событий, запускаем анимацию.
function navMenuOpenClose() {
  // nav menu
  sessionStorage.setItem('toggle-nav', 1);

  let btn = document.querySelector('.search__icon');

  btn.addEventListener("click", () => {
    animationToggleNavMenu();
  });

}

// 1. Анимация открытия/закрытия навигационного меню
// 2. Изменение значения флага
function animationToggleNavMenu() {
  if (sessionStorage.getItem('toggle-nav') == 1) {
    var tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 500
    });

    tl.
    add({
      targets: '.search__nav',
      width: '400px',
      opacity: '1',
      easing: 'easeOutElastic(1, .7)'
    });
    tl.
    add({
      targets: '.search__nav',
      height: '610px',
      easing: 'easeInOutQuad'
    });
    tl.
    add({
      targets: '.search__nav ul li',
      opacity: [0, 1],
      translateX: [80, 0],
      duration: 500,
      delay: function (el, i, l) {
        return i * 250;
      },
      easing: 'easeOutElastic(1, 1)'
    });
    sessionStorage.setItem('toggle-nav', 2);
  } else if (sessionStorage.getItem('toggle-nav') == 2) {

    let tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 200
    });
    tl.
    add({
      targets: '.search__nav ul li',
      opacity: [1, 0],
      translateX: [0, 80],
      delay: function (el, i, l) {
        return (l - i) * 200;
      },
      easing: 'easeInOutQuad'
    });

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
    sessionStorage.setItem('toggle-nav', 1);
  }
}

// 1. Анимации переключения страницы
function pageAnimIn() {
  var tt = anime.timeline({
    easing: 'easeOutExpo',
    duration: 800
  });
  tt.
  add({
    targets: '.page-transition',
    scaleX: [0, 500],
    scaleY: [0, 500],
    easing: 'easeInOutQuad'
  });
  tt.
  add({
    targets: '.page-transition',
    delay: 300,
    scaleX: [500, 0],
    scaleY: [500, 0],
    easing: 'easeInOutQuad'
  });
}

// 1. Анимация переключения табов (на главной) (срабатывает только при открытии сайта)
function animationOpenSiteTabs() {
  var tb = anime.timeline({
    easing: 'easeOutExpo',
    duration: 500
  });
  // описание эры уходит
  tb.add({
      targets: '.tab-2__description',
      opacity: '0',
    }, '-=400'),
    // высота второго блока уменьшается
    tb.add({
      targets: '.tabs-animation__tab-2',
      height: '135px',
    }, '-=400'),
    // ширина второго блока уменьшается
    tb.add({
      targets: '.tabs-animation__tab-2',
      width: '47%',
    }, '-=400'),
    // второй блок исчезает
    tb.add({
      targets: '.tabs-animation__tab-2',
      opacity: '0',
    }, '-=400');
  // ..............
}

// 1. Функционал переключения табов (на главной)
function toggleTabs() {
  let btnTabOne = document.querySelector('.tab-11');
  let btnTabTwo = document.querySelector('.tab-22');

  let tabContentOne = document.querySelector('#tab_1');
  let tabContentTwo = document.querySelector('#tab_2');


  if (btnTabOne != null) {

    // btnTabOne.removeEventListener('click');

    btnTabOne.addEventListener("click", () => {

      // функционал
      tabContentOne.style.display = "flex";
      tabContentTwo.style.display = "none";

      // анимация
      var tb1 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 300
      });
      // анимация
      var tb2 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 300
      });

      // первый блок появляется
      tb1.add({
        targets: '.tabs-animation__tab-1',
        opacity: '1',
        easing: 'easeInOutQuad'
      })
      // описание эры уходит
      tb2.add({
        targets: '.tab-2__description',
        opacity: '0',
        easing: 'easeInOutQuad'
      })
      // высота второго блока уменьшается
      tb2.add({
        targets: '.tabs-animation__tab-2',
        height: '135px',
        width: '44%',
        easing: 'easeInOutQuad'
      })
      // ширина первого блока увеличивается
      tb1.add({
        targets: '.tabs-animation__tab-1',
        width: '47%',
        height: '220px',
        easing: 'easeInOutQuad'
      })
      // второй блок исчезает
      tb2.add({
        targets: '.tabs-animation__tab-2',
        opacity: '0',
        easing: 'easeInOutQuad'
      })
      // описание первого блока появляется
      tb1.add({
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
      var tb1 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 300
      });
      // анимация
      var tb2 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 300
      });

      // костыль
      tb2.add({
        targets: '.tabs-animation__tab-2',
        width: '44%',
        easing: 'easeInOutQuad'
      }, '-=300')
      // второй блок появляется
      tb2.add({
        targets: '.tabs-animation__tab-2',
        opacity: '1',
        easing: 'easeInOutQuad'
      })
      // описание первого блока уходит
      tb1.add({
        targets: '.tab-1__description',
        opacity: '0',
        easing: 'easeInOutQuad'
      })
      // ширина первого блока уменьшается
      tb1.add({
        targets: '.tabs-animation__tab-1',
        width: '44%',
        height: '135px',
        easing: 'easeInOutQuad'
      })
      // ширина второго блока увеличивается
      tb2.add({
        targets: '.tabs-animation__tab-2',
        width: '47%',
        height: '220px',
        easing: 'easeInOutQuad'
      })
      // первый блок исчезает
      tb1.add({
        targets: '.tabs-animation__tab-1',
        opacity: '0',
        easing: 'easeInOutQuad'
      })
      // описание второго блока появляется
      tb2.add({
        targets: '.tab-2__description',
        left: '0',
        opacity: '1',
        easing: 'easeInOutQuad'
      });
    });
  }
}






































let btnDrop = document.querySelectorAll('.dropdown-info');
let contentDrop = document.querySelectorAll('.periods-items');

btnDrop.forEach((item, id) => {

    item.addEventListener('click', () => {

        let showArrowContentAnimation = anime.timeline({
            easing: 'easeOutExpo',
            duration: 500,
        });

        const interval = 400;

        if (window.getComputedStyle(contentDrop[id]).opacity == 1) {
            
            console.log(window.getComputedStyle(contentDrop[id]).opacity);

            showArrowContentAnimation
                .add({
                    targets: '.dropdown-info',
                    rotateX: 180,
                    delay: 300,
                })
                .add({
                    targets: contentDrop[id],
                    opacity: 1,
                    easing: 'easeInOutQuad',
                })
                .add({
                    targets: contentDrop[id],
                    translateY: [-50, 0],
                    opacity: [1, 0],
                    easing: 'easeInOutQuad',
                    duration: (el, i) => i * interval + interval,
                });

            

        } else if (window.getComputedStyle(contentDrop[id]).opacity == 0) {
            console.log(window.getComputedStyle(contentDrop[id]).opacity);

            showArrowContentAnimation

                .add({
                    targets: '.dropdown-info',
                    rotateX: 0,
                })

                .add({
                    targets: contentDrop[id],
                    opacity: 0,
                    easing: 'easeInExpo',
                })

                .add({
                    targets: '.group-wrapper',
                    opacity: 0,
                    easing: 'easeInOutQuad',

                })

                .add({
                    targets: '.item-1',
                    opacity: [0, 1],
                    translateY: [-100, 0],
                    easing: 'easeInExpo',
                    duration: (el, i) => i * interval + interval,
                })

                .add({
                    targets: '.item-2',
                    opacity: [0, 1],
                    translateY: [-100, 0],
                    easing: 'easeInExpo',
                    duration: (el, i) => i * interval + interval,
                })

                .add({
                    targets: '.item-3',
                    opacity: [0, 1],
                    translateY: [-100, 0],
                    easing: 'easeInExpo',
                    duration: (el, i) => i * interval + interval,
                    delay: 100,
                })
                
                .add({
                    targets: '.item-4',
                    opacity: [0, 1],
                    translateY: [-100, 0],
                    easing: 'easeInExpo',
                    duration: (el, i) => i * interval + interval,
                })
                .add({
                    targets: '.item-5',
                    opacity: [0, 1],
                    translateY: [-100, 0],
                    easing: 'easeInExpo',
                    duration: (el, i) => i * interval + interval,
                });
        }
    });
});


// const dropBtn = document.querySelectorAll('.dropdown-info');

// dropBtn.forEach(function (item) {
//     item.addEventListener("click", function () {
//         let currentBtn = item;

//         let dropId = currentBtn.getAttribute("data-drop");
//         let currentTab = document.querySelector(dropId);

//         currentBtn.classList.toggle('active');
//         currentTab.classList.toggle('active');
//     });
// });


