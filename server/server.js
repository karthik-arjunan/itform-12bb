const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3000;


const fs = require('fs');
const pdf = require('html-pdf');
const templateHtml = fs.readFileSync('../test.html', 'utf8');
const path = require('path');

let assestpath = path.join(__dirname + "/../");
assestpath = assestpath.replace(new RegExp(/\\/g), '/');
const handlebars = require("handlebars");
const template = handlebars.compile(templateHtml);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/static', express.static(__dirname + '/../static'))

app.get('/', function(req, res) {
    res.sendfile('it-msys-html-print.html', { root: __dirname + "/../" });
});

app.post('/', function(req, response) {
    var data = req.body;
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'Z'];
    data['80cc'] = data['80cc[]'].map((e, i) => {
        return { val: e, indexVal: alpha[i] };
    })
    data['80cc-val'] = data['80cc-val[]'].map((e, i) => {
        return { value: e, index: alpha[i] };
    })
    data['80cc-val-proof'] = data['80cc-val-proof[]'].map((e, i) => {
        return { value: e, index: alpha[i] };
    })
    var result = template(data)

    var options = {
        format: "letter",
        margin: '0px',
        base: "file:///" + assestpath,
        width: '270mm',
        height: '319mm',
        pagesplit: true

    };
    // response.download()
    pdf.create(result, options).toFile('./itform12bb.pdf', (err, res) => {
        if (err) return console.log(err);
        // const data = fs.readFileSync('./itform12bb.pdf');
        const file = path.join(__dirname, 'itform12bb.pdf');
        response.contentType("application/pdf");
        response.download(file);

    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));