const express = require ('express');
const app = express();
const bodyparser =require('body-parser');
const cors = require ('cors');
const { connectToMongo, getDB } = require('./db_connection');

app.use(cors({origin:'http://localhost:3000'}));
app.use(bodyparser.json());

app.get('/',(req,res)=>{
    res.send();
}) 

app.post('/datas',(req,res)=>{
    const db= getDB();
    const collection = db.collection("Test");
    const { test }= req.body;
    collection.insertMany([{    "Data":test }])
    .then(()=>{
        console.log(test)
        res.json({data:'Success'});
    })
})

//DB Connect
connectToMongo()
    .then(() => {
        console.log("Connected to Database...");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR!... ", err);
    });

app.listen('3001',()=>{
    console.log('Server Running');
})