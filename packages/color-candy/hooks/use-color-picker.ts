import { useEffect, useRef } from "react";

import { useColorCandy } from "../context/hook";
import { pickColorFromCanvas } from "../methods/pick-color-from-canvas";
import { renderMagnifierCanvas } from "../methods/render-magnifier-canvas";

export const useColorPicker = ({
  onSelect,
}: {
  onSelect: (color: string) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { radius, size, canvas, isActive, setColor, setIsActive } =
    useColorCandy();

  useEffect(() => {
    if (!canvas || !isActive) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      const { offsetX, offsetY } = event;
      const color = pickColorFromCanvas({ canvas, x: offsetX, y: offsetY });

      if (color) {
        onSelect(color);
      }

      setIsActive(false);
    };

    const onPointerMove = (event: PointerEvent) => {
      // Replace getBoundingClientRect with offsetX and offsetY for better performance
      const x = event.offsetX;
      const y = event.offsetY;

      // Used transition instead of react state to move the magnifier to avoid re-rendering
      // Used translate3d instead of translate for better performance
      const transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
      const display = x && y ? "block" : "none";

      containerRef.current?.style.setProperty("transform", transform);
      containerRef.current?.style.setProperty("display", display);

      const color = pickColorFromCanvas({ canvas, x, y });

      if (color) {
        setColor(color);
      }

      renderMagnifierCanvas({
        canvas,
        magnifier: canvasRef.current,
        x,
        y,
        radius,
        size,
      });
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);

    return () => {
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
    };
  }, [canvas, isActive, onSelect, radius, setColor, setIsActive, size]);

  return { containerRef, canvasRef };
};
