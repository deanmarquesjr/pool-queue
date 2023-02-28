const express = require('express');
const PORT = 5555;
const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Pool Queue running on port: ${PORT}`);
})