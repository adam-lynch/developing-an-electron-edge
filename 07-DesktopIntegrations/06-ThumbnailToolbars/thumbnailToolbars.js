const BrowserWindow = require('electron').BrowserWindow;
const path = require('path');

var mainWindow = new BrowserWindow({
  // ...
});

mainWindow.setThumbarButtons([
  {
    icon: 'C:\\Users\\Username\\Desktop\\example.png',
    click: () => {
      console.log("Example button clicked");
    }
  },
  {
    tooltip: "Another example",
    icon: path.resolve('anotherExample.png'),
    flags:['dismissonclick'],
    click: () => {
      console.log("Another example button clicked.");
    }
  }
]);