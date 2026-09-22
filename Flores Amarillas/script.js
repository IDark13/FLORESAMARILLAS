window.onload = () => {
  // Ocultar animaciones de flores al inicio
  const flowersContent = document.getElementById("flowers-content");
  const startScreen = document.getElementById("start-screen");
  const loveMessage = document.getElementById("love-message");
  const giftBtn = document.getElementById("gift-btn");
  const bgMusic = document.getElementById("bg-music");

  // Asegurarse de que las flores estén ocultas y el mensaje también
  if (flowersContent) flowersContent.style.display = "none";
  if (loveMessage) loveMessage.style.opacity = 0;

  const playBackgroundMusic = () => {
    if (!bgMusic) return;
    bgMusic.volume = 0.35;
    bgMusic.muted = false;
    bgMusic.play().catch(() => {
      // El navegador puede bloquear la reproducción automática; aquí se ignora el error.
    });
  };

  // Al hacer clic en el botón
  if (giftBtn) {
    giftBtn.addEventListener("click", () => {
      playBackgroundMusic();

      // Animar salida del botón
      startScreen.style.opacity = 0;
      setTimeout(() => {
        startScreen.style.display = "none";
        // Mostrar mensaje romántico
        loveMessage.classList.add("show");
        loveMessage.style.opacity = 1;
        // Después de 3.5s, ocultar mensaje y mostrar flores
        setTimeout(() => {
          loveMessage.classList.remove("show");
          loveMessage.classList.add("hide");
          loveMessage.style.opacity = 0;
          setTimeout(() => {
            loveMessage.style.display = "none";
            if (flowersContent) flowersContent.style.display = "";
          }, 1200);
        }, 6500);
      }, 700);
    });
  }
};
