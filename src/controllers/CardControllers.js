const Card = require('../models/Card');

module.exports = {
    async store(req, res) {
        const { name, type, level, str, dex, int } = req.body;

        const card = await Card.create({ name, type,level, str, dex, int });

        return res.json(card)
    }
}