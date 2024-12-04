import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { PhotoType } from "./photo";

export interface photoState {
  current: PhotoType | null;
}

const initialState: photoState = {
  current: null,
};

export const photoSlice = createAppSlice({
  name: "photo",
  initialState,
  reducers: (create) => ({
    addPhoto: create.reducer((state, { payload }: PayloadAction<PhotoType>) => {
      state.current = payload;
    }),
    deletePhoto: create.reducer((state) => {
      state.current = null;
    }),
  }),
  selectors: {
    selectPhoto: ({ current }) => current,
  },
});

export const { addPhoto, deletePhoto } = photoSlice.actions;

export const { selectPhoto } = photoSlice.selectors;
