const seeMoreButton = document.getElementById('see-more-button');
function seeMoreSpeakers() {
  const speakerSection = document.getElementById('speaker-profiles');
  speakerSection.classList.toggle('hiding');
}

seeMoreButton.onclick = seeMoreSpeakers;