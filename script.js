//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
let currentAudio = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {

    const soundName = button.innerText;
    if (button.classList.contains("stop")) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      return;
    }
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(`sounds/${soundName}.mp3`);
    currentAudio.play();
  });
});