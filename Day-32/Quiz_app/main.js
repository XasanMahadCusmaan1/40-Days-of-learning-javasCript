import { questions } from "./question.js";
import { Quiz } from "./quizLogic.js";
import { QuizUi } from "./ui.js";

const quiz = new Quiz(questions);
const ui = new QuizUi();

function renderCurrent() {
  const q = quiz.getCurrentQuestion();
  ui.setProgress(quiz.currentNumber, quiz.total);
  ui.setScore(quiz.score, quiz.total);

  ui.renderQuestion(q, (selectedIndex) => {
    const result = quiz.selectAnswer(selectedIndex);
    ui.markAnswers(result);
  });
}

// Next Button
ui.onNext(() => {
  if (quiz.hasNext()) {
    quiz.goNext();
    renderCurrent();
  } else {
    ui.showFinal(quiz.score, quiz.total);
  }
});

// Restart Button

ui.onRestart(() => {
  quiz.reset();
  ui.reset();
  renderCurrent();
});

// Initial
renderCurrent();
