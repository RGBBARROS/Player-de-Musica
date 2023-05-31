const songName = document.getElementById('music-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');

const Zóiodelula = {
  songName: 'Zóio de lula',
  artist: 'Charllie Brown',
  file: 'zoio-de-lula',
};

const PescadordeIlusões = {
  songName: 'Pescador de ilusões',
  artist: 'O Rappa',
  file: 'pescador-de-ilusoes-acustico',
};
let isPlaying = false;
const playlist = [Zóiodelula, PescadordeIlusões];
let index = 0;
//song.play();
//song.pause();


function playSong() {
  play.querySelector('.bi').classList.remove('bi-play-circle-fill');
  play.querySelector('.bi').classList.add('bi-pause-circle-fill');
  song.play();
  isPlaying = true;
}

function pauseSong() {
  play.querySelector('.bi').classList.add('bi-play-circle-fill');
  play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
  song.pause();
  isPlaying = false;
}

function playPauseDedider() {
  if(isPlaying === true){
    pauseSong();
  }
  else {
    playSong();
  }
}

function initializeSong(){
  cover.src = `image/${playlist[index].file}.jpg`;
  song.src = `songs/${playlist[index].file}.mp3`;
  songName.innerText = playlist[index].songName;
  bandName.innerText = playlist[index].artist;
}

function previousSong() {
  if (index === 0) {
    index = playlist.length -1;
  }
  else {
    index = index - 1;
  }
  initializeSong();
  playSong();
}

function nextSong() {
  if (index === playlist.length -1) {
    index = 0;
  }
  else {
    index = index + 1;
  }
  initializeSong();
  playSong();
}

initializeSong();

play.addEventListener('click', playPauseDedider);
previous.addEventListener('click',previousSong);
next.addEventListener('click',nextSong);