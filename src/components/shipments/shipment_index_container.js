import { connect } from "react-redux"
import ShipmentIndex from "./shipment_index";
import { updateSettingsCreator } from "../../actions/settings_actions";

const msp = ({ shipments, settings: { orders } }) => {
  return {
    shipments: Object.values(shipments),
    orders
  }
};

const mdp = (dispatch) => {
  return {
    updateOrders: (newOrders = {}) => dispatch(updateSettingsCreator(newOrders))
  }
};

const ShipmentIndexContainer = connect(msp, mdp)(ShipmentIndex);

export default ShipmentIndexContainer;