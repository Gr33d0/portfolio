function enviarMensagem(e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! 🚀");
}

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle?.addEventListener("click", () => {
  navLinks?.classList.toggle("active");
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
  particlesJS("particles-js", {
    particles: {
      number: { value: 30 },
      color: { value: "#3399ff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 2, random: true },
      line_linked: { enable: false },
      move: { enable: true, speed: 0.8, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: false }, onclick: { enable: false } }
    },
    retina_detect: true
  });
});

