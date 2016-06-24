const app = require('electron').app;
app.on('open-file', (event, filePath) => {
  event.preventDefault();
  console.log('User tried to open ' + filePath);
});