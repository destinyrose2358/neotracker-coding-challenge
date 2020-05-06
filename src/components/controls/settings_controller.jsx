import React, { useState } from "react";

const SettingsController = (props) => {
    const { settings, updateSettings } = props;

    const [page, setPage] = useState(settings.page);
    const [pageLength, setPageLength] = useState(settings.pageLength);
    const [criteria, setCriteria] = useState(settings.criteria);
    const [oldSettings, setOldSettings] = useState(settings);
    
    const reset = () => {
        setPage(settings.page);
        setPageLength(settings.pageLength);
        setCriteria(settings.criteria);
    };

    if (JSON.stringify(oldSettings) !== JSON.stringify(settings)) {
        reset();
        setOldSettings(settings);
    }

    const handlePage = (e) => {
        const value = e.target.value;
        /^[0-9]*$/.test(value) && setPage(value);
        /^[0-9][0-9]*$/.test(value) && updateSettings({"page": parseInt(value)});
    };

    const handlePageLength = e => {
        const value = e.target.value;
        /^[0-9]*$/.test(value) && setPageLength(value);
        value > 4 && updateSettings({pageLength: parseInt(value)});
    };

    const handleCriteria = e => {
        const value = e.target.value;
        setCriteria(value);
        updateSettings({ criteria: value });
    }

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
            <label
                forhtml="criteria-setting"
            >
                Criteria:
            </label>
            <textarea
                id="criteria-setting"
                value={criteria}
                onChange={handleCriteria}
                placeholder="Ex: 'id:S100, id_like: S101, q: Fabric' (q is a general search, which can be used to filter cargo, services, etc.)"
            >   
            </textarea>
        </div>
    );
}

export default SettingsController;