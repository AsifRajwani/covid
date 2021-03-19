var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let employeeId = req.query.employeeId;
  let message = "Eligible " + employeeId;
  res.render('message', {"employee": employee, "message": message});
});

module.exports = router;