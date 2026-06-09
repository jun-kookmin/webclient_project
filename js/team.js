const seats = document.querySelectorAll(".seat");
const cards = document.querySelectorAll(".member-card");

function selectMember(index) {
  seats.forEach((seat) => {
    seat.classList.toggle("is-selected", seat.dataset.member === index);
  });

  cards.forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.card === index);
  });
}

seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    const index = seat.dataset.member;
    selectMember(index);

    const targetCard = document.querySelector(`[data-card="${index}"]`);
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  });
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const index = card.dataset.card;
    selectMember(index);
  });
});
