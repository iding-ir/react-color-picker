import { BackgroundInput } from "../../features/background/components/BackgroundInput";
import { ColorPicker } from "../ColorPicker";
import { Uploader } from "../Uploader";
import styles from "./Controls.module.scss";

export const Controls = () => {
  return (
    <nav className={styles.container}>
      <Uploader />

      <ColorPicker />

      <BackgroundInput />
    </nav>
  );
};
