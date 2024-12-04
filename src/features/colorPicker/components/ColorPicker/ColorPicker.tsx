import { useDispatch } from "react-redux";

import { enableColorPicker } from "../..";
import { useAppSelector } from "../../../../app/hooks";
import { Button } from "../../../../components/Button";
import { selectPhoto } from "../../../photo";

export const ColorPicker = () => {
  const dispatch = useDispatch();
  const disabled = !useAppSelector(selectPhoto);

  const handleClick = () => {
    dispatch(enableColorPicker());
  };

  return (
    <Button disabled={disabled} onClick={handleClick} label="Pick color" />
  );
};
