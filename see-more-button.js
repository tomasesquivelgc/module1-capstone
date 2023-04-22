const seeMoreButton = document.getElementById('see-more-button');

function seeMoreSpeakers() {
  const speakerSections = document.getElementsByClassName('hiding');
  for (let i = 0; i < speakerSections.length; i += 1) {
    if (speakerSections[i].style.display === 'flex' || speakerSections[i].style.display === '') {
      speakerSections[i].style.display = 'none';
    } else {
      speakerSections[i].style.display = 'flex';
    }
  }
}
seeMoreButton.onclick = seeMoreSpeakers;
