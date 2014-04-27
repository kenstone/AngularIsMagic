var express = require('express');
var _ = require('underscore');

var port = process.env.PORT || 8088;

var defaultData = [
    {
        'id'  : 1,
        'name': 'Vanilla Cupcake',
        'price': '4.99'
    },
    {
        'id': 2,
        'name': 'Chocolate Cupcake',
        'price': '4.99'
    },
    {
        'id': 3,
        'name': 'Sprinkles Cupcake',
        'price': '4.99'

    }
];


var app = express();


app.use(express.bodyParser());

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type,Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE");
    next();
});


app.get('/cupcakes', function(req,res) {
   res.json(defaultData);
});

app.get('/cupcakes/:id', function(req, res) {
    var result = _.find(defaultData, function(item) {
        return item.id == req.params.id;
    });

    if (!result) {
        res.status(404).send();
    }
    else {
        res.json(result);
    }
});

app.post('/cupcakes', function(req, res) {

    var maxId = _.max(defaultData, function(item) {
        return item.id;
    }).id;

    req.body.id = maxId + 1;

    defaultData.push(req.body);
    res.status(201).json(req.body);
});

app.delete('/cupcakes/:id', function(req, res) {
    defaultData = _.filter(defaultData, function(item) {
        return item.id != req.params.id;
    });

    res.send(200);
});


app.listen(port);