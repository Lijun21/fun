
const knex = require('./db/knex');

async function performKnexChemaMigration(){
    await knex.migrate.latest();
    await knex.seed.run()
   // await knex.seed.run({directory: __dirname + '/db/seeds/development'})
}

performKnexChemaMigration();
