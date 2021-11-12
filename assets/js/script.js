var dayEl = document.querySelector("#currentDay")
var inputContainerEl = document.querySelector(".text-box");


var workDayHours = [];

var displayCurrentDay = function () {
    
    dayEl.textContent = moment().format('MMM Do YYYY');

}

var createText = function () {

    // give all elements with class 'text-box' a contenteditable value of true
        // this creates a dynamic user input box that blurs when clicked out of

    $(".text-box").attr("contenteditable", "true");

};
    
var colorCode = function () {

    var currentHour = new Date().getHours();

    for (var i = 9; i <= 19; i++ ) {
        
        workDayHours[i] = i;


    }
    
    // if hours are less than the current hour, background is gray
    if ( workDayHours < currentHour) {

    }


    // if hours are equal to the current hour, background in red
    else if ( hours === currentHour) {

    }


    // if hours are greater than current hour, background is green
    else if (hours > currentHour ) {

    }

};

var main = function () {

    displayCurrentDay();

    createText();

};

main();
