const doesElectronExist = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.electron === 'string';

if(doesElectronExist){
    const electron = require('electron');
    //...
}