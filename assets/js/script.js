$(document).ready(function(){
    const span = $(".close");
    const modal = $("#advModal");
    const modalSel = $(".clickable");
    const open = $(".open");
    
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

    //modal settings for portfolio
    const images = [{url: "assets/images/calendar.jpg", href: "https://edwardemc.github.io/calendar/"}, {url: "assets/images/weatherApp.jpg", href: "https://edwardemc.github.io/weather-Forecast/"}, {url: "assets/images/triviaGame.jpg", href: "https://edwardemc.github.io/code-Quiz/"}, {url: "assets/images/fantasticRecipeFinder.jpg", href: "https://edwardemc.github.io/project1/"}];

    let y = 0;

    const initial = () => modalSel.attr("src", images[y].url);
    initial();

    //on click functions to control the image slideshow --- change to click on next picture
    // next.on("click", () => {
    //     if(y==images.length-1) {
    //         y = 0;
    //     }
    //     else {
    //         y = y+1;
    //     }
    //     initial();
    // });

    // previous.on("click", () => {
    //     if(y==0) {
    //         y = images.length-1;
    //     }
    //     else {
    //         y = y-1;
    //     }
    //     initial();
    // });

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