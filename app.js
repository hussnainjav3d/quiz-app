const questions = [
  {
    question:
      "Which of the following function can interpret data in the C language?",
    options: ["printf", "scanf", "proc", "file"],
    answer: "scanf",
  },
  {
    question:
      "Which of the following produces an assembler file in the compilation process?",
    options: ["pre-processor", "assembler", "compiler", "post-processing"],
    answer: "compiler",
  },
  {
    question: " Which file is converted to an object file?",
    options: ["hex file", "decoded file", "coded file", "assembly file"],
    answer: "assembly file",
  },
  {
    question: "Which of the following contains the hexadecimal coding?",
    options: ["object file", "assembly file", "coded file", "decoded file"],
    answer: "object file",
  },
  {
    question:
      " Which of the following processes the source code before it goes to the compiler?",
    options: ["compiler", "simulator", "pre-processor", "emulator"],
    answer: "pre-processor",
  },
  {
    question: " What is the first stage of the compilation process?",
    options: ["pre-processing", "post-processing", "compilation", "linking"],
    answer: "pre-processing",
  },
];
let count = 0;
let score = 0;

document.addEventListener(
  "DOMContentLoaded",
  function () {
    questionBox(0);
    scoreBox.innerHTML = 0;
  },
  false
);

const result = document.querySelector(".result");
const scoreBox = document.getElementById("score");
const finalScore = document.getElementById("score-final");

const questionOption = document.querySelectorAll(".options p");
const question = document.querySelector(".question");

const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

nextBtn.addEventListener("click", () => {
  if (document.querySelector(".active").innerHTML === questions[count].answer) {
    increment();
  }

  count++;
  questionBox(count);

  if (count === questions.length) {
    result.classList.add("show");
    restartBtn.addEventListener("click", () => {
      window.location.reload();
    });
  }

  for (let i of questionOption) {
    i.classList.remove("active");
  }
});

const questionBox = (count) => {
  if (count > questions.length - 1) return;
  question.innerHTML = questions[count].question;
  questionOption.forEach((option, number) => {
    option.innerHTML = questions[count].options[number];
  });

  questionOption.forEach((option) => {
    option.addEventListener("click", (e) => {
      for (let i of questionOption) {
        i.classList.remove("active");
      }
      e.target.classList.add("active");
    });
  });
};

function increment() {
  score += 10;
  scoreBox.innerHTML = score;
  finalScore.innerHTML = score;
}
