dialog.showSaveDialog(mainWindow, {
  title: 'A title',
  defaultPath: '/Users/',
  filters: []
}, (filePath) => {
  if(filePath){
    // Tada!
  }
});