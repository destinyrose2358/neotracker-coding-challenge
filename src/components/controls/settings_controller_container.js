import { connect } from "react-redux";
import SettingsController from "./settings_controller";
import { updateSettingsCreator } from "../../actions/settings_actions";

const msp = (state) => {
    return {
        settings: state.settings
    }
};

const mdp = (dispatch) => {
    return {
        updateSettings: (newSettings) => dispatch(updateSettingsCreator(newSettings))
    }
};

const SettingsControllerContainer = connect(msp, mdp)(SettingsController);

export default SettingsControllerContainer;