const User = require('../models/User');

module.exports = {
    //addUser
    async store(req, res) {
        const { name, email } = req.body;

        const user = await User.create({ name, email });

        return res.json(user)

    },
    //findUser
    async index(req, res) {
        const { name, email } = req.body;

        const user = await User.findAll({ name, email });
        return res.json(user)
    }

}