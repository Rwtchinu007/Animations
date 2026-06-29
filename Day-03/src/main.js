import { gsap } from "gsap";
import "./style.css";

// Stagger is used to create a delay between the animations of multiple elements. It allows you to animate a group of elements with a specified delay between each animation.

// if we use negative stagger value, the animations will start in reverse order, creating a "backward" effect.

// if we want to animate the specific element first, we can use the "from" property in the stagger object. The "from" property can take values like "start", "center", "end", or "random" to determine the starting point of the staggered animations.

// gsap.to(".box", {
//   x: "70vw",
//   duration: 1,
//   ease: "elastic.inOut",
//   repeat: -1,
//   yoyo: true,
//   delay: 0.6,
//   // stagger: 0.2,
// //   stagger: -0.2,
// stagger:{
//     each: 0.2,
//     // from: "center"
//     // from: "random"
// }
// });


// Revealing animation masking effect
gsap.from("h1 span",{
    yPercent: 100,
    opacity: 0,
    color: "smokewhite",
    duration: 1.5,
    ease:"expo.out",
    // stagger:-0.1,
    stagger:{
        each:0.08,
        from:"random"
    }
})

