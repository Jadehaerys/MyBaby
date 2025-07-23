document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('bgMusic');
  const toggleBtn = document.getElementById('musicToggle');
  const togglePageBtn = document.getElementById('viewGiftsBtn');
  const backToMainBtn = document.getElementById('backToAnniversaryBtn');
  const mainAnniversary = document.getElementById('main-anniversary'); // FIXED
  const giftAnniversary = document.getElementById('gifts-page');

  let isPlaying = false;

  // Enable audio on first interaction
  function enableAudio() {
    audio.muted = false;
    fadeIn(audio, 1);
    isPlaying = true;
    toggleBtn.textContent = '⏸ Pause Music';
    document.removeEventListener('click', enableAudio);
  }
  document.addEventListener('click', enableAudio);

  // Toggle music
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

  // Fade in music
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

  // Fade out music
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

  // Show "Gifts From Her" page
  togglePageBtn.addEventListener('click', () => {
    mainAnniversary.style.display = 'none';
    giftAnniversary.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Return to Anniversary page
  backToMainBtn.addEventListener('click', () => {
    giftAnniversary.style.display = 'none';
    mainAnniversary.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

