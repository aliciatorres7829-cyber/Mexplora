const express = require('express');

const router = express.Router();

const pool = require('../db');

router.get('/', async (req, res) => {

    try {

        const result = await pool.query(`

            SELECT

                d.nombre_destino,

                t.nombre_tipo,

                e.nombre_estado

            FROM destino_turistico d

            JOIN cat_tipo_destino t
                ON d.tipo_destino = t.id_tipo

            JOIN estado e
                ON d.id_estado = e.id_estado;

        `);

        res.json(result.rows);

    } catch(error){

        console.error(error);

        res.status(500).json({
            error:'Error servidor'
        });

    }

});

module.exports = router;