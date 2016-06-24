const afk = require('afk');
const seconds = 10;

var listenerId = afk.addListener(seconds, (event) => {
        console.log(event);
});

// To stop listening:
// afk.removeListener(listenerId);