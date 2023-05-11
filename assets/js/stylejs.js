/**
 * Created by shimu on 2/28/16.
 */


$(document).ready(function() {
    $('#fullpage').fullpage({

        anchors: ['featured', 'mission', 'services', 'staff', 'testimonials'],
        menu: '#menu',
        scrollingSpeed: 2000
    });

    //Activate Scrollspy
    $('body').scrollspy({
        target: 'header .navbar',
        offset: topoffset
    });

});
