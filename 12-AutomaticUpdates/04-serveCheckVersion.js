var express = require('express');
var semver = require('semver');
var fs = require('fs');
var app = express();

app.listen(8989);

app.get('/', (req, res) => {
    var version = req.headers['user-agent'].split(/[/ ]/)[1];
    if (semver.gt('1.1.0', version)){
        res.json({
            url: 'http://localhost:8989/versions/1.1.0'
        });
    }
    else {
        res.sendStatus(204);
    }
});

app.get('/versions/1.1.0', (req, res) => {
    fs.readFile('dist/electron-quick-start-darwin-x64/electron-quick-start-1.1.0-mac.zip', (err, data) => {
        if(err){
            console.log(err.message);
            res.sendStatus(500).json({ error: err.message });
        }

        console.log('Successfully sent back the ZIP');
        res.type('zip');
        res.send(data);
    });
});