const time = document.querySelector('.time');
const day = document.querySelector('.date');
const language = document.querySelector(".language");

console.log(language.checked)
let langDate = "en-US"

  if (localStorage.getItem("languageValue")=='false') {
    langDate = "ru-Ru";
    showDate()
  }else if(localStorage.getItem("languageValue")=='true'){
    langDate = "en-US";
    showDate()
  }

language.addEventListener('change',()=>{
  if (localStorage.getItem("languageValue")=='true') {
    langDate = "en-US"
    showDate()
  } else if(localStorage.getItem("languageValue")=='false') {
    langDate = "ru-Ru";
    showDate()
  }
  
})
function showTime() {
  const date = new Date;
  const options = { timeZoneName: 'short' };
  const dataTime = date.toLocaleTimeString(langDate, options)
  time.textContent = dataTime.replace('GMT+3', '');
  showDate();
  setTimeout(showTime,1000)
}

function showDate(){
  const date = new Date;
  const options = {weekday: 'long', month: 'long', day: 'numeric'};
  const dataDay = date.toLocaleDateString(langDate,options);
  day.textContent = dataDay
  localStorage.setItem("date", dataDay);
}

export default showTime()