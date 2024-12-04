import { RESIZE_FACTOR } from "../constants/canvas";

export const fitImageInsideCanvas = ({
  canvasWidth,
  canvasHeight,
  imageWidth,
  imageHeight,
}: {
  canvasWidth: number;
  canvasHeight: number;
  imageWidth: number;
  imageHeight: number;
}) => {
  const canvasRatio = canvasWidth / canvasHeight;
  const imageRatio = imageWidth / imageHeight;

  const scale =
    canvasRatio > imageRatio
      ? canvasHeight / imageHeight
      : canvasWidth / imageWidth;

  return {
    width: imageWidth * scale * RESIZE_FACTOR,
    height: imageHeight * scale * RESIZE_FACTOR,
  };
};
