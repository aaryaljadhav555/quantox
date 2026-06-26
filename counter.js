/* ==========================================================
   counter.js
   Animated Statistics Counter
========================================================== */

document.addEventListener("startCounter", () => {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);
        const duration = 2000;
        const frameRate = 60;

        const totalFrames = Math.round(duration / (1000 / frameRate));
        const increment = target / totalFrames;

        let current = 0;

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            counter.textContent = Math.floor(current);

        }, 1000 / frameRate);

    });

});
