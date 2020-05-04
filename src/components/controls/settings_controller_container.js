import { connect } from "react-redux";
import SettingsController from "./settings_controller";

const msp = (state = {}) => {
    return {
        settings: state.settings
    }
};

const mdp = (dispatch) => {
    return {
        dispatch
    }
};

const SettingsControllerContainer = connect(msp, mdp)(SettingsController);

export default SettingsControllerContainer;