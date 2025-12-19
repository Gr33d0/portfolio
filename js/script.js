  // Toggle menu mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Scroll suave
  const linksNav = document.querySelectorAll('.nav-links a');

  linksNav.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // previne o comportamento padrão
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });

      // Fecha menu mobile após clicar
      navLinks.classList.remove('active');
    });
  });
  const linksHero = document.querySelectorAll('.hero-buttons a');

  linksHero.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // previne o comportamento padrão
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });

      // Fecha menu mobile após clicar
      navLinks.classList.remove('active');
    });
  });
// Modal de projetos
const modal = document.getElementById("project-modal");
const closeModal = document.getElementById("close-modal");
const modalVideo = document.getElementById("modal-video");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");

// Função para limpar modal
function resetModal() {
  modalVideo.pause();
  modalVideo.src = "";
  modalVideo.style.display = "none";
  modalImage.src = "";
  modalImage.style.display = "none";
}

// Abrir modal
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    if (!modal) return;

    modal.classList.add("active");
    resetModal();

    if (card.dataset.video) {
      modalVideo.src = card.dataset.video;
      modalVideo.style.display = "block";
      modalVideo.play();
    } else if (card.dataset.image) {
      modalImage.src = card.dataset.image;
      modalImage.style.display = "block";
    }

    modalTitle.textContent = card.dataset.title || "";
    modalDescription.textContent = card.dataset.description || "";
  });
});

// Fechar modal ao clicar no X
closeModal?.addEventListener("click", resetModal);
closeModal?.addEventListener("click", () => modal.classList.remove("active"));

// Fechar modal ao clicar fora do conteúdo
modal?.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    resetModal();
  }
});

document.addEventListener("DOMContentLoaded", function() {
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#0070f3"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#0070f3",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 180,
          line_linked: {
            opacity: 0.35
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
      retina_detect: true
  });
});


 // Seleciona todos os elementos com animação
  const animatedElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

  function checkScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    animatedElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible'); // opcional, remove ao sair da tela
      }
    });
  }

  window.addEventListener('scroll', checkScroll);
  window.addEventListener('load', checkScroll); // anima ao carregar também

