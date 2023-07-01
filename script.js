const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  btn.addEventListener('click', () => {
    stopSongs(); //First stop the current playing audio
    document.getElementById(sound).play();
  });
  document.getElementById('buttons').appendChild(btn); //adding new buttons that are created based on the length of an array
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0; //Resetting the audio time stamp to 0
  });
}
