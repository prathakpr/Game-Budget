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

const envelopesTwo = [
    { game : 'RDR 2',
        release : 2018,
        platform : 'Console and Pcs',
        gameHours : 64,
        gameBudget : '$250M'},
    {
        game : 'GTA 5',
        release : 2013,
        platform : 'Console and Pc',
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

// function to delete a game details by its name

const deleteGameDetails = (info) =>{
    const id = envelopes.indexOf(info);
    return envelopes.splice(id, 1);
}

// function to create envelopes
const createGame = game =>{
    const newGame = {

        game : game,
        release : 2024,
        platform : 'Console and Pc',
        gameHours : 4,
        gameBudget : '200000 INR'
    }

    envelopes.push(game);
}

// envelope params set here

envelopesRouter.param('game', (req, res, next, game)=>{
    try{
        req.info = gameDetails(game);
        next();
    }catch(err){
        next(err);
    }
})


// below I have added put routes

envelopesRouter.put('/change/:game/:budget' ,(req, res, next)=>{
    const num = Number(req.params.budget)
    if(!isNaN(num)){
        req.info.gameBudget = `${num} INR`;
        res.status(200).send(`Done Successefully, new info is ${JSON.stringify(req.info)}`);
        return next();
    }
    const err = new Error('give a valid number please');
    next(err);

});

// I have added post routes here
envelopesRouter.post('/transfer/:game', (req, res, next)=>{
    envelopesTwo.push(req.info);
    res.status(200).send(`transfer game details successfully to env 2 as = ${JSON.stringify(envelopesTwo)}`);
});

envelopesRouter.post('/create/', (req, res, next)=>{
    envelopes.push(req.query);
    res.status(201).send(`created new game details successfully as ${JSON.stringify(envelopes)}`); 
});

// below I have added get routes

envelopesRouter.get('/:game/budget' ,(req, res, next)=>{
    res.status(200).send(`${req.info.game} game budget is : ${JSON.stringify(req.info.gameBudget)}`); 
})

envelopesRouter.get('/:game', (req, res, next)=>{
    res.status(200).send(`yes, game details are : ${JSON.stringify(req.info)}`);
})

envelopesRouter.get('/all', (req, res, next)=>{
    res.status(200).send(envelopes);
})

// below I have added delete routes
envelopesRouter.delete('/:game', (req, res, next)=>{
    deleteGameDetails(req.info);
    res.status(200).send('deleted successfully');
})

module.exports = envelopesRouter ;