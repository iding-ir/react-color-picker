import { ReactNode } from "react";

import { ColorCandyProvider } from "../../../packages/color-candy/context/provider";
import { StoreProvider } from "../../app/storeProvider";

export const Wrappers = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider>
      <ColorCandyProvider radius={10} size={7} width={15}>
        {children}
      </ColorCandyProvider>
    </StoreProvider>
  );
};
