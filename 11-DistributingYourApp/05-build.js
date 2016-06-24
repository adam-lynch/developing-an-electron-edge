const electronPackager = require('electron-packager');

var options = {
    dir: './', // current directory is the source directory
    platform: 'darwin',
    arch: 'all',
    name: 'myApp',
    asar: true
};

electronPackager(options, (error, appPath) => {
    if(error){
    // something went wrong
    throw error;
}

console.log('Success! See ' + appPath);
});