import { Canvas } from "../Canvas";
import { Controls } from "../Controls";
import styles from "./App.module.scss";

export const App = () => {
  return (
    <main className={styles.container}>
      <Controls />

      <Canvas />
    </main>
  );
};
