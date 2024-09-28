// cursor animation
$(document).ready(function() {
    let mouseCursor = document.querySelector(".cursor");
    let mouseInnerCursor = document.querySelector(".innercursor");

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

function isTouchEnabled() {
    return ('ontouchstart' in window ) ||
       (navigator.maxTouchPoints > 0 ) ||
       (navigator.msMaxTouchPoints > 0 );
}