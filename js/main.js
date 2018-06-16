// Questions Array

const questions = [
  { question: "Enter Your First Name" },
  { question: "Enter Your Last Name" },
  { question: "Enter Your Email", pattern: /\S+@\S+\.\S+/ }, // regex for: anystring@anystring.anystring
  { question: "Create a Password", type: "password" }
];

// Transition Times

const shakeTime = 100;  // shake transition time
const switchTime = 200;  // transition between questions time

// Init Position at First Question

let position = 0;

// Init DOM Elements

const formBox = document.querySelector("#form-box");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const inputGroup = document.querySelector("#input-group");
const inputField = document.querySelector("#input-field");
const inputLabel = document.querySelector("#input-label");
const inputProgress = document.querySelector("#input-progress");
const progress = document.querySelector("#progress-bar");

// EVENTS

document.addEventListener("DOMContentLoaded", getQuestion);

// FUNCTIONS

// get question from array and add to markup
function getQuestion() {
  //  get current question
  inputLabel.innerHTML = questions[position].question;
  // get current type
  inputField.type = questions[position].type || "text";
  // get current answer
  inputField.value = questions[position].answer || "";
  // focus on element
  inputField.focus();

  // set focus bar width - var to the questions array length
  progress.style.width = (position * 100) / questions.length + "%";

  // add user icon OR back arrow depending on question
  prevBtn.className = position ? "fas fa-arrow-left" : "fas fa-user";

  showQuestion();
 }

//  Display question to user
function showQuestion() {
  inputGroup.style.opacity = 1;
  inputProgress.style.transition = "";
  inputProgress.style.width = 100%;
}
