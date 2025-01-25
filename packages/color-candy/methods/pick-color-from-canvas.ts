import { arrayToHex } from "../../../src/utils/array-to-hex";

export const pickColorFromCanvas = ({
  canvas,
  x,
  y,
}: {
  canvas: HTMLCanvasElement;
  x: number;
  y: number;
}) => {
  const context = canvas.getContext("2d");

  if (!context) {
    return;
  }

  return arrayToHex(context.getImageData(x, y, 1, 1).data);
};
