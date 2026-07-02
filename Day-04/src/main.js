import gsap from "gsap";
import "./style.css";

// timeline controls animations and allows us to play pause and reverse animations

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const seek = document.querySelector(".seek");
const tl = gsap.timeline({
  paused: true,
});
gsap.set([".box1", ".box2", ".box3", ".box4"], { x: 250 });
tl.to(".box1", {
  x: 1000,
  duration: 1.3,
  ease: "power1.inOut",
  delay: 0.6,
})
  .to(".box2", {
    x: 1000,
    duration: 1.3,
    ease: "power1.inOut",
    delay: 0.6,
  })
  .addLabel("chinu")
  .to(".box3", {
    x: 1000,
    duration: 1.3,
    ease: "power1.inOut",
    delay: 0.6,
  })
  .to(".box4", {
    x: 1000,
    duration: 1.3,
    ease: "power1.inOut",
    delay: 0.6,
  });

play.addEventListener("click", () => {
  tl.play();
});
pause.addEventListener("click", () => {
  tl.pause();
});
restart.addEventListener("click", () => {
  tl.restart();
});
reverse.addEventListener("click", () => {
  tl.reverse();
});
seek.addEventListener("click", () => {
  tl.seek("chinu");
});
