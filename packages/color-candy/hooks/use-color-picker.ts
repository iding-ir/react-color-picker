import { useEffect } from "react";

import { useColorCandy } from "../context/hook";
import { pickColorFromCanvas } from "../methods/pick-color-from-canvas";

export const useColorPicker = ({
  canvas,
  isActive,
  onSelect,
}: {
  canvas: HTMLCanvasElement | null;
  isActive: boolean;
  onSelect: (color: string) => void;
}) => {
  const { setColor, setIsActive } = useColorCandy();

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

      onSelect(color);
      setIsActive(false);
    };

    const onpointermove = (event: PointerEvent) => {
      const { offsetX, offsetY } = event;
      const color = pickColorFromCanvas({ canvas, x: offsetX, y: offsetY });

      if (!color || !setColor) {
        return;
      }

      setColor(color);
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onpointermove);

    return () => {
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onpointermove);
    };
  }, [isActive, canvas, onSelect, setColor, setIsActive]);
};
