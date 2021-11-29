var express = require('express');
var bodyParser = require('body-parser');

var app = express();

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});

app.use(express.static(__dirname));

app.use(bodyParser.json());

// routes
app.post("/Doge", (dogeReq, response) => {
    console.log('you posted: \n');
    console.log(dogeReq.body);
    const fs = require('fs');
    let data = JSON.stringify(dogeReq.body);
    fs.writeFileSync('School/dogeJSON.json', data);
});

app.get("/", function(req, res) {
    res.render("index")
})
