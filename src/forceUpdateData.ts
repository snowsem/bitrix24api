import dotenv from 'dotenv';
import cron from 'node-cron';
import {createConnection, getRepository} from "typeorm";

import {getAllDeals, getAllLeads, getAllStatuses} from "./bitrixActions";
import {AppLogger} from "./logger";

dotenv.config();

(async () => {
    createConnection().then(async connection => {
        try {
            // AppLogger.log({
            //     level: 'info',
            //     message: `FORCE LOAD DATA!`
            // });
            // const res = await getAllLeads();
            // AppLogger.log({
            //     level: 'info',
            //     message: `Load Leads by force ${res}`
            // });

            const res1 = await getAllDeals()
            AppLogger.log({
                level: 'info',
                message: `Load Deals by force ${res1}`
            });
            const res2 = await getAllStatuses()
            AppLogger.log({
                level: 'info',
                message: `Load Statuses by force ${res2}`
            });

            const used = process.memoryUsage().heapUsed / 1024 / 1024;
            console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);


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