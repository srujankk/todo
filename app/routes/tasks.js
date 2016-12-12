var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var task_json = [
    {'task':'Default 1:from server','done':true},
    {'task':'Default 2:from server'}
  ]
  res.json(task_json);
});

module.exports = router;
