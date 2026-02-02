let i = 0;
let score = 0;
let data = [];
let answered = false;

const subject = localStorage.getItem("subject");
const std = localStorage.getItem("standard");
const chap = localStorage.getItem("chapter");
const level = localStorage.getItem("level");

const filePath = `data/${subject}/${std}/${chap}-${level}.json`;
console.log("Loading:", filePath);

fetch(filePath)
  .then(res => {
    if (!res.ok) throw new Error("File not found");
    return res.json();
  })
  .then(q => {
    data = q;
    loadQuestion();
  })
  .catch(() => {
    document.body.innerHTML = `
      <h1>⚠️ Quiz Not Found</h1>
      <p>Check JSON file path</p>
    `;
  });

function loadQuestion() {
  answered = false;

  document.getElementById("qno").innerText = `Question ${i + 1}`;
  document.getElementById("question").innerText = data[i].question;

  const optDiv = document.getElementById("options");
  optDiv.innerHTML = "";

  data[i].options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(btn, index);
    optDiv.appendChild(btn);
  });

  updateScore();
}

function checkAnswer(button, selectedIndex) {
  if (answered) return;
  answered = true;

  const correctIndex = data[i].answer;
  const buttons = document.querySelectorAll("#options button");

  buttons.forEach((btn, idx) => {
    btn.disabled = true;

    if (idx === correctIndex) {
      btn.classList.add("correct");
    }
    if (idx === selectedIndex && idx !== correctIndex) {
      btn.classList.add("wrong");
    }
  });

  if (selectedIndex === correctIndex) {
    score++;
  }

  updateScore();
}

function next() {
  if (!answered) {
    alert("Please select an option first");
    return;
  }

  i++;
  if (i < data.length) {
    loadQuestion();
  } else {
    document.body.innerHTML = `
      <h1>🎯 Quiz Completed</h1>
      <h2>Your Score: ${score} / ${data.length}</h2>
      <p>Consistency beats talent. Keep practicing.</p>
    `;
  }
}

function updateScore() {
  document.getElementById("score").innerText =
    `Score: ${score} / ${data.length}`;
}
