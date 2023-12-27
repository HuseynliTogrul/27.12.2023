"use strict";

const animationItems = document.querySelectorAll(".animationItem");

const scrollAnimation = () => {
    animationItems.forEach((animationItem) => {
        const triggerItems = window.innerHeight * 0.8;
        const distanceFromTop = animationItem.getBoundingClientRect().top;

        animationItem.style.transition = "all 200ms linear";

        if (distanceFromTop < triggerItems) {
            animationItem.style.opacity = 1;
            animationItem.style.transform = "translateY(0px)";
        }else{
            animationItem.style.opacity = 0;
            animationItem.style.transform = "translateY(50px)";
        }
    })
}

scrollAnimation();

window.addEventListener("scroll",scrollAnimation);