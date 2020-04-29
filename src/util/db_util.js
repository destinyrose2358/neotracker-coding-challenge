import API_CONST from "../constants/api_const";

export const fetchShipments = () => {
    return fetch(`${API_CONST.API_URL}/shipments`, {
        method: "GET"
    })
        .then(response => response.json());
};