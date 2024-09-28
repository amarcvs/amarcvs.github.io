// fade in/fade out animation
$(document).ready(function() {
    $("body").animate({ opacity: 1 }, 300);

    $("a").click(function(event) {
        event.preventDefault();
        linkLocation = this.href;

        if(this.target) {
            window.open(linkLocation, '_blank').focus();
        }
        else {
            $("body").animate({ opacity: 0 }, 400, function() {
                window.location.href = linkLocation;
            });
        }
    });
});

$(window).on('unload', function() {
    $("body").css('opacity', '1');
});