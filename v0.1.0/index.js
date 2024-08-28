const express = require('express');
const app = express();
app.use(express.json());

const people = {};

app.get('/pessoa', function (res, res) {
    return res.json(people);
});

// POST /pessoa
// {"id": 1", "name": "Rafael"}
app.post('/pessoa', function (req, res) {
    const body = req.body;
    people[body.id] = body;

    return res.status(201).json(body);
});

// /pessoa/1
app.delete('/pessoa/:id', function(req, res) {
    //remover informações da pessoa :id
    const id = req.params.id;
    delete people[id];

    return res.status(204).send();
});

app.listen(3000);