var express = require('express');
var app = express();

app.listen(8989);

app.get('/', (req, res) => {
    res.sendStatus(204);
});