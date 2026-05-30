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
      // 모달에 3열 카드로 표시될 봄 별자리 설명들입니다.
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
      // 모달에 3열 카드로 표시될 여름 별자리 설명들입니다.
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
      // 모달에 3열 카드로 표시될 가을 별자리 설명들입니다.
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
      // 모달에 3열 카드로 표시될 겨울 별자리 설명들입니다.
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

/*
  HTML에서 필요한 요소들을 찾아 변수에 저장합니다.
  querySelector로 한 번 찾아두면 아래 함수들에서 반복해서 사용할 수 있습니다.
*/
const heroImage = document.querySelector("#heroImage");
const heroFigure = document.querySelector(".hero-visual");
const constellationStars = document.querySelector("#constellationStars");
const constellationLines = document.querySelector("#constellationLines");
const seasonModal = document.querySelector("#seasonModal");
const modalPanel = document.querySelector(".modal-panel");
const modalSeason = document.querySelector("#modalSeason");
const modalTitle = document.querySelector("#modalTitle");
const modalSummary = document.querySelector("#modalSummary");

// 모달을 닫은 뒤, 사용자가 마지막으로 보고 있던 계절 카드에 다시 포커스를 돌려주기 위한 변수입니다.
let lastFocusedElement = null;

// 현재 히어로 영역에 표시 중인 별자리 key입니다. 같은 계절에 다시 호버했을 때 불필요한 재실행을 막습니다.
let currentHeroKey = null;

