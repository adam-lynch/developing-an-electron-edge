const app = require('electron').app;
try {
  app.setPath('home', 'C:\temporary-home');
}
catch (e) {
  // handle the error
}