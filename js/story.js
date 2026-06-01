const storyData = {
  aries: {
    code: "BIRTH 01",
    name: "양자리",
    image: "images/12/story-aries.jpg",
    myth: "양자리는 그리스 신화에서 황금 양털을 가진 신비로운 양과 관련됩니다. 프릭소스와 헬레 남매를 구하기 위해 하늘을 날아간 황금 양의 이야기가 전해지며, 이후 황금 양털은 영웅들의 모험과도 연결됩니다.",
    info: ["구분: 생일 별자리", "상징: 출발과 용기", "특징: 황도 12궁의 첫 번째 별자리"],
    meaning: "양자리는 새로운 시작, 도전, 앞으로 나아가는 힘을 상징합니다."
  },
  taurus: {
    code: "BIRTH 02",
    name: "황소자리",
    image: "images/12/story-taurus.jpg",
    myth: "황소자리는 제우스가 하얀 황소로 변신해 에우로페에게 다가갔다는 신화와 연결됩니다. 밤하늘에서는 붉은 별 알데바란과 플레이아데스 성단이 함께 보여 찾기 좋은 별자리입니다.",
    info: ["구분: 생일 별자리", "대표 별: 알데바란", "특징: 플레이아데스 성단 근처에서 관찰됨"],
    meaning: "황소자리는 안정감, 끈기, 강한 생명력을 상징합니다."
  },
  gemini: {
    code: "BIRTH 03",
    name: "쌍둥이자리",
    image: "images/12/story-gemini.jpg",
    myth: "쌍둥이자리는 카스토르와 폴룩스 형제의 이야기와 관련됩니다. 두 형제는 서로를 매우 아꼈고, 죽음으로 갈라지게 되었을 때도 함께하고자 했다는 전설이 전해집니다.",
    info: ["구분: 생일 별자리", "대표 별: 카스토르, 폴룩스", "특징: 나란히 빛나는 두 밝은 별이 기준"],
    meaning: "쌍둥이자리는 우정, 형제애, 소통을 상징합니다."
  },
  cancer: {
    code: "BIRTH 04",
    name: "게자리",
    image: "images/12/story-cancer.jpg",
    myth: "게자리는 헤라클레스가 히드라와 싸울 때 헤라가 보낸 거대한 게와 관련됩니다. 게는 헤라클레스를 방해하려 했지만 결국 밟혀 죽었고, 헤라는 그 공을 기려 하늘의 별자리로 올렸다고 전해집니다.",
    info: ["구분: 생일 별자리", "상징: 보호와 헌신", "특징: 밝은 별은 적지만 황도 위에 위치함"],
    meaning: "게자리는 보호, 가족, 조용한 헌신을 상징합니다."
  },
  leo: {
    code: "BIRTH 05",
    name: "사자자리",
    image: "images/12/story-leo.jpg",
    myth: "사자자리는 헤라클레스가 첫 번째 과업으로 물리친 네메아의 사자와 관련됩니다. 이 사자는 어떤 무기로도 쉽게 상처를 입지 않는 강력한 존재였고, 헤라클레스는 맨손으로 사자를 제압했다고 전해집니다.",
    info: ["구분: 생일 별자리", "대표 별: 레굴루스", "특징: 물음표 모양의 머리 부분이 찾기 쉬움"],
    meaning: "사자자리는 용기, 힘, 시련을 이겨내는 의지를 상징합니다."
  },
  virgo: {
    code: "BIRTH 06",
    name: "처녀자리",
    image: "images/12/story-virgo.jpg",
    myth: "처녀자리는 정의의 여신 아스트라이아와 연결되기도 합니다. 인간 세상이 타락하자 마지막까지 땅에 남아 있던 여신이 결국 하늘로 올라가 별자리가 되었다는 이야기가 전해집니다.",
    info: ["구분: 생일 별자리", "대표 별: 스피카", "특징: 밤하늘에서 매우 큰 별자리 중 하나"],
    meaning: "처녀자리는 순수함, 정의, 질서를 상징합니다."
  },
  libra: {
    code: "BIRTH 07",
    name: "천칭자리",
    image: "images/12/story-libra.jpg",
    myth: "천칭자리는 정의와 균형을 재는 저울의 이미지와 연결됩니다. 고대에는 처녀자리와 함께 정의의 상징으로 이해되었고, 선과 악, 옳고 그름을 판단하는 의미를 담고 있습니다.",
    info: ["구분: 생일 별자리", "상징: 저울", "특징: 황도 12궁 중 물건 형태를 가진 별자리"],
    meaning: "천칭자리는 균형, 공정함, 조화를 상징합니다."
  },
  scorpius: {
    code: "BIRTH 08",
    name: "전갈자리",
    image: "images/12/story-scorpio.jpg",
    myth: "전갈자리는 사냥꾼 오리온을 쓰러뜨린 전갈의 이야기와 관련됩니다. 오리온이 지나치게 자만하자 신들이 전갈을 보내 벌했다는 이야기가 전해지며, 하늘에서도 오리온자리와 전갈자리는 서로 다른 계절에 나타납니다.",
    info: ["구분: 생일 별자리", "대표 별: 안타레스", "특징: S자 형태와 붉은 별 안타레스가 뚜렷함"],
    meaning: "전갈자리는 강렬함, 경계심, 자만에 대한 경고를 상징합니다."
  },
  sagittarius: {
    code: "BIRTH 09",
    name: "사수자리",
    image: "images/12/story-sagittarius.jpg",
    myth: "사수자리는 활을 든 켄타우로스의 모습으로 표현됩니다. 지혜로운 켄타우로스 케이론과 연결해 해석되기도 하며, 하늘에서는 은하수 중심 방향 근처에 위치합니다.",
    info: ["구분: 생일 별자리", "상징: 활과 화살", "특징: 은하수 중심 방향에 가까움"],
    meaning: "사수자리는 탐구심, 목표, 넓은 세계를 향한 모험을 상징합니다."
  },
  capricornus: {
    code: "BIRTH 10",
    name: "염소자리",
    image: "images/12/story-capricorn.jpg",
    myth: "염소자리는 상반신은 염소, 하반신은 물고기인 바다염소의 모습으로 알려져 있습니다. 괴물 티폰을 피해 신들이 변신했다는 이야기와 연결되며, 독특한 모습 때문에 오래전부터 상징적으로 해석되었습니다.",
    info: ["구분: 생일 별자리", "상징: 바다염소", "특징: 비교적 어두운 별들로 이루어진 별자리"],
    meaning: "염소자리는 인내, 현실감, 어려움을 견디는 힘을 상징합니다."
  },
  aquarius: {
    code: "BIRTH 11",
    name: "물병자리",
    image: "images/12/story-aquarius.jpg",
    myth: "물병자리는 물을 따르는 소년 가니메데와 연결됩니다. 가니메데는 신들에게 선택되어 올림포스에서 술을 따르는 역할을 맡았다고 전해지며, 별자리에는 물과 생명의 이미지가 담겨 있습니다.",
    info: ["구분: 생일 별자리", "상징: 물병", "특징: 주변에 물고기자리, 염소자리 등이 위치함"],
    meaning: "물병자리는 지식, 나눔, 새로운 흐름을 상징합니다."
  },
  pisces: {
    code: "BIRTH 12",
    name: "물고기자리",
    image: "images/12/story-pisces.jpg",
    myth: "물고기자리는 아프로디테와 에로스가 괴물 티폰을 피해 물고기로 변신했다는 이야기와 관련됩니다. 두 물고기가 끈으로 연결된 모습으로 표현되며, 서로 떨어지지 않으려는 의미가 담겨 있습니다.",
    info: ["구분: 생일 별자리", "상징: 두 마리 물고기", "특징: 비교적 어두워 관측이 쉽지는 않음"],
    meaning: "물고기자리는 연결, 상상력, 감수성을 상징합니다."
  },

    bootes: {
    code: "SPRING 01",
    name: "목동자리",
    image: "images/목동자리.jpg",
    myth: "목동자리는 하늘에서 큰곰자리와 작은곰자리를 몰고 가는 목동의 모습으로 해석됩니다. 고대 사람들은 북쪽 하늘의 곰 별자리를 따라 움직이는 인물로 목동자리를 상상했고, 밝은 별 아크투루스를 기준으로 봄 하늘을 찾았습니다.",
    info: ["구분: 계절 별자리", "계절: 봄", "대표 별: 아크투루스"],
    meaning: "목동자리는 밤하늘의 길잡이, 관측의 시작, 별을 따라 방향을 찾는 사람의 이미지를 상징합니다."
  },

  lyra: {
    code: "SUMMER 01",
    name: "거문고자리",
    image: "images/거문고자리.jpg",
    myth: "거문고자리는 그리스 신화의 음악가 오르페우스가 연주하던 리라와 연결됩니다. 오르페우스의 음악은 사람뿐 아니라 동물과 나무, 신들까지 감동시켰다고 전해집니다. 그가 죽은 뒤 그의 악기는 하늘에 올라가 별자리가 되었다고 합니다.",
    info: ["구분: 계절 별자리", "계절: 여름", "대표 별: 베가"],
    meaning: "거문고자리는 예술, 감성, 음악, 그리고 별빛처럼 오래 남는 이야기를 상징합니다."
  },

  aquila: {
    code: "SUMMER 02",
    name: "독수리자리",
    image: "images/독수리자리.jpg",
    myth: "독수리자리는 제우스의 독수리와 관련됩니다. 신화에서 독수리는 제우스의 명령을 전하거나 중요한 인물을 하늘로 데려가는 존재로 등장합니다. 여름 밤하늘에서는 밝은 별 알타이르를 중심으로 독수리의 모습을 상상할 수 있습니다.",
    info: ["구분: 계절 별자리", "계절: 여름", "대표 별: 알타이르"],
    meaning: "독수리자리는 힘, 속도, 높은 곳을 향한 비상, 신의 전령 같은 이미지를 상징합니다."
  },

  cygnus: {
    code: "SUMMER 03",
    name: "백조자리",
    image: "images/백조자리.jpg",
    myth: "백조자리는 여러 신화에서 하늘을 나는 백조의 모습으로 등장합니다. 특히 제우스가 백조로 변신했다는 이야기와 연결되기도 합니다. 은하수 위에 길게 놓인 별의 배열 때문에, 고대 사람들은 밤하늘을 가로지르는 새의 모습을 떠올렸습니다.",
    info: ["구분: 계절 별자리", "계절: 여름", "대표 별: 데네브"],
    meaning: "백조자리는 변신, 자유, 하늘을 가로지르는 이동, 신비로운 아름다움을 상징합니다."
  },

  andromeda: {
    code: "AUTUMN 01",
    name: "안드로메다자리",
    image: "images/안드로메다자리.jpg",
    myth: "안드로메다는 카시오페이아 왕비의 딸입니다. 카시오페이아가 자신의 아름다움을 자랑해 신들의 분노를 사자, 안드로메다는 바다 괴물에게 제물로 바쳐질 위기에 놓였습니다. 이후 영웅 페르세우스가 그녀를 구해내는 이야기로 이어집니다.",
    info: ["구분: 계절 별자리", "계절: 가을", "관련 별자리: 페가수스자리, 카시오페이아자리"],
    meaning: "안드로메다자리는 위기, 구원, 희생, 그리고 여러 별자리가 하나의 이야기로 연결되는 구조를 상징합니다."
  },

  pegasus: {
    code: "AUTUMN 02",
    name: "페가수스자리",
    image: "images/페가수스자리.jpg",
    myth: "페가수스는 그리스 신화에 나오는 날개 달린 말입니다. 페르세우스와 벨레로폰의 모험 이야기와 연결되며, 하늘을 날 수 있는 신비로운 존재로 묘사됩니다. 가을 밤하늘에서는 큰 사각형 형태가 페가수스자리를 찾는 기준이 됩니다.",
    info: ["구분: 계절 별자리", "계절: 가을", "특징: 가을철 대사각형"],
    meaning: "페가수스자리는 상상력, 도약, 자유, 하늘을 향한 탐험을 상징합니다."
  },

  cassiopeia: {
    code: "AUTUMN 03",
    name: "카시오페이아자리",
    image: "images/카시오페이아자리.jpg",
    myth: "카시오페이아는 에티오피아의 왕비로, 자신의 아름다움을 바다의 요정들보다 뛰어나다고 자랑했습니다. 이 자만심 때문에 바다의 신 포세이돈의 분노를 사게 되었고, 결국 하늘의 별자리로 남게 되었다고 전해집니다.",
    info: ["구분: 계절 별자리", "계절: 가을", "특징: W자 또는 M자 모양"],
    meaning: "카시오페이아자리는 아름다움, 자만, 그리고 겸손의 필요성을 상징합니다."
  },

  orion: {
    code: "WINTER 01",
    name: "오리온자리",
    image: "images/오리온자리.jpg",
    myth: "오리온은 그리스 신화 속 뛰어난 사냥꾼입니다. 그는 자신의 사냥 실력을 지나치게 자랑하다가 전갈에게 죽임을 당했다는 이야기가 전해집니다. 그래서 하늘에서도 오리온자리는 전갈자리와 서로 다른 계절에 나타난다고 해석됩니다.",
    info: ["구분: 계절 별자리", "계절: 겨울", "대표 별: 베텔게우스, 리겔"],
    meaning: "오리온자리는 자신감, 도전, 강한 존재감, 그리고 지나친 자만에 대한 경계를 상징합니다."
  },

  canisMajor: {
    code: "WINTER 02",
    name: "큰개자리",
    image: "images/큰개자리.jpg",
    myth: "큰개자리는 오리온의 사냥개로 해석됩니다. 겨울 밤하늘에서 오리온자리 근처에 위치하며, 밤하늘에서 가장 밝게 빛나는 별 시리우스를 품고 있습니다. 고대 사람들은 이 별자리를 사냥꾼을 따르는 충성스러운 개의 모습으로 보았습니다.",
    info: ["구분: 계절 별자리", "계절: 겨울", "대표 별: 시리우스"],
    meaning: "큰개자리는 충성, 동행, 보호, 겨울 밤하늘에서 가장 강하게 빛나는 존재감을 상징합니다."
  }
};

