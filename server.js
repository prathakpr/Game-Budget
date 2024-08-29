const express = require('express');
const app = express();
const envelopesRoters = require('./envelopes');

const PORT = 3000 || env.PORT;
const Totalbudget = [];

//for envelopesRoters 
app.use('/envelopes', envelopesRoters);

//ERROR handler below

app.use((err, req, res, next)=>{
    res.status(err.status).send(err.message);
})

app.listen(PORT, (req, res, next)=>{
    console.log(`server listening on ${PORT}`);
    
});