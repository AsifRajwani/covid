// Load the Snowflake Node.js driver.
var snowflake = require('snowflake-sdk');


var connection = snowflake.createConnection({
    account: "slalom",
    username: "WLN_G1",
    password: "Welcome1234"
}
);

console.log("Initiating the connection.")
connection.connect(
    function (err, conn) {
        if (err) {
            console.error('Unable to connect: ' + err.message);
        }
        else {
            console.log('Successfully connected to Snowflake.');
            // Optional: store the connection ID.
            connection_ID = conn.getId();
        }
    }
);