import React from "react";
import ShipmentIndexItem from "./shipment_index_item";

const ShipmentIndex = ({ shipments, order, direction, updateOrder }) => {

  const toggleOrder = (key) => () => {
    if (order === key) {
      updateOrder(order, direction === "asc" ? "desc" : "asc");
    } else {
      updateOrder(key, "asc");
    }
  };

  const shipmentItems = shipments.map(shipment => (
    <ShipmentIndexItem
      shipment={shipment}
      key={shipment.id}
    />
  ));
  const shipmentAttributes = [];
  const orderIcon = direction === "asc" ? 
    <i class="fas fa-arrow-down"></i>
  :
    <i class="fas fa-arrow-up"></i>
  ;

  Object.entries(shipments[0] || {}).forEach(([key, value]) => {
    if (typeof value !== "object") {
      
      shipmentAttributes.push(
        <td
          key={key}
          onClick={toggleOrder(key)}
        >
          {key}
          { (order === key) ? orderIcon : null }
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