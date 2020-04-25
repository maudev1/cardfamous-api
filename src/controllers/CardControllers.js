const Card = require('../models/Card');

module.exports = {
    //addCard
    async store(req, res) {
        const { name, type, level, str, dex, int } = req.body;

        const card = await Card.create({ name, type, level, str, dex, int });

        return res.json(card)
    },

    async find(req, res) {
        const { name, type, level, str, dex, int } = req.body;

        const card = await Card.findAll({ name, type, level, str, dex, int });

        return res.json(card)
    }
}