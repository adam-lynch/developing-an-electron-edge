var context = new AudioContext();
var oscillator = context.createOscillator();

oscillator.connect(context.destination);
oscillator.start(context.currentTime);
oscillator.stop(context.currentTime + 1);