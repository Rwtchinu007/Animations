import { gsap } from "gsap";
import "./style.css";

let count = 0;
const loaderCounter = document.querySelector(".loadercount h1");
const interval = setInterval(() => {
  count++;
  loaderCounter.innerHTML = `${count}%`;
   gsap.fromTo(
    loaderCounter,
    { scale: 1.05 },
    { scale: 1, duration: 0.15, ease: "power1.out" }
  );
  if (count === 100) {
    clearInterval(interval);
    landingAnimation();
  }
}, 25);

function landingAnimation() {
  const tl = gsap.timeline();
  tl.to(".loadercount", {
    opacity: 0,
    duration: 1.6,
    ease: "power4.out",
  })
    .to(
      ".loader",
      {
        yPercent: -100,
        duration: 1.6,
        ease:"expo.out",
      },
      "-=0.9",
    )
    .from(
      ".background img",
      {
        scale: 1.4,
        filter: "blur(10px)",
        filter: "grayscale(100%)",
        duration: 1.2,
        ease: "power4.out",
      },
      "-=1.1",
    )
    .from(
      ".heading h1",
      {
        yPercent: 100,
        duration: 1.2,
        ease: "expo.out", 
      },
      "-=0.8",
    )
    .from(
      ".subheading h2",
      {
        yPercent: 100,
        duration: 1.2,
        ease: "expo.out",
      },
      "-=0.77",
    );
}
