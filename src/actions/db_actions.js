import * as DBAPIUtil from "../util/db_util";

export const RECEIVE_SHIPMENTS = "RECEIVE_SHIPMENTS";
export const RECEIVE_SHIPMENT = "RECEIVE_SHIPMENT";

const receiveShipments = shipments => ({
    type: RECEIVE_SHIPMENTS,
    shipments
});

const receiveShipment = shipment => ({
    type: RECEIVE_SHIPMENT,
    shipment
})

export const fetchShipments = (page, pageLength, order, direction, criteria) => dispatch => (
    DBAPIUtil.fetchShipments(page, pageLength, order, direction, criteria)
        .then(shipments => dispatch(receiveShipments(shipments)))
);

export const fetchShipment = (id) => dispatch => (
    DBAPIUtil.fetchShipment(id)
        .then(shipment => dispatch(receiveShipment(shipment)))
);

export const updateShipmentName = (name, id) => dispatch => (
    DBAPIUtil.updateShipmentName(name, id)
        .then(updatedShipment => dispatch(receiveShipment(updatedShipment)))
)