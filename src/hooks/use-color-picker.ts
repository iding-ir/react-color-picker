import { useEffect } from "react";

import { useAppDispatch } from "../app/hooks";
import { setBackgroundColor } from "../features/background";
import { pickColorFromCanvas } from "../methods/pick-color-from-canvas";
import { arrayToHex } from "../utils/array-to-hex";

export const useColorPicker = ({
  canvas,
  isActive,
}: {
  canvas: HTMLCanvasElement | null;
  isActive: boolean;
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!canvas || !isActive) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      const { offsetX, offsetY } = event;

      const color = pickColorFromCanvas({ canvas, x: offsetX, y: offsetY });

      if (!color) {
        return;
      }

      dispatch(setBackgroundColor(arrayToHex(color)));
    };

    canvas.addEventListener("pointerdown", onPointerDown);

    return () => {
      canvas.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isActive, canvas, dispatch]);
};
