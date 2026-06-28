import gsap from "gsap";
import "./style.css";

// In this module , we will learn about easing in gsap. Easing is a way to make animations feel more natural and less linear. It allows us to control the speed of an animation over time, making it accelerate or decelerate at different points.

// different types of easing functions are available in gsap, such as "power1", "power2", "power3", "power4", "elastic", "bounce", "steps" ,"expo", "circ", "back" and many more.
gsap.set(".box", {
  x: -200,
});

gsap.to(".box", {
  x: 1500, 
  duration: 2,
  delay: 0.6,
  ease: " power2.inOut",
  repeat: -1, // repeat the animation infinitely
// yoyo: true, // yoyo makes the animation play forwards and then backwards
});

// yoyo and repeat pe tricky questions puch skte h.


// callback function 
gsap.to(".box",{
    x: 1500,
    duration: 2,
    delay: 0.5,
    ease: " power2.inOut",

    // onStart:()=>{
    //     console.log("Animation started");
    //    // it will consider the delay time and then it will start the animation
    // }
    // onComplete:()=>{
    //     console.log("Animation completed");
    //     // it will be called when the animation is completed
    // }
    onUpdate:()=>{
        console.log("Animation updated");
      //  // it will be called on every frame of the animation, so it will be called multiple times during the animation
    }
})

