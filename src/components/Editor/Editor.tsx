import { Canvas } from "../Canvas";
import { Controls } from "../Controls";
import styles from "./Editor.module.scss";

export const Editor = () => {
  return (
    <main className={styles.container}>
      <Controls />

      <Canvas />
    </main>
  );
};
