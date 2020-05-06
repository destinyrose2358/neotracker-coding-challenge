import React, { useState } from "react";
import ShipmentShowBlockItem from "./shipment_show_block_item";

const ShipmentShow = (props) => {
  const { shipment, fetchShipment, updateShipmentName, match: {params: { id }}, history } = props;

  const [ editing, setEditing ] = useState(false);

  const toggleEditing = () => {
    setEditing(currentValue => !currentValue);  };

  const listableAttributes = [];
  let blockableAttributes = {};
  Object.entries(shipment).forEach(([attribute, value]) => {
    if (attribute === "name") return;
    switch (typeof value) {
      case "object":
        let showBlockLis = value.map(subEntry => (
          <ShipmentShowBlockItem contents={subEntry} title={attribute} />
        ));
        blockableAttributes[attribute] = showBlockLis;
        break;
      default:
        listableAttributes.push(
          <li
            key={attribute}
          >
            <p>{ `${attribute}:${value}` }</p>
          </li>
        );
        break;
    }
  });

  blockableAttributes = Object.entries(blockableAttributes).map(([title, contents]) => {
    return (
      <aside
        className="shipment-block"
      >
        <h2>
          {title}
        </h2>
        {contents}
      </aside>
    )
  });

  const handleNameChange = (e) => {
    console.log(e.key);
    switch (e.key) {
      case "Enter":
        updateShipmentName(e.target.value);
        toggleEditing();
        break;
      case "Escape":
        toggleEditing();
        break;
      default:
        break;
    }
  }

  if (shipment.id !== id) fetchShipment();

  return (
    <div>
      <h1>
        {editing ?
          <input
            type="text"
            defaultValue={shipment.name}
            onKeyDown={handleNameChange}
          />
        : 
          shipment.name}
        <i
          onClick={toggleEditing}
          className="fas fa-pencil-alt"
        />
      </h1>
      <ul
        className="shipment-show-list"
      >
        {listableAttributes}
      </ul>
      {blockableAttributes}
      <button
        onClick={() => history.push("/")}
      >
        Home Page
      </button>
    </div>
  )
}

export default ShipmentShow;