var dayEl = document.querySelector("#currentDay")
var inputContainerEl = document.querySelector(".text-box");

var displayCurrentDay = function () {
    
    dayEl.textContent = moment().format('MMM Do YYYY');

}

var createText = function () {

    // give all elements with class 'text-box' a contenteditable value of true
        // this creates a dynamic user input box that blurs when clicked out of

    $(".text-box").attr("contenteditable", "true");

    // saves the content of the input area and stores it to a variable 'newText'
    var findContent = document.querySelectorAll('[contenteditable]'), newText = findContent.textContent;
       
};
    
var colorCode = function () {

    var currentHour = moment().hour();

    // console.log(currentHour);
    

    for (var i = 0; i < $(".hour").length; i++) {   
        
        var timeOfRow = $(".hour")[i].innerHTML;

        var newTime = parseInt(timeOfRow);

        // console.log( newTime );

        
        if ( newTime < 9) {

            newTime + 12;

            // if work day hours are less than current hour, background is gray

            if ( newTime < currentHour ) {
    
                $(".hour").closest(".row").find(".text-box").addClass("past");
        
                // console.log($(".hour").closest(".row").find("div.text-box"));

            }
    
    
        // if work day hours are equal to the current hour, background in red
    
            else if ( currentHour === newTime ) {
    
                $(".hour").closest(".row").find(".text-box").addClass("present");
    
                // console.log($(".hour").closest(".row").find("div.text-box"));
            }
    
    
        // if work day hours are greater than current hour, background is green
    
            else if ( newTime > currentHour ) {
    
                $(".hour").closest(".row").find(".text-box").addClass("future");
    
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

var saveButtonHandler = function () {

    // find the first content editable field next to the particular save button
    var savedInfo = document.querySelectorAll('[contenteditable]');

    // save the value of the input to local storage
    localStorage.setItem('content', savedInfo.textContent);


    // localStorage.setItem('userInput', JSON.stringify(inputContainerEl.textContent));

    // localStorage.setItem("content", JSON.stringify(textInput));



};

var loadPage = function () {

    // load info back to screen
    document.querySelectorAll('.text-box').innerHTML = localStorage.getItem('content')

    // inputContainerEl.innerHTML = JSON.parse(localStorage.getItem("userInput"));

    // textInput = JSON.parse(localStorage.getItem("content"));

};


var main = function () {

    displayCurrentDay();

    createText();

    colorCode();
    
};

main();

$(".saveBtn").click(saveButtonHandler);

