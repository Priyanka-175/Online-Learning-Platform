function checkAnswer(button) {
  const answer = button.textContent;
  const correctAnswer = "HyperText Markup Language";

  if (answer === correctAnswer) {
    alert("Correct! 🎉");
    document.getElementById('progress').textContent = "Lesson 1: Completed ✅";
    localStorage.setItem("lesson1", "completed");
  } else {
    alert("Oops! Try again.");
  }
}

// Load progress from local storage
document.addEventListener("DOMContentLoaded", () => {
  const progress = localStorage.getItem("lesson1");
  if (progress === "completed") {
    document.getElementById('progress').textContent = "Lesson 1: Completed ✅";
  }
});