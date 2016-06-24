const isOnline = require('is-online');

if(navigator.onLine){
    isOnline((err, online) => {
        // we're online if online is true, offline if false
    });
}
else {
    // we're offline
}