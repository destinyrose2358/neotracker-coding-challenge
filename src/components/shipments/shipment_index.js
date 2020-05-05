import React from "react";
import ShipmentItem from "./shipment_item";

const ShipmentIndex = ({shipments, orders}) => {
  const shipmentItems = shipments.map(shipment => (
    <ShipmentItem
      shipment={shipment}
      key={shipment.id}
    />
  ));
  const shipmentAttributes = [];
  Object.entries(shipments[0] || {}).forEach(([key, value]) => {
    if (typeof value !== "object") {
      let currentDirection;
      switch (Math.sign(orders[key])) {
        case 1:
          currentDirection = "asc";
          break;
        case -1:
          currentDirection = "desc";
          break;
        default:
          currentDirection = "none";
          break;
      }
      shipmentAttributes.push(
        <td
          key={key}
        >
          {key}
        </td>
      );
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <td>
            Shipments
          </td>
        </tr>
        <tr>
          { shipmentAttributes }
        </tr>
      </thead>
      <tbody>
        { shipmentItems }
      </tbody>
    </table>
  )
}

export default ShipmentIndex;