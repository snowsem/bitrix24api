import axios, { AxiosInstance } from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const qs = require('qs');

export default class BitrixApi {
    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: process.env.BITRIX_WEBHOOK,
            timeout: 5000,
            paramsSerializer: (params: any) => {
                return qs.stringify(params);
            }
            //headers: {'X-Custom-Header': 'foobar'}
        });
    }

    getDeals = async (payload: any = null)=>{
        return await this.api.get('crm.deal.list.json', { params: { ...payload } });
    };

    getLeads = async (payload: any = null)=>{
        return await this.api.get('crm.lead.list.json', { params: { ...payload } });
    };

    getStageHistory = async(payload = null)=> {
        return await this.api.get('crm.stagehistory.list.json', { params: { ...payload } });
    };

    getActivities = async (payload = null)=> {
        return await this.api.get('crm.activity.list.json', { params: { ...payload } });
    };

    getStatuses = async (payload = null)=>{
        return await this.api.get('crm.status.list.json', { params: { ...payload } });
    };

    wait = ms => new Promise(
        (resolve, reject) => setTimeout(resolve, ms)
    );
    getAll = async (apiMethod: any, payload = null, delay=1000, processor = null)=>{
        let nextId = 0;
        let finish = false;
        let data: any = [];
        let count = 0;

        while (!finish) {
            await this.wait(delay);
            const filter = {
                order: { 'ID':'ASC' },
                filter: { '>ID':nextId },
                start: '-1'
            };

            const apiResult = await apiMethod({ ...payload,...filter });

            if (apiResult.data.result.length>0) {
                if (processor) {
                    data = await processor(apiResult.data.result);
                } else {
                    data = [...data, ...apiResult.data.result];
                }
                const lastElem = apiResult.data.result.pop();
                nextId = lastElem.ID;
                count+=apiResult.data.result.length
                console.log('Name function:',apiMethod.name, 'Next ID:', nextId, 'Count All:', count)
            } else {
                finish = true;
                if (processor) {
                    return count;
                } else {
                    return data
                }
            }
        }
    };

}