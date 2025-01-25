import { useEffect } from "react";

import { useColorCandy } from "../context/hook";

export const useHover = () => {
  const { canvas, setIsHovered } = useColorCandy();

  useEffect(() => {
    if (!canvas) {
      return;
    }

    const onpointerenter = () => {
      setIsHovered(true);
    };

    const onpointerleave = () => {
      setIsHovered(false);
    };

    canvas.addEventListener("pointerenter", onpointerenter);
    canvas.addEventListener("pointerleave", onpointerleave);

    return () => {
      canvas.removeEventListener("pointerenter", onpointerenter);
      canvas.removeEventListener("pointerleave", onpointerleave);
    };
  }, [canvas, setIsHovered]);
};
