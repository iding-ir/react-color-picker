import { createAppSlice } from "../createAppSlice";

export interface ColorPickerState {
  active: boolean;
}

const initialState: ColorPickerState = {
  active: false,
};

export const colorPickerSlice = createAppSlice({
  name: "colorPicker",
  initialState,
  reducers: (create) => ({
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

export const { enableColorPicker, disableColorPicker } =
  colorPickerSlice.actions;

export const { selectColorPickerState } = colorPickerSlice.selectors;
