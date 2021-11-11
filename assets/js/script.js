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
    
};


var main = function () {

    displayCurrentDay();

    createText();
};

main();
