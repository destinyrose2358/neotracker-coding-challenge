import * as DBAPIUtil from "../util/db_util";

export const RECEIVE_SHIPMENTS = "RECEIVE_SHIPMENTS";

const receiveShipments = shipments => ({
    type: RECEIVE_SHIPMENTS,
    shipments
});

export const fetchShipments = () => dispatch => (
    DBAPIUtil.fetchShipments()
        .then(shipments => dispatch(receiveShipments(shipments)))
);