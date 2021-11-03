import BitrixApi from "./bitrixApi";
import {getRepository} from "typeorm";
import {Deal} from "./entity/Deal";
import _ from 'lodash';
import {stat} from "fs";
import {Status} from "./entity/Status";
import {Lead} from "./entity/Lead";

export const getAllDeals = async ()=>{
    const bitrixApi = new BitrixApi()
    const bitrixDeals = await bitrixApi.getAll(bitrixApi.getDeals, {
        select: ["*", "UF_CRM_1606396719298"]
    }, 500);
    const dealRepository = getRepository(Deal);
    const dealsChunks = _.chunk(bitrixDeals, 1000);

    for (let i=0; i < dealsChunks.length; i++) {

        let chunk = dealsChunks[i];
        let insertDeals = []

        chunk.forEach((item)=>{
            insertDeals.push(dealRepository.create(
                {...item}));
        })

        await dealRepository.save(insertDeals);

    }

    return bitrixDeals.length
}

export const getAllLeads = async ()=>{
    const bitrixApi = new BitrixApi()
    const bitrixLeads = await bitrixApi.getAll(bitrixApi.getLeads, {
        select: ["*"]
    }, 500);
    const leadRepository = getRepository(Lead);
    const leadChunks = _.chunk(bitrixLeads, 1000);

    for (let i=0; i < leadChunks.length; i++) {

        let chunk = leadChunks[i];
        let insertDeals = []

        chunk.forEach((item)=>{
            insertDeals.push(leadRepository.create(
                {...item}));
        })

        await leadRepository.save(insertDeals);
    }

    return bitrixLeads.length
}

export const getAllStatuses = async ()=>{
    const bitrixApi = new BitrixApi()
    const bitrixStatuses = await bitrixApi.getStatuses();
    const statusRepository = getRepository(Status);
    const statusChunks = _.chunk(bitrixStatuses.data.result, 1000);

    for (let i=0; i < statusChunks.length; i++) {

        let chunk = statusChunks[i];
        let insertDeals = []

        chunk.forEach((item)=>{
            insertDeals.push(statusRepository.create(
                {...item}));
        })

        await statusRepository.save(insertDeals);
    }

    return bitrixStatuses.data.result.length
}