(function () {
    document.addEventListener('DOMContentLoaded', function () {
      const carousels = document.querySelectorAll('.ri-carousel');
      carousels.forEach((root) => {
        const track = root.querySelector('.ri-track');
        const slides = Array.from(root.querySelectorAll('.ri-slide'));
        const prev = root.querySelector('.ri-prev');
        const next = root.querySelector('.ri-next');
        const dots  = Array.from(root.querySelectorAll('.ri-dot'));
        let index = 0;
  
        function show(i) {
          index = (i + slides.length) % slides.length;
          slides.forEach((s, k) => s.classList.toggle('is-active', k === index));
          dots.forEach((d, k) => {
            const active = k === index;
            d.classList.toggle('is-active', active);
            d.setAttribute('aria-selected', active ? 'true' : 'false');
            d.tabIndex = active ? 0 : -1;
          });
        }
  
        prev?.addEventListener('click', () => show(index - 1));
        next?.addEventListener('click', () => show(index + 1));
        dots.forEach((d, k) => d.addEventListener('click', () => show(k)));
  
        // Keyboard
        root.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') show(index - 1);
          if (e.key === 'ArrowRight') show(index + 1);
        });
  
        // Swipe (mobile)
        let startX = null;
        track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, {passive:true});
        track.addEventListener('touchend', e => {
          if (startX == null) return;
          const dx = e.changedTouches[0].clientX - startX;
          if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
          startX = null;
        });
  
        // init
        show(0);
      });
    });
  })();
  