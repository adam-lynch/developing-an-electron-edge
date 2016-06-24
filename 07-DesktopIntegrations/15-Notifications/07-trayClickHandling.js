const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu;
const Tray = electron.Tray;

var trayIcon = null;
app.on('ready', () => {
  trayIcon = new Tray('/path/to/icon.png');
  trayIcon.setToolTip('This is my application.');
  trayIcon.setContextMenu(Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio', click: () => {} },
    { label: 'Item2', type: 'radio', checked: true, click: () => {} }
  ]));
});