const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

var mainWindow = null;

ipcMain.on('say-hello', (evt, arg) => {
  evt.returnValue = 'Hello ' + arg;
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.webContents.openDevTools();
});
