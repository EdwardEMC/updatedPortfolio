const images = [ //information to do with the portfolio
    [{
            url: "assets/images/calendar.jpg", 
            href: "https://edwardemc.github.io/calendar/",
            text: "A calendar application to schedule events. The entire application is dynamically updated with moment.js so that the days of the month are always in the correct position and the date is correct. Hovering over the days will show the user which day is being focused and clicking on any one of the days will bring up the day planner where information about a certain day/time can be saved. All days in the past and present are displayed as simple input boxes while the current date (red color coded date display) will bring up the advanced day planner (updated hourly to keep track of events). It works by placing text within the coloured boxes and then saving them with the save button provided. It is colour coded to represent the present hour in red, any previous hour slots in grey and any hour slots in the future in green. On load the application checks the local storage for the date and any previously save data. Any days with data saved will be displayed with a light green background color on the main calendar page as to signal to the user there is something within this day. There are two clear buttons one on the main calendar page and one inside every day planner extension, clear simply empties the html elements local to the page while clear all will empty the elements and the local storage for all days."
        }, 
        {
            url: "assets/images/weatherApp.jpg", 
            href: "https://edwardemc.github.io/weather-Forecast/",
            text: "A simple weather forecast that shows the user the current weather at a location as well as the 5 day forecast. The user is first prompted to allow for location tracking, this will either automatically display the user's city weather information or will load the default of Adelaide, depending on whether or not they allow location data. The information shown includes the maximum temperature for the day, weather conditions and humidity along with accompanying weather pictures. Searching cities is provided from the input area on the left hand side, all valid searches will be saved in the form of buttons which can be re-activated on click. Pressing the clear button will clear all previous searches and allow for a fresh restart of the application."
        }, 
        {
            url: "assets/images/triviaGame.jpg", 
            href: "https://edwardemc.github.io/code-Quiz/",
            text: "A series of quizzes to test your knowledge on the various topics. The quiz begins on the title page where you can select one of three topics, javaScript, html or css. Pressing one of these will direct you to the ready screen; it's simply a button to start the quiz and a basic definition of what the topic is below. Each quiz is timed depending on the number of questions, to keep everything uniform each quiz has 6 different questions but more can be added if necessary. To select an answer hover over it with your mouse, it should be highlighted in blue and click it. An alert will let the user know if they have been sucessful or not, if not a certain amount of time will be deducted from their overal time remaining. At the end of the questions, the user will be prompted to input their initials after which their score and initials will be saved to the local storage and displayed on the highscore page in order of score (highest to lowest). If the user wishes to go again or choose a different quiz they just have to click the home link in the navigation bar."
        }, 
        {
            url: "assets/images/fantasticRecipeFinder.jpg", 
            href: "https://edwardemc.github.io/project1/",
            text: "An app to find a set of recipes based off a single ingredient. The search input takes in an ingredient and then displays 10 recipe options and an image relating to the recipe. The 10 options are displayed as buttons, clicking on one will display the recipe name, ingredients and cooking process. That specific recipe will be added as a button below the search area whilst also being saved to the local storage so that it can easily be accessed at a later time. On reload of the page, all past searches will be displayed as buttons below the search area. If a specific recipe is re-searched, an additional button will not be added, only one button with that value will exist. Clicking the clear button will clear all previous search buttons as well as the local storage and refresh the page resulting in a �new� application interface."
    }],
    [{
            url: "assets/images/underConst.png", 
            href: "",
            text: ""
        },
            "","",""],
    [{
            url: "assets/images/underConst.png", 
            href: "",
            text: ""
        },
            "","",""
    ]
];

const info = [ //information to do with the timeline
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