const bcrypt = require('bcryptjs');

exports.seed = function (knex) {
  return knex('users').insert([
    {
      id: 1,
      username: 'billy idol',
      password: bcrypt.hashSync('rebel', 12),
    },
    {
      id: 2,
      username: 'steve stevens',
      password: bcrypt.hashSync('atomic', 12),
    },
  ]);
};