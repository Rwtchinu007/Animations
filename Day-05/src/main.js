import { gsap } from "gsap";
import { ScrollTrigger, SplitText, Draggable, InertiaPlugin, Flip } from "gsap/all";
import "./style.css";

gsap.registerPlugin(ScrollTrigger, SplitText, Draggable, InertiaPlugin, Flip);

const imageGallery = document.querySelector(".imageGallery");
const imageShow = document.querySelector(".imageShow");

// Listen for clicks on the image gallery container
imageGallery.addEventListener("click", (e) => {
  // Make sure the user actually clicked on an image
  if (e.target.tagName === "IMG") {
    const clickedImg = e.target;
    const currentMainImg = imageShow.querySelector("img");

    // 1. Capture the current layout state of both images
    const state = Flip.getState([clickedImg, currentMainImg]);

    // 2. Swap them in the DOM
    // Put the current main image in the gallery where the clicked image used to be
    imageGallery.insertBefore(currentMainImg, clickedImg);
    // Put the clicked image into the main show area
    imageShow.appendChild(clickedImg);

    // 3. Animate the transition between the two states
    Flip.from(state, {
      duration: 0.8,
      ease: "power3.inOut",
      absolute: true, // Prevents layout jumps during animation
      scale: true,    // Animates the size smoothly
      nested: true,   // Important for flexbox containers
      zIndex: 10,     // Ensures the swapping images appear on top
    });
  }
});

// Optional: Also allow clicking the main image to swap it back with the first image in the gallery
imageShow.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const mainImg = e.target;
    const firstGalleryImg = imageGallery.querySelector("img");
    
    if (firstGalleryImg) {
      const state = Flip.getState([mainImg, firstGalleryImg]);
      
      imageGallery.insertBefore(mainImg, firstGalleryImg);
      imageShow.appendChild(firstGalleryImg);
      
      Flip.from(state, {
        duration: 0.8,
        ease: "power3.inOut",
        absolute: true,
        scale: true,
        nested: true,
        zIndex: 10,
      });
    }
  }
});