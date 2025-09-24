$(document).ready(function () {
    function toggleMenu() {
        if (window.matchMedia("(max-width: 800px)").matches) {
            $("#hamburger-menu").removeClass("accessible-hidden");
            $("#nav-menu").addClass("accessible-hidden");
        } else {
            $("#hamburger-menu").addClass("accessible-hidden");
            $("#nav-menu").removeClass("accessible-hidden");
        }
    }

    toggleMenu();
    $(window).on("resize", toggleMenu);
    $("#hamburger-menu").on("click", function () {
        $("#nav-menu").toggleClass("accessible-hidden");
    });
});
