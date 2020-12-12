
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments(); // pk, auto increment, not null

        tbl.string('username', 50)
            .notNullable()
            .unique();
        tbl.string('password', 50)
            .notNullable()
    })
    .createTable('recipes', tbl => {
        tbl.increments("id");
        tbl.string('title', 100)
            .notNullable();
        tbl.string('source', 100)
            .notNullable();
        tbl.json('ingredients')
            .notNullable();
        tbl.json('instructions')
            .notNullable();
        tbl.string('category')
            .notNullable();
        tbl.string('private', 100)
            .notNullable()
            .defaultTo('true');
        tbl.json('subcategories');
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('users.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists('recipes')
        .dropTableIfExists('users')
};
