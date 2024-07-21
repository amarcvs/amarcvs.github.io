// fade in/fade out animation
let body = document.body;

const fade = () => {
    setTimeout(() => {
        body.classList.toggle('fade_out');
    }, 0); /* 1000 */
}

$(document).ready(function() {
    // body.addEventListener('load', fade());
    $('body').bind('load', fade());
});

$(document).ready(function() {
    $("a").click(function(event){
        event.preventDefault();

        linkLocation = this.href;
        if(this.target) {
            window.open(linkLocation, '_blank').focus();
        }
        else {
            $('body').addClass('fade_out').delay(700).queue(function(){
                window.location.href = linkLocation;
            });
        }
    });
});