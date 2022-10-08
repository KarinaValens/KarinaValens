"use strict";
document.addEventListener("DOMContentLoaded", init)

const url = "https://karinavalens-35ec.restdb.io/rest/portafolio";
//api key:6c03100ae96764d9a39b7dc5c9425413673c3


function init() {
    setupBurger();
    startAnim();
}

function setupBurger() {
    /* adding the class open and a toggle event listener to the burger menu and navigation bar  */
    /* console.log("setupBurger"); */
    const burger = document.querySelector("#burgerMenu");
    const navBar = document.querySelector("#navigation");
    burger.addEventListener("click", e => {
        burger.classList.toggle("open");
        navBar.classList.toggle("open");
    });
}

const skillUX = document.querySelector("#ux_ui");
const skillFE = document.querySelector("#front_end");
const skillMD = document.querySelector("#mult_designer");

/* --------- //SKILLS// --------- */



function startAnim() {

    const skillsKeyFrames = [{
            transform: 'translate(-40vw,15vw) scale(0, 0)',
            easing: 'ease-in'
        }, {
            transform: 'translate(-20vw,20vw) scale(.6, .6)',
        },
        {
            transform: 'translate(-10vw,25vw) scale(.9, .9)',
        },
        {
            transform: 'translate(20vw,30vw) scale(1, 1)',
            easing: 'ease-in'
        },
        {
            transform: 'translate(30vw,25vw) scale(.9, .9)',
        },
        {
            transform: 'translate(40vw,20vw) scale(.5,.5)'
        },
        {
            transform: 'translate(50vw,15vw) scale(0)'
        }
    ];

    const skillsProperties = {
        duration: 6000,
        iterations: Infinity,
    }

    /* const skills = document.querySelectorAll(".skills");
    skills.forEach(skill => {
        skill.classList.add("visible");

    }); */

    skillUX.animate(skillsKeyFrames, skillsProperties);
    setTimeout(() => {
        skillFE.animate(skillsKeyFrames, skillsProperties)
    }, 2000);
    setTimeout(() => {
        skillMD.animate(skillsKeyFrames, skillsProperties)
    }, 4000);
}