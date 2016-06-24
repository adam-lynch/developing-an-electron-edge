dialog.showMessageBox({
  message: 'ERROR',
  buttons: ['OK', 'Cancel']
}, (indexOfButton) () => {
  if(indexOfButton === 0){
    // "OK" was clicked
  }
  else {
    // "Cancel" was clicked
  }
});