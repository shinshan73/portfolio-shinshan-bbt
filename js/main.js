const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h2");
//END SECTION
const contain = document.querySelector(".contain");


//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 5000,
  triggerElement: intro,
  triggerHook: 0
})

  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text Animation
/* const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);
*/

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 500;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 53.3);


// typewriter
/* const textAnim = document.querySelector('h2');


new Typewriter(textAnim, {
    loop: true,
    deleteSpeed: 15,
    Speed: 35,
})
.typeString('Welcome To My Website')
.pauseFor(1000)
.deleteChars(21)
.typeString('Bienvenue sur mon site')
.pauseFor(1000)
.deleteChars(23)
.typeString('欢迎来到我的网站')
.pauseFor(1000)
.deleteChars(9)
.start()
*/
const textAnim2 = document.querySelector('h1');

new Typewriter(textAnim2, {
    loop: true,
})
.typeString('Bubble Tea')
.pauseFor(3000)
.deleteChars(11)
.typeString('珍珠奶茶')
.pauseFor(3000)
.deleteChars(5)
.start()