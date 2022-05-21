import "../scss/style.scss";

import anime from 'animejs/lib/anime.es.js';
import barba from '@barba/core';

import * as flsFunctions from "./files/functions.js";
import "./files/periods.js";

flsFunctions.isWebp();

// ЯДРО 
function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n)
  })
}

barba.init({
  debug: true,
  transitions: [{
    sync: true,
    name: 'base',
    async leave(data) {
      const done = this.async();
      pageAnimIn();
      await delay(1000);
      done();
    
    },
    beforeEnter(data) {
      addEventOnLinkNavMenu();
      navMenuOpenClose();
      choiseDisplayDefinitions();
      animationOpenSiteTabs();
      toggleTabs();
    },
    async enter(data) {
      await pageAnimOut();
    },
  }]
});
// ..........

// открытие нав меню на всех страницах
addEventOnLinkNavMenu();
navMenuOpenClose();
choiseDisplayDefinitions();

animationOpenSiteTabs();
toggleTabs();

























// НАЗВАНИЕ ФУНКЦИЙ ПОМОЙКА, РАСКИДАН КОД ТОЖЕ КАК ПОМОЙКА
// хранение данных в СЕССИОН стораге
function addEventOnLinkNavMenu() {
  let links = document.querySelectorAll('.search__nav ul li a');

  links.forEach((item, id) => {
    item.addEventListener("click", () => {
      sessionStorage.setItem('key-nav', id);
    })
  });
}

// функционал
function choiseDisplayDefinitions() {
  let contentDefinitions = document.querySelectorAll('.content-ids');
  // получение, номера контента что отображать на странице определений
  let idNav = sessionStorage.getItem('key-nav');

  if (idNav != null) {
    if (contentDefinitions[idNav] != undefined || contentDefinitions[0] != null) {
      contentDefinitions[idNav].style.display = 'block';
    }
  } else {
    if (contentDefinitions[0] != undefined || contentDefinitions[0] != null) {
      contentDefinitions[0].style.display = 'block';
    }
  }
}

function navMenuOpenClose() {
  // nav menu
  var i = 1;

  let btn = document.querySelector(".search__icon");

  btn.addEventListener("click", () => {
    console.timeLog(btn);
    console.log(i);
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
      i++;
    } else {

      var tl = anime.timeline({
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
      i++;
    }

  });

}





// Анимации для переключения страницы

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

function pageAnimOut() {
  // tt.
  //   add({
  //     targets: '.page-transition',
  //     delay: 300,
  //     scaleX: [500, 0],
  //     scaleY: [500, 0],
  //     easing: 'easeInOutQuad'
  //   });
}
// ........

function animationOpenSiteTabs() {
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
}

function toggleTabs() {
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
      });
    });
  }
}