import { ReactNode } from "react";

import { ColorCandyProvider } from "../../../packages/color-candy/context/provider";
import { StoreProvider } from "../../app/storeProvider";

export const Wrappers = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider>
      <ColorCandyProvider radius={7} size={9} width={10}>
        {children}
      </ColorCandyProvider>
    </StoreProvider>
  );
};
