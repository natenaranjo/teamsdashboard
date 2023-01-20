require('dotenv').config();
const mysql = require('mysql2');

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize("teams_db", "root", "", {
        host: 'localhost',
        dialect: 'mysql',
    });

sequelize.authenticate().then(() => {
    console.log('Connection has been established succesfully to the database');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

module.exports = sequelize;