import { useState } from "react";

import { ColorCandyConfig } from "../types";

export const useColorCandyState = (config: ColorCandyConfig) => {
  const [isActive, setIsActive] = useState(config.isActive);
  const [radius, setRadius] = useState(config.radius);
  const [size, setSize] = useState(config.size);
  const [width, setWidth] = useState(config.width);
  const [color, setColor] = useState(config.color);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

  return {
    isActive,
    setIsActive,
    radius,
    setRadius,
    size,
    setSize,
    width,
    setWidth,
    color,
    setColor,
    canvas,
    setCanvas,
  };
};
