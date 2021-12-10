const raining = true;
const cold = false;

if (raining) {
  console.log("don't forget your umbrella");
}

if (cold) {
  console.log("make sure you pick out a scarf");
}

console.log("now youre ready to go outside");


const temp = 12;

if (temp < 0) {
  console.log("make sure you pick out a scarf");
} else if (temp < 15) {
  console.log("short sleeves won't cut it");
} else {
  console.log("short sleeves are fine");
}

console.log("now youre ready to go outside");

if (!raining) {
  console.log("leave your umbrella at home");
}
