


function alert1() {
    alert("Burbank was clicked. Loading weather report...")
}

function alert2() {
    alert("Chicago was clicked. Loading weather report...")
}

function alert3() {
    alert("Dallas was clicked. Loading weather report...")
}

function iaccept(id) {
    var element = document.querySelector(id);
    element.remove();
}

function readmore(element) {
    element.innerText = 'Thank you for clicking "Read more..." This was just for practice. Now click "I Accept to remove this section.'
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element) {
    console.log(element.value);
    for (var i = 1; i < 9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if (element.value == "°C") {
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}