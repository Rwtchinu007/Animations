import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
gsap.registerPlugin(ScrollTrigger);
// for scroll trigger we need three things
// 1. trigger - the element that will trigger the animation
// 2. start - when the animation should start
// 3. end - when the animation should end

gsap.to(".box", {
  x: 1250, 
  ease: "power4.inOut",
  scrollTrigger: {
    trigger: ".page2",
    start: "top top",
    end: "top -40%",
    scrub: true, // scrub true means the animation will be linked to the scroll position
    // scrub value means the animation will be linked to the scroll position but with a delay of that value in seconds
    pin: true, // pin true means the element will be pinned in place while the animation is running

    onEnter: ()=>{
    },
    onLeave: ()=>{},
    onEnterBack: ()=>{},
    onLeaveBack: ()=>{},
    onUpdate: ()=>{},

}
});
