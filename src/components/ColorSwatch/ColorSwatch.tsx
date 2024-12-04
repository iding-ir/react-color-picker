import { useState } from "react";
import { HexColorPicker } from "react-colorful";

import styles from "./ColorSwatch.module.scss";

export const ColorSwatch = ({
  color,
  onChange,
}: {
  color: string;
  onChange: (color: string) => void;
}) => {
  const [currentColor, setCurrentColor] = useState(color);

  return (
    <div className={styles.container}>
      <HexColorPicker
        color={color}
        onChange={setCurrentColor}
        onPointerUp={() => onChange(currentColor)}
      />
    </div>
  );
};
