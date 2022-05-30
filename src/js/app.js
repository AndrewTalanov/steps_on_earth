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
      pageAnimOnce();
      navMenuOpenClose();
      togglePeriods();
      funcInputRange();

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
      funcInputRange();
      navMenuOpenClose();
      animationOpenSiteTabs();
      toggleTabs();
      togglePeriods();
    },
    async enter(data) {
      data.next.container.querySelector('.search__icon').addEventListener("click", () => {
        animationToggleNavMenu();
      })
    },
    async afterEnter(data) {
      moveScroll();
    },
  }]
});
// ..........

// 1. scroll on top
function moveScroll() {
  window.scrollTo(0, 0);
}

// 1. range
function funcInputRange() {
  const video = document.getElementById('video');
  const input = document.getElementById('myRange');
  const dots = document.querySelectorAll(".dot");

  const timing = [0, 3, 5, 7.24, 9.24, 12.22, 14.22, 16.22, 18.22, 20.22, 22.22, 24.22, 26.22, 28.22, 30.22, 32.22, 34.22, 36.22, 38.22, 42.10, 44.10, 46.10, 49, 51, 53, 55, 57];

  let inputWidth;
  let sliceInputWidth;
  let width;

  if (input != null || input != undefined) {
    inputWidth = window.getComputedStyle(input).width;
    sliceInputWidth = inputWidth.substring(0, inputWidth.length - 2);
    width = sliceInputWidth / 60;

    let idTiming;

    dots.forEach((item, id) => {
      item.style.left = width * timing[id] + "px";
    });

    input.oninput = function () {
      video.currentTime = this.value;

      timing.forEach((time, id) => {
        if (video.currentTime >= time) {
          dots[id].style.backgroundColor = "#00FFF0";

          idTiming = id;
        } else if (video.currentTime < time) {
          dots[id].style.backgroundColor = "white";
        }
      });
    }
    input.addEventListener("change", () => {
      changeIcon(idTiming);

      const btnTabOne = document.querySelector('.tab-11');
      const btnTabTwo = document.querySelector('.tab-22');

      const tabContentOne = document.querySelector('#tab_1');
      const tabContentTwo = document.querySelector('#tab_2');

      if (idTiming >= 15) {

        if (btnTabTwo != null) {


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
          // tb2.add({
          //   targets: '.tabs-animation__tab-2',
          //   width: '44%',
          //   easing: 'easeInOutQuad'
          // }, '-=300')
          // опасити 1 для заголовка
          tb2.add({
            targets: '.tab-2',
            opacity: '1',
            easing: 'easeInOutQuad'
          })
          // опасити 0 для заголовка
          tb2.add({
            targets: '.tab-1',
            opacity: 0.5,
            easing: 'easeInOutQuad'
          })
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

        }

      } else if (idTiming < 15) {
        if (btnTabOne != null) {
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
          // опасити 0 для заголовка
          tb1.add({
            targets: '.tab-2',
            opacity: '.5',
            easing: 'easeInOutQuad'
          })
          // опасити 1 для заголовка
          tb2.add({
            targets: '.tab-1',
            opacity: 1,
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
        }
      }

    });
  }
}

// 1. Изменение иконок у периодов на главной в начале
function changeIcon(idTiming) {
  const iconContainer = document.querySelectorAll(".icon-container");

  const numbersIconForPeriods = [
    // 1 - общая информация
    // 2 - флора
    // 3 - фауна
    // 4 - геология
    // 5 - оледенение 
    // 6 - вымирание
    // 7 - температура
    // 8 - небесные тела

    // 1 катархей
    [1, 8], 
    // 2 эоархей
    [1, 4, 3],
    // 3 палеоархей
    [1, 4, 3],
    // 4 Мезоархей
    [1, 4, 3],
    // 5 Неоархей
    [1, 3],
    // 6 Сидерий
    [1, 7, 5],
    // 7 Рясий
    [1],
    // 8 Орозирий
    [1],
    // 9 Статерий
    [1],
    // 10 Калимий
    [1],
    // 11 Эктазий
    [1],
    // 12 Стений
    [1],
    // 13 Тоний
    [1, 4, 3],
    // 14 Криогений
    [1, 4, 3, 5],
    // 15 Эдиакарий
    [1, 4, 3],
    // 16 Кембрий
    [1, 7, 3, 4],
    // 17 Ордовик
    [1, 3, 4, 6],

    // 1 - общая информация
    // 2 - флора
    // 3 - фауна
    // 4 - геология
    // 5 - оледенение 
    // 6 - вымирание
    // 7 - температура
    // 8 - небесные тела

    // 18 Силур
    [1, 2, 3, 7],
    // 19 Девон
    [1, 2, 3, 6],
    // 20 очепятка
    // [1, 2, 3],
    // 21 Карбон
    [1, 2, 3, 7],
    // 22 Пермь
    [1, 6, 7],
    // 23 Триас
    [1, 2, 3, 7, 6],
    // 24 Юра
    [1, 4, 7, 2, 3],
    // 25 Мел
    [1, 2, 3, 7, 4, 6],
    // 26 Палеоген
    [1, 2, 3, 7],
    // 27 Неоген
    [1, 7, 3],
    // 28 Четвертичный
    [1, 3],
  ];

  let nmb = numbersIconForPeriods[idTiming];

  iconContainer.forEach((item, id) => {
    item.innerHTML = "";
  });

  let flag = 0;
  nmb.forEach((item, id) => {
    if (nmb[id] != undefined) {
      flag = id;

      if (flag == 0) {
        iconContainer[1].innerHTML = `<img src="img/icons/nav-${nmb[id]}.svg" alt="icon">`;
      } else if (flag == 1) {
        iconContainer[4].innerHTML = `<img src="img/icons/nav-${nmb[id]}.svg" alt="icon">`;
      } else if (flag == 2) {
        iconContainer[0].innerHTML = `<img src="img/icons/nav-${nmb[id]}.svg" alt="icon">`;
      } else if (flag == 3) {
        iconContainer[2].innerHTML = `<img src="img/icons/nav-${nmb[id]}.svg" alt="icon">`;
      } else if (flag == 4) {
        iconContainer[3].innerHTML = `<img src="img/icons/nav-${nmb[id]}.svg" alt="icon">`;
      } else if (flag == 5) {
        iconContainer[5].innerHTML = `<img src="img/icons/nav-${nmb[id]}.svg" alt="icon">`;
      }
    }

  });

  // iconContainer.forEach((item, id) => {
  //   if (nmb[id] != undefined) {
  //     console.log(nmb);
  //     item.innerHTML = `<img src="img/icons/nav-${nmb[id]}.svg" alt="icon">`;
  //   }
  // });
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

// 1. Анимация первого включения страницы
function pageAnimOnce() {
  var ttt = anime.timeline({
    easing: 'easeOutExpo',
    duration: 800
  });
  // tt.
  // add({
  //   targets: '.page-transition',
  //   scaleX: [0, 500],
  //   scaleY: [0, 500],
  //   easing: 'easeInOutQuad'
  // });
  ttt.
  add({
    targets: '.page-transition',
    delay: 300,
    scaleX: [500, 0],
    scaleY: [500, 0],
    easing: 'easeInOutQuad'
  });
}

// 1. Анимации переключения страницы
function pageAnimIn() {
  var tt = anime.timeline({
    easing: 'easeOutExpo',
    duration: 800
  });
  var tte = anime.timeline({
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
  // tte.
  // add({
  //   targets: '.loader img',
  //   opacity: [0, 1],
  //   easing: 'easeInOutQuad'
  // });
  // tte.
  // add({
  //   targets: '.loader img',
  //   delay: 500,
  //   opacity: 1,
  //   easing: 'easeInOutQuad'
  // });
  // tte.
  // add({
  //   targets: '.loader img',
  //   opacity: [1, 0],
  //   easing: 'easeInOutQuad'
  // });
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
  const btnTabOne = document.querySelector('.tab-11');
  const btnTabTwo = document.querySelector('.tab-22');

  const tabContentOne = document.querySelector('#tab_1');
  const tabContentTwo = document.querySelector('#tab_2');


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
      // опасити 0 для заголовка
      tb1.add({
        targets: '.tab-2',
        opacity: '.5',
        easing: 'easeInOutQuad'
      })
      // опасити 1 для заголовка
      tb2.add({
        targets: '.tab-1',
        opacity: 1,
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
      // опасити 1 для заголовка
      tb2.add({
        targets: '.tab-2',
        opacity: '1',
        easing: 'easeInOutQuad'
      })
      // опасити 0 для заголовка
      tb2.add({
        targets: '.tab-1',
        opacity: 0.5,
        easing: 'easeInOutQuad'
      })
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

// 1. Включение/выключение периодов 
function togglePeriods() {
  let btnDrop = document.querySelectorAll('.dropdown-info');
  let contentDrop = document.querySelectorAll('.periods-items');

  btnDrop.forEach((item, id) => {

    item.addEventListener('click', () => {

      let showArrowContentAnimation = anime.timeline({
        easing: 'easeOutExpo',
        duration: 300,
      });

      const interval = 400;

      if (window.getComputedStyle(contentDrop[id]).opacity == 1) {

        let item = "." + contentDrop[id].className + " .item";

        console.log(contentDrop[id]);

        showArrowContentAnimation
          .add({
            targets: btnDrop[id],
            rotate: -90,
          })
          .add({
            targets: item,
            translateY: [0, -50],
            easing: 'easeOutSine',
          })
          .add({
            targets: contentDrop[id],
            opacity: [1, 0],
            easing: 'easeInOutQuad',
          })
          .add({
            targets: contentDrop[id],
            begin: function () {
              contentDrop[id].style.display = 'none';
            },
            easing: 'easeInOutQuad',
          });


      } else if (window.getComputedStyle(contentDrop[id]).opacity == 0) {

        let item = "." + contentDrop[id].className + " .item";

        showArrowContentAnimation

          .add({
            targets: btnDrop[id],
            rotate: 0,
          })
          .add({
            targets: contentDrop[id],
            begin: function () {
              contentDrop[id].style.display = 'flex';
            },
            easing: 'easeInOutQuad',
          })

          .add({
            targets: contentDrop[id],
            opacity: 1,
            easing: 'easeInOutQuad',
          })

          .add({
            targets: item,
            translateY: [-50, 0],
            delay: anime.stagger(200),
            easing: 'easeOutSine',
          })
      }
    });
  });

}


// 1. Переход между страницами определений
// страница с определениями одна (data-barba-namespace), но контент для нее разный
// из за чего переход с "определений" на "определения" не анимируется
// function transitionBetweenOnePages(container) {
//   let mainTag = container;
//   const valueAttr = "definition";

//   // console.log(container.querySelector('main'));
//   if (mainTag != null || mainTag != undefined) {
//     if (mainTag.hasAttribute("data-barba-namespace")) {
//       if (mainTag.getAttribute("data-barba-namespace") == valueAttr) {
//         mainTag.removeAttribute("data-barba-namespace");
//         console.log(valueAttr + sessionStorage.getItem('key-nav'));
//         mainTag.setAttribute("data-barba-namespace", valueAttr + sessionStorage.getItem('key-nav'));
//       }
//     }
//   }
// }


// 1. Получаем все элементы навигационного меню со страницы и навешиваем на них обработчик событий
// 2. Записываем в sessionStorage id нажатой ссылки из nav menu
// function addEventOnLinkNavMenu() {
//   let links = document.querySelectorAll('.search__nav ul li a');

//   links.forEach((item, id) => {
//     item.addEventListener("click", () => {
//       sessionStorage.setItem('key-nav', id);
//     });
//   });
// }

// 1. Определение какой блок "определений" показать
// 2. Display block для подходящего блока
// function choiseDisplayDefinitions() {
//   let contentDefinitions = document.querySelectorAll('.content-ids');
//   // получение, номера контента что отображать на странице определений
//   let idNav = sessionStorage.getItem('key-nav');

//   if (idNav != null) {
//     if (contentDefinitions[idNav] != undefined || contentDefinitions[0] != null) {
//       if (idNav > 8) {
//         idNav = 9 % idNav;
//       }
//       contentDefinitions[idNav].style.display = 'block';
//     }
//   } else {
//     if (contentDefinitions[0] != undefined || contentDefinitions[0] != null) {
//       contentDefinitions[0].style.display = 'block';
//     }
//   }
// }