"use strict";
document.addEventListener("DOMContentLoaded", init)

const urlIndex = "https://karinavalens-35ec.restdb.io/rest/portafolio";
const restioApiKeyIndex = {
    headers: {
        "x-apikey": "62838b6de8128861fcf3d3b6",
    },
};

function init() {
    loadJson();
    setupBurger();
    startHomePageAnim();
}
async function loadJson() {
    const res = await fetch(urlIndex, restioApiKeyIndex);
    const projectsData = await res.json();

    // when loaded, handleProjects
    projectsCards(projectsData);
}

function projectsCards(projectsData) {
    projectsData.forEach(displayProjectCard);
}

function displayProjectCard(project) {
    /* ---- //Project Page// ------- */
    // 1.- Select the content from the template
    const templateCard = document.querySelector("#single-template").content;
    // 2.- Clone the template
    const cloneCard = templateCard.cloneNode(true);
    // 3.- Populate the data

    cloneCard.querySelector("[data-field=project-img]").src = project.final_img;
    cloneCard.querySelector("[data-field=project-img]").alt = project.name;
    cloneCard.querySelector("[data-field=project-name]").textContent = project.name;



    // 4.- Select the new parent element in the dom
    const parent = document.querySelector("#projects-list");
    // 5.- Appen  the child to the new parent element inside the Dom
    parent.appendChild(cloneCard);
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

/* --------- //SKILLS// --------- */
function startHomePageAnim() {
    const skillUX = document.querySelector("#ux_ui");
    const skillFE = document.querySelector("#front_end");
    const skillMD = document.querySelector("#mult_designer");
    const skillsKeyFrames = [
        /* {
                    transform: 'translate(0,15vw) scale(0, 0)',
                    easing: 'ease-in'
                }, */
        {
            transform: 'translate(-40vw,15vw) scale(0, 0)',
            easing: 'ease-in'
        }, {
            transform: 'translate(-20vw,20vw) scale(0, 0)',
        },
        {
            transform: 'translate(-10vw,25vw) scale(.3, .3)',
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

    skillUX.animate(skillsKeyFrames, skillsProperties);
    setTimeout(() => {
        skillFE.animate(skillsKeyFrames, skillsProperties)
    }, 2000);
    setTimeout(() => {
        skillMD.animate(skillsKeyFrames, skillsProperties)
    }, 4000);
}