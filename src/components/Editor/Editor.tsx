import { Canvas } from "../Canvas";
import { Controls } from "../Controls";
import styles from "./Editor.module.scss";

export const Editor = () => {
  return (
    <section className={styles.container}>
      <aside>
        <Controls />
      </aside>

      <main>
        <Canvas />
      </main>
    </section>
  );
};
