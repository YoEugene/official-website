/**
 * Created by pilagod on 3/17/15.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('community/community');
});

module.exports = router;