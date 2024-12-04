import { PayloadAction } from "@reduxjs/toolkit";

import { Color } from "../../components/types/color";
import { createAppSlice } from "../createAppSlice";
import { DEFAULT_BACKGROUND } from "./background";

export interface BackgroundState {
  color: Color;
}

const initialState: BackgroundState = {
  color: DEFAULT_BACKGROUND,
};

export const backgroundSlice = createAppSlice({
  name: "background",
  initialState,
  reducers: (create) => ({
    setBackgroundColor: create.reducer(
      (state, { payload }: PayloadAction<Color>) => {
        state.color = payload;
      },
    ),
  }),
  selectors: {
    selectBackgroundColor: ({ color }) => color,
  },
});

export const { setBackgroundColor } = backgroundSlice.actions;

export const { selectBackgroundColor } = backgroundSlice.selectors;
