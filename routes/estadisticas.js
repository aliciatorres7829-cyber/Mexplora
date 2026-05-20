const express = require('express');

const router = express.Router();

const pool = require('../db');

router.get('/', async (req, res) => {

    try {

        const result = await pool.query(`

            SELECT

                p.anio,

                SUM(es.turistas_nacionales)
                    AS nacionales,

                SUM(es.turistas_extranjeros)
                    AS extranjeros,

                ROUND(
                    AVG(es.ocupacion_porcentaje),
                    2
                ) AS ocupacion,

                SUM(es.ingresos_turisticos)
                    AS ingresos

            FROM estadistica_turistica es

            JOIN periodo p
                ON es.id_periodo = p.id_periodo

            GROUP BY p.anio

            ORDER BY p.anio DESC

            LIMIT 1;

        `);

        res.json(result.rows[0]);

    } catch(error){

        console.error(error);

        res.status(500).json({
            error:'Error servidor'
        });

    }

});

module.exports = router;