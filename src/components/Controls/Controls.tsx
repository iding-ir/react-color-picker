import { BackgroundInput } from "../../features/background/components/BackgroundInput";
import { ColorPicker } from "../../features/colorPicker/components/ColorPicker";
import { Uploader } from "../../features/photo/components/Uploader";
import { Button } from "../Button";
import styles from "./Controls.module.scss";

export const Controls = () => {
  return (
    <aside className={styles.container}>
      <Uploader>
        <Button label="Upload" />
      </Uploader>

      <ColorPicker />

      <BackgroundInput />
    </aside>
  );
};
