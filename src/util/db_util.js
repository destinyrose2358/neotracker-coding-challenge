import * as API_CONST from "../constants/api_const";
import { startQueryParams } from "./fetch_util";

export const fetchShipments = (page, pageLength, order, direction, criteria) => {
    const queryParams = generateDBQueryParams(page, pageLength, order, direction, criteria);
    const url = startQueryParams(`${API_CONST.API_URL}/shipments`, queryParams);
    return fetch(url, {
        method: "GET"
    })
        .then(response => (
            response.json()
        ));
};

const generateDBQueryParams = (page, pageLength, order, direction, criteria) => {
    const criteriaFields = generateCriteria(criteria);
    return {
        _page: page,
        _limit: pageLength,
        _sort: order,
        _order: direction,
        ...criteriaFields
    }
};

const generateCriteria = (criteria) => {
    const criteriaFields = {};
    if (!criteria) return criteriaFields;
    criteria
        .replace(/\s+/g, "")
        .split(",")
        .map(attrPair => attrPair.split(":"))
        .forEach(([attr, value]) => {
            const currentValue = criteriaFields[attr];
            if (value && attr[0] !== "_") criteriaFields[attr] = currentValue instanceof Array ? currentValue.concat(value) : [value];   
        });
    return criteriaFields;
};