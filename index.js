const express = require('express');
const app = express();
const PORT = 3000;
const actoresRouter = require('./routes/actores.js');
const cinesRouter = require('./routes/cine.js');
const peliculasRouter = require('./routes/peliculas.js');

app.use(express.json());
app.use();

app.use('/actores', actoresRouter);
app.use('/cine', cinesRouter);
app.use('/peliculas', peliculasRouter);

app.listen(PORT, () => console.log('Server running on port' + PORT));
