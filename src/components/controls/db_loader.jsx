import React from "react";

const DBLoader = (props) => {
    props.fetchShipments();

    return (
        <button
            className="db-refresh-button"
            onClick={(e) => {
                e.preventDefault();
                props.fetchShipments();
            }}
        >
            Refresh
        </button>
    )
};

export default DBLoader;