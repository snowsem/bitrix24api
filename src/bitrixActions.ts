import BitrixApi from "./bitrixApi";
import {getRepository} from "typeorm";
import {Deal} from "./entity/Deal";
import _ from 'lodash';
import {stat} from "fs";
import {Status} from "./entity/Status";
import {Lead} from "./entity/Lead";

export const getAllDeals = async () => {
    const bitrixApi = new BitrixApi()
    const bitrixDeals = await bitrixApi.getAll(bitrixApi.getDeals, {
        select: ["*", "UF_CRM_1606396719298"]
    }, 500, async (bitrixDeals) => {
        const dealRepository = getRepository(Deal);
        bitrixDeals.map((item) => {
            if (item.DATE_CREATE === '') item.DATE_CREATE = null
            if (item.DATE_MODIFY === '') item.DATE_MODIFY = null
            if (item.BEGINDATE === '') item.BEGINDATE = null
            if (item.CLOSEDATE === '') item.CLOSEDATE = null
            if (item.UF_CRM_1606396719298 === '') item.UF_CRM_1606396719298 = null
            return item
        })

        const dealsChunks = _.chunk(bitrixDeals, 100);

        for (let i = 0; i < dealsChunks.length; i++) {

            let chunk = dealsChunks[i];
            let insertDeals = []

            chunk.forEach((item) => {
                insertDeals.push(dealRepository.create(
                    {...item}));
            })

            await dealRepository.save(insertDeals);

        }

        return true
    });

    return bitrixDeals

}

export const getAllLeads = async () => {
    const bitrixApi = new BitrixApi()
    const bitrixLeads = await bitrixApi.getAll(bitrixApi.getLeads, {
        select: ["*"]
    }, 500, async (bitrixLeads) => {
        bitrixLeads.map((item) => {
            if (item.DATE_CREATE === '') item.DATE_CREATE = null
            if (item.DATE_MODIFY === '') item.DATE_MODIFY = null
            if (item.DATE_CLOSED === '') item.DATE_CLOSED = null
            if (item.CLOSEDATE === '') item.CLOSEDATE = null
            return item
        })

        const leadRepository = getRepository(Lead);
        const leadChunks = _.chunk(bitrixLeads, 1000);

        for (let i = 0; i < leadChunks.length; i++) {

            let chunk = leadChunks[i];
            let insertDeals = []

            chunk.forEach((item) => {
                insertDeals.push(leadRepository.create(
                    {...item}));
            })

            await leadRepository.save(insertDeals);
        }

        return true
    });

    return bitrixLeads
}

export const getAllStatuses = async () => {
    const bitrixApi = new BitrixApi()
    const bitrixStatuses = await bitrixApi.getStatuses();
    const statusRepository = getRepository(Status);
    const statusChunks = _.chunk(bitrixStatuses.data.result, 1000);

    for (let i = 0; i < statusChunks.length; i++) {

        let chunk = statusChunks[i];
        let insertDeals = []

        chunk.forEach((item) => {
            insertDeals.push(statusRepository.create(
                {...item}));
        })

        await statusRepository.save(insertDeals);
    }

    return bitrixStatuses.data.result.length
}