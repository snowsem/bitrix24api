import dotenv from 'dotenv';
import cron from 'node-cron';
import {createConnection, getRepository} from "typeorm";

import {getAllDeals, getAllLeads, getAllStatuses} from "./bitrixActions";
import {AppLogger} from "./logger";

dotenv.config();

(async () => {
    createConnection().then(async connection => {
        try {
            AppLogger.log({
                level: 'info',
                message: `FORCE LOAD DATA!`
            });
            const res = await getAllLeads();
            AppLogger.log({
                level: 'info',
                message: `Load Leads by cron ${res}`
            });

            const res1 = await getAllDeals()
            AppLogger.log({
                level: 'info',
                message: `Load Deals by cron ${res1}`
            });
            const res2 = await getAllStatuses()
            AppLogger.log({
                level: 'info',
                message: `Load Statuses by cron ${res2}`
            });


        } catch (e) {
            AppLogger.log({
                level: 'error',
                message: `E ${e}`
            });
            throw Error(e);
        }
    }).catch((e) => {
        AppLogger.log({
            level: 'error',
            message: e
        });

    });

})()