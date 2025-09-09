// Handles quiz flow and state (pure logic, no DOM)

export class Quiz {
  constructor(questions) {
    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error("Quiz requires a non-empty questions array");
    }
    this._originalQuestions = questions;
    this.reset();
  }

  // Reset to initial state
  reset() {
    this.questions = [...this._originalQuestions];
    this.currentIndex = 0;
    this.score = 0;
  }

  // Total number of questions
  get total() {
    return this.questions.length;
  }

  // 1-based current question number (for display)
  get currentNumber() {
    return this.currentIndex + 1;
  }

  // Whether there is another question after the current one
  hasNext() {
    return this.currentIndex < this.total - 1;
  }

  // Move to the next question if available
  gotoNext() {
    if (this.hasNext()) {
      this.currentIndex += 1;
    }
  }

  // Get the current question object
  getCurrentQuestion() {
    return this.questions[this.currentIndex];
  }

  // Select an answer; returns result info (no DOM updates here)
  selectAnswer(optionIndex) {
    const q = this.getCurrentQuestion();
    const isCorrect = optionIndex === q.correctIndex;
    if (isCorrect) {
      this.score += 1;
    }
    return {
      isCorrect,
      correctIndex: q.correctIndex,
      selectedIndex: optionIndex,
    };
  }
}
