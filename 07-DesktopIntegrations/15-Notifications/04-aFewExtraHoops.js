const electron = require('electron');
const path     = require('path');
const fs       = require('fs');
const platform = require('./platform.js');
const ws       = require('windows-shortcuts-appid');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('ready', () => {
  // Typical stuff
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  app.on('did-finish-load', () => {
    var appName = app.getName();

    // Only need to do this for Windows 8, in a packaged app
    if(appName !== 'Electron' && platform.isWindows8){
      var appId = "com.myCompany.myapp.MyApp";
      app.setAppUserModelId(appId);

      var shortcutPath = path.join(app.getPath('appData'), "Roaming\\Microsoft\\Windows\\Start Menu\\Programs", appName + ".lnk");
      fs.exists(shortcutPath, (exists) => {
        if(exists) {
          // The shortcut already exists, no need to do anything
          return;
        }

        // Create the shortcut
        ws.create(shortcutPath, process.execPath, (err) -> {
          if(err) throw err;

          // Add the app ID to the shortcut
          ws.addAppId(shortcutPath, appId, (err) -> {
            if(err) throw err;
            // Ready!
          });
        });
      });
    }
  });
});