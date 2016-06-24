const electron = require('electron');
const app = electron.app;
const globalShortcut = electron.globalShortcut;

app.on('ready', () =>
  var isRegistered = globalShortcut.register('Ctrl+V', () => {
    // ctrl+v is pressed
  });

  if (!isRegistered) {
    // Registration failed
  }
});