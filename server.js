const express = require('express');

const cors = require('cors');

const destinosRoutes =
require('./routes/destinos');

const hotelesRoutes =
require('./routes/hoteles');

const estadisticasRoutes =
require('./routes/estadisticas');

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static('public'));

app.use(
    '/api/destinos',
    destinosRoutes
);

app.use(
    '/api/hoteles',
    hotelesRoutes
);

app.use(
    '/api/estadisticas',
    estadisticasRoutes
);

const PORT = 3000;

app.listen(PORT, () => {

    console.log(
        `Servidor ejecutándose en http://localhost:${PORT}`
    );

});

const experienciasRoutes =
require('./routes/experiencias');

app.use(
    '/api/experiencias',
    experienciasRoutes
);