import * as API_CONST from "../constants/api_const";

export const fetchShipments = (page, pageLength) => {
    const url = `${API_CONST.API_URL}/shipments`;
    return fetch(url, {
        method: "GET"
    })
        .then(response => response.json());
};