import { ReactNode } from "react";

import { useColorCandy } from "../../context/hook";
import { Magnifier } from "../Magnifier";
import styles from "./ColorCandy.module.scss";

export const ColorCandy = ({
  onSelect,
  children,
}: {
  onSelect: (color: Uint8ClampedArray) => void;
  children: ReactNode;
}) => {
  const { isActive } = useColorCandy();

  return (
    <div className={styles.container}>
      {children}

      {isActive && <Magnifier onSelect={onSelect} />}
    </div>
  );
};
