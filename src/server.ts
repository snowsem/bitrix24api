import dotenv from 'dotenv';
import express from 'express';
import { createConnection } from 'typeorm';
import {AppLogger} from "./logger";
import {stringify} from "qs";
import bodyParser from "body-parser";
import {action} from "./incomingWebhookAction";

dotenv.config();
createConnection().then(connection => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    const port = 8888; // default port to listen
    dotenv.config();

    app.get('/', (req, res)=>{
        res.send('hellos')
    })

    app.post('/incoming', (req, res)=>{
        AppLogger.log({
            level: 'info',
            message: `Bitrix ${stringify(req.body)}`
        })
        action(req.body);
        res.send(req.body);
    });

    app.get('/incoming', (req, res)=>{
        AppLogger.log({
            level: 'info',
            message: `Body ${stringify(req.body)}, params ${stringify(req.params)}, q ${stringify(req.query)}, h ${stringify(req.headers)}`
        })
        res.send(req.request);
    });

    app.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
    });
}).catch(e=>console.log(e));