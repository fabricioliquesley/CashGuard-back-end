exports.up = knex => knex.schema.createTable("expenses", table => {
    table.increments("id");
    table.text("title").notNullable();
    table.text("description").notNullable();
    table.integer("value").notNullable();
    table.text("category").notNullable();
    table.text("status").notNullable();
    table.integer("user_id").references("id").inTable("users");

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("expenses");