var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', {
    title: 'MyUnimol', 
    student: {
      name: 'Matteo Merola',
      matr: '138654'
    } });
});

module.exports = router;
