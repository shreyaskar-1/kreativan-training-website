var tl = gsap.timeline()
tl.from("#md1", {
    rotate: 2,
    duration: 1,
    yoyo: true,
    repeat: -1
})

var tl = gsap.timeline()
tl.from("#p",{
     scale:0,
     duration:1,
    yoyo:true,
     repeat:-1
})


document.addEventListener("DOMContentLoaded", function () {
    function toggleSearchField() {
        var searchField = document.getElementById("searchField");
        searchField.classList.toggle("show");
    }

    const toggleBtn = document.querySelector(".toggle_btn");
    const toggleBtnIcon = document.querySelector(".toggle_btn i");
    const dropdownMenu = document.querySelector(".dropdown_menu");
    toggleBtn.onclick = function () {
        dropdownMenu.classList.toggle("open");
        const isOpen = dropdownMenu.classList.contains("open");

        toggleBtnIcon.classList = isOpen
            ? "fa-solid fa-xmark"
            : "fa-solid fa-bars";
    };
});