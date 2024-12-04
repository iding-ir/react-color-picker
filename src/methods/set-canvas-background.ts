export const setCanvasBackground = ({
  canvas,
  color,
}: {
  canvas: HTMLCanvasElement;
  color: string;
}) => {
  const context = canvas.getContext("2d");

  if (!context) {
    return;
  }

  context.fillStyle = color;
  context.fillRect(0, 0, canvas.width, canvas.height);
};
