import React from "react";

const ShipmentShowBlockItem = (props) => {
  
  const { title, contents } = props;

  const contentLis = Object.entries(contents).map(([label, value]) => (
    <li
      key={label}
    >
      <p>{`${label}: ${value}`}</p>
    </li>
  ));
  
  return (
    <ul
      className={`${title}-shipment-block`}
    >
      {contentLis}
    </ul>
  )
}

export default ShipmentShowBlockItem;
