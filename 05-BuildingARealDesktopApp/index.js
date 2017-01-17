const marked = require('marked');
const remote = require('electron').remote; // fixed incorrect usage from book
const dialog = remote.require('dialog');
const fs = require('fs');
const shell = require('electron').shell;
const ipcRenderer = require('electron').ipcRenderer;

const container = document.querySelector('.container');
const editor = document.querySelector('.editor textarea');
const preview = document.querySelector('.preview');
const openFileLink = document.querySelector('a.open-file');
const showFileInFolderLink = document.querySelector('a.show-file-in-folder');

var currentFile = remote.getGlobal('fileToOpen') || null;

if(currentFile) {
  openFile(currentFile);
}

ipcRenderer.on('open-file', (event, arg) => {
  openFile(arg);
});

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

editor.onkeyup = generatePreview;

openFileLink.onclick = (evt) => {
  dialog.showOpenDialog({
    title: 'Select a file to edit',
    filters: [
      { name: 'Markdown Documents', extensions: ['md', 'markdown'] }
    ]
  }, (filenames) => {
    if (!filenames) return;
    if (filenames.length > 0) {
      openFile(filenames[0]);
    }
  })
};

showFileInFolderLink.onclick = (evt) => {
  shell.showItemInFolder(currentFile);
};

function generatePreview () {
  var content = editor.value;
  var html = marked(content);
  preview.innerHTML = html;
}

function openFile (filename) {
  var contents = fs.readFileSync(filename);

  currentFile = filename;

  editor.value = contents;
  container.classList.remove('hidden');

  generatePreview();

  remote.app.addRecentDocument(filename);
}