const constellationShapes = {
  /*
    별자리 애니메이션에 사용할 좌표 데이터입니다.
    points의 각 값은 [x%, y%, 별크기] 형태입니다.
    lines의 각 값은 points 배열의 인덱스를 연결하는 [시작별, 끝별] 형태입니다.
  */
  default: {
    // default는 일부러 빈 배열입니다. 처음 페이지를 열었을 때 별자리가 보이지 않게 하기 위해서입니다.
    caption: "계절 탭 위에 호버해보세요",
    points: [],
    lines: []
  },
  spring: {
    // spring.jpg 사자자리 이미지를 참고해 별 위치를 퍼센트 좌표로 옮긴 데이터입니다.
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
    // summer.jpg 백조자리 이미지를 참고한 데이터입니다.
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
    // fall.jpg 페가수스자리 이미지를 참고한 데이터입니다.
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
    // winter.jpg 오리온자리 이미지를 참고한 데이터입니다.
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
  /*
    별과 별 사이의 연결선을 새로 그립니다.
    SVG를 사용하지 않고 div를 선처럼 만들어서 사용합니다.
  */
  constellationLines.innerHTML = "";

  shape.lines.forEach(([startIndex, endIndex]) => {
    // lines 배열의 인덱스를 이용해 연결할 두 별의 좌표를 찾습니다.
    const start = shape.points[startIndex];
    const end = shape.points[endIndex];
    const line = document.createElement("div");

    /*
      좌표는 퍼센트 값이지만 선의 실제 길이는 px 단위가 필요합니다.
      그래서 현재 별자리 레이어의 실제 width/height를 가져와 px 좌표로 변환합니다.
    */
    const layerBounds = constellationLines.getBoundingClientRect();
    const startX = (start[0] / 100) * layerBounds.width;
    const startY = (start[1] / 100) * layerBounds.height;
    const endX = (end[0] / 100) * layerBounds.width;
    const endY = (end[1] / 100) * layerBounds.height;
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    const length = Math.hypot(deltaX, deltaY);
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    /*
      div 선은 왼쪽 시작점에 놓고 width를 두 별 사이 거리만큼 늘린 뒤,
      transform: rotate(...)로 끝 별 방향을 향하게 만듭니다.
    */
    line.setAttribute("class", "constellation-line");
    line.style.left = `${start[0]}%`;
    line.style.top = `${start[1]}%`;
    line.style.width = `${length}px`;
    line.style.transform = `rotate(${angle}deg)`;
    constellationLines.appendChild(line);
  });
}

function showConstellation(key) {
  /*
    선택된 계절 key에 맞춰 별자리를 화면에 보여주는 함수입니다.
    이해하기 쉽도록 기존 별과 선을 모두 지우고, 선택한 별자리를 새로 그립니다.
  */
  const shape = constellationShapes[key] || constellationShapes.default;

  // 이전에 그려진 별과 선을 전부 지웁니다.
  constellationStars.innerHTML = "";
  constellationLines.innerHTML = "";

  if (!shape.points.length) {
    // default처럼 points가 비어 있으면 아무것도 그리지 않습니다.
    return;
  }

  shape.points.forEach(([x, y, scale = 1]) => {
    // 별 하나를 span으로 만들고, 좌표와 크기를 바로 지정합니다.
    const star = document.createElement("span");

    star.className = "constellation-star";
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.setProperty("--star-scale", scale);
    constellationStars.appendChild(star);
  });

  // 별을 모두 만든 다음, 별 사이를 연결하는 선을 그립니다.
  drawConstellationLines(shape);
}

function updateHero(data, key = "custom") {
  /*
    히어로 영역의 상태를 바꾸는 함수입니다.
    현재는 배경 이미지는 공통으로 유지하고, key에 맞는 별자리를 새로 그립니다.
  */
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

function openSeasonModal(data) {
  /*
    계절 카드를 클릭했을 때 모달을 여는 함수입니다.
    선택한 계절의 constellations 배열을 읽어서 이미지+제목+설명 카드 3개를 생성합니다.
  */
  lastFocusedElement = document.activeElement;
  modalSeason.textContent = `${data.season} 대표 별자리`;
  modalTitle.textContent = data.title;
  modalSummary.innerHTML = "";

  data.constellations.forEach((constellation) => {
    // 각 별자리 설명 카드(article)를 JS로 만듭니다.
    const item = document.createElement("article");
    const image = document.createElement("img");
    const title = document.createElement("h3");
    const description = document.createElement("p");

    // textContent를 사용해 텍스트를 넣으면 HTML 코드가 실행되지 않아 안전합니다.
    image.src = constellation.image;
    image.alt = `${constellation.name} 별자리 사진`;
    title.textContent = constellation.name;
    description.textContent = constellation.description;
    item.append(image, title, description);
    modalSummary.appendChild(item);
  });

  seasonModal.classList.add("is-open");
  seasonModal.setAttribute("aria-hidden", "false");
  modalPanel.focus();
}

function closeSeasonModal() {
  // 모달을 닫고, 접근성을 위해 이전에 포커스되어 있던 카드로 포커스를 되돌립니다.
  seasonModal.classList.remove("is-open");
  seasonModal.setAttribute("aria-hidden", "true");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

document.querySelectorAll(".season-card").forEach((card) => {
  /*
    모든 계절 카드에 이벤트를 연결합니다.
    data-season 값으로 seasons 데이터와 constellationShapes 데이터를 찾아 사용합니다.
  */
  const selectedSeason = card.dataset.season;
  const seasonData = seasons[selectedSeason];

  card.addEventListener("mouseenter", () => {
    // 마우스를 올리면 해당 계절의 별자리 배치로 전환합니다.
    if (!seasonData) return;

    updateHero(seasonData, selectedSeason);
  });

  card.addEventListener("focus", () => {
    // 키보드 탭 이동으로 카드에 포커스가 와도 같은 효과가 나도록 합니다.
    if (!seasonData) return;

    updateHero(seasonData, selectedSeason);
  });

  card.addEventListener("click", () => {
    // 클릭하면 별자리 배치를 유지하면서 계절별 3개 별자리 설명 모달을 엽니다.
    if (!seasonData) return;

    updateHero(seasonData, selectedSeason);
    openSeasonModal(seasonData);
  });
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  // 닫기 버튼과 배경 클릭 모두 같은 closeSeasonModal 함수를 사용합니다.
  button.addEventListener("click", closeSeasonModal);
});

document.addEventListener("keydown", (event) => {
  // Esc 키를 누르면 열린 모달을 닫습니다.
  if (event.key === "Escape" && seasonModal.classList.contains("is-open")) {
    closeSeasonModal();
  }
});

// 페이지가 처음 로드되면 기본 상태로 설정합니다. default는 별이 없는 상태입니다.
updateHero(defaultHero, "default");

window.addEventListener("resize", () => {
  // 화면 크기가 바뀌면 div 선의 px 길이와 회전 각도를 다시 계산해야 합니다.
  const shape = constellationShapes[currentHeroKey] || constellationShapes.default;

  drawConstellationLines(shape);
});
