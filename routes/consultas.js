const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/ocupacion-promedio', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT
                AVG(ocupacion_porcentaje) AS promedio_ocupacion
            FROM estadistica_turistica;
        `);

        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error' });
    }
});

router.get('/total-ingresos', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT
                SUM(ingresos_turisticos) AS total_ingresos
            FROM estadistica_turistica;
        `);

        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error' });
    }
});

module.exports = router;


