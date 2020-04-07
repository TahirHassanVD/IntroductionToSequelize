const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const baseRoutes = require('./src/routes');
const errorHandler = require('./src/middlewares/error.middleware');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(bodyParser.json());
app.use('', baseRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(() => errorHandler);

app.listen(4000, () => console.log('listening on port 4000'));
