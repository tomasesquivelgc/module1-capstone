const speakers = [

  {
    image: './images/people/lily-chen-profile.jpg',
    name: 'Lily Chen',
    position: 'Music producer and sound designer',
    description: 'Lily is a highly respected producer and sound designer who has worked with some of the biggest names in electronic music. She will share her insights on creating powerful, innovative sounds using the latest software and hardware',
  },

  {
    image: './images/people/maxime-profile.jpg',
    name: 'Maxime Dubois',
    position: 'Synthesizer expert and historian',
    description: 'Maxime is a renowned expert on vintage synthesizers and the history of electronic music. He will give a talk on the evolution of the synthesizer and its impact on modern music.',
  },

  {
    image: './images/people/zoe-profile.jpg',
    name: 'Zoe Ramirez',
    position: 'Live performance specialist',
    description: 'Zoe is an expert in live electronic music performance, having performed at major festivals around the world. She will share her insights on creating dynamic, engaging performances using live instruments, software, and effects.',
  },

  {
    image: './images/people/jake-profile.jpg',
    name: 'Jake Patel',
    position: 'Music software engineer',
    description: 'Jake is a software engineer who has worked on some of the most popular music software and plugins in the industry. He will discuss the latest developments in music software and how they are changing the way we create and produce electronic music.',
  },

  {
    image: './images/people/svetlana-profile.jpg',
    name: 'Svetlana Petrova',
    position: 'Experimental music composer',
    description: 'Svetlana is an experimental music composer who has explored the boundaries of electronic music in her work. She will discuss her unique approach to composition and offer insights on pushing the limits of the genre.',
  },

  {
    image: './images/people/alexei-profile.jpg',
    name: 'Alexei Ivanov',
    position: 'Music journalist and historian',
    description: 'Alexei is a respected music journalist and historian who has covered electronic music for over two decades. He will share his extensive knowledge of the genre, its history, and its future, and offer insights on how to stay up-to-date with the latest trends and developments.',
  },
];

function generateSpeakers() {
  const sectionSpeaker = document.getElementById('featured-speakers');
  const newSection = document.createElement('div');
  newSection.id = 'speaker-profiles';
  newSection.classList.add('pt-5', 'mt-4');

  for (let i = 0; i < speakers.length; i += 1) {
    const newProfile = document.createElement('div');
    newProfile.id = 'person-profile';
    newProfile.classList.add('pb-5');
    if (i >= 2) {
      newProfile.classList.add('hiding');
      newProfile.style.display = 'none';
    }
    newProfile.innerHTML = `<img src=${speakers[i].image} class='person-image' alt='${speakers[i].name}'>
                            <div class='person-text'><h3>${speakers[i].name}</h3>
                            <h4>${speakers[i].position}</h4>
                            <p>${speakers[i].description}</p></div>`;
    newSection.appendChild(newProfile);
  }
  sectionSpeaker.appendChild(newSection);
}

generateSpeakers();