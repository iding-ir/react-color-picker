import { useColorCandy } from "../../../packages/color-candy/context/hook";
import { useAppSelector } from "../../app/hooks";
import { selectPhoto } from "../../features/photo";
import { Button } from "../Button";

export const ColorPicker = () => {
  const disabled = !useAppSelector(selectPhoto);
  const { setIsActive } = useColorCandy();

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <Button disabled={disabled} onClick={handleClick} label="Pick color" />
  );
};
