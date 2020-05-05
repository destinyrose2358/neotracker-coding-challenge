import React from "react";

const ShipmentItem = ({ shipment }) => {
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
    <tr>
      {attributeCols}
    </tr>
  )
}

export default ShipmentItem;