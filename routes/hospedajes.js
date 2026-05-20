const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT
                h.nombre_hospedaje,
                c.nombre_categoria,
                ce.clasificacion,
                d.nombre_destino,
                h.numero_habitaciones
            FROM establecimiento_hospedaje h
            JOIN categoria_hospedaje c
                ON h.id_categoria = c.id_categoria
            JOIN categoria_estrellas ce
                ON h.id_estrella = ce.id_estrella
            JOIN destino_turistico d
                ON h.id_destino = d.id_destino
            ORDER BY h.nombre_hospedaje;
        `);

        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error del servidor' });
    }
});

module.exports = router;