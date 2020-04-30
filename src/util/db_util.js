import * as API_CONST from "../constants/api_const";
import { normalizeBy } from "./selector_util";
import { startQueryParams } from "./fetch_util";

export const fetchShipments = (page, pageLength) => {
    const url = startQueryParams(`${API_CONST.API_URL}/shipments`, { "_start": page * pageLength, "_limit": pageLength });
    return fetch(url, {
        method: "GET"
    })
        .then(response => (
            response.json()
                .then(data => normalizeBy(data))
        ));
};