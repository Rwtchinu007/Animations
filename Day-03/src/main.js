import { gsap } from "gsap";
import "./style.css";

// timeline is a used to create a sequence of animations that can be controlled as a single unit. It allows you to chain multiple animations together and control their timing, order, and playback.

// without timeline we have to calculate the duration and delay of each animation manually, which can be time-consuming and error-prone.

// position parameter is used to specify the position of an animation in a timeline.

// types of position parameter are "<" (start at the same time as the previous animation), ">" (start after the previous animation ends), "+=value" (start after a specified delay), "-=value" (start before a specified delay).
// labels is a way to give a name to a specific point in the timeline, which can be used to reference that point later in the timeline. Labels can be used to create more complex animations and to synchronize multiple animations together.

// const tl = gsap.timeline();
// tl.to(".box1", {
//   x: 800,
//   duration: 1.3,
//   ease: "power3.inOut",
//   delay: 0.5,
// },"chinu")
//   .to(".box2", {
//     x: 800,
//     duration: 1.5,
//     ease: "power2.inOut",
//   },"-=0.5")
//   .to(".box3", {
//     x: 800,
//     duration: 1.8,
//     ease: "power4.inOut",
//   },"<1")
//   .to(".box4", {
//     x: 800,
//     duration: 2.3,
//     ease: "power4.inOut",
//   },"chinu-=0.5");