import { combineReducers } from "redux";
import shipmentsReducer from "./shipments_reducer";
import settingsReducer from "./settings_reducer";
import visibleShipmentReducer from "./visible_shipment_reducer";

const rootReducer = combineReducers({
    shipments: shipmentsReducer,
    settings: settingsReducer,
    visibleShipment: visibleShipmentReducer
});

export default rootReducer;