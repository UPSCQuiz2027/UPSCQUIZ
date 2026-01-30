const questions = [
  {
    question: "History is the study of?",
    options: ["Future", "Past", "Science", "Math"],
    answer: 1
  }
];

const form = document.getElementById("quizForm");

questions.forEach((q, i) => {
  form.innerHTML += `<p>${i+1}. ${q.question}</p>`;
  q.options.forEach((opt, j) => {
    form.innerHTML += `
      <label>
        <input type="radio" name="q${i}" value="${j}">
        ${opt}
      </label><br>`;
  });
});

function submitQuiz() {
  let score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && Number(selected.value) === q.answer) score++;
  });
  document.getElementById("result").innerText =
    `Score: ${score}/${questions.length}`;
}
