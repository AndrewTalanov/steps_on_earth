

// const pageTransition = () => {

//   var tt= anime.timeline({
//     easing: 'easeOutExpo',
//     duration: 500
//   });

//   tt.
//   add({
//       targets: '.page-transition',
//       width: '100%',
//       left: '0%',
//       easing: 'easeInOutQuad'
//   });

//   tt.
//   add({
//       targets: '.page-transition',
//       left: '100%',
//       delay: 500,
//       easing: 'easeInOutQuad'
//   });

// }

// const mainAnimation = () => {
//   var tl = anime.timeline({
//     easing: 'easeOutExpo',
//     delay: 500,
//     duration: 500,
//   })
//   tl.
//   add({
//       targets: '.header',
//       translateY: [100, 0],
//       easing: 'easeInOutQuad'
//   });
// }

// pageTransition();
// barba.init({
//   debug: true,
//   transitions: [{
//     leave(data) {
//       pageTransition();
//     },
//     enter(data) {
//       mainAnimation();
//     },
//   }]
// });