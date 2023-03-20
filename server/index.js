const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));

const bodyparser = require('body-parser');
app.use(bodyparser.json());

const { connectToMongo, getDB } = require('./db-connection');

app.get('/', (req, res) => {
    res.send();
})

app.post('/datas', (req, res) => {
    const db = getDB();
    const collection = db.collection('Test');
    const { data } = req.body;
    console.log(data);
    collection.insertMany([{ "Data": data }])
        .then(() => {
            console.log(data, '123');
            res.json({ data: 'Success' })
        })
})

connectToMongo()
    .then(() => {
        console.log("Connected to DB...");
    }).catch((err) => {
        console.log("Not Connect DB...", err);
    })

app.listen('3001', () => {
    console.log('Server Running');
})