
//setting variables
var timerEl = document.getElementById("timer");
var pages = document.querySelectorAll(".pages");
var container = document.querySelector(".container");
var pages = document.querySelector(".page");

//questions array
var questions= [
    {
        title: "What is captial of Thailand?",
        choices: ["Kathmandu", "Bangkok", "Bhutan","Bandledesh"]
        answer: "Bangkok",
    },
    {
        title: "What is the main form of transportation in Thailand?",
        choices: ["Car", "Bicycle", "Motorbike", "Walk"],
        answer: "Motorbike",
    },
    {
        title: "What language do they speak in Thailand?",
        choices: ["Taiwanese", "Thai", "Hindi", "Tagalog"],
        answer: "Thai",
    },
    {
        title: "What is the currency in Thailand?",
        choices: ["Baht", "Yen", "American Dollar", "Rupi"],
        answer: "Baht",
    },
    {
        title: "What is the best part of Thailand?"
        choices: ["The people", "The food", "The culture", "All of the above"],
        answer: "All of the above",
    }
]



//functions

function countdown() {
  var timeLeft = 10;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";

      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "";

      clearInterval(timeInterval);
    }
  }, 1000);
}

countdown();
