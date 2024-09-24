import express from 'express';

const app = express();

app.get('/', (req, res, next)=>{
    return res.json({
        message: 'hello world'
    })
});

app.listen(9001, console.log('Running on port 9001'));