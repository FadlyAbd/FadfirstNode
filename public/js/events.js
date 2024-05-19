 
  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
      let observer;

      const handleIntersection = (entries) => {
        entries.forEach(entry => {
          const cards = entry.target.querySelectorAll('.card');
          const texts = entry.target.querySelectorAll('.animated-text');
          if (entry.isIntersecting) {
            cards.forEach(card => {
              card.classList.add('slide-in');
              card.classList.remove('slide-out');
            });
            texts.forEach(text => {
              text.classList.add('slide-in-x');
              text.classList.remove('slide-out-x');
            });
          } else {
            cards.forEach(card => {
              card.classList.remove('slide-in');
              card.classList.add('slide-out');
            });
            texts.forEach(text => {
              text.classList.remove('slide-in-x');
              text.classList.add('slide-out-x');
            });
          }
        });
      };

      observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
      observer.observe(section);
    });
  });