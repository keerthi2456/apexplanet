// small interactive bits for portfolio
document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle?.addEventListener('click', ()=> {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// contact form demo
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks! Message submitted (demo).');
  e.target.reset();
});
