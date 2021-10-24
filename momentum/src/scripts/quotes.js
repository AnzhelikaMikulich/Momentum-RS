const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote')

async function getQuotes() {  
  let randomQuotes = Math.floor(Math.random() * 100);
  const quotes = 'quotes_ru.json';
  const res = await fetch(quotes);
  const data = await res.json(); 
  console.log(data[randomQuotes]);
  quote.textContent = `${data[randomQuotes].text}`;
  author.textContent = `${data[randomQuotes].author}`;
}
changeQuote.addEventListener('click',getQuotes)

export default getQuotes