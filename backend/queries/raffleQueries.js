const db = require("../db/dbConfig");

const getAllRaffles = async () => {
  try {
    const raffles = await db.any("SELECT * FROM raffles");
    return raffles;
  } catch (error) {
    return error;
  }
};

const createRaffle = async (raffle) => {
  const newRaffle = await db.one(
    "INSERT INTO raffles (name, description, secret_token) VALUES (${name}, ${description}, ${secret_token}) RETURNING *",
    raffle
  );
  return newRaffle;
};

const getOneRaffle = async (id) => {
  const raffle = await db.one("SELECT * FROM raffles WHERE id = $1", id);
  return raffle;
};

const getParticipantsByRaffleId = async (id) => {
  const participants = await db.any(
    "SELECT * FROM participants WHERE raffle_id = $1",
    id
  );
  return participants;
};

const createParticipant = async (participant, raffleId) => {
  const { first_name, last_name, email, phone_number } = participant;
  const newParticipant = await db.one(
    "INSERT INTO participants (first_name, last_name, email, phone_number, raffle_id) VALUES (${first_name}, ${last_name}, ${email}, ${phone_number}, ${raffle_id}) RETURNING *",
    { first_name, last_name, email, phone_number, raffle_id: raffleId }
  );
  return newParticipant;
};

module.exports = {
  getAllRaffles,
  createRaffle,
  getOneRaffle,
  getParticipantsByRaffleId,
  createParticipant,
};
// const crypto = require('crypto');

// const generateToken = (length) => {
//     let token = "";
//     let i = 0;
//     while (i < length) {
//         token += crypto.randomInt(0,10);
//         i++;
//     }
//     return token;
// }

// const token = generateToken(6);
// console.log(token);
