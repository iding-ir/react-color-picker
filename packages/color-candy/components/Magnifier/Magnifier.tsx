import { useRef } from "react";

import { useColorCandy } from "../../context/hook";
import { useColorPicker } from "../../hooks/use-color-picker";
import { useMagnifier } from "../../hooks/use-magnifier";
import { getReadableColor } from "../../methods/get-readable-color";
import styles from "./Magnifier.module.scss";

export const Magnifier = ({
  onSelect,
}: {
  onSelect: (color: Uint8ClampedArray) => void;
}) => {
  const magnifierRef = useRef<HTMLCanvasElement>(null);
  const { color, canvas, isActive, width } = useColorCandy();
  const { top, left } = useMagnifier({ magnifier: magnifierRef.current });
  useColorPicker({ canvas, isActive, onSelect });

  const complimentaryColor = getReadableColor(color);

  return (
    <div className={styles.container} style={{ top, left }}>
      <canvas
        ref={magnifierRef}
        style={{ borderColor: color, borderWidth: width }}
        width={0}
        height={0}
      />

      <div
        className={styles.color}
        style={{
          color: complimentaryColor,
          backgroundColor: color,
          borderColor: complimentaryColor,
        }}
      >
        {color}
      </div>
    </div>
  );
};
