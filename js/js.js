$(document).ready(function() {

    //Function to make smooth scroll
    $('a[href*="#"]')
        //Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            //On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                //Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                //Does a scroll target exist?
                if (target.length) {
                    //Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        //Callback after animation
                        //Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { //Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); //Adding tabindex for elements not focusable
                            $target.focus(); //Set focus again
                        };
                    });
                }
            }
        });

    //Functions to change languegue between enligh and spanish
    $("#abstract_english").click(function change_languague_english() {
        $("#abstract_english").fadeOut(0);
        $("#abstract_spanish").fadeIn();
    });

    $("#abstract_spanish").click(function change_languague_spanish() {
        $("#abstract_spanish").fadeOut(0);
        $("#abstract_english").fadeIn();
    });

    //Function to scroll top, when it does click on the button "buttonToTop"
    $("#buttonToTop").click(function topFunction() {
        $(window).scrollTop(0);
    });


    //Function to make principalNav and buttonToTop disappear
    function makeDisappear() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            $("#buttonToTop").fadeIn();
        } else {
            $("#buttonToTop").fadeOut();
        }
    }

    //INFOGRAFIA

    $("#btnInfografia").click(function showImag() {
        $("#infografia").fadeIn(1000);
    });

    $("#infografia").click(function hideImg() {
        $("#infografia").fadeOut(1000);
    });
});