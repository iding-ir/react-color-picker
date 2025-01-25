import { useColorCandy } from "../../context/hook";
import { useColorPicker } from "../../hooks/use-color-picker";
import { Text } from "../Text";
import styles from "./Magnifier.module.scss";

export const Magnifier = ({
  onSelect,
}: {
  onSelect: (color: string) => void;
}) => {
  const { color, width } = useColorCandy();
  const { containerRef, canvasRef } = useColorPicker({ onSelect });

  return (
    <div className={styles.container} ref={containerRef}>
      <canvas
        ref={canvasRef}
        style={{ borderColor: color, borderWidth: width }}
        width={0}
        height={0}
      />

      <Text />
    </div>
  );
};
