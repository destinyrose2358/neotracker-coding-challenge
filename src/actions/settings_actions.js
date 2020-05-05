
export const UPDATE_SETTINGS = "UPDATE_SETTINGS";

export const updateSettingsCreator = settings => {
  return {
    type: UPDATE_SETTINGS,
    settings
  }
}
