const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

var mainWindow = null;

global.fileToOpen = null;

app.on('open-file', (event, path) => {
  event.preventDefault();
  fileToOpen = path;

  if(mainWindow){
    mainWindow.send('open-file', path);
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false// we've added this line
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('maximize', () => {
    mainWindow.webContents.send('maximized');
  });
  mainWindow.on('unmaximize', () => {
    mainWindow.webContents.send('restored');
  });

  // Uncomment next line to show DevTools when the app launches
  //mainWindow.openDevTools();
});

ipcMain.on('main-window', (event, windowActionName) => {
  if(windowActionName === 'restore'){
    mainWindow.unmaximize();
  }
  else {
    mainWindow[windowActionName]();
  }
});