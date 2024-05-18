document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    let observer;

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.card');
          cards.forEach(card => {
            card.classList.remove('slide-in'); 
            setTimeout(() => {
              card.classList.add('slide-in'); 
            }, 100);
          });
        }
      });
    };

    observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    observer.observe(section);
  });
});
