const greetContainer = document.querySelector(".greeting");
const name = document.querySelector(".name");

if (localStorage.getItem("nameValues")) {
  let nameValues = localStorage.getItem("nameValues");
  name.value = nameValues;
}

function viewGreetings() {
  const date = new Date();
  const hour = date.getHours();
  name.onchange = function () {
    let nameSave = name.value;
    localStorage.setItem("nameValues", nameSave);
  };
  if (hour >= 6 && hour < 12) {
    greetContainer.innerHTML = "Доброе утро,";
  } else if (hour >= 12 && hour < 18) {
    greetContainer.textContent = "Добрый день,";
  } else if (hour >= 18 && hour < 24) {
    greetContainer.textContent = "Добрый вечер,";
  } else if (hour >= 0 && hour < 6) {
    greetContainer.textContent = "Спокойной ночи,";
  }
}

export default viewGreetings