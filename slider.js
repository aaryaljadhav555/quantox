/* ==========================================================
   slider.js
   Testimonial Slider
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelector(".testimonial-slider");

    if (!slider) return;

    const slides = slider.querySelectorAll(".testimonial");

    const prev = document.querySelector(".slider-prev");
    const next = document.querySelector(".slider-next");
    const dotsContainer = document.querySelector(".slider-dots");

    let current = 0;
    let autoSlide;

    /* -----------------------------
       Create Dots
    ----------------------------- */

    slides.forEach((_, index) => {

        const dot = document.createElement("button");

        dot.className = "slider-dot";

        if(index === 0){
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            current = index;
            updateSlider();
            restartAuto();
        });

        dotsContainer.appendChild(dot);

    });

    const dots = document.querySelectorAll(".slider-dot");

    /* -----------------------------
       Update Slider
    ----------------------------- */

    function updateSlider(){

        slider.style.transform =
            `translateX(-${current * 100}%)`;

        dots.forEach(dot=>dot.classList.remove("active"));

        dots[current].classList.add("active");

    }

    /* -----------------------------
       Next Slide
    ----------------------------- */

    function nextSlide(){

        current++;

        if(current >= slides.length){

            current = 0;

        }

        updateSlider();

    }

    /* -----------------------------
       Previous Slide
    ----------------------------- */

    function prevSlide(){

        current--;

        if(current < 0){

            current = slides.length - 1;

        }

        updateSlider();

    }

    /* -----------------------------
       Auto Slide
    ----------------------------- */

    function startAuto(){

        autoSlide = setInterval(nextSlide,5000);

    }

    function restartAuto(){

        clearInterval(autoSlide);

        startAuto();

    }

    next?.addEventListener("click",()=>{

        nextSlide();

        restartAuto();

    });

    prev?.addEventListener("click",()=>{

        prevSlide();

        restartAuto();

    });

    /* -----------------------------
       Touch Support
    ----------------------------- */

    let startX = 0;

    slider.addEventListener("touchstart",(e)=>{

        startX = e.touches[0].clientX;

    });

    slider.addEventListener("touchend",(e)=>{

        const endX = e.changedTouches[0].clientX;

        if(startX-endX>50){

            nextSlide();

        }

        if(endX-startX>50){

            prevSlide();

        }

        restartAuto();

    });

    updateSlider();

    startAuto();

});
