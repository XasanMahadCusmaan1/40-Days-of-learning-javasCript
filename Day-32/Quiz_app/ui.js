// Handles DOM creation and updates for the Quiz App

export class QuizUI {
  constructor(root = document.body) {
    this.root = root;
    this._buildLayout();
    this._wireBaseListeners();
  }

  _buildLayout() {
    const container = document.createElement("div");
    container.className = "quiz_container";
    container.id = "quiz";

    container.innerHTML = `
      <div class="quiz_container--questions">
        <h3 id="questionText"></h3>
        <div id="options"></div>
      </div>
      <div class="quiz_container--footer">
        <button id="nextBtn" class="btn" disabled>Next</button>
        <button id="restartBtn" class="btn hide">Restart</button>
        <span id="progress"></span>
        <span id="score"></span>
      </div>
    `;

    this.root.appendChild(container);

    // refs
    this.container = container;
    this.questionText = container.querySelector("#questionText");
    this.optionsBox = container.querySelector("#options");
    this.nextBtn = container.querySelector("#nextBtn");
    this.restartBtn = container.querySelector("#restartBtn");
    this.progress = container.querySelector("#progress");
    this.score = container.querySelector("#score");
  }

  _wireBaseListeners() {
    // placeholders for external handlers
    this._onNext = null;
    this._onRestart = null;

    this.nextBtn.addEventListener("click", () => {
      if (this._onNext) this._onNext();
    });
    this.restartBtn.addEventListener("click", () => {
      if (this._onRestart) this._onRestart();
    });
  }

  // External listeners registration
  onNext(handler) {
    this._onNext = handler;
  }
  onRestart(handler) {
    this._onRestart = handler;
  }

  // Render a question and its options; onSelect(index) is called when user clicks an option
  renderQuestion(q, onSelect) {
    // Reset UI state for a new question
    this._clearOptions();
    this.enableNext(false);

    this.questionText.textContent = `Q${q.id}: ${q.question}`;

    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = `${idx + 1}: ${opt}`;
      btn.dataset.index = String(idx);
      this.optionsBox.appendChild(btn);
      btn.addEventListener("click", () => {
        // Only allow one selection per question
        this._disableOptions();
        if (typeof onSelect === "function") onSelect(idx);
      });
    });
  }

  // After selection, visually mark correct/wrong
  markAnswer({ correctIndex, selectedIndex }) {
    const buttons = this.optionsBox.querySelectorAll("button");
    buttons.forEach((btn, idx) => {
      btn.classList.remove("correct", "wrong");
      if (idx === correctIndex) btn.classList.add("correct");
      if (idx === selectedIndex && selectedIndex !== correctIndex) {
        btn.classList.add("wrong");
      }
    });
    this.enableNext(true);
  }

  // Footer helpers
  setProgress(current, total) {
    this.progress.textContent = `Question ${current} of ${total}`;
  }
  setScore(score, total) {
    this.score.textContent = `Score: ${score}/${total}`;
  }
  enableNext(enabled) {
    this.nextBtn.disabled = !enabled;
  }
  showRestart(show) {
    this.restartBtn.classList.toggle("hide", !show);
  }

  // Show final summary
  showFinal(score, total) {
    // Clear question UI and show a summary
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

  // Reset the entire UI to the initial state (used on restart)
  reset() {
    this._clearOptions();
    this.questionText.textContent = "";
    this.setProgress(0, 0);
    this.setScore(0, 0);
    this.enableNext(false);
    this.showRestart(false);
  }

  // Internals
  _clearOptions() {
    this.optionsBox.innerHTML = "";
  }
  _disableOptions() {
    this.optionsBox
      .querySelectorAll("button")
      .forEach((b) => (b.disabled = true));
  }
}
