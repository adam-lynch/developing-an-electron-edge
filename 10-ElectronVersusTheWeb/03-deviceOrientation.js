window.addEventListener("deviceorientation", (event) => {
  var alpha = event.alpha; // motion in degrees around z-axis
  var beta = event.beta; // same but around x-axis
  var gamma = event.gamma; // same but around y-axis
  // do something cool here
}, true);

window.addEventListener("devicemotion", (event) => {
  console.log(event.acceleration,
  event.accelerationIncludingGravity, event.rotatationRate);
}, true);