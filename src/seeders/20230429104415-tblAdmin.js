'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tblAdmins', [{
      vcName: 'Darshana',
      vcEmail: 'darshana@digitalsalt.in',
      numContact: 9876543210,
      btIsActive: false,
      btIsVerified: false,
      vcCompanyName: "Birla",
      dtVerifiedAt: new Date().toISOString(),
      vcCompanyLocation: "",
      vcUsername: "darshana@digitalsalt.in",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }], {});
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
