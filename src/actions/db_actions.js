import * as DBAPIUtil from "../util/db_util";

export const RECEIVE_SHIPMENTS = "RECEIVE_SHIPMENTS";

const receiveShipments = shipments => ({
    type: RECEIVE_SHIPMENTS,
    shipments
});

export const fetchShipments = (page, pageLength, ids = []) => dispatch => (
    DBAPIUtil.fetchShipments(page, pageLength)
        .then(shipments => dispatch(receiveShipments(shipments)))
);