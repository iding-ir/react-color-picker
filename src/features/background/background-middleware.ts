import { createListenerMiddleware } from "@reduxjs/toolkit";

import { disableColorPicker } from "../colorPicker";
import { setBackgroundColor } from "./background-slice";

export const backgroundListenerMiddleware = createListenerMiddleware();

backgroundListenerMiddleware.startListening({
  actionCreator: setBackgroundColor,
  effect: async (_, listenerApi) => {
    listenerApi.dispatch(disableColorPicker());
  },
});
