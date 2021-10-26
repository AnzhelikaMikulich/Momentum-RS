const greetContainer = document.querySelector(".greeting");
const name = document.querySelector(".name");
const language = document.querySelector(".language");
let lang;

if (localStorage.getItem("nameValues")) {
  let nameValues = localStorage.getItem("nameValues");
  name.value = nameValues;
  let greetValues = localStorage.getItem("greetValues");
  greetContainer.textContent = greetValues;
}
if (localStorage.getItem("languageValue") == 'true') {
  language.checked = true;
} else {
  language.checked = false;
}
const greeting = {
  en: ["Good night", "Good morning", "Good afternoon", "Good evening"],
  ru: ["Спокойной ночи", "Доброе утро", "Добрый день", "Добрый вечер"],
};

language.addEventListener("change", function () {
  if (this.checked) {
    lang = greeting.en;
  } else {
    lang = greeting.ru;
  }
  localStorage.setItem("languageValue", language.checked);
});

function viewGreetings() {
  const date = new Date();
  const hour = date.getHours();
  name.onchange = function () {
    localStorage.setItem("nameValues", name.value);
  };
  if (hour >= 6 && hour < 12) {
    greetContainer.innerHTML = `${lang[1]},`;
  } else if (hour >= 12 && hour < 18) {
    greetContainer.textContent = `${lang[2]},`;
  } else if (hour >= 18 && hour < 24) {
    greetContainer.textContent = `${lang[3]},`;
  } else if (hour >= 0 && hour < 6) {
    greetContainer.textContent = `${lang[0]},`;
  }
  localStorage.setItem("greetValues", greetContainer.textContent);
  
}
language.addEventListener("change", viewGreetings);
export default viewGreetings;
