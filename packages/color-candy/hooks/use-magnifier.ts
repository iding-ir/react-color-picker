import { useEffect, useState } from "react";

import { useColorCandy } from "../context/hook";
import { renderMagnifierCanvas } from "../methods/render-magnifier-canvas";

export const useMagnifier = ({
  magnifier,
}: {
  magnifier: HTMLCanvasElement | null;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { radius, size, canvas } = useColorCandy();

  useEffect(() => {
    if (!canvas) {
      return;
    }

    const updatePosition = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      setPosition({ x, y });
      renderMagnifierCanvas({ canvas, magnifier, x, y, radius, size });
    };

    canvas.addEventListener("pointermove", updatePosition);

    return () => {
      canvas.removeEventListener("pointermove", updatePosition);
    };
  }, [canvas, radius, size, magnifier]);

  return { top: position.y, left: position.x };
};
