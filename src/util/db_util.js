import * as API_CONST from "../constants/api_const";
import { normalizeBy } from "./selector_util";
import { startQueryParams } from "./fetch_util";

export const fetchShipments = (page, pageLength, orders = []) => {
    const queryParams = generateDBQueryParams(page, pageLength, orders);
    const url = startQueryParams(`${API_CONST.API_URL}/shipments`, queryParams);
    return fetch(url, {
        method: "GET"
    })
        .then(response => (
            response.json()
                .then(data => normalizeBy(data))
        ));
};

const generateDBQueryParams = (page, pageLength, orders) => {
    let _sort = "";
    let _order = "";
    Object.entries(orders).forEach(([attribute, direction]) => {
        _sort += `${attribute},`;
        _order += `${direction},`;
    });
    return {
        _page: page,
        _limit: pageLength,
        _sort,
        _order
    }
}