const QUESTION_TOTAL = 10;

const constellations = [
  { id: "aries", name: "양자리", image: "images/star/aries.svg" },
  { id: "taurus", name: "황소자리", image: "images/star/taurus.svg" },
  { id: "gemini", name: "쌍둥이자리", image: "images/star/gemini.svg" },
  { id: "cancer", name: "게자리", image: "images/star/cancer.svg" },
  { id: "leo", name: "사자자리", image: "images/star/leo.svg" },
  { id: "virgo", name: "처녀자리", image: "images/star/virgo.svg" },
  { id: "libra", name: "천칭자리", image: "images/star/libra.svg" },
  { id: "scorpio", name: "전갈자리", image: "images/star/scorpio.svg" },
  { id: "sagittarius", name: "사수자리", image: "images/star/sagittarius.svg" },
  { id: "capricorn", name: "염소자리", image: "images/star/capricorn.svg" },
  { id: "aquarius", name: "물병자리", image: "images/star/aquarius.svg" },
  { id: "pisces", name: "물고기자리", image: "images/star/pisces.svg" }
];

const gameState = {
  difficulty: "easy",
  questions: [],
  current: 0,
  score: 0,
  hints: 3,
  startedAt: 0,
  timerId: null,
  locked: true
};

const gameVisual = document.querySelector("#gameVisual");
const answerGrid = document.querySelector("#answerGrid");
const questionNow = document.querySelector("#questionNow");
const questionTotal = document.querySelector("#questionTotal");
const scoreValue = document.querySelector("#scoreValue");
const timerValue = document.querySelector("#timerValue");
const hintCount = document.querySelector("#hintCount");
const gameMessage = document.querySelector("#gameMessage");
const startButton = document.querySelector("#startGame");
const hintButton = document.querySelector("#hintButton");

function shuffle(items) {
  return items
    .map((item) => ({ item, order: Math.random() }))
    .sort((left, right) => left.order - right.order)
    .map((entry) => entry.item);
}

function drawConstellation(constellation) {
  gameVisual.setAttribute("aria-label", `${constellation.name} 문제 이미지`);
  gameVisual.innerHTML = "";

  const image = document.createElement("img");
  image.className = "constellation-image";
  image.src = constellation.image;
  image.alt = `${constellation.name} 별자리 이미지`;
  image.draggable = false;
  gameVisual.appendChild(image);
}

function buildQuestion(answer) {
  const wrongOptions = shuffle(constellations.filter((item) => item.id !== answer.id)).slice(0, 3);

  return {
    answer,
    options: shuffle([answer, ...wrongOptions])
  };
}

function buildQuestions() {
  return shuffle(constellations).slice(0, QUESTION_TOTAL).map(buildQuestion);
}

function renderAnswers(question) {
  answerGrid.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.className = "answer-btn";
    button.type = "button";
    button.dataset.id = option.id;
    button.innerHTML = `<span class="answer-number">${index + 1}</span><span>${option.name}</span>`;
    button.addEventListener("click", () => chooseAnswer(button, option.id));
    answerGrid.appendChild(button);
  });
}

function renderPreview() {
  const preview = buildQuestion(constellations[0]);

  questionNow.textContent = "1";
  questionTotal.textContent = String(QUESTION_TOTAL);
  drawConstellation(preview.answer);
  renderAnswers(preview);
}

function updateTimer() {
  if (!gameState.startedAt) return;

  const elapsedSeconds = Math.floor((Date.now() - gameState.startedAt) / 1000);
  const minutes = String(Math.floor(elapsedSeconds / 60)).padStart(2, "0");
  const seconds = String(elapsedSeconds % 60).padStart(2, "0");

  timerValue.textContent = `${minutes}:${seconds}`;
}

function renderQuestion() {
  const question = gameState.questions[gameState.current];

  if (!question) {
    finishGame();
    return;
  }

  questionNow.textContent = String(gameState.current + 1);
  questionTotal.textContent = String(gameState.questions.length);
  drawConstellation(question.answer);
  renderAnswers(question);
}

