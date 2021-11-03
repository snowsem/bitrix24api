import dotenv from 'dotenv';
import cron from 'node-cron';
import {createConnection, getRepository} from "typeorm";

import {getAllDeals, getAllLeads, getAllStatuses} from "./bitrixActions";
import {AppLogger} from "./logger";

dotenv.config();

(async () => {
    createConnection().then(async connection => {
        try {
            const leads = cron.schedule('0 */2 * * *', async () =>  {

                const res = await getAllLeads();
                AppLogger.log({
                    level: 'info',
                    message: `Load Leads by cron ${res}`
                });
            });

            const deals = cron.schedule('30 */3 * * *', async () =>  {
                const res = await getAllDeals()
                AppLogger.log({
                    level: 'info',
                    message: `Load Deals by cron ${res}`
                });
            });

            const statuses = cron.schedule('50 */8 * * *', async () =>  {
                const res = await getAllStatuses()
                AppLogger.log({
                    level: 'info',
                    message: `Load Statuses by cron ${res}`
                });
            });

            leads.start()
            deals.start()
            statuses.start()

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