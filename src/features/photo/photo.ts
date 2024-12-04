export type PhotoType = {
  src: string;
};

export const ALLOWED_PHOTO_TYPES = {
  "image/png": [".png"],
  "image/jpeg": [".jpeg", ".jpg"],
};
