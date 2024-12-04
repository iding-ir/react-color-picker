import { useEffect } from "react";

import { PhotoType } from "../features/photo/photo";
import { addImageToCanvas } from "../utils/add-image-to-canvas";

export const usePhoto = ({
  canvas,
  photo,
}: {
  canvas: HTMLCanvasElement | null;
  photo: PhotoType | null;
}) => {
  useEffect(() => {
    if (!canvas || !photo?.src) {
      return;
    }

    const { src, width, height } = photo;

    addImageToCanvas({
      canvas,
      url: src,
      width,
      height,
    });
  }, [photo, canvas]);
};
