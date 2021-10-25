//======Music====
import musicPlay from "./scripts/music";

const playBtn = document.querySelector(".play");
const playTitleNow = document.querySelector(".play-title-now");
const nextTrack = document.querySelector(".play-next");
const prevTrack = document.querySelector(".play-prev");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector('.progress-container')
const audio = new Audio();
const playList = document.querySelector(".play-list");
const timeAll = document.querySelector('.time-all');
const timePlay = document.querySelector('.time-play');
let isPlay = false;
let playIndex = 0;


function addPlayList() {
  musicPlay.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = `${element.title}, ${element.autor}`;
    li.classList.add("play-title");
    playList.append(li);
  });
}
addPlayList();

const playTitle = document.querySelectorAll('.play-title');

function loadAudio(song) {
  audio.src = song.src;
  playTitleNow.textContent = `${song.title}, ${song.autor}`;
 
}
loadAudio(musicPlay[playIndex]);

function playAudio() {
  if (!isPlay) {
    audio.play();
    isPlay = true;
    playTitleNow.classList.add('active');
    playBtn.classList.add("pause")
    playTitle[playIndex].classList.add('play-style')
  } else {
    audio.pause();
    isPlay = false;
    playTitleNow.classList.remove('active');
    playBtn.classList.remove("pause")
  }
}

function playNext() {
    playTitle[playIndex].classList.remove('play-style')
    playIndex++
    isPlay = false;
    
    if (playIndex >musicPlay.length-1 ) {
        playIndex = 0 
    }
    loadAudio(musicPlay[playIndex]);
    playAudio()  
}

function playPrev() {
    playTitle[playIndex].classList.remove('play-style')
    playIndex--
    isPlay = false;
    if (playIndex <0 ) {
        playIndex = musicPlay.length-1 
    }
    loadAudio(musicPlay[playIndex]);
    playAudio() 
}

function updateProgress(e) {
    const{duration, currentTime}= e.srcElement;
    timeAll.textContent = `${((Math.round(currentTime)) /100).toFixed(2)}`;
    if(duration){
     timePlay.textContent = `${((Math.round(duration)) /100).toFixed(2)}`   
    }
    
    const progressPercent = (currentTime/duration)*100
    progress.style.width = `${progressPercent}%`
}
function updateAudio(e) {
    let{duration, currentTime}= e.srcElement;
    if(duration==currentTime){
        playNext()
    }
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX/width)*duration

    
}
audio.addEventListener('timeupdate',updateAudio)
audio.addEventListener('timeupdate',updateProgress)
playBtn.addEventListener("click", playAudio);
nextTrack.addEventListener("click", playNext);
prevTrack.addEventListener('click', playPrev);
progressContainer.addEventListener('click',setProgress)

//=====Quotes====
import getQuotes from "./scripts/quotes";
getQuotes();
//====Weater=====
import getWeather from "./scripts/weather";
getWeather();
//====ChangeScreenImg====

import viewStartImage from "./scripts/startScreen";
viewStartImage();
//======= Greetings======
import viewGreetings from "./scripts/gretting";
viewGreetings();

// ======Time=====
import showTime from "./scripts/clockcalendar";
showTime();
