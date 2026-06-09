const defaultHero = {
  // 처음 페이지를 열었을 때와 기본 상태에서 사용하는 공통 밤하늘 배경입니다.
  image: "images/background_space.jpg",
  alt: "푸른 성운과 별이 가득한 우주",
  caption: "기본 우주 관측 배경"
};

const seasons = {
  /*
    계절 카드와 모달에서 사용할 설명 데이터입니다.
    key(spring, summer, autumn, winter)는 HTML의 data-season 값과 연결됩니다.
  */
  spring: {
    season: "봄",
    title: "봄 대표 별자리",
    constellations: [
      {
        name: "사자자리",
        image: "images/사자자리.jpg",
        description: "봄철 남쪽 하늘에서 쉽게 찾을 수 있는 대표 별자리입니다. 물음표를 닮은 머리 부분과 밝은 별 레굴루스가 기준이 됩니다."
      },
      {
        name: "처녀자리",
        image: "images/처녀자리.jpg",
        description: "봄 밤하늘에서 넓게 펼쳐지는 큰 별자리입니다. 밝은 별 스피카를 중심으로 찾기 좋습니다."
      },
      {
        name: "목동자리",
        image: "images/목동자리.jpg",
        description: "주황빛으로 밝게 빛나는 아크투루스가 돋보이는 별자리입니다. 북두칠성의 손잡이 곡선을 따라가면 찾기 쉽습니다."
      }
    ],
    image: "images/spring.jpg",
    alt: "봄 밤하늘과 은은한 별빛"
  },
  summer: {
    season: "여름",
    title: "여름 대표 별자리",
    constellations: [
      {
        name: "백조자리",
        image: "images/백조자리.jpg",
        description: "은하수 위를 날아가는 십자 형태로 보이는 여름 대표 별자리입니다. 밝은 별 데네브가 꼬리 쪽에 있습니다."
      },
      {
        name: "거문고자리",
        image: "images/거문고자리.jpg",
        description: "여름철 가장 밝은 별 중 하나인 베가가 있는 별자리입니다. 작지만 선명해서 백조자리 근처에서 함께 찾기 좋습니다."
      },
      {
        name: "독수리자리",
        image: "images/독수리자리.jpg",
        description: "밝은 별 알타이르가 중심이 되는 별자리입니다. 데네브, 베가와 함께 여름철 대삼각형을 이룹니다."
      }
    ],
    image: "images/summer.jpg",
    alt: "여름 은하수와 별자리"
  },
  autumn: {
    season: "가을",
    title: "가을 대표 별자리",
    constellations: [
      {
        name: "페가수스자리",
        image: "images/페가수스자리.jpg",
        description: "가을철 대사각형으로 잘 알려진 별자리입니다. 넓은 사각형이 가을 밤하늘의 방향을 잡는 기준이 됩니다."
      },
      {
        name: "안드로메다자리",
        image: "images/안드로메다자리.jpg",
        description: "페가수스자리와 이어져 보이는 별자리입니다. 맑은 밤에는 안드로메다은하를 찾는 기준이 됩니다."
      },
      {
        name: "카시오페이아자리",
        image: "images/카시오페이아자리.jpg",
        description: "W자 또는 M자 모양으로 보이는 별자리입니다. 북쪽 하늘에서 찾기 쉬워 계절별 위치 변화를 관찰하기 좋습니다."
      }
    ],
    image: "images/background_space.jpg",
    alt: "가을 밤하늘의 별과 은하"
  },
  winter: {
    season: "겨울",
    title: "겨울 대표 별자리",
    constellations: [
      {
        name: "오리온자리",
        image: "images/오리온자리.jpg",
        description: "겨울 밤하늘에서 가장 눈에 띄는 별자리입니다. 세 개의 허리띠 별과 밝은 베텔게우스, 리겔로 쉽게 알아볼 수 있습니다."
      },
      {
        name: "큰개자리",
        image: "images/큰개자리.jpg",
        description: "밤하늘에서 가장 밝은 별인 시리우스가 있는 별자리입니다. 오리온자리 아래쪽을 따라가면 찾기 쉽습니다."
      },
      {
        name: "황소자리",
        image: "images/황소자리.jpg",
        description: "붉은빛의 알데바란과 플레이아데스 성단이 돋보이는 겨울 별자리입니다. 오리온자리 위쪽 근처에서 볼 수 있습니다."
      }
    ],
    image: "images/winter.jpg",
    alt: "겨울의 선명한 별자리 밤하늘"
  }
};

const heroImage = document.querySelector("#heroImage");
const heroFigure = document.querySelector(".hero-visual");
const constellationStars = document.querySelector("#constellationStars");
const constellationLines = document.querySelector("#constellationLines");
const seasonModal = document.querySelector("#seasonModal");
const modalPanel = document.querySelector(".modal-panel");
const modalSeason = document.querySelector("#modalSeason");
const modalTitle = document.querySelector("#modalTitle");
const modalSummary = document.querySelector("#modalSummary");

let lastFocusedElement = null;
let currentHeroKey = null;

