const body = document.querySelector("body");
const nextImg = document.querySelector(".slide-next");
const prevImg = document.querySelector(".slide-prev");
const baseImages =
  "https://raw.githubusercontent.com/AnzhelikaMikulich/stage1-tasks/assets/images/";
const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
];
let randomImg = images[Math.floor(Math.random() * images.length)];
let i = 0;
let index;
let timesDay;

function viewBgImage(src) {
	const img = new Image();
	img.src = src;
	img.onload = () => {
		body.style.background = `url("${src}") center/cover, rgba(0, 0, 0, 0.5)`;
    body.style.transition = 'background 2s ease-in-out 0.1s'
	};
}
function viewStartImage() {
  const date = new Date();
  const hour = date.getHours();
  if (hour >= 6 && hour < 12) {
    timesDay = `${baseImages}morning/${randomImg}`;
  } else if (hour >= 12 && hour < 18) {
    timesDay = `${baseImages}afternoon/${randomImg}`;
    console.log(timesDay);
  } else if (hour >= 18 && hour < 24) {
    timesDay = `${baseImages}evening/${randomImg}`;
  } else if (hour >= 0 && hour < 6) {
    timesDay = `${baseImages}night/${randomImg}`;
  }
 viewBgImage(timesDay)
}

function getSlideNext() {
  i++;
  index = i % images.length;
  randomImg = images[index];
  viewStartImage();
}

function getSlidePrev() {
  i--;
  index = i;
  if (i === 0||i <0) i = images.length;
  randomImg = images[index];
  viewStartImage();
}
nextImg.addEventListener("click", getSlideNext);
prevImg.addEventListener("click", getSlidePrev);
export default viewStartImage;
