window.onload = function() {
    location.href = "#home";
};

$(document).ready(function(){
    const span = $(".close");
    const modal = $("#advModal");
    const modalSel = $(".modalSel");
    const open = $(".open");
    const next = $(".next");
    const previous = $(".previous");

    const info = [
        { 
            feature: "Schooling",
            header: "International Baccalaureate Diploma",
            url: " ",
            text: " "
        },
        { 
            feature: "Work experience",
            header: "Hospitality background",
            url: " ",
            text: " "
        },
        { 
            feature: "Shake Street",
            header: "Personal business venture",
            url: " ",
            text: " "
        },
        { 
            feature: "Triology Education",
            header: "Web developement course",
            url: " ",
            text: " "
        },
        { 
            feature: "University of South Australia",
            header: "Bachelor of Information Technology",
            url: " ",
            text: " "
        }
    ];
    
    //button to move past the hero section
    $("#view").on("click", function(){
        location.href = "#about";
    });

    //button to go from bottom to top
    $("#backUp").on("click", function(){
        location.href = "#home";
    });

    //display navigation bar after scrolling past hero section
    let isFixed = false;
    $(document).on("scroll", function(){
        const navbar = $(".navi");
        const hSHeight = $("section").height();

        if($(window).scrollTop()>=hSHeight && !isFixed) {
            isFixed = true
            navbar.removeClass("hidden");
            // navbar.hide().addClass("page-link").slideDown(300);
            navbar.addClass("page-link");
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
    $(".single-item > span").on("click", function() {
        $(".single-item").removeClass("single-item-active").fadeToggle(200);
        $(this).parent().addClass("single-item-active").fadeToggle(200);
        const pos = this.id;
        displayInfo(pos);
    });

    const displayInfo = param1 => {
        $(".information").empty();

        const div1 = $("<div>").addClass("card");
        const div2 = $("<div>").addClass("card-header");
        const div3 = $("<div>").addClass("card-body");
        const h5 = $("<h5>").addClass("card-title");
        const img = $("<img>").addClass("timeline-picture");
        const p = $("<p>").addClass("card-text");

        div2.text(info[param1].feature);
        h5.text(info[param1].header);
        img.text(info[param1].url);
        p.text(info[param1].text);

        div3.append(h5, p);
        div1.append(div2,div3);
        $(".information").append(div1);
    }

    //modal settings for portfolio
    const images = [
        [{
                url: "assets/images/calendar.jpg", href: "https://edwardemc.github.io/calendar/"
            }, 
            {
                url: "assets/images/weatherApp.jpg", href: "https://edwardemc.github.io/weather-Forecast/"
            }, 
            {
                url: "assets/images/triviaGame.jpg", href: "https://edwardemc.github.io/code-Quiz/"
            }, 
            {
                url: "assets/images/fantasticRecipeFinder.jpg", href: "https://edwardemc.github.io/project1/"
        }],
        [{
                url: "assets/images/underConst.png", href: ""
            },
                "","",""],
            [{
                url: "assets/images/underConst.png", href: ""},
                "","",""
        ]
    ];

    let y = 0;
    let x = 0;

    const initial = () => modalSel.attr("src", images[x][y].url);
    initial();
    
    // on click functions to control the image slideshow --- change to click on next picture
    next.on("click", () => {
        if(y==images[x].length-1) {
            y = 0;
        }
        else {
            y = y+1;
        }
        initial();
    });

    previous.on("click", () => {
        if(y==0) {
            y = images[x].length-1;
        }
        else {
            y = y-1;
        }
        initial()
    });

    open.on("click", () => window.open(images[x][y].href, "blank"));

    //on click functions for changing the portfolio libraries
    $(".types").on("click", function() {
        y = 0;
        x = $(this).attr("value");
        initial(x);
    });

    //on click to open the advanced search modal
    modalSel.on("click", () => {
        modal.css("display", "block");
        $(".modalPic").attr({
            src: images[x][y].url,
        });
        $(".modalPic").attr("style", "width:300px; height:300px; float:right; margin-left:30px;"); 
    });

    //clicking the x button will close the modal
    span.on("click", () => modal.css("display", "none"));

    //on click event for social media icons
    $(".icons").on("click", function() {
        window.open($(this).attr("value"), "blank");
    });

    $("#view").mouseenter(function() {
        $("#arrow").text(" \u2193");
    });

    $("#view").mouseleave(function() {
        $("#arrow").text("\u2192");
    });
});