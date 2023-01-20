const seedMembers = require('./member-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedMembers();

    process.exit(0);
};

seedAll();