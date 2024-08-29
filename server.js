const express = require('express');
const app = express();

const PORT = 3000 || env.PORT;

app.listen(PORT, (req, res, next)=>{
    console.log(`server listening on ${PORT}`);
    
});

app.get('localhost:3000/', (req, res, next)=>{
    // code for hello world to shown on page
});

