document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('bgMusic');
  const toggleBtn = document.getElementById('musicToggle');

  let isPlaying = false;

  // Enable audio on first user interaction
  function enableAudio() {
    audio.muted = false;
    fadeIn(audio, 1);
    isPlaying = true;
    toggleBtn.textContent = '⏸ Pause Music';
    document.removeEventListener('click', enableAudio);
  }

  document.addEventListener('click', enableAudio);

  // Toggle music playback
  toggleBtn.addEventListener('click', function () {
    if (isPlaying) {
      fadeOut(audio, 0);
      isPlaying = false;
      toggleBtn.textContent = '▶️ Play Music';
    } else {
      audio.muted = false;
      fadeIn(audio, 1);
      isPlaying = true;
      toggleBtn.textContent = '⏸ Pause Music';
    }
  });

  // Fade-in function
  function fadeIn(audioElement, targetVolume) {
    audioElement.volume = 0;
    audioElement.play();
    const step = 0.02;
    const interval = setInterval(() => {
      if (audioElement.volume < targetVolume) {
        audioElement.volume = Math.min(audioElement.volume + step, targetVolume);
      } else {
        clearInterval(interval);
      }
    }, 100);
  }

  // Fade-out function
  function fadeOut(audioElement, targetVolume = 0) {
    const step = 0.02;
    const interval = setInterval(() => {
      if (audioElement.volume > targetVolume) {
        audioElement.volume = Math.max(audioElement.volume - step, targetVolume);
      } else {
        audioElement.pause();
        clearInterval(interval);
      }
    }, 100);
  }
});