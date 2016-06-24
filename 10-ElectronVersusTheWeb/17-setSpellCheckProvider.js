const electron = require('electron');
const app = electron.app;
const webFrame = electron.webFrame;
const spellChecker = require('spellchecker');

app.on('ready', () => {
    webFrame.setSpellCheckProvider(app.getLocale(), true, {
        spellCheck: (text) => !spellChecker.isMisspelled(text))
    });
});