import React from "react";
import DBLoaderContainer from "./controls/db_loader_container";
import SettingsControllerContainer from "./controls/settings_controller_container";


const App = () => {
  return (
    <>
      <DBLoaderContainer />
      <SettingsControllerContainer />
    </>
  );
}

export default App;
