const express = require('express');
const envelopesRouter = express.Router();


//Anjaniputra Games upcoming envelopes
const envelopes = [
    {
        game : 'Into The Coaching Class Ch1',
        release : 2022,
        platform : 'playstore, local VR, itch.io',
        gameHours : 2,
        gameBudget : '100000 INR'
    },
    {   
        game : 'Into The Coaching Class Ch1 Remastered',
        release : 2026,
        platform : 'playstore, local VR, itch.io',
        gameHours : 4,
        gameBudget : '200000 INR'
    },
    {   
        game : 'Into The Coaching Class Ch2',
        release : 2028,
        platform : 'playstore, local VR, itch.io',
        gameHours : 5,
        gameBudget : '400000 INR'
    },
    {
        game : 'Corporate',
        release : 2029,
        platform : 'playstore, local VR, itch.io',
        gameHours : 4,
        gameBudget : '200000 INR'
    },
    {
        game : 'Dowhill',
        release : 2030,
        platform : 'playstore, local VR, itch.io',
        gameHours : 4,
        gameBudget : '200000 INR'
    }];

// function to find the game details by its name

const gameDetails = (game) =>{
    for(let info of envelopes){
        if(info.game === game){
            return info;
        }
    }
    const err = new Error (`not found game title`);
    err.status = 404;
    throw err;
}

envelopesRouter.param('game', (req, res, next, game)=>{
    try{
        req.info = gameDetails(game);
        next();
    }catch(err){
        next(err);
    }
})

envelopesRouter.post('/', (req, res, next)=>{
    res.status(201).send('apun post hai'); 
});

envelopesRouter.get('/:game', (req, res, next)=>{
    res.status(200).send(`yes, game details are : ${JSON.stringify(req.info)}`);
})

envelopesRouter.get('/all', (req, res, next)=>{
    res.status(200).send(envelopes);
})

module.exports = envelopesRouter ;