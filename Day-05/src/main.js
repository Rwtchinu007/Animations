import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import "./style.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

const split = new SplitText(".title h1", {
  type: "chars,words,lines",
  wordsClass: "title-word",
  charsClass: "title-char",
});
gsap.from(split.chars, {
  yPercent: 100,
  opacity: 0,
  duration: 1.2,
  ease: "bounce.Out",
  stagger: {
    each: 0.04,
    from: "random",
  },
});
