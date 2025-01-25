import { useMemo } from "react";

import { useColorCandy } from "../../context/hook";
import { getBlackAndWhiteColor } from "../../methods/get-black-and-color";
import styles from "./Text.module.scss";

export const Text = () => {
  const { color } = useColorCandy();

  const bwColor = useMemo(() => getBlackAndWhiteColor(color), [color]);

  return (
    <div
      className={styles.container}
      style={{ color: bwColor, backgroundColor: color, borderColor: bwColor }}
    >
      {color}
    </div>
  );
};
