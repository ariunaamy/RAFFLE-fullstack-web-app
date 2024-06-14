const db = require("./dbConfig");

const createRafflesTable = `
DROP TABLE IF EXISTS raffles;
CREATE TABLE IF NOT EXISTS raffles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    status BOOLEAN DEFAULT TRUE,
    secret_token VARCHAR(50) UNIQUE NOT NULL,
    start_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    end_date TIMESTAMPTZ
);`;

const createParticipantsTable = `
DROP TABLE IF EXISTS participants;
CREATE TABLE IF NOT EXISTS participants (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    phone_number VARCHAR(20) UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    raffle_id integer REFERENCES raffles(id) ON DELETE CASCADE
);`;

const createWinnersTable = `
DROP TABLE IF EXISTS winners;
CREATE TABLE IF NOT EXISTS winners (
    id SERIAL PRIMARY KEY,
    participant_id integer REFERENCES participants(id) ON DELETE CASCADE,
    raffle_id integer REFERENCES raffles(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);`


const createTables = async () => {
  db.tx("create-tables", (t) => {
    const queries = [
      t.none(createRafflesTable),
      t.none(createParticipantsTable),
      t.none(createWinnersTable),
    ];
    return t.batch(queries);
  })
    .then(() => {
      console.log("All tables created successfully.");
    })
    .catch((err) => {
      console.error("Error creating tables:", err);
    });
};

createTables();
