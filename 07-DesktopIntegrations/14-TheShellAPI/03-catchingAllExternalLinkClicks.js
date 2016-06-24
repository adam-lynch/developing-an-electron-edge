var shell = require('electron').shell;

var isExternalLink = (element) => element.tagName === 'A' && element.target === '_blank';

var isInExternalLink = (element) => {
    parent = element.parentNode;
    while(parent && parent !== document.body) {
        if(isExternalLink(parent)) {
            return true;
        }
        parent = parent.parentNode;
    }
    return false;
};

var onClick = (e) => {
    if(isExternalLink(e.target) || isInExternalLink(e.target)){
        e.preventDefault();
        shell.openExternal(e.target.href);
    }
};

document.body.addEventListener('click', onClick, false);