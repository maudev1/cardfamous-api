const { Model, DataTypes } = require('sequelize');

class Card extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            type: DataTypes.STRING,
            level:DataTypes.INTEGER,
            str:DataTypes.INTEGER,
            dex:DataTypes.INTEGER,
            int:DataTypes.INTEGER
        },
            {
                sequelize
            })
    }
}

module.exports = Card;