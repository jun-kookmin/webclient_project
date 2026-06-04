/*
  계절 카드와 모달에서 사용하는 설명 데이터입니다.
  HTML의 data-season 값과 seasons의 key가 연결됩니다.
*/
const seasons = {
  spring: {
    season: "봄",
    title: "봄 황도 별자리",
    constellations: [
      {
        name: "황소자리",
        image: "images/star/taurus.svg",
        description: "알데바란과 플레이아데스 성단으로 잘 알려진 황도 별자리입니다."
      },
      {
        name: "양자리",
        image: "images/star/aries.svg",
        description: "황도 12궁의 첫 번째 별자리입니다. 봄의 시작과 출발의 이미지를 담고 있습니다."
      },
      {
        name: "쌍둥이자리",
        image: "images/star/gemini.svg",
        description: "카스토르와 폴룩스 두 밝은 별이 기준이 되는 황도 별자리입니다."
      }
    ]
  },
  summer: {
    season: "여름",
    title: "여름 황도 별자리",
    constellations: [
      {
        name: "사자자리",
        image: "images/star/leo.svg",
        description: "밝은 별 레굴루스가 기준이 되는 황도 별자리입니다. 강인함과 존재감을 상징합니다."
      },
      {
        name: "게자리",
        image: "images/star/cancer.svg",
        description: "밝은 별은 적지만 황도 위에 놓인 별자리로, 보호와 가족의 상징으로 자주 해석됩니다."
      },
      {
        name: "처녀자리",
        image: "images/star/virgo.svg",
        description: "황도 12궁 중 큰 별자리 중 하나이며, 밝은 별 스피카가 대표적입니다."
      }
    ]
  },
  autumn: {
    season: "가을",
    title: "가을 황도 별자리",
    constellations: [
      {
        name: "천칭자리",
        image: "images/star/libra.svg",
        description: "균형과 정의를 상징하는 황도 별자리입니다."
      },
      {
        name: "전갈자리",
        image: "images/star/scorpio.svg",
        description: "붉은 별 안타레스가 돋보이는 황도 별자리입니다."
      },
      {
        name: "사수자리",
        image: "images/star/sagittarius.svg",
        description: "은하수 중심 방향과 가까운 황도 별자리입니다."
      }
    ]
  },
  winter: {
    season: "겨울",
    title: "겨울 황도 별자리",
    constellations: [
      {
        name: "물고기자리",
        image: "images/star/pisces.svg",
        description: "두 마리 물고기의 이미지로 표현되는 황도 별자리입니다."
      },
      {
        name: "염소자리",
        image: "images/star/capricorn.svg",
        description: "바다염소의 이미지와 연결되는 황도 별자리입니다."
      },
      {
        name: "물병자리",
        image: "images/star/aquarius.svg",
        description: "물을 따르는 인물의 상징으로 알려진 황도 별자리입니다."
      }
    ]
  }
};

const defaultSeason = "spring";
const heroVisual = document.querySelector(".hero-visual");
const heroStarImage = document.querySelector("#heroStarImage");
const heroZodiacLayer = document.querySelector("#heroZodiacLayer");
const seasonModal = document.querySelector("#seasonModal");
const modalSeason = document.querySelector("#modalSeason");
const modalTitle = document.querySelector("#modalTitle");
const modalSummary = document.querySelector("#modalSummary");

// 선택한 계절의 첫 번째 /star SVG를 관측창에 표시합니다.
function showConstellation(seasonKey) {
  const seasonData = seasons[seasonKey];
  const constellation = seasonData?.constellations[0];
  heroVisual.dataset.activeSeason = seasonKey;
  if (!constellation || !heroStarImage) return;

  heroStarImage.src = constellation.image;
  heroStarImage.alt = `${constellation.name} 별자리 그림`;
  heroZodiacLayer?.replaceChildren();
}

// hover가 끝나면 기본 별자리로 되돌려 관측창이 비어 보이지 않게 합니다.
function hideConstellation() {
  showConstellation(defaultSeason);
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

showConstellation(defaultSeason);
