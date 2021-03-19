var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  let muscleAches = req.body["muscleAches"];
  let message = "MuscleAches " + muscleAches;
  res.render('message', { "message": message});
});

module.exports = router;