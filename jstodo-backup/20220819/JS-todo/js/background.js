const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.style = "max-width:100%; height:auto;"; //반응형으로 만들기 위해 추가
//console.log(bgImage);

document.body.appendChild(bgImage);
//console.log(document.body);
