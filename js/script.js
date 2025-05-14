function filterPortfolio(category, event = null) {
  const allCards = document.querySelectorAll('.portfolio-card');
  const buttons = document.querySelectorAll('.tab-button');

  allCards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  if (event) {
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  filterPortfolio('all');
});