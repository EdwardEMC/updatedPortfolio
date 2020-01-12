window.onload = function() {
    location.href = "#home";
};

$(document).ready(function(){
    const span = $(".close");
    const modal = $("#advModal");
    const modalSel = $(".clickable");
    const open = $(".open");
    const next = $(".next");
    const previous = $(".previous");
    
    //button to move past the hero section
    $("#view").on("click", function(){
        location.href = "#about";
    });

    //cross browser smooth scroll function -- causes slow scroll on chrome? check on other browsers
    // $("a").on("click", function(event) {
    //     if (this.hash !== "") {
    //         event.preventDefault();

    //         var hash = this.hash;

    //         $('html, body').animate({
    //         scrollTop: $(hash).offset().top
    //         }, 800, function(){
    //             window.location.hash = hash;
    //         });
    //     }
    // });

    //display navigation bar after scrolling past hero section
    let isFixed = false;
    $(document).on("scroll", function(){
        const navbar = $(".navi");
        const hSHeight = $("section").height();

        if($(window).scrollTop()>=hSHeight && !isFixed) {
            isFixed = true
            navbar.removeClass("hidden");
            navbar.hide().addClass("page-link").slideDown(300);
        }

        if($(window).scrollTop()<hSHeight && isFixed) {
            isFixed = false;
            navbar.slideUp(300, function(){
                navbar.removeClass("page-link").show();
                navbar.addClass("hidden");
            });
        }
    });

    // $(document).on("scroll", function(){
    //     const hSHeight = $("section").height();

    //     if($(window).scrollTop()<hSHeight) {
    //         window.location.hash = "home";
    //     }
    //     if($(window).scrollTop()>=hSHeight&&$(window).scrollTop()<hSHeight*2) {
    //         window.location.hash = "about";
    //     }
    //     else if( $(window).scrollTop()>=hSHeight*2&&$(window).scrollTop()<hSHeight*3) {
    //         window.location.hash = "portfolio";
    //     }
    //     else if( $(window).scrollTop()>=hSHeight*3&&$(window).scrollTop()<hSHeight*4) {
    //         window.location.hash = "contact";
    //     }
    // });

    //timeline settings
    $(".wrapper .single-item > span").on("click", function(e) {
        $(".wrapper .single-item.active").removeClass("active");
        $(this).parent().addClass("active");
    })

    //modal settings for portfolio
    const images = [{url: "assets/images/calendar.jpg", href: "https://edwardemc.github.io/calendar/"}, {url: "assets/images/weatherApp.jpg", href: "https://edwardemc.github.io/weather-Forecast/"}, {url: "assets/images/triviaGame.jpg", href: "https://edwardemc.github.io/code-Quiz/"}, {url: "assets/images/fantasticRecipeFinder.jpg", href: "https://edwardemc.github.io/project1/"}];

    let y = 1;

    const positive = function(y) {
        if(y==images.length-1) {
            y = 0;
        }
        else {
            y = y+1;
        }
        return y;
    }

    const negative = function(y) {
        if(y==0) {
            y = images.length-1;
        }
        else {
            y = y-1;
        }
        return y;
    }

    const initial = () => {
        previous.attr("src", images[negative(y)].url);
        modalSel.attr("src", images[y].url);
        next.attr("src", images[positive(y)].url);
        }
    initial();
    
    // on click functions to control the image slideshow --- change to click on next picture
    next.on("click", () => {
        if(y==images.length-1) {
            y = 0;
        }
        else {
            y = y+1;
        }
        initial();
    });

    previous.on("click", () => {
        if(y==0) {
            y = images.length-1;
        }
        else {
            y = y-1;
        }
        initial()
    });

    open.on("click", () => window.location = images[y].href);

    //on click to open the advanced search modal
    modalSel.on("click", () => {
        modal.css("display", "block");
        $(".modalPic").attr({
            src: images[y].url
        });
    });

    //clicking the x button will close the modal
    span.on("click", () => modal.css("display", "none"));
});