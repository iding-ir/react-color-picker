import clsx from "clsx";
import { useEffect, useRef } from "react";

import { ColorCandy } from "../../../packages/color-candy/components/ColorCandy";
import { useColorCandy } from "../../../packages/color-candy/context/hook";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { SIZE } from "../../constants/canvas";
import {
  selectBackgroundColor,
  setBackgroundColor,
} from "../../features/background";
import { selectPhoto } from "../../features/photo";
import { useCanvasBackground } from "../../hooks/use-canvas-background";
import { usePhoto } from "../../hooks/use-photo";
import { arrayToHex } from "../../utils/array-to-hex";
import styles from "./Canvas.module.scss";

export const Canvas = () => {
  const dispatch = useAppDispatch();
  const backgroundRef = useRef<HTMLCanvasElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const photo = useAppSelector(selectPhoto);
  const pickedColor = useAppSelector(selectBackgroundColor);
  const { isActive, setCanvas } = useColorCandy();
  usePhoto({ canvas: canvasRef.current, photo });
  useCanvasBackground({ canvas: backgroundRef.current, color: pickedColor });

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    setCanvas(canvasRef.current);
  }, [canvasRef, setCanvas]);

  const handleSelect = (color: Uint8ClampedArray) => {
    dispatch(setBackgroundColor(arrayToHex(color)));
  };

  const classNames = clsx(styles.container, {
    [styles.isActive]: isActive,
  });

  const canvasProps = {
    ...SIZE,
    className: styles.canvas,
  };

  return (
    <div className={classNames} style={SIZE}>
      <ColorCandy onSelect={handleSelect}>
        <canvas ref={backgroundRef} {...canvasProps} />
        <canvas ref={canvasRef} {...canvasProps} />
      </ColorCandy>
    </div>
  );
};
