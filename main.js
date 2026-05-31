/*
  계절 카드와 모달에서 사용하는 설명 데이터입니다.
  HTML의 data-season 값과 seasons의 key가 연결됩니다.
*/
const seasons = {
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
    ]
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
    ]
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
    ]
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
    ]
  }
};

const heroVisual = document.querySelector(".hero-visual");
const seasonModal = document.querySelector("#seasonModal");
const modalSeason = document.querySelector("#modalSeason");
const modalTitle = document.querySelector("#modalTitle");
const modalSummary = document.querySelector("#modalSummary");

// HTML에 미리 만들어 둔 계절별 별자리 div 중 하나만 보이게 합니다.
function showConstellation(seasonKey) {
  heroVisual.dataset.activeSeason = seasonKey;
}

// hover가 끝나면 별자리 표시를 숨깁니다.
function hideConstellation() {
  delete heroVisual.dataset.activeSeason;
}

// 모달 안의 별자리 설명 카드 하나를 만듭니다.
function createConstellationCard(constellation) {
  const item = document.createElement("article");
  const image = document.createElement("img");
  const title = document.createElement("h3");
  const description = document.createElement("p");

  image.src = constellation.image;
  image.alt = `${constellation.name} 사진`;
  title.textContent = constellation.name;
  description.textContent = constellation.description;
  item.append(image, title, description);

  return item;
}

function openSeasonModal(data) {
  modalSeason.textContent = `${data.season} 대표 별자리`;
  modalTitle.textContent = data.title;
  modalSummary.replaceChildren(...data.constellations.map(createConstellationCard));
  seasonModal.classList.add("is-open");
}

function closeSeasonModal() {
  seasonModal.classList.remove("is-open");
}

document.querySelectorAll(".season-card").forEach((card) => {
  const seasonKey = card.dataset.season;
  const seasonData = seasons[seasonKey];
  if (!seasonData) return;

  card.addEventListener("mouseenter", () => showConstellation(seasonKey));
  card.addEventListener("focus", () => showConstellation(seasonKey));
  card.addEventListener("mouseleave", hideConstellation);
  card.addEventListener("blur", hideConstellation);
  card.addEventListener("click", () => {
    showConstellation(seasonKey);
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
