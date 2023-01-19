'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Member', [

      {
        first_name: 'Jane',
        last_name: 'Doe',
        email_address: 'janedoe@gmail.com',
        phone_number: '713-359-4561',
        zipcode: '78654',
    },
    {
        first_name: 'John',
        last_name: 'Doe',
        email_address: 'johndoe@outlook.com',
        phone_number: '251-432-9867',
        zipcode: '78655',
    },
    {
        first_name: 'Jessica',
        last_name: 'Smith',
        email_address: 'jessicasmith@yahoo.com',
        phone_number: '123-451-6789',
        zipcode: '98765',
    },
    {
        first_name: 'Mark',
        last_name: 'Smith',
        email_address: 'marksmith@protonmail.com',
        phone_number: '639=456=9854',
        zipcode: '98765',
    },
    {
        first_name: 'Reggie',
        last_name: 'Bush',
        email_address: 'reggiebush@chipmail.com',
        phone_number: '432-634-9870',
        zipcode: '28976',
    },

     ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
