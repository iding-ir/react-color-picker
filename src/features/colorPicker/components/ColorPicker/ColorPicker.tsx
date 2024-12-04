import { useDispatch } from "react-redux";

import { enableColorPicker } from "../..";
import { Button } from "../../../../components/Button";
import styles from "./ColorPicker.module.scss";

export const ColorPicker = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(enableColorPicker());
  };

  return (
    <div className={styles.container}>
      <Button onClick={handleClick} label="Pick color" />
    </div>
  );
};
