import clsx from "clsx";
import { useEffect, useRef } from "react";

import { useAppSelector } from "../../app/hooks";
import { selectColorPickerState } from "../../features/colorPicker";
import { selectPhoto } from "../../features/photo";
import { useColorPicker } from "../../hooks/use-color-picker";
import { addImageToCanvas } from "../../utils/add-image-to-canvas";
import styles from "./Canvas.module.scss";

export const Canvas = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const photo = useAppSelector(selectPhoto);
  const isActive = useAppSelector(selectColorPickerState);
  useColorPicker({ canvas: ref.current, isActive });

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

  const classNames = clsx(styles.container, {
    [styles.isActive]: isActive,
  });

  return (
    <div className={classNames}>
      <canvas ref={ref} width={800} height={600} />
    </div>
  );
};
