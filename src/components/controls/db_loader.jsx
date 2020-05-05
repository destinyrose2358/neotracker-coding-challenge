import React from "react";

const DBLoader = (props) => {
    const { fetchShipments } = props;
    fetchShipments();

    return (
        <button
            className="db-refresh-button"
            onClick={(e) => {
                e.preventDefault();
                fetchShipments();
            }}
        >
            Refresh
        </button>
    )
};

export default DBLoader;