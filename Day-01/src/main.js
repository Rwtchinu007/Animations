import "./style.css";
import gsap from "gsap";
// you can select multiple elements using array
// gsap by default unit for distance is in pixels, but you can also use percentage, vw, vh, etc.
// gsap by default unit for duration is in seconds, but you can also use milliseconds, minutes, etc.
// .to => current position to new position
// .from => temporary position to current position

// gsap.to(".box",{
//     delay: 0.5,
//     x:250,
//     duration: 1,
// })
// gsap.from(".box",{
//     delay: 0.5,
//     x:250,
//     duration: 1,
// })

// iin fromTo method, we can define both starting and ending point
// from mtlb default se starting point tk jana
// to mtlb starting point se ending point tk jana 

gsap.fromTo(
  ".box",
  {
    x: 100,
  },
  {
    delay: 0.8,
    x: 400,
    y: 200,
    duration: 1.5,
  },
);


// set property is used to set the property of an element without any animation and immediately. It is used to set the initial state of an element before any animation starts.
gsap.set(".box", {
    borderRadius: "50%",
    backgroundColor: "skyblue",
});
