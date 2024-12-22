export type ColorCandyConfig = {
  isActive: boolean;
  radius: number;
  size: number;
  width: number;
  color: string;
  canvas: HTMLCanvasElement | null;
};

export type ColorCandyState = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  radius: number;
  setRadius: React.Dispatch<React.SetStateAction<number>>;
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  canvas: HTMLCanvasElement | null;
  setCanvas: React.Dispatch<React.SetStateAction<HTMLCanvasElement | null>>;
};
