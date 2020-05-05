import React, { useState } from "react";

const SettingsController = (props) => {
    const { settings, dispatch } = props;
    let { state, setState } = useState(settings);
    setState = settingName => e => dispatch => {
        setState(currentSettings => {
            currentSettings[settingName] = e.current_target.value;
        });
    }

    const { page, pageLength } = state || props;

    const update = setting => e => {
        return {
            type: "UPDATE_SETTINGS",
            settings: {
                [setting]: e.currentTarget.value
            }
        }
    };
    return (
        <div
            className="settings-controller"
        >
            <label>
                Page:
                <input type="number" value={page} onChange={ e => dispatch(update("page")(e)) } />
            </label>
        </div>
    );
}

export default SettingsController;