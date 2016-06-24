const app = require('electron').app;
const platform = require('./platform');

document.body.classList.add('platform-' + platform.name);
if(platform.isMac && app.isDarkMode()){
    document.body.classList.add('platform-' + platform.name + '--dark');
}