var dayEl = document.querySelector("#currentDay")
var inputContainerEl = document.querySelector(".text-box");

var textInput = "";

console.log($(".hour"));

var displayCurrentDay = function () {
    
    dayEl.textContent = moment().format('MMM Do YYYY');

}

var createText = function () {

    // give all elements with class 'text-box' a contenteditable value of true
        // this creates a dynamic user input box that blurs when clicked out of

    textInput = $(".text-box").attr("contenteditable", "true");
   
};
    
var colorCode = function () {

    var currentHour = moment().hour();

    console.log(currentHour);
    

    for (var i = 0; i < $(".hour").length; i++) {   
        
        var timeOfRow = $(".hour")[i].innerHTML;

        

        var newTime = parseInt(timeOfRow);

        console.log( newTime );

        
        if ( newTime < 9) {

            newTime + 12;

            // if work day hours are less than current hour, background is gray

            if ( newTime < currentHour ) {
    
                $(".hour").closest(".row").find(".text-box").addClass("past");
        
                console.log($(".hour").closest(".row").find("div.text-box"));

            }
    
    
        // if work day hours are equal to the current hour, background in red
    
            else if ( currentHour === newTime ) {
    
                $(".hour").closest(".row").find(".text-box").addClass("present");
    
                console.log($(".hour").closest(".row").find("div.text-box"));
            }
    
    
        // if work day hours are greater than current hour, background is green
    
            else if ( newTime > currentHour ) {
    
                $(".hour").closest(".row").find(".text-box").addClass("future");
    
                console.log($(".hour").closest(".row").find("div.text-box"));
    
            }


        }

        else{

            // if work day hours are less than current hour, background is gray

            if ( newTime < currentHour ) {
    
                $(".hour").closest(".row").find(".text-box").addClass("past");
        
                console.log("this one worked");

            }
    
    
        // if work day hours are equal to the current hour, background in red
    
            else if ( currentHour === newTime ) {
    
                $(".hour").closest(".row").find(".text-box").addClass("present");
    
                console.log($("blue"));
            }
    
    
        // if work day hours are greater than current hour, background is green
    
            else if ( newTime > currentHour ) {
    
                $(".hour").closest(".row").find(".text-box").addClass("future");
    
                console.log($("red"));
    
            }

        }



 // // var time = $(".row").find(".time-of-day").text().trim();

        // // var setHour = moment(time).set("hour", i);


        // if (moment().isAfter(currentHour)) {

        //     $(".textbox").css("background-color", "green");
    
        // }
    
        // else if (moment().isBefore(currentHour)) {

        //     $(".textbox").css("background-color", "gray");
    
        // }
    
        // else {
        //     $(".textbox").css("background-color", "red");
    
        // }








    }


};

var saveButtonHandler = function () {

    localStorage.setItem("textInput", JSON.stringify(textInput));

};

var loadPage = function () {

    document.getElementById(".text-box").innerHTML = localStorage.getItem("textInput");

    // textInput = JSON.parse(localStorage.getItem("textInput"));

};


var main = function () {

    displayCurrentDay();

    createText();

    colorCode();
    
};

main();

$(".saveBtn").click(saveButtonHandler);
