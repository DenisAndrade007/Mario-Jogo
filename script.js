// Seleciona elementos do DOM usando map e desestruturação
const [mario, pipe, restart] = [".mario", ".pipe", ".restart"].map((item) =>
  document.querySelector(item)
);

// Função para fazer o Mario pular
const jump = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500); // Define o tempo que o Mario fica no ar
};

// Loop para verificar a posição e aplicar a lógica de colisão
const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = parseFloat(
    window.getComputedStyle(mario).bottom.replace("px", "")
  );

  // Verifica a condição de colisão
  if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 80) {
    // Para a animação e ajusta a posição do pipe e do Mario
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    // Altera a imagem do Mario para indicar o fim do jogo
    mario.src = "./assets/game-over.png";
    mario.style.width = "100px";
    mario.style.marginLeft = "23px";
  }
}, 10);

// Reinicia o jogo ao clicar no botão de reiniciar
restart.addEventListener("click", () => {
  location.reload(true);
});

// Adiciona evento de pulo ao pressionar qualquer tecla
document.addEventListener("keydown", jump);
