import { createContext } from "react";

import { ColorCandyState } from "../types";

export const ColorCandyContext = createContext<ColorCandyState | undefined>(
  undefined,
);