function getHintCount() {
  if (gameState.difficulty === "hard") return 1;
  if (gameState.difficulty === "normal") return 2;
  return 3;
}

function startGame() {
  gameState.questions = buildQuestions();
  gameState.current = 0;
  gameState.score = 0;
  gameState.hints = getHintCount();
  gameState.startedAt = Date.now();
  gameState.locked = false;

  window.clearInterval(gameState.timerId);
  gameState.timerId = window.setInterval(updateTimer, 1000);
  scoreValue.textContent = "0";
  timerValue.textContent = "00:00";
  hintCount.textContent = String(gameState.hints);
  gameMessage.textContent = "관측창의 별자리 이미지를 보고 가장 알맞은 이름을 고르세요.";
  startButton.querySelector("span").textContent = "게임 다시 시작하기";
  renderQuestion();
}

function chooseAnswer(button, selectedId) {
  if (gameState.locked) {
    gameMessage.textContent = "게임 시작하기 버튼을 누르면 선택할 수 있어요.";
    return;
  }

  const question = gameState.questions[gameState.current];
  const isCorrect = selectedId === question.answer.id;

  gameState.locked = true;
  document.querySelectorAll(".answer-btn").forEach((answerButton) => {
    answerButton.disabled = true;

    if (answerButton.dataset.id === question.answer.id) {
      answerButton.classList.add("correct");
    }
  });

  if (isCorrect) {
    gameState.score += 10;
    gameMessage.textContent = `정답입니다. ${question.answer.name} 관측 기록이 저장되었습니다.`;
  } else {
    button.classList.add("wrong");
    gameMessage.textContent = `오답입니다. 정답은 ${question.answer.name}입니다.`;
  }

  scoreValue.textContent = String(gameState.score);

  window.setTimeout(() => {
    gameState.current += 1;
    gameState.locked = false;
    renderQuestion();
  }, 850);
}

function useHint() {
  if (gameState.locked) {
    gameMessage.textContent = "게임이 시작된 뒤 힌트를 사용할 수 있어요.";
    return;
  }

  if (gameState.hints <= 0) {
    gameMessage.textContent = "남은 힌트가 없습니다.";
    return;
  }

  const question = gameState.questions[gameState.current];
  const wrongButton = Array.from(document.querySelectorAll(".answer-btn")).find((button) => (
    button.dataset.id !== question.answer.id && !button.disabled
  ));

  if (!wrongButton) return;

  wrongButton.disabled = true;
  gameState.hints -= 1;
  hintCount.textContent = String(gameState.hints);
  gameMessage.textContent = "힌트가 적용되었습니다. 오답 보기 하나를 제거했습니다.";
}

function finishGame() {
  window.clearInterval(gameState.timerId);
  gameState.locked = true;
  gameVisual.setAttribute("aria-label", "게임 완료");
  gameVisual.innerHTML = `<div class="finish-copy">게임 완료<br><strong>${gameState.score}점</strong></div>`;
  answerGrid.innerHTML = `
    <button class="answer-btn correct" type="button" id="retryButton"><span class="answer-number">↻</span><span>다시 도전하기</span></button>
    <a class="answer-btn" href="main.html"><span class="answer-number">⌂</span><span>메인으로 이동</span></a>
  `;
  gameMessage.textContent = `최종 점수는 ${gameState.score}점입니다. 계절별 대표 별자리를 다시 관측해 보세요.`;
  document.querySelector("#retryButton").addEventListener("click", startGame);
}

document.querySelectorAll(".difficulty-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".difficulty-btn").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    gameState.difficulty = button.dataset.difficulty;
    hintCount.textContent = String(getHintCount());
  });
});

startButton.addEventListener("click", startGame);
hintButton.addEventListener("click", useHint);
hintCount.textContent = String(getHintCount());
renderPreview();
