import { connect } from "react-redux";
import { fetchShipments } from "../../actions/db_actions";
import DBLoader from "./db_loader";

const msp = ({settings}) => {
    return settings
}

const mdp = (dispatch) => {
    return {
        fetchShipments: (page, pageLength) => dispatch(fetchShipments(page, pageLength))
    }
}

const DBLoaderContainer = connect(msp, mdp)(DBLoader);

export default DBLoaderContainer;