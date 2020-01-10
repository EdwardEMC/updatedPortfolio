$(document).ready(function(){
    $("#view").on("click", function(){
        location.href = "#about";
    });

    //cross browser smooth scroll function
    $("a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    //change navigation bar after scrolling past hero section
    let isFixed = false;
    $(document).on("scroll", function(){
        const navbar = $(".navi");
        const hSHeight = $("section").height();

        if( $(window).scrollTop()>=hSHeight && !isFixed) {
            isFixed = true
            navbar.removeClass("hidden");
            navbar.hide().addClass("page-link").slideDown(600);
        }

        if( $(window).scrollTop()<hSHeight && isFixed) {
            isFixed = false;
            navbar.slideUp(600, function(){
                navbar.removeClass("page-link").show();
                navbar.addClass("hidden");
            });
        }
    })
});