import { createListenerMiddleware } from "@reduxjs/toolkit";

import { disableColorPicker, setPickedColor } from "./colorPicker-slice";

export const colorPickerListenerMiddleware = createListenerMiddleware();

colorPickerListenerMiddleware.startListening({
  actionCreator: setPickedColor,
  effect: async (_, listenerApi) => {
    listenerApi.dispatch(disableColorPicker());
  },
});
