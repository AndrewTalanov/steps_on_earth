import anime from 'animejs/lib/anime.es.js';

let btnDrop = document.querySelectorAll('.dropdown-info');
let contentDrop = document.querySelectorAll('.periods-items');

btnDrop.forEach((item, id) => {
    item.addEventListener('click', () => {


        // таймлайн
        let showArrowContentAnimation = anime.timeline({
            easing: 'easeOutExpo',
            duration: 500,
        });

        const interval = 400;

        // console.log(contentDrop[id].style.opacity);
        console.log(contentDrop[id].style.opacity);

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
                    easing: 'easeInOutQuad',
                })
                .add({
                    targets: '.group-wrapper',
                    translateY: [-50, 0],
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    duration: (el, i) => i * interval + interval,
                });

        } else if (contentDrop[id].style.opacity == 1) {
            // console.log(contentDrop[id].style.opacity);
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