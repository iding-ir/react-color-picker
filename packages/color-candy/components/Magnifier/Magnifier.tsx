import { useRef } from "react";

import { useColorCandy } from "../../context/hook";
import { useColorPicker } from "../../hooks/use-color-picker";
import { useMagnifier } from "../../hooks/use-magnifier";
import { Text } from "../Text";
import styles from "./Magnifier.module.scss";

export const Magnifier = ({
  onSelect,
}: {
  onSelect: (color: string) => void;
}) => {
  const magnifierRef = useRef<HTMLCanvasElement>(null);
  const { color, canvas, isActive, width } = useColorCandy();
  const { top, left } = useMagnifier({ magnifier: magnifierRef.current });
  useColorPicker({ canvas, isActive, onSelect });

  return (
    <div className={styles.container} style={{ top, left }}>
      <canvas
        ref={magnifierRef}
        style={{ borderColor: color, borderWidth: width }}
        width={0}
        height={0}
      />

      <Text />
    </div>
  );
};
