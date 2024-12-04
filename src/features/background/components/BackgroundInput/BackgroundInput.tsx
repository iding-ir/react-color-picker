import { useDispatch } from "react-redux";

import { useAppSelector } from "../../../../app/hooks";
import { ColorSwatch } from "../../../../components/ColorSwatch";
import { Input } from "../../../../components/Input";
import {
  selectBackgroundColor,
  setBackgroundColor,
} from "../../background-slice";
import styles from "./BackgroundInput.module.scss";

export const BackgroundInput = () => {
  const dispatch = useDispatch();
  const backgroundColor = useAppSelector(selectBackgroundColor);

  const onChange = (color: string) => {
    dispatch(setBackgroundColor(color));
  };

  return (
    <div className={styles.container}>
      <Input value={backgroundColor} onChange={onChange} />

      <ColorSwatch onChange={onChange} color={backgroundColor} />
    </div>
  );
};
