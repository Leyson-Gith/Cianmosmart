/* =========================
   MENU RESPONSIVE
========================= */

const aside =
document.querySelector("aside");

const closeMenu =
document.querySelector("#close-menu");


closeMenu.addEventListener("click", () => {

    if (window.innerWidth <= 950) {

        aside.classList.remove("active");

    }

});
