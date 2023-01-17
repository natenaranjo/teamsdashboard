const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Member extends Model {}

Member.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },
        emailAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            validate: {
                isEmail: true,
            }
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },
        zipCode: {
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

module.exports = Member;