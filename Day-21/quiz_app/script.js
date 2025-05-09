const quizTimerEl = document.querySelector(".quiz_timer");
const questionEl = document.querySelector(".quiz_question");
const quizOptionEl = document.querySelector(".quiz_options");
const quizBtn = document.querySelector("#btn");
const quizResultEl = document.querySelector(".quiz_result");

// Quiz Data
const quizData = [
  {
    question: "What does DOM stand for?",
    options: [
      "Document Order Model",
      "Document Object Model",
      "Data Object Method",
      "Direct Object Management",
    ],
    correct: 1,
  },
  {
    question: "Which method selects by ID?",
    options: [
      "getElementById()",
      "querySelectorAll()",
      "getElement()",
      "getElementsByClassName()",
    ],
    correct: 0,
  },
  {
    question: "Which event fires on input change?",
    options: ["click", "submit", "change", "keydown"],
    correct: 2,
  },
];

let questions = [...quizData].sort(() => Math.random() - 0.5);
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft;
function loadQuestion() {
  clearInterval(timer);
  timeLeft = 15;

  // timer function
  timer = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(timer);
      selectedOption(questions[currentQuestion]?.correct, false);
    }
  }, 1000);

  let q = questions[currentQuestion];
  questionEl.textContent = `Q${currentQuestion + 1}: ${q.question}`;
  quizOptionEl.innerHTML = "";
  q.options.forEach((ops, i) => {
    let opsionEl = document.createElement("button");
    opsionEl.textContent = `${i + 1}: ${ops}`;
    opsionEl.addEventListener("click", () => selectedOption(i, true));
    quizOptionEl.appendChild(opsionEl);
  });
  quizBtn.style.display = "none";
}

// update the timer each time;
function updateTimer() {
  quizTimerEl.textContent = `⌚${timeLeft}`;
}

function selectedOption(i, shouldScore) {
  clearInterval(timer)
  const q = questions[currentQuestion];
  const allOptions = document.querySelectorAll(".quiz_options > button");
  allOptions.forEach((ops) => (ops.disabled = true));
  if (i === q.correct) {
    allOptions[i].classList.add("correct");
    shouldScore && score++;
  } else {
    allOptions[i].classList.add("wrong");
    allOptions[q.correct].classList.add("correct");
  }

  quizBtn.style.display = "block";
}

quizBtn.addEventListener("click", (e) => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    // show the result
    showResult();
  }
});

function showResult() {
  quizBtn.style.display = "none";
  const hightScore = localStorage.getItem("quizHightScore") || 0;
  const isNew = score > hightScore;
  if (isNew) {
    localStorage.setItem("quizHightScore", score);
  }
  quizResultEl.innerHTML = `
    <span>Result of correct answers: ${score} of ${questions.length}</span>
    <span>Highest score is ${Math.max(score, hightScore)}</span>
    <button onclick="resetQuiz()">Restart Quiz</button>
  `;
}

function resetQuiz() {
  questions = [...quizData].sort(() => Math.random() - 0.5);
  currentQuestion = 0;
  score = 0;
  quizResultEl.innerHTML = '';
  loadQuestion()
}
// get question when the browser loads
loadQuestion();
