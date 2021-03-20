var express = require('express');
var router = express.Router();
let questionnaireValues = ["employeeId", "vaccinated", "covidContact", "internationalTravel", "fever", "cough", "soreThroat", "chills", "muscleAches", "headache", "lossTasteSmell", "abdominalPain"];
let qObject = { employeeId: 0, resultDate: 0, quesResult: "Pass", vaccinated: "FALSE", covidContact: "FALSE", internationalTravel: "FALSE", fever: "FALSE", cough: "FALSE", soreThroat: "FALSE", chills: "FALSE", headache: "FALSE", lossTasteSmell: "FALSE", abdominalPain: "FALSE" };

/* GET home page. */
router.post('/', function (req, res, next) {
  for (let value of questionnaireValues) {
    if (req.body[value] !== undefined) {
      qObject[value] = req.body[value];
      if (value === ("covidContact") || value === ("internationalTravel") || value === ("fever") || value === ("cough") || value === ("muscleAches") || value === ("headache") || value === ("lossTasteSmell") || value === ("abdominalPain")) {
        qObject["quesResult"] = "Fail";
      }
    }
  }
  let message = "";
  for (let value in qObject) {
    message += (value + ": " + qObject[value] + " ");
  }
  res.render('message', { "message": message });
});

module.exports = router;