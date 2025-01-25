import { useEffect } from "react";

import { setCanvasBackground } from "../methods/set-canvas-background";

export const useCanvasBackground = ({
  canvas,
  color,
}: {
  canvas: HTMLCanvasElement | null;
  color: string | null;
}) => {
  useEffect(() => {
    if (!canvas || !color) {
      return;
    }

    setCanvasBackground({ canvas, color });
  }, [canvas, color]);
};
