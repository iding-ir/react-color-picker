import { useRef } from "react";

import styles from "./Canvas.module.scss";

export const Canvas = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  return (
    <div className={styles.container}>
      <canvas ref={ref} width={800} height={600} />
    </div>
  );
};
