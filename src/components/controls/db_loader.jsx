import React from "react";

const DBLoader = (props) => {
    const { fetchShipments, page, pageLength } = props;
    fetchShipments(page, pageLength);

    return (
        <button
            className="db-refresh-button"
            onClick={(e) => {
                e.preventDefault();
                fetchShipments(page, pageLength);
            }}
        >
            Refresh
        </button>
    )
};

export default DBLoader;