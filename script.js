    // PARTÍCULAS ANIMADAS
    function createParticles() {
      const particlesContainer = document.getElementById('particles');
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        particlesContainer.appendChild(particle);
      }
    }

   

    // SCROLL REVEAL AVANÇADO
    const reveals = document.querySelectorAll('.reveal');
    
    function revealOnScroll() {
      const windowHeight = window.innerHeight;
      reveals.forEach((el, index) => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 150) {
          setTimeout(() => {
            el.classList.add('active');
            
            // Animações específicas por seção
            if (el.querySelector('.skills')) {
              el.querySelectorAll('.skill').forEach((skill, i) => {
                setTimeout(() => skill.classList.add('active'), i * 200);
              });
            }
            
            if (el.querySelector('.projetos-grid')) {
              el.querySelectorAll('.card').forEach((card, i) => {
                setTimeout(() => card.classList.add('active'), i * 150);
              });
            }
            
            if (el.querySelector('.servicos')) {
              el.querySelectorAll('.servico').forEach((servico, i) => {
                setTimeout(() => servico.classList.add('active'), i * 200);
              });
            }
            
            if (el.querySelector('.contact-form')) {
              el.querySelector('.contact-form').classList.add('active');
            }
          }, index * 100);
        }
      });
    }

  // FORMULÁRIO FUNCIONAL
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const btn = document.getElementById('submitBtn');
  const originalText = btn.textContent;
  
  // Feedback visual imediato
  btn.textContent = 'Enviando...';
  btn.disabled = true;
  btn.classList.add('form-success');
  
  try {
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    const response = await fetch('https://formsubmit.co/ajax/valterluizdasilvaneto@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok && result.success) {
      btn.textContent = 'Enviado! 🚀';
      this.reset();
    } else {
      btn.textContent = 'Erro ao enviar 😕';
    }
  } catch (error) {
    btn.textContent = 'Sem conexão 😕';
    console.error('Erro:', error);
  }
  
  // Reset botão
  setTimeout(() => {
    btn.textContent = originalText;
    btn.disabled = false;
    btn.classList.remove('form-success');
  }, 3000);
});

    // NAVBAR SCROLL EFFECT
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 100) {
        nav.style.background = 'rgba(20,20,24,0.9)';
        nav.style.backdropFilter = 'blur(30px)';
      } else {
        nav.style.background = 'rgba(20,20,24,0.6)';
        nav.style.backdropFilter = 'blur(25px)';
      }
    });

    // INIT
    window.addEventListener("load", () => {
      createParticles();
      typeWriter();
      revealOnScroll();
      
      // Remove loading state
      document.body.classList.remove('loading');
    });

    window.addEventListener('scroll', revealOnScroll);

// CURSOR GAMER
const gamerCursor = document.getElementById('gamerCursor');
document.addEventListener('mousemove', (e) => {
  gamerCursor.style.left = e.clientX + 'px';
  gamerCursor.style.top = e.clientY + 'px';
});