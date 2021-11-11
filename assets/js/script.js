var dayEl = document.querySelector("#currentDay")
var inputContainerEl = document.querySelector(".text-box");

var displayCurrentDay = function () {
    
    dayEl.textContent = moment().format('MMM Do YYYY');

}

var createText = function () {

    var inputAreaEl = document.createElement("p");
    var inputEl = document.createElement("textarea");

    inputAreaEl.appendChild(inputEl);
    inputContainerEl.appendChild(inputAreaEl);
    
    $("#text-container0 ,#text-container1, #text-container2, #text-container3, #text-container4, #text-container5, #text-container6, #text-container7, #text-container8").on("click", function() {

        var text = $(this)
            .text()
            .trim();

        var textInput = $("<textarea>")
            .addClass("form-control")
            .val(text);

        textInput.trigger("focus");

        $(this).replaceWith(textInput);
        
    });

    $("#text-container0,#text-container1, #text-container2, #text-container3, #text-container4, #text-container5, #text-container6, #text-container7, #text-container8").on("blur", "textarea", function () {

        // get the text area's current text
        var text = $(this)
            .text()
            .trim();
        
        // recreate the p element
        var newEl = $("<p>")
            .text(text);
        
        // replace the text input area with the p element
        $(this).replaceWith(newEl);

    });

    // // create a text area
    // var inputText = $("<textarea/>")

    // // create a variable to hold the content of the original element's text
    // var inputContainerEl = $("#text-container").text();

    // // put the contents of the original element into the new text area so it can be edited
    // inputText.text(inputContainerEl);

    // // replace the original text container with the inputText textarea
    // $("#text-container").replaceWith(inputText);


    
};

// create field to type in when the area is clicked on   
var createTextboxHandler = function (event) {

    // var inputText = $("<textarea/>")

    // // save the text in the input container
    // var inputContainerEl = $(this).text();

    // inputText.text(inputContainerEl);
    // // replace the text container with the inputText textarea
    // $("focusOn").replaceWith(inputText);

    // // puts focus on the text area
    // inputText.focus();

};

// remove field to type in when the area is out of focus
var removeTextboxHandler = function () {

        // // save the text in the text area that was just clicked on and used
        // var oldTextContent = $(this).text();

        // // create a new container to swap out with the text area
        // var newTextContent = $("<div>");

        // // put in the new value, which was the old content
        // newTextContent.text(oldTextContent);

        // // swap the elements from text area to div
        // $(this).replaceWith(newTextContent);

};

var main = function () {

    displayCurrentDay();

    createText();
};

main();






// event handler for clicking on the center column - puts focus on the text area
$("#text-container").click(createTextboxHandler());


// event handler for clicking off of the center column - pulls the text area out of focus
$("#text-container").blur(removeTextboxHandler());