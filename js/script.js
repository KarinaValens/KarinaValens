"use strict";

document.addEventListener("DOMContentLoaded", init)

const url = "https://pfgscytowfvxabrpcxym.supabase.co/rest/v1/portfolio";
const headers = {
    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmZ3NjeXRvd2Z2eGFicnBjeHltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg5MTcsImV4cCI6MTk4MjE3NDkxN30.bgLR1zZm8um7UTaebly3sZtu6dKDNsxb8eTZAYFoAAM',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmZ3NjeXRvd2Z2eGFicnBjeHltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg5MTcsImV4cCI6MTk4MjE3NDkxN30.bgLR1zZm8um7UTaebly3sZtu6dKDNsxb8eTZAYFoAAM',
    'Content-Type': 'application/json',
    Prefer: 'return=representation'
};


function init() {

    loadJson();
    setupBurger();
}

async function loadJson() {

    const options = {
        method: "GET",
        headers: headers,
    }

    const res = await fetch(url, options);
    const projectsData = await res.json();
    console.log(projectsData);
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

        document.querySelector("#design-text").textContent = project.pre_design_description;

        document.querySelector("#adj-design-img").src = project.adjust_design_img;
        document.querySelector("#adj-design-img").alt = `Adjust design image of ${project.name}`;
        document.querySelector("#adj-design-text").textContent = project.adjust_design_description;


        if (project.testing_design_img) {
            /*             this if statement is to display the divs only if the information exist in the data base. This to give me flexibility 
             about how many fields I want to show in each project*/
            document.querySelector("#test-design-img").src = project.testing_design_img;
            document.querySelector("#test-design-img").alt = `Testing design image of ${project.name}`;
            document.querySelector("#test-design-text").textContent = project.testing_design_description;
        } else {
            document.querySelector("#test-design-div").classList.add("close");
            //remember to remove the class after the pop-up close
        }

        document.querySelector("#project-link").setAttribute("href", `${project.site_link}`);
        document.querySelector("#project-link").setAttribute("target", "_blank");

    }

    function closePopup() {
        document.querySelector("#single-project-pop-up").classList.remove("open");
        document.querySelector("#projects-list").classList.remove("close");
        document.querySelector("#close-popup").removeEventListener("click", closePopup);
        document.querySelector("#test-design-div").classList.remove("close");

    }
    // 4.- Select the new parent element in the dom
    const parent = document.querySelector("#projects-list");
    // 5.- Appen  the child to the new parent element inside the Dom
    parent.appendChild(clone);
}