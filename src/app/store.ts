import {
  Action,
  ThunkAction,
  combineSlices,
  configureStore,
} from "@reduxjs/toolkit";

import { backgroundSlice } from "../features/background";
import { colorPickerSlice } from "../features/colorPicker";
import { colorPickerListenerMiddleware } from "../features/colorPicker/colorPicker-middleware";
import { photoSlice } from "../features/photo";

const rootReducer = combineSlices(
  backgroundSlice,
  photoSlice,
  colorPickerSlice,
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).prepend(colorPickerListenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
