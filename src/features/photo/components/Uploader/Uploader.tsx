import { ReactNode, useCallback } from "react";
import Dropzone from "react-dropzone";

import { useAppDispatch } from "../../../../app/hooks";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../../../../constants/canvas";
import { fitImageInsideCanvas } from "../../../../utils/fit-image-inside-canvas";
import { ALLOWED_PHOTO_TYPES } from "../../photo";
import { addPhoto } from "../../photo-slice";

export const Uploader = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result as string;

        img.onload = () => {
          const { width, height } = fitImageInsideCanvas({
            imageWidth: img.width,
            imageHeight: img.height,
            canvasWidth: CANVAS_WIDTH,
            canvasHeight: CANVAS_HEIGHT,
          });

          dispatch(addPhoto({ src: reader.result as string, width, height }));
        };
      };
      reader.readAsDataURL(file);
    });
  }, []);

  return (
    <Dropzone onDrop={onDrop} accept={ALLOWED_PHOTO_TYPES}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />

          {children}
        </div>
      )}
    </Dropzone>
  );
};
