/* momentpopup.js is necesary */

// Animation moment
var moment = true;
var interval;
var clock = 0;


function delta() {
    var now = Date.now(),
        d = now - offset;

    offset = now;
    return d;
}

function getClock() {
    return clock;
}

function reset() {
    clock = 0;
    firstTime = true;
    $("#error").text("");

}

function update() {
    clock += delta();
}

$('#moment').click(function(event){
  if (! moment) {
    if (Math.floor((Math.ceil(clock / 1000)) / 60) < 30 ) {
      $("#error").text("El que persevera logra su momento...");
    }else{
      $('#moment').removeClass('loading').addClass('loading-click');
      $('#text').removeClass('text_start-stop').addClass('text_start');
      $("#text").text("Iniciar");
      start();
      moment = true;
    }
  }else{

    $('#moment').removeClass('loading-click').addClass('loading'); /* Start the animation (moment) */
    $('#text').removeClass('text_start').addClass('text_start-stop');
    $("#text").text("Detener");
    /*Change text and text's style*/
    start();
    moment = false;
  }
});

$('#close_moment').click(function(event){

  reset();
});

function start() {
    if (!interval) {
        offset = Date.now();
        interval = setInterval(update, 1);
        /* Executes a function, after waiting a specified number of milliseconds,  but repeats the execution of the function continuously. */

    } else {
        stop();
        firstTime = false;
        totalTime = Math.floor((Math.ceil(clock / 1000)) / 60); /* Return minutes; consider the floor function */
        document.getElementById('time').value = totalTime;
    }
}

function stop() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
}

// Moment timer
var Stopwatch = function (elem, options) {

    var timer = createTimer(),
        startButton = createButton("start", start),
        stopButton = createButton("stop", start),
        resetButton = createButton("reset", reset),
        offset,
        clock,
        interval;



    // append elements
    elem.appendChild(startButton);

    // initialize
    reset();

    // private functions
    function createTimer() {
        return document.createElement("span");
    }

    function createButton(action, handler) {
        var a = document.createElement("a");
        a.className = "open btn btn-big";
        a.href = "#" + action;
        a.innerHTML = action;
        a.addEventListener("click", function (event) {
            handler();
            event.preventDefault();
        });
        return a;
    }
};


// basic examples

var firstTime = true;

var totalTime = 0;


/////////////// REMEMBER TO CHANGE NAME
function verifySize() {
    const SIZELIMIT = 15728640; /* This is in bytes for 15 MB */
    var size = document.getElementById('attachement').files[0].size;


    if (size > SIZELIMIT) {
      document.getElementById('fileError').text = "Tu imagen no puede ser mayor a 15 MB"
      document.getElementById('attachement').value = null;
    }
}