const electron = require('electron');
const app = electron.app;

process.on('uncaughtException', (err) => {
  console.log('application almost crashed!', err);
});

app.on('ready', () => {
  setTimeout(() => {
    nonExistentFunc();
    console.log('more important stuff'); // won't ever get called
  }, 2000);
});
