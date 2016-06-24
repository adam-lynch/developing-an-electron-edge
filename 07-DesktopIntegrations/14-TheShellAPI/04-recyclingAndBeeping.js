var shell = require('electron').shell;
isDeleted = shell.moveItemToTrash('/Users/adam/Desktop/abc');
if(isDeleted){
  shell.beep();
}