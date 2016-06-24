window.ipcRenderer.on('pong', (event, arg) => {
  document.write('<h1>' + arg + '</h1>');
});
window.ipcRenderer.send('ping', 'hello');
