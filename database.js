"use strict";
var snowflake = require('snowflake-sdk');
var connectionId = null;

var connection = snowflake.createConnection({
    account: "slalom",
    username: "WLN_G1",
    password: "Welcome1234"
}
);





function testConnection() {
    console.log("Initiating the connection.")
    connection.connect(
        function (err, conn) {
            if (err) {
                console.error('Unable to connect: ' + err.message);
            }
            else {
                console.log('Successfully connected to Snowflake.');
                // Optional: store the connection ID.
                connectionId = conn.getId();
            }
        }
    );
}

function getEmployee(employeeId) {
    console.log("Quering for employee id: " + employeeId);
    connection.execute({
    //sqlText: 'select * from WLN_CASE_COMP.GROUP1.VW_EMPLOYEE_RETURN_RESULTS;',
    sqlText: 'select * from WLN_CASE_COMP.GROUP1.VW_EMPLOYEE_RETURN_RESULTS where EMPLOYEE_ID = ?;',
    binds: [employeeId],
    complete: function(err, stmt, rows) {
        if (err) {
          console.error('Failed to execute statement due to the following error: ' + err.message);
        } else {
          console.log('Successfully executed statement: ' + stmt.getSqlText());
          console.log("Number or rows retrieved: " + rows.length)
          if (rows.length > 0)
            console.log('Data Retrieved' + JSON.stringify(rows[0], null, 4));
        }
      }
    });
}


function initialize() {
    testConnection();
}


//initialize();

module.exports ={
    initialize, getEmployee
}