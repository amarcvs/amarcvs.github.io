// menu animation
$(document).ready(function() {
    window.scrollTo(0, 0);
});

function toggleMenu() {
    let menuToggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');
    
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
    
    if (window.scrollY > 0) window.scrollTo(0, 0);
}