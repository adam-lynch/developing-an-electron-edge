app.on('window-all-closed', () => {
    if (process.platform !== ‘darwin’) {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createMainWindow();
    }
});

app.on('before-quit', (evt) => {
    if (hasUnsavedChanges()) {
        evt.preventDefault();
    }
});

app.on('quit', (evt, exitCode) => {
    console.log(‘application quit with exit code:’, exitCode)
});