import { ReactNode } from "react";

import { useColorCandy } from "../../context/hook";
import { useHover } from "../../hooks/use-hover";
import { Magnifier } from "../Magnifier";
import styles from "./ColorCandy.module.scss";

export const ColorCandy = ({
  onSelect,
  children,
}: {
  onSelect: (color: string) => void;
  children: ReactNode;
}) => {
  useHover();
  const { isHovered, isActive } = useColorCandy();

  return (
    <div className={styles.container}>
      {children}

      {isActive && isHovered && <Magnifier onSelect={onSelect} />}
    </div>
  );
};
