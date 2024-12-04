import { BackgroundInput } from "../../features/background/components/BackgroundInput";
import { ColorPicker } from "../../features/colorPicker/components/ColorPicker";
import { Uploader } from "../../features/photo/components/Uploader";
import styles from "./Controls.module.scss";

export const Controls = () => {
  return (
    <aside className={styles.container}>
      <Uploader />

      <ColorPicker />

      <BackgroundInput />
    </aside>
  );
};
