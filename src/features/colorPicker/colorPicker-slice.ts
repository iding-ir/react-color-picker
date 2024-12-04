import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";

export interface ColorPickerState {
  color: Uint8ClampedArray | null;
  active: boolean;
}

const initialState: ColorPickerState = {
  color: null,
  active: false,
};

export const colorPickerSlice = createAppSlice({
  name: "colorPicker",
  initialState,
  reducers: (create) => ({
    setPickedColor: create.reducer(
      (state, { payload }: PayloadAction<Uint8ClampedArray>) => {
        state.color = payload;
      },
    ),
    enableColorPicker: create.reducer((state) => {
      state.active = true;
    }),
    disableColorPicker: create.reducer((state) => {
      state.active = false;
    }),
  }),
  selectors: {
    selectColorPickerState: ({ active }) => active,
  },
});

export const { setPickedColor, enableColorPicker, disableColorPicker } =
  colorPickerSlice.actions;

export const { selectColorPickerState } = colorPickerSlice.selectors;
