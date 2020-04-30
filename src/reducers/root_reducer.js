import { combineReducers } from "redux";
import shipmentsReducer from "./shipments_reducer";

const rootReducer = combineReducers({
    shipments: shipmentsReducer
});

export default rootReducer;