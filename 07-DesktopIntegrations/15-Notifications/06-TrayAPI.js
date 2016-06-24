const electron = require('electron');
const app = electron.app;
const Tray = electron.Tray;

var trayIcon = null;
app.on('ready', () => {
  trayIcon = new Tray('/path/to/icon.png');
});