import React from "react";

const DBLoader = (props) => {
    const { fetchShipments, page, pageLength, order, direction, criteria } = props;
    fetchShipments(page, pageLength, order, direction, criteria);

    return (
        <button
            className="db-refresh-button"
            onClick={(e) => {
                e.preventDefault();
                fetchShipments(page, pageLength, order, direction, criteria);
            }}
        >
            Refresh
        </button>
    )
};

export default DBLoader;