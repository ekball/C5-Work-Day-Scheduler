var dayEl = document.querySelector("#currentDay")


var displayCurrentDay = function () {
    
    dayEl.textContent = moment().format('MMM Do YYYY');

}

