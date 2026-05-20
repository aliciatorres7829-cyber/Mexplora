const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'TurismoMexico',
    password: 'Alicia2350',
    port: 5432,
});

module.exports = pool;