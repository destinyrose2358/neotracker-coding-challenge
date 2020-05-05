import { combineReducers } from "redux";
import shipmentsReducer from "./shipments_reducer";
import settingsReducer from "./settings_reducer";

const rootReducer = combineReducers({
    shipments: shipmentsReducer,
    settings: settingsReducer
});

export default rootReducer;