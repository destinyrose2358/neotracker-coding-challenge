import React from "react";
import ShipmentItem from "./shipment_item";

const ShipmentIndex = ({ shipments, order, direction, updateOrder }) => {

  const toggleOrder = (key) => () => {
    if (order === key) {
      updateOrder(order, direction === "asc" ? "desc" : "asc");
    } else {
      updateOrder(key, "asc");
    }
  };

  const shipmentItems = shipments.map(shipment => (
    <ShipmentItem
      shipment={shipment}
      key={shipment.id}
    />
  ));
  const shipmentAttributes = [];
  Object.entries(shipments[0] || {}).forEach(([key, value]) => {
    if (typeof value !== "object") {
      shipmentAttributes.push(
        <td
          key={key}
          onClick={toggleOrder(key)}
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