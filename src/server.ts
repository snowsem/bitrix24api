import dotenv from 'dotenv';
import express from 'express';
import { createConnection } from 'typeorm';
import {AppLogger} from "./logger";
import {stringify} from "qs";

dotenv.config();
createConnection().then(connection => {
    const app = express();
    const port = 8888; // default port to listen
    dotenv.config();

    app.get('/', (req, res)=>{
        res.send('hellos')
    })

    app.post('/incoming', (req, res)=>{
        AppLogger.log({
            level: 'info',
            message: `Body ${req.body}, params ${stringify(req.params)}, q ${stringify(req.query)}, h ${stringify(req.headers)}`
        })
        res.send(req.request);
    });

    app.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
    });
}).catch(e=>console.log(e));