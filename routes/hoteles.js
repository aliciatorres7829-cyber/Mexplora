const express = require('express');

const router = express.Router();

const pool = require('../db');

router.get('/', async (req, res) => {

    try {

        const result = await pool.query(`

            SELECT
                h.nombre_hospedaje,
                h.numero_habitaciones,

                c.nombre_categoria,

                e.clasificacion,

                es.nombre_estado,

                d.nombre_destino

            FROM establecimiento_hospedaje h

            JOIN categoria_hospedaje c
                ON h.id_categoria = c.id_categoria

            JOIN categoria_estrellas e
                ON h.id_estrella = e.id_estrella

            JOIN destino_turistico d
                ON h.id_destino = d.id_destino

            JOIN estado es
                ON d.id_estado = es.id_estado;

        `);

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: 'Error del servidor'
        });

    }

});

module.exports = router;