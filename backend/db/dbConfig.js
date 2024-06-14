const pgp = require("pg-promise")();

const connectionString = process.env.DATABASE_URL || "postgres://ariunaa:pursuit1234@localhost/raffle_app";

const db = pgp(connectionString);

db.connect()
    .then(obj => {
        console.log('Connected successfully');
        obj.done(); // success, release the connection
    })
    .catch(error => {
        console.error('Connection error', error.message);
    });

module.exports = db;
