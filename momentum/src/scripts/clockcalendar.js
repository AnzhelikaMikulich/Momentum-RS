const time = document.querySelector('.time');
const day = document.querySelector('.date')
function showTime() {
  const date = new Date;
  const dataTime = date.toLocaleTimeString()
  time.textContent = dataTime;
  showDate();
  setTimeout(showTime,1000)
}

function showDate(){
  const date = new Date;
  const options = {weekday: 'long', month: 'long', day: 'numeric'};
  const dataDay = date.toLocaleDateString('ru-Ru',options);
  day.textContent = dataDay
}

export default showTime()