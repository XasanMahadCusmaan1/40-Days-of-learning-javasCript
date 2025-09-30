export class Quiz {
  constructor(questions) {
    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error("Quiz requires a non-empty questions array");
    }
    this._originalQuestions = questions;
    this.questions = [...this._originalQuestions];
    this.currentIndex = 0;
    this.score = 0;
  }

  get total() {
    return this.questions.length;
  }

  get currentNumber() {
    return this.currentIndex + 1;
  }

  hasNext() {
    return this.currentIndex < this.total - 1;
  }

  goNext() {
    if (this.hasNext) this.currentIndex += 1;
  }

  getCurrentQuestion() {
    return this.questions[this.currentIndex];
  }

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

  reset() {
    this.currentIndex = 0;
    this.score = 0;
  }
}
