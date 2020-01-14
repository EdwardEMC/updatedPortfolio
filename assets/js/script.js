window.onload = function() {
    location.href = "#home";
};

$(document).ready(function() {
    const span = $(".close");
    const modal = $("#advModal");
    const modalSel = $(".modalSel");
    const open = $(".open");
    const openR = $(".openRepo");
    const next = $(".next");
    const previous = $(".previous");
    const modalTitle = $(".appTitle");
    const modalTxt = $(".description");
    const view = $("#view");
   
    //button to move past the hero section
    view.on("click", function(){
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
        const div4 = $("<div>").addClass("card-info");
        const h5 = $("<h5>").addClass("card-title");
        const img = $("<img>").addClass("timeline-picture");
        const p = $("<p>").addClass("card-text");

        div2.text(info[param1].feature);
        h5.text(info[param1].header);
        p.text(info[param1].text);

        div4.attr("style", "float:right;");
        img.attr("src", info[param1].url);
        img.attr("style","height: 200px;width: 200px, float:right;");

        div4.append(img);
        div3.append(h5, div4, p);
        div1.append(div2,div3);
        $(".information").append(div1);
    }

    //modal settings for portfolio
    let y = 0;
    let x = 0;

    const initial = () => {
        modalSel.attr("src", images[x][y].url);
        const h = $("<h3>").text(images[x][y].title);
        const p = $("<p>").text(images[x][y].text);
        modalTitle.empty();
        modalTxt.empty();
        modalTitle.append(h);
        modalTxt.append(p);
    }
    initial();
    
    // on click functions to control the image slideshow 
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

    open.on("click", () => window.open(images[x][y].href, "_blank"));
    openR.on("click", () => window.open(images[x][y].repo, "_blank"));

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

    //hover function for enter button
    view.mouseenter(function() {
        $("#arrow").text(" \u2193");
    });

    view.mouseleave(function() {
        $("#arrow").text("\u2192");
    });
});