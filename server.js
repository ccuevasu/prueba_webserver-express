const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public')); // Hace publico un directorio completo

// *** Express HBS engine ***
hbs.registerPartials(__dirname + '/views/partials'); // HBS Parcial
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    //res.send('Hola Mundo')

    res.render('home', {
        nombre: 'CeSar CUEVAS'
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})


app.listen(port, () => {
    console.log(`Escuchando peticiones en puerto ${port}`);
})

app.get('/suma', (req, res) => {
    res.send('Hola Suma')
})