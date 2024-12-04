import { useEffect, useRef } from "react";

import { useAppSelector } from "../../app/hooks";
import { selectPhoto } from "../../features/photo";
import { addImageToCanvas } from "../../utils/add-image-to-canvas";
import styles from "./Canvas.module.scss";

export const Canvas = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const photo = useAppSelector(selectPhoto);

  useEffect(() => {
    if (!ref.current || !photo?.src) {
      return;
    }

    const { src, width, height } = photo;

    addImageToCanvas({
      canvas: ref.current,
      url: src,
      width,
      height,
    });
  }, [photo]);

  return (
    <div className={styles.container}>
      <canvas ref={ref} width={800} height={600} />
    </div>
  );
};
