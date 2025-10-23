const bg = document.querySelector('.cyber-bg');
let particles = [];

for (let i = 0; i < 50; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.style.left = `${Math.random() * 100}%`;
  dot.style.top = `${Math.random() * 100}%`;
  dot.style.animationDelay = `${Math.random() * 10}s`;
  bg.appendChild(dot);
}

const style = document.createElement('style');
style.textContent = `
.dot {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #00ffff;
  box-shadow: 0 0 10px #8A2BE2;
  border-radius: 50%;
  animation: float 8s linear infinite;
}
@keyframes float {
  0% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(-20px); opacity: 0.5; }
  100% { transform: translateY(0); opacity: 1; }
}`;
document.head.appendChild(style);
