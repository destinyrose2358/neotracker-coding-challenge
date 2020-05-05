import { RECEIVE_SHIPMENTS } from "../actions/db_actions";
import merge from "lodash.merge";

const shipmentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_SHIPMENTS:
            newState = Object.assign({}, action.shipments);
            return newState;
        default:
            return state;
    }
};

export default shipmentsReducer;