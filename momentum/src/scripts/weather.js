const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity')
const API_KEY = '4b231a5e30f39896ab03a09ad8a305b6';
const city = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error');
const language = document.querySelector(".language");
let lang;

language.addEventListener("change", function () {
  if (this.checked) {
    lang = 'en';
  } else {
    lang = 'ru';
  }
});
if (localStorage.getItem("cityValues")) {
  let cityValues = localStorage.getItem("cityValues");
  city.value = cityValues;
}
async function getWeather() {  
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
 const data = await res.json(); 
  console.log(res)
  if(!res.ok){
    weatherError.style.height = '100px'
    weatherError.textContent = 'Введены некорректные данные'

  }else{
    weatherError.textContent = '';
    weatherError.style.height = '0px';
    weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `${Math.round(data.wind.speed)} м/с`;
  humidity.textContent = `${data.main.humidity}%`
  }
  
}
city.addEventListener('change',getWeather);
city.addEventListener('change',function () {
  localStorage.setItem("cityValues", city.value);
})
language.addEventListener("change", getWeather)
export default getWeather