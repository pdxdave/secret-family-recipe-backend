const bcrypt = require('bcryptjs');

exports.seed = function (knex) {
  return knex('users').insert([
    {
      id: 1,
      username: 'SecretFamilyRecipes',
      password: bcrypt.hashSync('rebel', 12),
    },
    ]);
};