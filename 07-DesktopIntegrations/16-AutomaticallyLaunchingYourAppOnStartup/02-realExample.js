const AutoLaunch = require('auto-launch');
var electronAutoLauncher = new AutoLaunch({
    name: 'My Electron App Name'
});

electronAutoLauncher.isEnabled((enabled) => {
    if(enabled){
        // It's already set!
        return;
    }

    electronAutoLauncher.enable((err) => {
        if(err){
            throw(err);
        }

        // Tada!
    });
});