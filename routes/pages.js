var express = require('express');
var router = express.Router();

/* GET main */
router.get('/', function (req, res, next) {
    res.render('index');
});

/* GET index */
router.get('/setup', function (req, res, next) {
    res.render('setup');
});

/* GET linode */
router.get('/manager', function (req, res, next) {
    res.render('manager');
});

module.exports = router;