const constellationShapes = {
  default: {
    caption: "계절 탭 위에 호버해보세요",
    points: [],
    lines: []
  },
  spring: {
    caption: "봄 사자자리",
    points: [
      [24, 55, 0.95], [43, 55, 0.78], [68, 60, 1.45], [82, 61, 0.72],
      [39, 44, 0.86], [44, 44, 0.68], [62, 41, 1.05], [59, 31, 0.82],
      [68, 21, 0.85], [79, 28, 0.78], [69, 45, 0.75]
    ],
    lines: [
      [0, 4], [4, 5], [5, 6], [0, 1], [1, 2], [2, 3],
      [2, 6], [6, 7], [7, 8], [8, 9], [6, 10]
    ]
  },
  summer: {
    caption: "여름 백조자리",
    points: [
      [11, 59, 0.7], [23, 60, 0.82], [41, 53, 0.86], [47, 43, 1.28],
      [41, 32, 1.06], [61, 36, 0.92], [67, 19, 0.82], [72, 15, 0.78],
      [56, 59, 0.9], [67, 76, 1.12]
    ],
    lines: [
      [0, 1], [1, 2], [2, 3], [3, 5], [5, 6], [6, 7],
      [4, 3], [3, 8], [8, 9]
    ]
  },
  autumn: {
    caption: "가을 페가수스자리",
    points: [
      [21, 27, 1], [18, 65, 0.88], [46, 28, 1.12], [49, 71, 1.08],
      [54, 20, 0.82], [65, 7, 0.7], [53, 36, 0.75], [55, 40, 0.7],
      [70, 28, 0.78], [80, 24, 0.68], [54, 76, 0.72], [61, 80, 0.7],
      [76, 90, 0.86], [88, 66, 1.05]
    ],
    lines: [
      [0, 1], [1, 3], [3, 2], [2, 0], [2, 4], [4, 5],
      [2, 6], [6, 7], [2, 8], [8, 9], [3, 10], [10, 11], [11, 12], [12, 13]
    ]
  },
  winter: {
    caption: "겨울 오리온자리",
    points: [
      [48, 6, 0.75], [35, 20, 0.72], [32, 34, 1.22], [49, 36, 0.95],
      [49, 50, 0.72], [49, 62, 0.95], [35, 67, 0.82], [45, 66, 0.78],
      [56, 66, 0.8], [27, 82, 1.05], [63, 86, 1.28], [73, 32, 0.68],
      [75, 51, 0.68], [69, 67, 0.72], [44, 78, 0.68]
    ],
    lines: [
      [2, 1], [1, 0], [2, 6], [6, 9], [9, 10], [10, 8],
      [8, 5], [5, 4], [4, 3], [3, 2], [6, 7], [7, 5],
      [5, 8], [3, 11], [11, 12], [12, 13], [7, 14]
    ]
  }
};

function drawConstellationLines(shape) {
  constellationLines.innerHTML = "";

  shape.lines.forEach(([startIndex, endIndex]) => {
    const start = shape.points[startIndex];
    const end = shape.points[endIndex];
    const line = document.createElement("div");
    const layerBounds = constellationLines.getBoundingClientRect();
    const startX = (start[0] / 100) * layerBounds.width;
    const startY = (start[1] / 100) * layerBounds.height;
    const endX = (end[0] / 100) * layerBounds.width;
    const endY = (end[1] / 100) * layerBounds.height;
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    const length = Math.hypot(deltaX, deltaY);
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    line.className = "constellation-line";
    line.style.left = `${start[0]}%`;
    line.style.top = `${start[1]}%`;
    line.style.width = `${length}px`;
    line.style.transform = `rotate(${angle}deg)`;
    constellationLines.appendChild(line);
  });
}

function showConstellation(key) {
  const shape = constellationShapes[key] || constellationShapes.default;

  constellationStars.innerHTML = "";
  constellationLines.innerHTML = "";

  if (!shape.points.length) {
    return;
  }

  shape.points.forEach(([x, y, scale = 1]) => {
    const star = document.createElement("span");

    star.className = "constellation-star";
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.setProperty("--star-scale", scale);
    constellationStars.appendChild(star);
  });

  drawConstellationLines(shape);
}

function updateHero(data, key = "custom") {
  if (currentHeroKey === key) return;

  currentHeroKey = key;
  heroFigure.classList.add("is-changing");
  heroImage.src = defaultHero.image;
  heroImage.alt = defaultHero.alt;
  showConstellation(key);

  window.setTimeout(() => {
    heroFigure.classList.remove("is-changing");
  }, 420);
}

function createConstellationCard(constellation) {
  const item = document.createElement("article");
  const image = document.createElement("img");
  const title = document.createElement("h3");
  const description = document.createElement("p");

  image.src = constellation.image;
  image.alt = `${constellation.name} 별자리 사진`;
  title.textContent = constellation.name;
  description.textContent = constellation.description;
  item.append(image, title, description);

  return item;
}

function openSeasonModal(data) {
  lastFocusedElement = document.activeElement;
  modalSeason.textContent = `${data.season} 대표 별자리`;
  modalTitle.textContent = data.title;
  modalSummary.replaceChildren(...data.constellations.map(createConstellationCard));
  seasonModal.classList.add("is-open");
  seasonModal.setAttribute("aria-hidden", "false");
  modalPanel.focus();
}

function closeSeasonModal() {
  seasonModal.classList.remove("is-open");
  seasonModal.setAttribute("aria-hidden", "true");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

document.querySelectorAll(".season-card").forEach((card) => {
  const selectedSeason = card.dataset.season;
  const seasonData = seasons[selectedSeason];

  card.addEventListener("mouseenter", () => {
    if (!seasonData) return;

    updateHero(seasonData, selectedSeason);
  });

  card.addEventListener("focus", () => {
    if (!seasonData) return;

    updateHero(seasonData, selectedSeason);
  });

  card.addEventListener("click", () => {
    if (!seasonData) return;

    updateHero(seasonData, selectedSeason);
    openSeasonModal(seasonData);
  });
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeSeasonModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && seasonModal.classList.contains("is-open")) {
    closeSeasonModal();
  }
});

updateHero(defaultHero, "default");

window.addEventListener("resize", () => {
  const shape = constellationShapes[currentHeroKey] || constellationShapes.default;

  drawConstellationLines(shape);
});
