import clsx from "clsx";
import { useEffect, useRef } from "react";

import { useAppSelector } from "../../app/hooks";
import { CANVAS_WIDTH } from "../../constants/canvas";
import {
  selectColorPickerState,
  selectPickedColor,
} from "../../features/colorPicker";
import { selectPhoto } from "../../features/photo";
import { useCanvasBackground } from "../../hooks/use-canvas-background";
import { useColorPicker } from "../../hooks/use-color-picker";
import { addImageToCanvas } from "../../utils/add-image-to-canvas";
import styles from "./Canvas.module.scss";

export const Canvas = () => {
  const backgroundRef = useRef<HTMLCanvasElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const photo = useAppSelector(selectPhoto);
  const isColorPickerActive = useAppSelector(selectColorPickerState);
  const pickedColor = useAppSelector(selectPickedColor);
  useColorPicker({ canvas: canvasRef.current, isActive: isColorPickerActive });
  useCanvasBackground({ canvas: backgroundRef.current, color: pickedColor });

  useEffect(() => {
    if (!canvasRef.current || !photo?.src) {
      return;
    }

    const { src, width, height } = photo;

    addImageToCanvas({
      canvas: canvasRef.current,
      url: src,
      width,
      height,
    });
  }, [photo]);

  const classNames = clsx(styles.container, {
    [styles.isActive]: isColorPickerActive,
  });

  return (
    <div className={classNames}>
      <canvas ref={backgroundRef} width={CANVAS_WIDTH} height={CANVAS_WIDTH} />

      <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_WIDTH} />
    </div>
  );
};
