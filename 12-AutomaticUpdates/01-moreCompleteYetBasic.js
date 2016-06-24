const electron = require('electron');
const app = electron.app;
const autoUpdater = electron.autoUpdater;
// ...

app.on('ready', () => {
    // ...
    // set up window, etc.
    // ...

    autoUpdater.setFeedURL("http://localhost:8989/?version=0.1.0");

autoUpdater.on('checking-for-update', () => {
    // ...
});

autoUpdater.on('update-available', () => {
    // ...
});

autoUpdater.on('update-not-available', () => {
    // ...
});

autoUpdater.on('update-downloaded', () => {
    autoUpdater.quitAndInstall();
});

// Check right now
autoUpdater.checkForUpdates();

// ...