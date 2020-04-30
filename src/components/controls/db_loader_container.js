import { connect } from "react-redux";
import { fetchShipments } from "../../actions/db_actions";
import DBLoader from "./db_loader";

const mdp = dispatch => {
    return {
        fetchShipments: (page = 0, pageLength = 20) => dispatch(fetchShipments(page, pageLength))
    }
}

const DBLoaderContainer = connect(undefined, mdp)(DBLoader);

export default DBLoaderContainer;