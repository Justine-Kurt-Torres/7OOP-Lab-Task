
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(btn.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});


const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));


const modals = document.querySelectorAll('.modal');
const openButtons = document.querySelectorAll('.project-btn');
const closeButtons = document.querySelectorAll('.close-modal');

openButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const modal = modals[index];
    modal.classList.add('active');

   
    document.body.style.overflow = 'hidden';

   
    modal.classList.add('glitch');
    setTimeout(() => modal.classList.remove('glitch'), 600);
  });
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});


window.addEventListener('click', e => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});


window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    modals.forEach(modal => modal.classList.remove('active'));
    document.body.style.overflow = 'auto';
  }
});
