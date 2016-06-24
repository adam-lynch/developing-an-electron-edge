const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

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
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Uncomment next line to show DevTools when the app launches
  //mainWindow.openDevTools();
});
