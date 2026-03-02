const buttons = document.querySelectorAll(".btn");
const audios = document.querySelectorAll("audio");

function stopAllSounds() {
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}

buttons.forEach(button => {
  button.addEventListener("click", () => {

    if (button.classList.contains("stop")) {
      stopAllSounds();
      return;
    }

    stopAllSounds();

    const audio = document.getElementById(button.innerText);
    audio.play();
  });
});