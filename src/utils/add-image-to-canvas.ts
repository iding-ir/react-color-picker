export const addImageToCanvas = ({
  canvas,
  url,
}: {
  canvas: HTMLCanvasElement;
  url: string;
}) => {
  const ctx = canvas.getContext("2d");
  const image = new Image();
  image.src = url;

  image.onload = () => {
    if (ctx) {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
  };
};
