import React from "react";
import { withRouter } from "react-router-dom";

const ShipmentItem = ({ shipment, history }) => {
  const attributeCols = [];
  Object.values(shipment).forEach((value) => {
    if (typeof value !== "object") {
      attributeCols.push(
        <td
          key={value}
        >
          { value }
        </td>
      )
    }
  });
  return (
    <tr
      onClick={() => history.push(`/${shipment.id}`)}
    >
      {attributeCols}
    </tr>
  )
}

export default withRouter(ShipmentItem);