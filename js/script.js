document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-button');
  const items = document.querySelectorAll('.portfolio-card');

  function filterPortfolio(category, clickedButton) {
    // 버튼 상태 초기화
    buttons.forEach(btn => {
      btn.classList.remove('active');

      const iconSpan = btn.querySelector('.icon');
      if (btn.textContent.includes('모든작업') || btn.textContent.includes('개인작업')) {
        iconSpan.textContent = '🔹';
      } else if (btn.textContent.includes('팀작업')) {
        iconSpan.textContent = '🔸';
      }
    });

    // 클릭된 버튼 활성화
    clickedButton.classList.add('active');

    const clickedIcon = clickedButton.querySelector('.icon');
    if (category === 'all' || category === 'personal') {
      clickedIcon.textContent = '🔷';
    } else if (category === 'team') {
      clickedIcon.textContent = '🔶';
    }

    // 카드 필터링
    items.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // ✅ 첫 로딩 시 "모든작업" 자동 클릭 처리
  const defaultButton = document.querySelector('.tab-button.active');
  if (defaultButton) {
    filterPortfolio('all', defaultButton);
  }

  // 버튼 클릭 이벤트 연결
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const category = this.textContent.includes('모든작업') ? 'all' :
                       this.textContent.includes('개인작업') ? 'personal' :
                       'team';
      filterPortfolio(category, this);
    });
  });

  // 🔝 맨 위로 버튼
  document.getElementById("scrollToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});