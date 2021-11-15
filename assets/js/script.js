var dayEl = document.querySelector("#currentDay")
var inputContainerEl = document.querySelector(".text-box");
var findContent = document.querySelectorAll('[contenteditable]');

var currentBoxText = [];
var currentBox = [];


// function to display current time on main page
var displayCurrentDay = function () {
    
    dayEl.textContent = moment().format('MMM Do YYYY');

}

// function to create a text box for user input
var createText = function () {

// give all elements with class 'text-box' a contenteditable value of true
// this creates a dynamic user input box that blurs when clicked out of
$(".text-box").attr("contenteditable", "true");


    // saves the content of the particular input area and stores it to a variable 'text'
    var textAt9 = $("#9").textContent;
    var textAt10 = $("#10").textContent;
    var textAt11 = $("#11").textContent;
    var textAt12 = $("#12").textContent;
    var textAt13 = $("#13").textContent;
    var textAt14 = $("#14").textContent;
    var textAt15 = $("#15").textContent;
    var textAt16 = $("#16").textContent;
    var textAt17 = $("#17").textContent;
    var textAt18 = $("#18").textContent;




    

};

// function to color the backgrounds depending on past/present/future    
var colorCode = function () {

    var currentHour = moment().hour();    

    for (var i = 0; i < $(".hour").length; i++) {   
        
        var timeOfRow = $(".hour")[i].innerHTML;

        var newTime = parseInt(timeOfRow);
        
        // console.log( newTime );

        
        if ( newTime < 9) {

            newTime + 12;

            // if work day hours are less than current hour, background is gray

            if ( newTime < currentHour ) {
    
                var pastTime = $(".hour").closest(".row").find(".text-box").addClass("past");

                // console.log($(".hour").closest(".row").find("div.text-box"));

            }
    
    
        // if work day hours are equal to the current hour, background in red
    
            else if ( currentHour === newTime ) {
    
               var now = $(".hour").closest(".row").find(".text-box").addClass("present");

                // console.log($(".hour").closest(".row").find("div.text-box"));
            }
    
    
        // if work day hours are greater than current hour, background is green
    
            else if ( newTime > currentHour ) {
    
                var futureTime = $(".hour").closest(".row").find(".text-box").addClass("future");

                // console.log($(".hour").closest(".row").find("div.text-box"));
    
            }


        }

        else{

            // if work day hours are less than current hour, background is gray

            if ( newTime < currentHour ) {
    
                $(".hour").closest(".row").find(".text-box").addClass("past");
        
                // console.log("this one worked");

            }
    
    
        // if work day hours are equal to the current hour, background in red
    
            else if ( currentHour === newTime ) {
    
                $(".hour").closest(".row").find(".text-box").addClass("present");
    
                // console.log($("blue"));
            }
    
    
        // if work day hours are greater than current hour, background is green
    
            else if ( newTime > currentHour ) {
    
                $(".hour").closest(".row").find(".text-box").addClass("future");
    
                // console.log($("red"));
    
            }

        }
    }
};

// function to provide local storage capabilitites to save button and load content on new page
var saveButtonHandler = function () {

    // find the first content editable field next to the particular save button
    // var savedInfo = document.querySelector('[contenteditable]');

    // // save the value of the input to local storage
    // localStorage.setItem('content', savedInfo.textContent);


    for (var i = 0; i < $('.hours').length; i++) {
                        
        currentBox[i] = document.getElementById(i+8);

        currentBoxText[i] = $(this).closest(".text-box").textContent;

        localStorage.setItem('currentBox' + i, currentBoxText[i]);


        // set variable to retrieve what is stored
        var loadInfo = localStorage.getItem('content' + i);

        // if there is info present, set text of text box to be what was just retrieved
        if (loadInfo){

            currentBoxText[i] = loadInfo;

        };
    };



};


var loadPage = function () {

   
    // set text of text box to be what was just retrieved


    // for (var i = 0; i < localStorage.length; i++) {

    //     var loadInfo = localStorage.getItem('content' + i);

    //     if (loadInfo){

    //         saveMe[i].textContent = loadInfo;

    //     } 

    // }



    // if ( localStorage.getItem('content') ) {
    //     var loadInfo = document.getElementById('[contenteditable]');
    //     loadInfo.innerHTML = localStorage.getItem('[contenteditable]');
    //   }

};


var main = function () {

    displayCurrentDay();

    createText();

    colorCode();
    
};

main();

$(".saveBtn").click(saveButtonHandler);

