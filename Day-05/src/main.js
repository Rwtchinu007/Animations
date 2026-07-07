import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/all";
import "./style.css";

gsap.registerPlugin(ScrollTrigger, SplitText, Draggable, InertiaPlugin);

// const split = new SplitText(".title h1", {
//   type: "chars,words,lines",
//   wordsClass: "title-word",
//   charsClass: "title-char",
// });
// gsap.from(split.chars, {
//   yPercent: 100,
//   opacity: 0,
//   duration: 1.2,
//   ease: "bounce.Out",
//   stagger: {
//     each: 0.04,
//     from: "random",
//   },
// });

Draggable.create(".box", {
  bounds: "#root",
  type: "x,y",
  edgeResistance: 0.9,
  inertia: true,
  dragResistance: 0.1  ,
  // bounds: { minX: 0, maxX: 0, minY: 0, maxY: 0 },
});
