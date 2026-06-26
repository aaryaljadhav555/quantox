/* ==========================================================
   NEXTGEN TECHNOLOGIES
   script.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Loader
    ========================================== */

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("fade-out");
        }, 500);
    });

    /* ==========================================
       Sticky Navbar
    ========================================== */

    const navbar = document.querySelector(".navbar");

    function handleNavbar() {
        if (window.scrollY > 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    handleNavbar();

    window.addEventListener("scroll", handleNavbar);

    /* ==========================================
       Mobile Navigation
    ========================================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }

    });

    /* ==========================================
       Close Menu on Link Click
    ========================================== */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

        });

    });

    /* ==========================================
       Smooth Scrolling
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }

        });

    });

    /* ==========================================
       Scroll Reveal
    ========================================== */

    const reveals = document.querySelectorAll(

        ".reveal,.reveal-left,.reveal-right,.reveal-zoom"

    );

    function revealElements(){

        const windowHeight = window.innerHeight;

        reveals.forEach(el=>{

            const top = el.getBoundingClientRect().top;

            if(top < windowHeight - 120){

                el.classList.add("active");

            }

        });

    }

    revealElements();

    window.addEventListener("scroll", revealElements);

    /* ==========================================
       Active Navigation
    ========================================== */

    const sections = document.querySelectorAll("section");

    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll",()=>{

        let current = "";

        sections.forEach(section=>{

            const sectionTop = section.offsetTop-120;

            const sectionHeight = section.clientHeight;

            if(window.scrollY >= sectionTop){

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href") === "#" + current){

                link.classList.add("active");

            }

        });

    });

    /* ==========================================
       Counter Animation Trigger
    ========================================== */

    const counterSection = document.querySelector(".stats");

    let counterStarted = false;

    function startCounter(){

        if(counterStarted) return;

        const sectionTop = counterSection.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight-100){

            counterStarted=true;

            document.dispatchEvent(

                new Event("startCounter")

            );

        }

    }

    startCounter();

    window.addEventListener("scroll",startCounter);

    /* ==========================================
       Hero Mouse Parallax
    ========================================== */

    const heroImage = document.querySelector(".hero-image");

    document.addEventListener("mousemove",(e)=>{

        if(!heroImage) return;

        const x=(window.innerWidth/2-e.pageX)/40;

        const y=(window.innerHeight/2-e.pageY)/40;

        heroImage.style.transform=

        `translate(${x}px,${y}px)`;

    });

});

/* ==========================================
   Back To Top Button
========================================== */

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.id="topButton";

document.body.appendChild(topButton);

Object.assign(topButton.style,{

position:"fixed",

bottom:"30px",

right:"30px",

width:"50px",

height:"50px",

border:"none",

borderRadius:"50%",

fontSize:"20px",

cursor:"pointer",

display:"none",

zIndex:"999",

background:"#00bfff",

color:"#fff",

boxShadow:"0 10px 25px rgba(0,0,0,.25)",

transition:".3s"

});

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
