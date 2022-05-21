import anime from 'animejs/lib/anime.es.js';

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

let btnDrop = document.querySelectorAll('.dropdown-info');
let contentDrop = document.querySelectorAll('.periods-items');

btnDrop.forEach((item, id) => {
    item.addEventListener('click', () => {

        let showArrowContentAnimation = anime.timeline({
            easing: 'easeOutExpo',
            duration: 200,
        });

        if (contentDrop[id].style.opacity == 0) {
            showArrowContentAnimation

                .add({
                    targets: '.dropdown-info',
                    rotateX: 180,
                    delay: 300,
                })
                .add({
                    targets: contentDrop[id],
                    opacity: 1,
                    easing: 'easeInOutQuad'
                })

                .add({
                    targets: '.item-1',
                    easing: 'easeInOutQuad',
                    translateY: 0,
                })
                .add({
                    targets: '.item-2',
                    easing: 'easeInOutQuad',
                    translateY: 0,
                })

                .add({
                    targets: '.item-2',
                    easing: 'easeInOutQuad',
                    translateY: 0,
                })
                .add({
                    targets: '.item-3',
                    easing: 'easeInOutQuad',
                    translateY: 0,
                })
                .add({
                    targets: '.item-4',
                    easing: 'easeInOutQuad',
                    translateY: 0,
                })


        } else if (contentDrop[id].style.opacity == 1) {
            showArrowContentAnimation
                .add({
                    targets: '.dropdown-info',
                    rotateX: 0,
                })
                .add({
                    targets: contentDrop[id],
                    opacity: 0,
                    easing: 'easeInOutQuad',
                    delay: 200
                })

                .add({
                    targets: '.item-1',
                    easing: 'easeInOutQuad',
                    translateY: -140,
                    opacity: [0, 1],
                    direction: 'alternate',
                }, )

                .add({
                    targets: '.item-2',
                    easing: 'easeInOutQuad',
                    translateY: -130,
                    opacity: [0, 1],
                    direction: 'alternate',
                }, )

                .add({
                    targets: '.item-3',
                    easing: 'easeInOutQuad',
                    translateY: -110,
                    opacity: [0, 1],
                }, )

                .add({
                    targets: '.item-4',
                    easing: 'easeInOutQuad',
                    translateY: -90,
                    opacity: [0, 1],
                })
        }

    });
});


// document.querySelector(".dropdown-info").addEventListener("click", () => {
//     var tl = anime.timeline({
//         easing: 'easeOutExpo',
//         duration: 500
//     });


// });
