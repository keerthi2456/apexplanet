document.addEventListener("DOMContentLoaded", () => {
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const statusEl = document.getElementById("status");

  document.getElementById("getQuiz").addEventListener("click", fetchQuiz);
  document.getElementById("clear").addEventListener("click", () => {
    questionEl.textContent = "Click \"Get Question\" to fetch a quiz...";
    optionsEl.innerHTML = "";
    statusEl.textContent = "";
  });

  async function fetchQuiz() {
    statusEl.textContent = "Fetching question...";
    optionsEl.innerHTML = "";
    try {
      const res = await fetch("https://opentdb.com/api.php?amount=1&type=multiple");
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      const quiz = data.results[0];

      // Decode HTML entities
      const decode = (str) => {
        const txt = document.createElement("textarea");
        txt.innerHTML = str;
        return txt.value;
      };

      const question = decode(quiz.question);
      const correctAnswer = decode(quiz.correct_answer);
      const answers = [...quiz.incorrect_answers.map(decode), correctAnswer];
      shuffleArray(answers);

      questionEl.textContent = question;

      answers.forEach(ans => {
        const btn = document.createElement("button");
        btn.textContent = ans;
        btn.className = "option-btn";
        btn.addEventListener("click", () => {
          if (ans === correctAnswer) {
            btn.classList.add("correct");
            statusEl.textContent = "✅ Correct!";
          } else {
            btn.classList.add("wrong");
            statusEl.textContent = `❌ Wrong! Correct answer: ${correctAnswer}`;
          }
          disableOptions();
        });
        optionsEl.appendChild(btn);
      });

      statusEl.textContent = "";
    } catch (error) {
      questionEl.textContent = "Failed to load question.";
      statusEl.textContent = `Error: ${error.message}`;
    }
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  function disableOptions() {
    document.querySelectorAll(".option-btn").forEach(btn => btn.disabled = true);
  }
});
