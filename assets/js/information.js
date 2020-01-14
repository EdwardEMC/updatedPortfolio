const images = [ //information to do with the portfolio
    [{      
            title: "Calendar",
            url: "assets/images/calendar.jpg", 
            href: "https://edwardemc.github.io/calendar/",
            repo: "https://github.com/EdwardEMC/calendar",
            text: "A calendar application to schedule events. The entire application is dynamically updated with moment.js so that the days of the month are always in the correct position and the date is correct. Hovering over the days will show the user which day is being focused and clicking on any one of the days will bring up the day planner where information about a certain day/time can be saved. All days in the past and present are displayed as simple input boxes while the current date (red color coded date display) will bring up the advanced day planner (updated hourly to keep track of events). It works by placing text within the coloured boxes and then saving them with the save button provided. It is colour coded to represent the present hour in red, any previous hour slots in grey and any hour slots in the future in green. On load the application checks the local storage for the date and any previously save data. Any days with data saved will be displayed with a light green background color on the main calendar page as to signal to the user there is something within this day. There are two clear buttons one on the main calendar page and one inside every day planner extension, clear simply empties the html elements local to the page while clear all will empty the elements and the local storage for all days."
        }, 
        {
            title: "Weather Forecast",
            url: "assets/images/weatherApp.jpg", 
            href: "https://edwardemc.github.io/weather-Forecast/",
            repo: "https://github.com/EdwardEMC/weather-Forecast",
            text: "A simple weather forecast that shows the user the current weather at a location as well as the 5 day forecast. The user is first prompted to allow for location tracking, this will either automatically display the user's city weather information or will load the default of Adelaide, depending on whether or not they allow location data. The information shown includes the maximum temperature for the day, weather conditions and humidity along with accompanying weather pictures. Searching cities is provided from the input area on the left hand side, all valid searches will be saved in the form of buttons which can be re-activated on click. Pressing the clear button will clear all previous searches and allow for a fresh restart of the application."
        }, 
        {
            title: "Code Quiz",
            url: "assets/images/triviaGame.jpg", 
            href: "https://edwardemc.github.io/code-Quiz/",
            repo: "https://github.com/EdwardEMC/code-Quiz",
            text: "A series of quizzes to test your knowledge on the various topics. The quiz begins on the title page where you can select one of three topics, javaScript, html or css. Pressing one of these will direct you to the ready screen; it's simply a button to start the quiz and a basic definition of what the topic is below. Each quiz is timed depending on the number of questions, to keep everything uniform each quiz has 6 different questions but more can be added if necessary. To select an answer hover over it with your mouse, it should be highlighted in blue and click it. An alert will let the user know if they have been sucessful or not, if not a certain amount of time will be deducted from their overal time remaining. At the end of the questions, the user will be prompted to input their initials after which their score and initials will be saved to the local storage and displayed on the highscore page in order of score (highest to lowest). If the user wishes to go again or choose a different quiz they just have to click the home link in the navigation bar."
        }, 
        {
            title: "Recipe Finder",
            url: "assets/images/fantasticRecipeFinder.jpg", 
            href: "https://edwardemc.github.io/project1/",
            repo: "https://github.com/EdwardEMC/project1",
            text: "An app to find a set of recipes based off a single ingredient. The search input takes in an ingredient and then displays 10 recipe options and an image relating to the recipe. The 10 options are displayed as buttons, clicking on one will display the recipe name, ingredients and cooking process. That specific recipe will be added as a button below the search area whilst also being saved to the local storage so that it can easily be accessed at a later time. On reload of the page, all past searches will be displayed as buttons below the search area. If a specific recipe is re-searched, an additional button will not be added, only one button with that value will exist. Clicking the clear button will clear all previous search buttons as well as the local storage and refresh the page resulting in a �new� application interface."
    }],
    [{
            title: "",
            url: "assets/images/underConst.png", 
            href: "",
            repo: "",
            text: ""
        },
        {
            title: "",
            url: "assets/images/underConst.png", 
            href: "",
            repo: "",
            text: ""
        },
        {
            title: "",
            url: "assets/images/underConst.png", 
            href: "",
            repo: "",
            text: ""
        },
        {
            title: "",
            url: "assets/images/underConst.png", 
            href: "",
            repo: "",
            text: ""
    }],
    [{
            title: "",
            url: "assets/images/underConst.png", 
            href: "",
            repo: "",
            text: ""
        },
        {
            title: "",
            url: "assets/images/underConst.png", 
            href: "",
            repo: "",
            text: ""
        },
        {
            title: "",
            url: "assets/images/underConst.png", 
            href: "",
            repo: "",
            text: ""
        },
        {
            title: "",
            url: "assets/images/underConst.png", 
            href: "",
            repo: "",
            text: ""
    }]
];

const info = [ //information to do with the timeline
    { 
        feature: "Schooling",
        header: "International Baccalaureate Diploma",
        url: "assets/images/timeline/pembrokeLogo.jpg",
        text: "Received the International Baccalaureate Diploma from Pembroke School in 2011. Subjects: HL Physics, HL Economics, HL Art, SL English, SL Indonesian, SL Maths."
    },
    { 
        feature: "Work experience",
        header: "Hospitality background",
        url: "assets/images/timeline/experience.jpg",
        text: "Extensive experience within the hospitality industry leading to a very wide knowledge base focused on customer care and customer relations. Years of supervising and managing restuarants and cafes have created a very organised nature which I use to approach all projects I work on."
    },
    { 
        feature: "Shake Street",
        header: "Personal business venture",
        url: "assets/images/timeline/shakestreet.jpg",
        text: "A project that started when an initial University degree and everyday hospitality jobs just didn't seem to peek any interest, starting completely from scratch as a mobile food truck and ending in a CBD cafe 3 years later. All aspects of the business were taken care of personally; including design, council interactions, furniture fabrication, accounting, menu composition, etc. Decided to call it quits after 4 years and the initial goal of owning a cafe was complete, now moving on to establish a career in the IT sector."
    },
    { 
        feature: "Triology Education",
        header: "Web developement course",
        url: "assets/images/timeline/webDev.jpg",
        text: "The University of Adelaide Coding Boot Camp is a rigorous and fast-paced part-time, 24-week program that gives participants the knowledge and skills to build dynamic end-to-end web applications and become a full-stack web developer in coordination with Trilogy Education Services. Skills learnt whilst studying: HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, Command Line, Git, and more."
    },
    { 
        feature: "University of South Australia",
        header: "Bachelor of Information Technology",
        url: "assets/images/timeline/unisa.jpg",
        text: "A stepping stone to further my knowledge of computing, software development and the information services industries. The most logical step I could take to secure my career path within the IT industry."
    }
];