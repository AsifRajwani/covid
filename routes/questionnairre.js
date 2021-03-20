var express = require('express');
var router = express.Router();
let questionnaireValues = ["EMPLOYEE_ID", "VACCINATED", "COVID_CONTACT", "TRAVEL_INTERNATIONAL", "FEVER", "COUGH", "SORE_THROAT", "CHILLS", "MUSCLE_ACHES", "HEADACHE", "TASTE_SMELL_LOSS", "ABDOMINAL_PAIN"];
let qObject = { EMPLOYEE_ID: 0, RESULT_DATE: 0, QUES_RESULTS: "Pass", VACCINATED: "FALSE", COVID_CONTACT: "FALSE", TRAVEL_INTERNATIONAL: "FALSE", FEVER: "FALSE", COUGH: "FALSE", SORE_THROAT: "FALSE", CHILLS: "FALSE", MUSCLE_ACHES: "FALSE", HEADACHE: "FALSE", TASTE_SMELL_LOSS: "FALSE", ABDOMINAL_PAIN: "FALSE" };
 
/* GET home page. */
router.post('/', function (req, res, next) {
 for (let value of questionnaireValues) {
   if (req.body[value] !== undefined) {
     qObject[value] = req.body[value];
     if (value === ("COVID_CONTACT") || value === ("TRAVEL_INTERNATIONAL") || value === ("FEVER") || value === ("COUGH") || value === ("SORE_THROAT") || value === ("CHILLS") || value === ("MUSCLE_ACHES") || value === ("HEADACHE") || value === ("TASTE_SMELL_LOSS") || value === ("ABDOMINAL_PAIN")) {
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

