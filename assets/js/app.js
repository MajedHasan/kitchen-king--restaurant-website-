$(document).ready(function () {
    // Menu Variable
    var menuToggleBtn = document.getElementById("menu-toggle");
    var menu = document.getElementById("menu-item-wrapper");

    // Menu Toggle Adding Active Class When clicking
    menuToggleBtn.addEventListener("click", function () {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });
});