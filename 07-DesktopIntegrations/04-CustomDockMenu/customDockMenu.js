const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu;
var menu = Menu.buildFromTemplate([
  { label: 'Basic example', click: () => { /* dosomething */ } },
  { label: 'Nested', submenu: [
    { label: 'One', click: () => { /* do something */ } },
    { label: 'Two', click: () => { /* do something */ } }
  ]}
]);
app.dock.setMenu(menu);