
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

const particlesContainer = document.getElementById('cyber-particles');
for (let i = 0; i < 25; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.animationDuration = 5 + Math.random() * 10 + 's';
  particle.style.animationDelay = Math.random() * 5 + 's';
  particlesContainer.appendChild(particle);
}


// ===== Modal PDF Viewer =====
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const modal = document.getElementById('pdfModal');
    const pdfFrame = document.getElementById('pdfViewer');
    const pdfUrl = card.dataset.pdf;
    pdfFrame.src = pdfUrl;
    modal.style.display = 'block';
  });
});

document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('pdfModal').style.display = 'none';
  document.getElementById('pdfViewer').src = '';
});

   
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
