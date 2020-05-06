import * as DBAPIUtil from "../util/db_util";

export const RECEIVE_SHIPMENTS = "RECEIVE_SHIPMENTS";

const receiveShipments = shipments => ({
    type: RECEIVE_SHIPMENTS,
    shipments
});

export const fetchShipments = (page, pageLength, order, direction, criteria) => dispatch => (
    DBAPIUtil.fetchShipments(page, pageLength, order, direction, criteria)
        .then(shipments => dispatch(receiveShipments(shipments)))
);