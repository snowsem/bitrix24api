import BitrixApi from "./bitrixApi";
import {getConnection, getRepository} from "typeorm";
import {Deal} from "./entity/Deal";

export const action = async (body) => {
    try {
        if (body.event === 'ONCRMDEALUPDATE' || body.event === 'ONCRMDEALADD') {
            await onCrmDealCreateOrUpdate(body)
        }

        if (body.event === 'ONCRMDEALDELETE') {
            await onCrmDealDelete(body)
        }

    } catch (e) {
        throw new Error(e);
    }

}

export const onCrmDealCreateOrUpdate = async (body) => {
    const dealId = body.data['FIELDS']['ID'];
    const bitrixApi = new BitrixApi();
    const getDeal = await bitrixApi.getDeal({
        id: dealId
        // select: ["*", "UF_CRM_1606396719298", "UF_CRM_1631260510342"]
    });

    let deal = getDeal.data.result;
    if (deal) {
        deal = dealFormatter(deal)
        const dealRepository = getRepository(Deal);
        const dealEntity = dealRepository.create(deal);
        await dealRepository.save(dealEntity);
    }
}

export const onCrmDealDelete =async (body) => {
    const dealId = body.data['FIELDS']['ID'];
    await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Deal)
        .where("ID = :id", { id: dealId })
        .execute();
}

export const dealFormatter = (deal) => {
    if (deal.DATE_CREATE === '') deal.DATE_CREATE = null
    if (deal.DATE_MODIFY === '') deal.DATE_MODIFY = null
    if (deal.BEGINDATE === '') deal.BEGINDATE = null
    if (deal.CLOSEDATE === '') deal.CLOSEDATE = null
    if (deal.UF_CRM_1606396719298 === '') deal.UF_CRM_1606396719298 = null
    if (deal.UF_CRM_1631260510342) {
        const splitStr = deal.UF_CRM_1631260510342.split("|");
        deal.DEBT_OF_AMOUNT = splitStr[0] ?? null;
        deal.DEBT_OF_CURRENCY = splitStr[1] ?? null;
    }

    return deal;
}


