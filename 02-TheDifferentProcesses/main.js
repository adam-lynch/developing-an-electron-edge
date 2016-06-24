const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

var mainWindow = null;

// listen for the "ping" event
ipcMain.on('ping', function (event, arg) {
  if (arg === 'hello') {
    event.sender.send('pong', 'Hello, World!'); // send back a greeting
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600, webPreferences: {
    nodeIntegration: false,
    preload: __dirname + '/preload.js' // this is our preload script
  }});

  mainWindow.loadURL('file://' + __dirname + '/index.html');
});
