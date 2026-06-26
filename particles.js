/* ==========================================================
   particles.js
   Hero Background Particles
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof particlesJS === "undefined") {
        console.warn("particles.js library not loaded.");
        return;
    }

    particlesJS("particles-js", {
        particles: {
            number: {
                value: 70,
                density: {
                    enable: true,
                    value_area: 900
                }
            },

            color: {
                value: "#00bfff"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.4,
                random: true
            },

            size: {
                value: 3,
                random: true
            },

            line_linked: {
                enable: true,
                distance: 150,
                color: "#00bfff",
                opacity: 0.2,
                width: 1
            },

            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out"
            }
        },

        interactivity: {

            detect_on: "canvas",

            events: {

                onhover: {
                    enable: true,
                    mode: "grab"
                },

                onclick: {
                    enable: true,
                    mode: "push"
                },

                resize: true

            },

            modes: {

                grab: {

                    distance: 180,

                    line_linked: {
                        opacity: 0.6
                    }

                },

                push: {
                    particles_nb: 4
                }

            }

        },

        retina_detect: true

    });

});
