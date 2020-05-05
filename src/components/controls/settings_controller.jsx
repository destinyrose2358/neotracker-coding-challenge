import React, { useState } from "react";

const SettingsController = (props) => {
    const { settings, dispatch } = props;

    const [page, setPage] = useState(settings.page);
    const [pageLength, setPageLength] = useState(settings.pageLength);

    const handlePage = (e) => {
        const value = e.target.value;
        /^[0-9]*$/.test(value) && setPage(value);
        /^[0-9][0-9]*$/.test(value) && dispatch(update("page", parseInt(value)));
    };

    const handlePageLength = e => {
        const value = e.target.value;
        /^[0-9]*$/.test(value) && setPageLength(value);
        value > 4 && dispatch(update("pageLength", parseInt(value)));
    };

    const update = (setting, value) => {
        return {
            type: "UPDATE_SETTINGS",
            settings: {
                [setting]: value
            }
        }
    };

    return (
        <div
            className="settings-controller"
        >
            <label
                forhtml="page-setting"
            >
                Page:
            </label>
            <input
                type="text"
                value={page}
                min="0"
                onChange={handlePage}
            />
            <label
                forhtml="page-length-setting"
            >
                Page Length:
            </label>
            <input
                id="page-length-setting"
                type="text"
                min="5"
                max={"100"}
                value={pageLength}
                onChange={handlePageLength}
            />
        </div>
    );
}

export default SettingsController;