const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT 
    d.nombre_destino,
    e.nombre_estado,

    SUM(
        es.turistas_nacionales +
        es.turistas_extranjeros
    ) AS total_visitantes,

    MAX(p.anio) AS anio

FROM destino_turistico d

JOIN estado e
    ON d.id_estado = e.id_estado

JOIN estadistica_turistica es
    ON d.id_destino = es.id_destino

JOIN periodo p
    ON es.id_periodo = p.id_periodo

GROUP BY
    d.nombre_destino,
    e.nombre_estado

ORDER BY total_visitantes DESC

LIMIT 6;
        `);

        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error del servidor' });
    }
});

module.exports = router;