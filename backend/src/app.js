const express = require('express'); // Importando o módulo Express na variável express
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);




