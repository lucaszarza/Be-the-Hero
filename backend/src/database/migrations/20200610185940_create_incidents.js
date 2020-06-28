
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        table.increments()//primary key

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();

        table.string('ong_id').notNullable(); //Foreign Key

        table.foreign('ong_id').references('id').inTable('ongs') // Referenciando a FK a outra tabela

    })
};


exports.down = function(knex) {
    return knex.schema.dropTable('incidents')
};
