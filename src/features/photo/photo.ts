export type PhotoType = {
  src: string;
  width: number;
  height: number;
};

export const ALLOWED_PHOTO_TYPES = {
  "image/png": [".png"],
  "image/jpeg": [".jpeg", ".jpg"],
};
