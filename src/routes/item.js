const express = require('express');

const router = express.Router();

const Item = require('../itemSchema');

var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', (req, res, next) =>
{
    Item.find({}).then(function(item){
        res.send(item);
    }).catch(next);
});

router.get(`/itemid`, (req, res) => 
{
    res.json({message:"Item will show up here"});
});


router.post('/', urlencodedParser, function(req, res, next) {  
    Item.create(req.body).then(function(item){
        res.send(item);
    }).catch(next);
});

module.exports = router;