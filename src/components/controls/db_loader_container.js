import { connect } from "react-redux";
import { fetchShipments } from "../../actions/db_actions";
import DBLoader from "./db_loader";

const msp = ({settings: { page, pageLength }}) => {
    return {
        page,
        pageLength
    }
}

const mdp = (dispatch, {page, pageLength}) => {
    return {
        fetchShipments: () => dispatch(fetchShipments(page, pageLength))
    }
}

const DBLoaderContainer = connect(msp, mdp)(DBLoader);

export default DBLoaderContainer;