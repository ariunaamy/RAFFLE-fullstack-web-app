const { Router } = require('express');

const { getAllRaffles, createRaffle, getOneRaffle, getParticipantsByRaffleId, createParticipant } = require('../queries/raffleQueries');


const rafflesController = Router();

rafflesController.get('/', async (req, res) => {
    try {
        const raflles = await getAllRaffles();
        res.status(200).json({ data: raflles });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

rafflesController.post('/', async (req, res) => {
    try {
        const newRaffle = await createRaffle(req.body);
        if (newRaffle.id) {
            res.status(200).json({ data: newRaffle });
        } else {
            throw new Error('Raffle was not created');
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

rafflesController.get('/:id', async (req, res) => {
    try {
        const raffle = await getOneRaffle(req.params.id);
        res.status(200).json({ data: raffle });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

rafflesController.get('/:id/participants', async (req, res) => {
    try {
        const participants = await getParticipantsByRaffleId(req.params.id);
        res.status(200).json({ data: participants });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

rafflesController.post('/:id/participants', async (req, res) => {
    try {
        const newParticipant = await createParticipant(req.body, parseInt(req.params.id));
        res.status(200).json({ data: newParticipant });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



module.exports = rafflesController;