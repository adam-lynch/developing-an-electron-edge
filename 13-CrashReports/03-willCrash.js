const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const crashReporter = electron.crashReporter;

var mainWindow = null;

app.on('ready', () => {
    crashReporter.start({
        productName: 'AwesomeApp',
        companyName: 'AwesomeCorp',
        submitURL: 'http://localhost:1337/crashes',
        autoSubmit: true,
        extra: {
            name: 'Awesome Electron Application'
        }
    });

    process.crash();
});