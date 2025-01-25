import { useEffect } from "react";

import { useColorCandy } from "../context/hook";

export const useHover = () => {
  const { canvas, setIsHovered } = useColorCandy();

  useEffect(() => {
    if (!canvas) {
      return;
    }

    const onPointErenter = () => {
      setIsHovered(true);
    };

    const onPointerLeave = () => {
      setIsHovered(false);
    };

    canvas.addEventListener("pointerenter", onPointErenter);
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      canvas.removeEventListener("pointerenter", onPointErenter);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [canvas, setIsHovered]);
};
