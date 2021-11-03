import dotenv from 'dotenv';
import {createConnection, getRepository} from "typeorm";
import {Deal} from "./entity/Deal";
import BitrixApi from "./bitrixApi";
import _ from 'lodash';
import {getAllDeals, getAllLeads, getAllStatuses} from "./bitrixActions";

dotenv.config();

(async () => {
    createConnection().then(async connection => {
        try {

            const allLeads = await getAllLeads();
            const allDeals = await getAllDeals();
            const statuses = await getAllStatuses();

            const used = process.memoryUsage().heapUsed / 1024 / 1024;
            console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
        } catch (e) {
            console.log(e)
            throw Error(e);
        }
    }).catch(e => console.log(e));

})()