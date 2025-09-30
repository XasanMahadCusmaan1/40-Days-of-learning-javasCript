export class QuizUi {
  constructor() {
    this._buildLayout();
    this._wireBaseListeners();
  }

  _buildLayout() {
    this.questionText = document.querySelector("#questionText");
    this.optionsBox = document.querySelector("#options");
    this.nextBtn = document.querySelector("#nextBtn");
    this.restartBtn = document.querySelector("#restartBtn");
    this.progress = document.querySelector("#progress");
    this.score = document.querySelector("#score");
  }

  _wireBaseListeners() {
    this._onNext = null;
    this._onRestart = null;

    this.nextBtn.addEventListener("click", (e) => {
      if (this._onNext) this._onNext();
    });
    this.restartBtn.addEventListener("click", (e) => {
      if (this._onRestart) this._onRestart();
    });
  }

  onNext(handler) {
    this._onNext = handler;
  }

  onRestart(handler) {
    this._onRestart = handler;
  }

  renderQuestion(q, onSelect) {
    this._clearOptions();
    this.enableNext(false);

    this.questionText.textContent = `${q.id}: ${q.question}`;
    q.options.forEach((ops, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = `${idx + 1}: ${ops}`;
      btn.dataset.index = String(idx);
      this.optionsBox.appendChild(btn);
      btn.addEventListener("click", (e) => {
        this._disableOptions();
        if (typeof onSelect === "function") onSelect(idx);
      });
    });
  }

  markAnswers({ correctIndex, selectedIndex }) {
    const buttons = this.optionsBox.querySelectorAll("button");
    buttons.forEach((btn, idx) => {
      if (idx === correctIndex) btn.classList.add("correct");
      if (idx === selectedIndex && selectedIndex !== correctIndex) {
        btn.classList.add("wrong");
      }
      this.enableNext(true);
    });
  }

  _clearOptions() {
    this.optionsBox.innerHTML = "";
  }

  setProgress(current, total) {
    this.progress.textContent = `Question ${current} of ${total}`;
  }
  setScore(score, total) {
    this.score.textContent = `Score: ${score} / ${total}`;
  }
  enableNext(enabled) {
    this.nextBtn.disabled = !enabled;
  }
  showRestart(show) {
    this.restartBtn.classList.toggle("hide", !show);
  }

  showFinal(score, total) {
    this._clearOptions();
    this.questionText.textContent = `Quiz Finished!`;

    const summary = document.createElement("div");
    summary.innerHTML = `<p>You scored <strong>${score}</strong> out of <strong>${total}</strong>.</p>`;
    this.optionsBox.appendChild(summary);

    this.enableNext(false);
    this.showRestart(true);
    this.setProgress(total, total);
    this.setScore(score, total);
  }

  _disableOptions() {
    this.optionsBox
      .querySelectorAll("button")
      .forEach((b) => (b.disabled = true));
  }
  reset() {
    this._clearOptions();
    this.questionText.textContent = "";
    this.setProgress(0, 0);
    this.setScore(0, 0);
    this.enableNext(false);
    this.showRestart(false);
  }
}
