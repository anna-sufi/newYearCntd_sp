function newYearCntd() {
    const days = document.querySelector('.days');
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');

    const now = new Date();
    const newYear = new Date('January 01, 2023 00:00');
    const diff = newYear - now;
    const msInSec = 1000;
    const msInMin = 1000*60;
    const msInHour = 1000*60*60;
    const msInDay = 1000*60*60*24;

    const showDays = Math.floor(diff/msInDay);
    const showHours = Math.floor(diff%msInDay/msInHour);
    const showMinutes = Math.floor(diff%msInHour/msInMin);
    const showSeconds = Math.floor(diff%msInMin/msInSec);

    days.textContent = showDays;
    hours.textContent = showHours;
    minutes.textContent = showMinutes;
    seconds.textContent = showSeconds;

    if (diff<=0) {
        days.textContent = 0;
        hours.textContent = 0;
        minutes.textContent = 0;
        seconds.textContent = 0;
        clearInterval(timer);
        happyNY();
    }
}

let timer = setInterval(newYearCntd, 1000);

function happyNY() {
    const heading = document.querySelector("h1");
    heading.textContent='С Новым Годом !!!';
    heading.classList.add('new');
}

const button = document.querySelector('#myButton');
const song = document.querySelector('#song');

button.addEventListener('click', function() {
    if (song.paused) {
        button.innerHTML=`<img class='img' src="https://img.icons8.com/ios-filled/344/pause-squared.png" alt="play_button">`;
        song.play();
    } else {
        button.innerHTML=`<img class='img' src="https://img.icons8.com/external-bearicons-glyph-bearicons/344/external-play-call-to-action-bearicons-glyph-bearicons.png" alt="play_button">`;
       
        song.pause();
    }
})