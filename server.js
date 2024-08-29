const express = require('express');
const app = express();
const envelopes = require('./envelopes');

const PORT = 3000 || env.PORT;
const Totalbudget = [];

//Anjaniputra Games upcoming envelopes
/*const envelopes = [{game : 'Into The Coaching Class Ch1'},
    {game : 'Into The Coaching Class Ch1 Remastered'},
    {game : 'Dowhill'},
    {game : 'Corporate'}];

app.param('game', (req, res, next, game)=>{
    const enId = envelopes.indexOf(id);
    if(enId > -1){
        req.enId = enId;
       return next();
    }
    const err =  new Error (`not found game title`)
    err.status = 404;
    next(err)
})


app.post('/envelopes', (req, res, next)=>{
    res.status(201).send('apun post hai'); 
});

app.get('/:game', (req, res, next)=>{
    res.status(200).send(`yes ${envelopes[req.enId]} will come at Id of ${req.enId}`);
})

app.get('/all', (req, res, next)=>{
    res.status(200).send(envelopes);
})

app.get('/', (req, res, next) => {
    res.send('Hello, World'); // This sends the message to the browser
});*/

//ERROR handler below

app.use((err, req, res, next)=>{
    res.status(err.status).send(err.message);
})

app.listen(PORT, (req, res, next)=>{
    console.log(`server listening on ${PORT}`);
    
});