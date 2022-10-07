"use strict";
document.addEventListener("DOMContentLoaded", startAnim)

const skillUX = document.querySelector("#ux_ui");
const skillFE = document.querySelector("#front_end");
const skillMD = document.querySelector("#mult_designer");

/* --------- //SKILLS// --------- */
const skillsKeyFrames = [{
        transform: 'translate(25vw,15vw) scale(.3, .3)',
        easing: 'ease-in'
    },
    {
        transform: 'translate(20vw,20vw) scale(.6, .6)',

    },
    {
        transform: 'translate(10vw,25vw) scale(.9, .9)',




    },
    {
        transform: 'translate(10vw,23vw) scale(1, 1)',
        easing: 'ease-in'
    },
    {
        transform: 'translate(-10vw,20vw) scale(.9, .9)',

    },
    {
        transform: 'translate(-20vw,15vw) scale(.5,.5)'

    },
    {
        transform: 'translate(-40vw,5vw) scale(0)'
    }
];

const skillsProperties = {
    duration: 6000,
    iterations: Infinity,
}


function startAnim() {
    skillUX.animate(skillsKeyFrames, skillsProperties);


    setTimeout(() => {
        skillFE.animate(skillsKeyFrames, skillsProperties)
    }, 1000);
    setTimeout(() => {
        skillMD.animate(skillsKeyFrames, skillsProperties)
    }, 2000);
}