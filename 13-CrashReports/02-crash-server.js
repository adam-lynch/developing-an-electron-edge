const http = require('http');
const formidable = require('formidable');

const crashServer = http.createServer((req, res) => {
    if (req.url === '/crashes') {
        var form = formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) console.error(err);

            // right now we just output the information we receive
            console.log(fields);
            console.log(files);
        });
    } else {
        res.end(404);
    }
});

crashServer.listen(1337);