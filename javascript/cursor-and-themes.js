// cursor animation
$(document).ready(function() {
    let mouseCursor = document.createElement("div");
    let mouseInnerCursor = document.createElement("div");
    document.body.appendChild(mouseCursor);
    document.body.appendChild(mouseInnerCursor);

    mouseCursor.classList.add("cursor");
    mouseInnerCursor.classList.add("innercursor");

    document.querySelectorAll('body, a, button').forEach(element => { // usefull if a device has JS disabled
        element.style.cursor = 'none';
    });

    if (!isTouchEnabled()) {
        let navLinks = document.querySelectorAll('a, button, div.toggle');

        window.addEventListener('mousemove', cursor);

        function cursor(e) {
            mouseCursor.style.top = e.pageY + "px";
            mouseCursor.style.left = e.pageX + "px";
            mouseInnerCursor.style.top = e.pageY + "px";
            mouseInnerCursor.style.left = e.pageX + "px";
        }

        navLinks.forEach(link => {
            link.addEventListener("mouseover", () => {
                mouseCursor.classList.add('cursor-change');
                mouseInnerCursor.classList.add('innercursor-change');
            });

            link.addEventListener("mouseleave", () => {
                mouseCursor.classList.remove('cursor-change');
                mouseInnerCursor.classList.remove('innercursor-change');
            });
        });

        $(document).mouseleave(function () {
            mouseCursor.style.display = 'none';
            if(localStorage.getItem('vaporMode') === 'enabled')
                mouseInnerCursor.classList.remove('vapor-innercursor');
        });

        $(document).mouseenter(function () {
            mouseCursor.style.display = 'block';
            if(localStorage.getItem('vaporMode') === 'enabled')
                mouseInnerCursor.classList.add('vapor-innercursor');
        });
    }
    else {
        mouseCursor.classList.remove('cursor');
        mouseInnerCursor.classList.remove('innercursor');
    }
});

// switch to vaporwave theme
$(document).ready(function() {
    let mouseCursor = document.querySelector(".cursor");
    let mouseInnerCursor = document.querySelector(".innercursor");

    if(localStorage.getItem('vaporMode') === 'enabled') {
        $("html").attr("data-theme", "vaporwave");
        mouseCursor.classList.add('vapor-cursor');
        mouseInnerCursor.classList.add('vapor-innercursor');
    }
});

function toggleMode() {
    if (!isTouchEnabled()) {
        let mouseCursor = document.querySelector(".cursor");
        let mouseInnerCursor = document.querySelector(".innercursor");
        mouseCursor.classList.toggle('vapor-cursor');
        mouseInnerCursor.classList.toggle('vapor-innercursor');
    }

    let isVapor = $("html").attr("data-theme") === "vaporwave";
    $("html").attr("data-theme", isVapor ? "default" : "vaporwave");
    localStorage.setItem("vaporMode", isVapor ? "disabled" : "enabled");

    window.scrollTo(0, 0);
}

function isTouchEnabled() {
    return ('ontouchstart' in window ) ||
       (navigator.maxTouchPoints > 0 ) ||
       (navigator.msMaxTouchPoints > 0 );
}