// Blue fighter
var bluePoints = 0;
var blueAdvantages = 0;
var blueFouls = 0;

$("#blue-points").text(bluePoints);
$("#blue-advs").text(blueAdvantages);
$("#blue-fouls").text(blueFouls);

// Red fighter
var redPoints = 0;
var redAdvantages = 0;
var redFouls = 0;

$("#red-points").text(redPoints);
$("#red-advs").text(redAdvantages);
$("#red-fouls").text(redFouls);

// TIMER
var minutes = 0;
var seconds = 60;
var startingTime = "0:00";

var started = false;
var paused = false;

$("#countdown").text(startingTime);

$(":button").click(function (event) {
  var clicked = event.target.id;
  eventClicked(clicked);
});

function eventClicked(id) {
  switch (id) {
    // Blue fighter
    case "b-points-plus":
      bluePoints++;
      $("#blue-points").text(bluePoints);
      break;

    case "b-points-minus":
      if (bluePoints > 0) {
        bluePoints--;
        $("#blue-points").text(bluePoints);
      }
      break;

    case "b-advs-plus":
      blueAdvantages++;
      $("#blue-advs").text(blueAdvantages);
      break;

    case "b-advs-minus":
      if (blueAdvantages > 0) {
        blueAdvantages--;
        $("#blue-advs").text(blueAdvantages);
      }
      break;

    case "b-fouls-plus":
      blueFouls++;
      $("#blue-fouls").text(blueFouls);
      break;

    case "b-fouls-minus":
      if (blueFouls > 0) {
        blueFouls--;
        $("#blue-fouls").text(blueFouls);
      }
      break;

    // Red fighter
    case "r-points-plus":
      redPoints++;
      $("#red-points").text(redPoints);
      break;

    case "r-points-minus":
      if (redPoints > 0) {
        redPoints--;
        $("#red-points").text(redPoints);
      }
      break;

    case "r-advs-plus":
      redAdvantages++;
      $("#red-advs").text(redAdvantages);
      break;

    case "r-advs-minus":
      if (redAdvantages > 0) {
        redAdvantages--;
        $("#red-advs").text(redAdvantages);
      }
      break;

    case "r-fouls-plus":
      redFouls++;
      $("#red-fouls").text(redFouls);
      break;

    case "r-fouls-minus":
      if (redFouls > 0) {
        redFouls--;
        $("#red-fouls").text(redFouls);
      }
      break;

    // ADD TIME
    case "5min":
      minutes += 5;
      startingTime = minutes + ":00";
      $("#countdown").text(startingTime);
      break;

    case "10min":
      minutes += 10;
      startingTime = minutes + ":00";
      $("#countdown").text(startingTime);
      break;

    case "15min":
      minutes += 15;
      startingTime = minutes + ":00";
      $("#countdown").text(startingTime);
      break;

    case "plus1min":
      minutes++;
      startingTime = minutes + ":00";
      $("#countdown").text(startingTime);
      break;

    case "minus1min":
      minutes--;
      startingTime = minutes + ":00";
      $("#countdown").text(startingTime);
      break;

    //START COUNTER
    case "start-timer":
      if (!started && (minutes > 0 || seconds > 0)) {
        started = true;
        ctd = setInterval(function () {
          countdownTimer();
          if (seconds > 9) {
            $("#countdown").text(minutes + ":" + seconds);
          } else if (seconds <= 9) {
            $("#countdown").text(minutes + ":0" + seconds);
          }
        }, 1000);
        break;
      }

    //PAUSE
    case "pause-timer":
      clearInterval(ctd);
      paused = true;
      started = false;
      break;

    //RESTART ROUND
    case "reset-timer":
      reloadPage();
      break;
  }
}

function countdownTimer() {
  if (minutes != 0 && seconds === 60) {
    minutes--;
  }

  if (seconds > 0) {
    seconds--;
  }

  if (minutes != 0 && seconds === 0) {
    seconds = 59;
  }

  if (minutes === 0 && seconds === 0) {
    var gong = new Audio("./audio/bing.mp3");
    gong.play();
  
    setInterval(function () {
      location.reload(true);
    }, 5000);
  }
  
}

function reloadPage() {
  $("#reset-timer").one("click", function () {
    location.reload(true);
  });
}

function stopTimer(counter) {
  clearInterval(counter);
  paused = true;
}

