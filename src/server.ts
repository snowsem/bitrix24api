import dotenv from 'dotenv';
import express from 'express';
import { createConnection } from 'typeorm';
import {AppLogger} from "./logger";

dotenv.config();
createConnection().then(connection => {
    const app = express();
    const port = 8888; // default port to listen
    dotenv.config();

    app.get('/', (req, res)=>{
        res.send('hellos')
    })

    app.get('incoming', (req, res)=>{
        AppLogger.log({
            level: 'info',
            message: req
        })
        res.send('OK');
    });

    app.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
    });
}).catch(e=>console.log(e));