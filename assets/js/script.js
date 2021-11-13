var dayEl = document.querySelector("#currentDay")
var inputContainerEl = document.querySelector(".text-box");

var workDayHours = [];

var textInput = "";

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
    
    for (var i = 9; i <= 19; i++ ) {        
 
     workDayHours[i] = i;
 
         if ( workDayHours[i] < currentHour ) {
 
             $(this).closest(".row").find("div.text-box").css("background-color", "gray");
     
            var time = document.getElementsByClassName("time-of-day")

         }
 
 
     // if work day hours are equal to the current hour, background in red
 
         else if ( currentHour === workDayHours[i] ) {
 
             $(this).closest(".row").find("div.text-box").css("background-color", "red");
 
         }
 
 
     // if work day hours are greater than current hour, background is green
 
         else if ( workDayHours[i] > currentHour ) {
 
             $(this).closest(".row").find("div.text-box").css("background-color", "green");
 
 
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


var saveButton = function () {

};

var saveButtonHandler = function () {

    localStorage.setItem("textInput");

};

var loadPage = function () {

    document.getElementById(".text-box").innerHTML = localStorage.getItem("textInput");

};





// var auditTask = function(taskEl) {

//         // get date from task element
//         var date = $(taskEl).find(".time-of-day").text().trim();
      
//         // convert to moment object at 5:00pm
//         var time = moment(date, "L").set("hour", i);
      
//         // remove any old classes from element
//         $(taskEl).removeClass("danger");
      
//         // apply new class if task is near/over due date
//         if (moment().isAfter(time)) {
//           $(taskEl).addClass("danger");
//         }

//   };

var main = function () {

    displayCurrentDay();

    createText();

    colorCode();
    
};

main();

saveButton.addEventListener("click", saveButtonHandler);


// look in jquery docs
// event 
// find
// closest
// dom tree traversal