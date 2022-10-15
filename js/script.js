"use strict";

/* import {
    inView,
    animate
} from "https://cdn.skypack.dev/motion"; */


document.addEventListener("DOMContentLoaded", init)

const url = "https://karinavalens-35ec.restdb.io/rest/portafolio";
const restioApiKey = {
    headers: {
        "x-apikey": "62838b6de8128861fcf3d3b6",
    },
};
//api key:6c03100ae96764d9a39b7dc5c9425413673c3


function init() {

    loadJson();
    setupBurger();
}

async function loadJson() {
    const res = await fetch(url, restioApiKey);
    const projectsData = await res.json();

    // when loaded, handleProjects
    handleProjects(projectsData);
}

function handleProjects(projectsData) {
    projectsData.forEach(displayProject);
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

//maybe hacer a search filter for projects
/* ----- //RETRIVE JSON DATA// ---------- */
function displayProject(project) {
    /* ---- //Project Page// ------- */
    // 1.- Select the content from the template
    const template = document.querySelector("#template").content;
    // 2.- Clone the template
    const clone = template.cloneNode(true);
    // 3.- Populate the data
    clone.querySelector("[data-field=project-img]").src = project.final_img;
    clone.querySelector("[data-field=project-img]").alt = `Image of ${project.name}`;
    //on hover card
    clone.querySelector("[data-field=project-name]").textContent = project.name;
    clone.querySelector("[data-field=project-description]").textContent = project.description;
    //button link
    /*     clone.querySelector("a").setAttribute("href", `./single-project.html?id=${project._id}`);
     */
    clone.querySelector("button").addEventListener("click", showProject)

    function showProject() {
        document.querySelector("#single-project-pop-up").classList.add("open");
        document.querySelector("#projects-list").classList.add("close");
        document.querySelector("#close-popup").addEventListener("click", closePopup);



        document.querySelector("#project-name").textContent = project.name;
        document.querySelector("#project-mockup").src = project.mockup_img;
        document.querySelector("[data-field=project-img]").alt = `Mockup image of ${project.name}`;
        document.querySelector("#project-description").textContent = project.description;


        document.querySelector("#design-img").src = project.pre_design_img;
        document.querySelector("#design-img").alt = `Design image of ${project.name}`;
        /*         document.querySelector("#design1").style.backgroundImage = `url(${project.pre_design_img})`;
         */
        document.querySelector("#design-text").textContent = project.pre_design_description;

        document.querySelector("#adj-design-img").src = project.adjust_design_img;
        document.querySelector("#adj-design-img").alt = `Adjust design image of ${project.name}`;
        document.querySelector("#adj-design-text").textContent = project.adjust_design_description;

        document.querySelector("#test-design-img").src = project.testing_design_img;

        document.querySelector("#test-design-img").alt = `Testing design image of ${project.name}`;
        document.querySelector("#test-design-text").textContent = project.testing_design_description;

        document.querySelector("#project-link").setAttribute("href", `${project.visit_site_link}`);
        document.querySelector("#project-link").setAttribute("target", "_blank");

    }

    function closePopup() {
        document.querySelector("#single-project").classList.remove("open");
        document.querySelector("#projects-list").classList.remove("close");
        document.querySelector("#close-popup").removeEventListener("click", closePopup);
    }
    // 4.- Select the new parent element in the dom
    const parent = document.querySelector("#projects-list");
    // 5.- Appen  the child to the new parent element inside the Dom
    parent.appendChild(clone);
}