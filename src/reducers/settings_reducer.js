import merge from "lodash.merge";

const defaultSettings = {
    page: 0,
    pageLength: 20
}

const settingsReducer = (state = defaultSettings, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case "UPDATE_SETTINGS":
            newState = merge({}, state, action.settings);
            return newState;
        default:
            return state;
    }
}

export default settingsReducer;
