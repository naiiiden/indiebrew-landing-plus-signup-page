document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav-ul").classList.toggle("show");
    if (document.querySelector("#hamburger").ariaExpanded == "false") {
        document.querySelector("#hamburger").ariaExpanded = "true";
        document.querySelector("#hamburger").ariaLabel = "Close menu";
    } else {
        document.querySelector("#hamburger").ariaExpanded = "false";
        document.querySelector("#hamburger").ariaLabel = "Open menu";
    }
});