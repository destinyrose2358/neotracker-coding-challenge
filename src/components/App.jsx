import React from "react";
import DBLoaderContainer from "./controls/db_loader_container";
import SettingsControllerContainer from "./controls/settings_controller_container";
import ShipmentIndexContainer from "./shipments/shipment_index_container";


const App = () => {
  return (
    <>
      <DBLoaderContainer />
      <SettingsControllerContainer />
      <ShipmentIndexContainer />
    </>
  );
}

export default App;
