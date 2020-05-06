import { RECEIVE_SHIPMENT } from "../actions/db_actions";

const visibleShipmentReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SHIPMENT:
      return action.shipment;
    default:
      return state;
  }
};

export default visibleShipmentReducer;