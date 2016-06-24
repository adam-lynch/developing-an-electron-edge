trayIcon.on('balloon-show', () => {
  // Tada!
});

trayIcon.displayBalloon({
  icon: 'path/to/icon2.png',
  title: 'Head',
  content: 'Body'
});