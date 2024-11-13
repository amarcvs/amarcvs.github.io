// fade in/fade out animation (not for mobile devices)
if ($(window).width() > 1280) {
    $("body").css("opacity", "0"); // usefull if a device has JS disabled
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

    // usefull if the page takes too much time to fade in
    setTimeout(function() {
        $("body").animate({ opacity: 1 }, 300);
    }, 1000);
}