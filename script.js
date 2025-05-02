const cards = document.querySelectorAll('.card');
let flipped = [];

cards.forEach(card => {
  card.addEventListener('click', () => {
    if (card.classList.contains('flipped') || flipped.length >= 2) return;

    card.classList.add('flipped');
    flipped.push(card);

    if (flipped.length === 2) {
      const [card1, card2] = flipped;
      const match = card1.dataset.name === card2.dataset.name;

      setTimeout(() => {
        if (!match) {
          card1.classList.remove('flipped');
          card2.classList.remove('flipped');
        }
        flipped = [];
      }, 1000);
    }
  });
});
