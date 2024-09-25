import express, { json } from 'express';
import UserController from './src/UserController.js';

const app = express();

app.use(json());

app.get('/', (req, res, next)=>{
    return res.json({
        message: 'hello world'
    })
});

app.post('/user', UserController.create)

app.listen(9001, console.log('Running on port 9001'));