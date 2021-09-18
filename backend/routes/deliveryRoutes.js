var express = require('express');

var router = express.Router();
import CuurenOrder from '../mockdata/currentOrder'

/* GET home page. */
router.get('/currentOrder/:user', function(req, res, next) {

 res.json(CuurenOrder)
});

module.exports = router;
