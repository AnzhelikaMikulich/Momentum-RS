const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
const language = document.querySelector(".language");
let lang;
let quotesApi;
if (localStorage.getItem("quotesArray")) {
  let quotesArray = localStorage.getItem("quotesArray");
  quotesApi = quotesArray;
}
language.addEventListener("change", function () {
  if (language.checked) {
    lang = 'en';
    quotesApi = 'quotes_en.json';
  } else {
    lang = 'ru';
    quotesApi = 'quotes_ru.json';
  }
});

async function getQuotes() { 
  let randomQuotes = Math.floor(Math.random() * 70);
  let quotes = quotesApi;
  const res = await fetch(quotes);
  const data = await res.json(); 
  quote.textContent = `${data[randomQuotes].text}`;
  author.textContent = `${data[randomQuotes].author}`;
  setTimeout(() => author.style.opacity = 1, 500)
  setTimeout(() => quote.style.opacity = 1, 500);
  localStorage.setItem("quotesArray", quotes);
}
changeQuote.addEventListener('click',getQuotes)
language.addEventListener("change", getQuotes)
export default getQuotes