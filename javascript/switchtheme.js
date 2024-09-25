// switch to vaporwave theme
let mouseCursor = document.querySelector(".cursor");
let mouseInnerCursor = document.querySelector(".innercursor");

$(document).ready(function() {
    if(localStorage.getItem('vaporMode') === 'enabled') {
        $("html").attr("data-theme", "vaporwave");
        mouseCursor.classList.add('vapor-cursor');
        mouseInnerCursor.classList.add('vapor-innercursor');
    }
});

function toggleMode() {
    let isVapor = $("html").attr("data-theme") === "vaporwave";

    $("html").attr("data-theme", isVapor ? "default" : "vaporwave");
    mouseCursor.classList.toggle('vapor-cursor');
    mouseInnerCursor.classList.toggle('vapor-innercursor');
    localStorage.setItem("vaporMode", isVapor ? "disabled" : "enabled");
}
