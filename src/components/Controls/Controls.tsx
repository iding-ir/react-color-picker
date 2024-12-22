import { BackgroundInput } from "../../features/background/components/BackgroundInput";
import { Uploader } from "../../features/photo/components/Uploader";
import { ColorPicker } from "../ColorPicker";

export const Controls = () => {
  return (
    <>
      <Uploader />

      <ColorPicker />

      <BackgroundInput />
    </>
  );
};
