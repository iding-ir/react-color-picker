import { useDispatch } from "react-redux";

import { enableColorPicker } from "../..";
import { useAppSelector } from "../../../../app/hooks";
import { Button } from "../../../../components/Button";
import { selectPhoto } from "../../../photo";
import styles from "./ColorPicker.module.scss";

export const ColorPicker = () => {
  const dispatch = useDispatch();
  const disabled = !useAppSelector(selectPhoto);

  const handleClick = () => {
    dispatch(enableColorPicker());
  };

  return (
    <div className={styles.container}>
      <Button disabled={disabled} onClick={handleClick} label="Pick color" />
    </div>
  );
};
