
var database = require('./database.js');
database.initialize();
//database.getEmployee(1);

var questionnairre = {};
questionnairre.employeeId = 72
questionnairre.quesResults = "Fail" 
questionnairre.vaccinated = "TRUE";
questionnairre.covidContact = "FALSE";
questionnairre.travelInternational ="TRUE"; 
questionnairre.fever = "TRUE"; 
questionnairre.cough = "TRUE"; 
questionnairre.soreThroat = "TRUE"; 
questionnairre.chills = "TRUE"; 
questionnairre.muscleAches = "TRUE";  
questionnairre.headache ="TRUE";  
questionnairre.tasteSmellLoss  ="TRUE"; 
questionnairre.abdominalPain ="TRUE"; 

database.addQuestionnairre(questionnairre)