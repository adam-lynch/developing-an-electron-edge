const express = require('express');
const fs = require('fs');
const app = express();

app.listen(8989);

app.get('/', (req, res) => {
    res.json({
        url: 'http://localhost:8989/versions/1.1.0'
    });
});

app.get('/versions/1.1.0', (req, res) => {
    fs.readFile('../path/to/dist/my-app-x64/my-app-1.1.0-mac.zip', (err, data) => {
        if(err){
            console.log(err.message);
            res.sendStatus(500).json({ error: err.message });
        }

        console.log('Successfully sent back the ZIP');
        res.type('zip');
        res.send(data);
    });
});