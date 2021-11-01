import dotenv from 'dotenv';
import {createConnection} from "typeorm";
dotenv.config();

(async ()=>{
    createConnection().then(connection => {
        console.log('hi')
    }).catch(e=>console.log(e));

})()