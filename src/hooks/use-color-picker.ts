import { useEffect } from "react";

import { useAppDispatch } from "../app/hooks";
import { setPickedColor } from "../features/colorPicker";
import { arrayToHex } from "../utils/array-to-hex";
import { pickColorFromCanvas } from "../utils/pick-color-from-canvas";

export const useColorPicker = ({
  canvas,
  isActive,
}: {
  canvas: HTMLCanvasElement | null;
  isActive: boolean;
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!canvas) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      const { offsetX, offsetY } = event;

      const color = pickColorFromCanvas({ canvas, x: offsetX, y: offsetY });

      if (!color) {
        return;
      }

      dispatch(setPickedColor(arrayToHex(color)));
    };

    canvas.addEventListener("pointerdown", onPointerDown);

    return () => {
      canvas.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isActive, canvas, dispatch]);
};
