export const addImageToCanvas = ({
  canvas,
  url,
  width,
  height,
}: {
  canvas: HTMLCanvasElement;
  url: string;
  width: number;
  height: number;
}) => {
  const ctx = canvas.getContext("2d");
  const image = new Image();
  image.src = url;

  image.onload = () => {
    if (!ctx) {
      return;
    }

    ctx.drawImage(image, 0, 0, width, height);
  };
};
