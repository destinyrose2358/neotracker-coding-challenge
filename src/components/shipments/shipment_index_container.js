import { connect } from "react-redux"
import ShipmentIndex from "./shipment_index";
import { updateSettingsCreator } from "../../actions/settings_actions";

const msp = ({ shipments, settings: { order, direction, page } }) => {
  return {
    shipments: Object.values(shipments),
    order,
    direction
  }
};

const mdp = (dispatch) => {
  return {
    updateOrder: (newOrder, direction) => dispatch(updateSettingsCreator({ order: newOrder, direction, page: 1}))
  }
};

const ShipmentIndexContainer = connect(msp, mdp)(ShipmentIndex);

export default ShipmentIndexContainer;