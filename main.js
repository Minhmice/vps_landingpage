// main.js
// Accordion logic for plan cards + animation
document.addEventListener('DOMContentLoaded', function () {
  const planCards = document.querySelectorAll('.plan-card');
  planCards.forEach((card, idx) => {
    card.addEventListener('click', function (e) {
      if (e.target.tagName === 'BUTTON') return;
      const detail = card.querySelector('.plan-detail');
      const icon = card.querySelector('.toggle-icon');
      const wasOpen = detail.classList.contains('open');
      if (!wasOpen) {
        // Đóng tất cả card khác trước khi mở card này
        planCards.forEach((other) => {
          if (other !== card) {
            const otherDetail = other.querySelector('.plan-detail');
            const otherIcon = other.querySelector('.toggle-icon');
            otherDetail.classList.remove('open', 'plan-animate-open', 'plan-animate-close');
            otherDetail.classList.add('hidden');
            other.classList.remove('plan-animate-card-open', 'plan-animate-card-close');
            if (otherIcon) otherIcon.textContent = '+';
          }
        });
        // Mở card này với animation
        detail.classList.remove('plan-animate-close', 'hidden');
        card.classList.remove('plan-animate-card-close');
        detail.classList.add('plan-animate-open', 'open');
        card.classList.add('plan-animate-card-open');
        icon.textContent = '–';
        setTimeout(() => {
          detail.classList.remove('plan-animate-open');
          card.classList.remove('plan-animate-card-open');
        }, 500);
      } else {
        // Đóng card này với animation
        detail.classList.remove('plan-animate-open');
        card.classList.remove('plan-animate-card-open');
        detail.classList.add('plan-animate-close');
        card.classList.add('plan-animate-card-close');
        icon.textContent = '+';
        setTimeout(() => {
          detail.classList.remove('plan-animate-close', 'open');
          card.classList.remove('plan-animate-card-close');
          detail.classList.add('hidden');
        }, 400);
      }
    });
  });
  // Mặc định mở Cloud-02
  planCards.forEach((c, i) => {
    const detail = c.querySelector('.plan-detail');
    const icon = c.querySelector('.toggle-icon');
    if (i === 1) {
      detail.classList.add('open');
      detail.classList.remove('hidden');
      icon.textContent = '–';
    } else {
      detail.classList.remove('open');
      detail.classList.add('hidden');
      icon.textContent = '+';
    }
  });
  // Scroll to plans when click 'Xem tất cả gói'
  const btnScroll = document.querySelector('a[href="#plans"]');
  if (btnScroll) {
    btnScroll.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('plans').scrollIntoView({ behavior: 'smooth' });
    });
  }
});
