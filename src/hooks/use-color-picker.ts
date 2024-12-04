import { useEffect } from "react";

import { useAppDispatch } from "../app/hooks";
import { setPickedColor } from "../features/colorPicker";
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

      dispatch(setPickedColor(color));
    };

    canvas.addEventListener("pointerdown", onPointerDown);

    return () => {
      canvas.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isActive, canvas, dispatch]);
};
