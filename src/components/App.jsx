import React from "react";
import DBLoaderContainer from "./controls/db_loader_container";
import SettingsControllerContainer from "./controls/settings_controller_container";
import ShipmentIndexContainer from "./shipments/shipment_index_container";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Route exact path="/" >
        <DBLoaderContainer />
        <SettingsControllerContainer />
        <ShipmentIndexContainer />
      </Route>
    </>
  );
}

export default App;
