import { connect } from "react-redux";
import { updateShipmentName, fetchShipment } from "../../actions/db_actions";
import ShipmentShow from "./shipment_show";
import { withRouter } from "react-router-dom";

const msp = ({visibleShipment}) => {
  return {
    shipment: visibleShipment
  };
}

const mdp = (dispatch, {match: {params: { id }}}) => {
  return {
    updateShipmentName: (newName) => dispatch(updateShipmentName(newName, id)),
    fetchShipment: () => dispatch(fetchShipment(id))
  }
}

const ShipmentShowContainer = withRouter(connect(msp, mdp)(ShipmentShow));

export default ShipmentShowContainer;