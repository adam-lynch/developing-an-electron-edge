const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  mainWindow.loadURL('file://' + __dirname + '/index.html');
})
