var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let employee = {
    employeeId: 72,
    firstName: "Ruhee",
    lastName: "Rajwani"
  }


  let employeeId = req.query.employeeId;
  employee["employeeId"] = employeeId;
  let message = "Eligible " + employeeId;
  if (employeeId % 2 == 0)
    res.render('message', { "employee": employee, "message": message });
  else
    res.render('questionnairre', { "employee": employee });
});

module.exports = router;


/*"EMPLOYEE_ID": 1,
    "FIRST_NAME": "Molly",
    "LAST_NAME": "Gutierrez",
    "EMPLOYEE_GENDER": "F",
    "EMPLOYEE_AGE": 33,
    "MANAGER_ID": 275,
    "MANAGER_NAME": "Gaddy Tracy",
    "KEY_POSITION_FLAG": "No",
    "JOB_TITLE": "Research Associate",
    "DEPARTMENT": "Biologics",
    "DIVISION": "R&D",
    "OFFICE_BUILDING": "NY_2",
    "FLOOR": 20,
    "DESK": "Y67",
    "OFFICE_CITY": "Manhattan",
    "OFFICE_COUNTY": "New York",
    "OFFICE_STATE": "NY",
    "HOME_CITY": "Lime Lake",
    "HOME_COUNTY": "Cattaraugus",
    "HOME_STATE": "NY",
    "COVID_SERVERITY": "5410",
    "TEST_RESULT": null,
    "POSITIVE_FLAG": null,
    "TEST_DATE": null,
    "QUES_RESULTS": null,
    "EMPLOYEE_RETURN_STATUS": "No Test Received",
    "EMPLOYEE_RETURN_STATUS_CD": "NTR"*/