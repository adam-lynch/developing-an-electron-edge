const webFrame = require('electron').webFrame;
const spellChecker = require('spellchecker');

webFrame.setSpellCheckProvider('en-US', true, {
    spellCheck: (text) => !spellChecker.isMisspelled(text)
});