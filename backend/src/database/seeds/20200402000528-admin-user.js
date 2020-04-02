'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    /* bulkInsert -> insere diretamente no banco */
    return QueryInterface.bulkInsert(
      'users',  
      [
        {
          name: "Distribuidora FastFeet",
          email: "admin6@fastfeet.com",
          password_hash: bcrypt.hashSync("123456", 8),
          created_at: new Date(),
          updated_at: new Date()
        }
      ], {} );
  },
  down: () => {}
};