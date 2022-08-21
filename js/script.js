

const burger = document.querySelector("#burgerMenu");

function setupBurger() {
    console.log("setupBurger");
    burger.addEventListener("click", e => burger.classList.toggle("open"));
}
setupBurger();