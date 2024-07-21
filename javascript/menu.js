// menu animation
$(document).ready(function() {
    window.scrollTo(0, 0);
});

window.addEventListener('scroll', function () {
    if(this.window.innerWidth > 600) {
        let header = document.querySelector('header');
        
        header.classList.toggle('sticky', window.scrollY > 0);
        header.style.zIndex = "2"; /* 998 */

    }
});

function toggleMenu() {
    let menuToggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');
    
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
    
    if (window.scrollY > 0) window.scrollTo(0, 0);
}