const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

const Member = sequelize.define('member', {
        _id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },
        email_address: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            validate: {
                isEmail: true,
            }
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },
        zipcode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'member',
    },
);

(async () => {
    await sequelize.sync({ alter: true });
})();

return Member;

module.exports = Member;