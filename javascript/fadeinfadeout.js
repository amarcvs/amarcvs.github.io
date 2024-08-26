// fade in/fade out animation
$(window).on('unload', function() {
    $("body").css('opacity', '1');
});

$(document).ready(function() {
    $("body").animate({ opacity: 1 }, 300);
});

$(document).ready(function() {
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
