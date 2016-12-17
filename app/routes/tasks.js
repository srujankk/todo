var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var tasks_json = [
      {'task':'Default 1:from server','done':'true'},
      {'task':'Default 2:from server'}
  ];
  res.json(tasks_json);
});
/* GET users listing. */
router.post('/', function(req, res, next) {
    var c = req.body;
    console.log(c);
    res.send('collection added');
});

module.exports = router;
