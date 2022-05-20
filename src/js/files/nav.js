import anime from 'animejs/lib/anime.es.js';

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
            opacity: 1,
            left: [80, 0],
            duration: 500,
            delay: function(el, i, l) {
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
            opacity: 0,
            left: [0, 80],
            delay: function(el, i, l) {
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