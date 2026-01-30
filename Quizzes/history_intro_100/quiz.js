function checkAnswers() {

    let score = 0;

    // Correct answers
    const answers = {
        q1: "b",
        q2: "b"
    };

    // Loop through answers
    for (let question in answers) {

        const selectedOption =
            document.querySelector(`input[name="${question}"]:checked`);

        if (selectedOption && selectedOption.value === answers[question]) {
            score++;
        }
    }

    // Display result
    document.getElementById("result").innerHTML = `
        You scored ${score} out of ${Object.keys(answers).length}<br><br>
        <strong>Correct Answers:</strong><br>
        1. Study of past events<br>
        2. Manuscripts
    `;
}
