import { questions } from "./question.js";
import { Quiz } from "./quizLogic.js";
import { QuizUI } from "./ui.js";

// Orchestrator: wires logic with UI
const quiz = new Quiz(questions);
const ui = new QuizUI(document.body);

function renderCurrent() {
  const q = quiz.getCurrentQuestion();
  ui.setProgress(quiz.currentNumber, quiz.total);
  ui.setScore(quiz.score, quiz.total);

  ui.renderQuestion(q, (selectedIndex) => {
    const result = quiz.selectAnswer(selectedIndex);
    ui.markAnswer(result);
  });
}

// Next button
ui.onNext(() => {
  if (quiz.hasNext()) {
    quiz.gotoNext();
    renderCurrent();
  } else {
    // Show final summary
    ui.showFinal(quiz.score, quiz.total);
  }
});

// Restart button
ui.onRestart(() => {
  quiz.reset();
  ui.reset();
  renderCurrent();
});

// initial render
renderCurrent();

