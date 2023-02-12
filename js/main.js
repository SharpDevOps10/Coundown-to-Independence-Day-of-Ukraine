
const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');
const currenYear = new Date().getFullYear();
year.innerText = currenYear;
const nextYear = new Date(`August 24 ${currenYear} 00:00:00`);
const updateCounter = () => {
  const currentTime = new Date();
  const difference = nextYear - currentTime;
  const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(difference / 1000 / 60) % 60;
  const secondsLeft = Math.floor(difference / 1000) % 60;
  days.innerText = daysLeft;
  hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
  seconds.innerText = secondsLeft  < 10 ? '0' + secondsLeft : secondsLeft;
};

setInterval(updateCounter, 1000);
setTimeout(() => {
  preloader.remove();
  countdown.style.display = 'flex';

}, 1000);
