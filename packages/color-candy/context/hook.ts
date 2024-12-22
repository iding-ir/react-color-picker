import { useContext } from "react";

import { ColorCandyContext } from ".";

export const useColorCandy = () => {
  const context = useContext(ColorCandyContext);

  if (!context) {
    throw new Error("useColorCandy must be used within a AppContextProvider");
  }

  return context;
};