const storyModal = document.querySelector("#storyModal");
const storyModalPanel = document.querySelector(".story-modal-panel");
const storyModalCode = document.querySelector("#storyModalCode");
const storyModalTitle = document.querySelector("#storyModalTitle");
const storyModalImage = document.querySelector("#storyModalImage");
const storyModalMyth = document.querySelector("#storyModalMyth");
const storyModalInfo = document.querySelector("#storyModalInfo");
const storyModalMeaning = document.querySelector("#storyModalMeaning");

let lastStoryCard = null;

function openStoryModal(story) {
  lastStoryCard = document.activeElement;

  storyModalCode.textContent = story.code;
  storyModalTitle.textContent = story.name;
  storyModalImage.src = story.image;
  storyModalImage.alt = `${story.name} 별자리 이미지`;
  storyModalMyth.textContent = story.myth;
  storyModalMeaning.textContent = story.meaning;

  storyModalInfo.innerHTML = "";

  story.info.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    storyModalInfo.appendChild(li);
  });

  storyModal.classList.add("is-open");
  storyModal.setAttribute("aria-hidden", "false");
  storyModalPanel.focus();
}

function closeStoryModal() {
  storyModal.classList.remove("is-open");
  storyModal.setAttribute("aria-hidden", "true");

  if (lastStoryCard) {
    lastStoryCard.focus();
  }
}

document.querySelectorAll(".story-card").forEach((card) => {
  const storyKey = card.dataset.story;

  card.addEventListener("click", () => {
    const story = storyData[storyKey];

    if (!story) return;

    openStoryModal(story);
  });
});

document.querySelectorAll("[data-close-story-modal]").forEach((button) => {
  button.addEventListener("click", closeStoryModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && storyModal.classList.contains("is-open")) {
    closeStoryModal();
  }
});