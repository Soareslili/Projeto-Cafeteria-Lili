// Selecionar o menu pela ID correta
function toggleMenu() {
    const navMenu = document.getElementById("navbar");
    navMenu.classList.toggle("active"); // Alterna a classe 'active' para exibir ou esconder o menu
  }
  
  // Botão "Pedir" e rolagem suave (corrigido)
  const botaoCardapio = document.querySelector(".pedir"); // Certifique-se de que o HTML tem essa classe
  const cardapioSection = document.querySelector(".menu");
  
  if (botaoCardapio && cardapioSection) {
    botaoCardapio.addEventListener("click", () => {
      cardapioSection.scrollIntoView({ behavior: "smooth" });
    });
  }
  