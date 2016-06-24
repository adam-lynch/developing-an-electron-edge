const platform = require('./platform.js');
var taskCallbacks = {
          '--hello-world': () => {
          // so something
        },
    '--another': () => {
  // so something else
}
}
if(process.argv.length > 1) {
  if(platform.isWindows && process.argv[1].indexOf('--') ===
      0) {
    var callback = taskCallbacks[process.argv[1]];
    if(typeof callback === 'function'){
      callback();
    }
  }
  else {
    filePath = process.argv[1];
    // do something with it :)
  }
}