// alert("Connected");
var numSQS = 6;

var colors = generateRandomColors(numSQS);

// var object = {};
// object.init

var sqs = document.querySelectorAll(".square");
var pickedColor = colors[colorPicker()];
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var message = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var lastSQS = document.getElementsByClassName("lastSQS");

var modeSelect = document.querySelectorAll("#mode");

init();

function init() {
    setMode();
    setSquares();
    reset();
}

function setMode() {
    for (var i = 0; i < modeSelect.length; i++) {
        modeSelect[i].addEventListener("click", function () {
            modeSelect[0].classList.remove("selectedBtn");
            modeSelect[1].classList.remove("selectedBtn");
            this.classList.add("selectedBtn");

            this.textContent === "EASY" ? numSQS = 3 : numSQS = 6;

            reset();
        });
    }
}

function setSquares() {
    for (var i = 0; i < sqs.length; i++) {
        // give them random colors
        sqs[i].style.backgroundColor = colors[i];

        // give them a click listener each
        sqs[i].addEventListener("click", function () {
            // get its color into some var
            var clickedColor = this.style.backgroundColor;
            // alert(clickedColor);
            if (clickedColor === pickedColor) 
            {
                // alert("Correcto!!");
                message.textContent = "Correct ;)";
                resetButton.textContent = "Play Again?";
                changeSquares(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else {
                // alert("Wrong!");
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again :(";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSQS);

    pickedColor = colors[colorPicker()];

    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "NEW COLORS";

    for (var i = 0; i < sqs.length; i++) {
        if (colors[i]) {
            sqs[i].style.backgroundColor = colors[i];
            sqs[i].style.display = "block";
        }

        else {
            sqs[i].style.display = "none";
        }
    }

    h1.style.backgroundColor = "steelblue";
}


function changeSquares(color) {
    // loop through them
    for (i = 0; i < sqs.length; i++) {
        // then change
        sqs[i].style.backgroundColor = color;
    }

}

// generates the number of index of sqaure that should be the response or answer
function colorPicker() {
    var random = Math.floor(Math.random() * colors.length);
    //    alert(random);
    return random;
}

// pushes the new rgb values into the array, colors[]
function generateRandomColors(num) {
    var arrColors = []
    for (i = 0; i < num; i++) {
        // create random rgb values and put into the array create
        arrColors.push(rgbGenerate())
    }
    return arrColors;
}

// generates the new rgb values
function rgbGenerate() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
    // alert(r,g,b);
}

//Now we need a button that resets and asks for playing again and alspo gives the new color option  
resetButton.addEventListener("click", function () {
    reset();
});