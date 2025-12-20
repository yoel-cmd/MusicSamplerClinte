import type { SetStateAction } from "react";

export default interface Ilogic {
  gridMatrix: boolean[][];
  setGridMatrix: React.Dispatch<SetStateAction<boolean[][]>>;
  col: number;
  setCol: React.Dispatch<SetStateAction<number>>;
  url: { [key: string]: string[] };
  onToggle: (col: number, row: number) => void;
  speedRef: React.RefObject<number>;
  speed: number;
  setSpeed: React.Dispatch<SetStateAction<number>>;
  musical: string;
  setMusical: React.Dispatch<SetStateAction<string>>;
  onToggleMusical: () => void;
  location: number[];
  setLocation: React.Dispatch<SetStateAction<number[]>>;
  isRunning: React.RefObject<string>;
  toggleRunning: () => void;
  buttonText: string;
  setButtonText: React.Dispatch<SetStateAction<string>>;
  stop: () => void;
  musicalImage: string;
  setMusicalImage: React.Dispatch<SetStateAction<string>>;
  volumeImage: string ;
  onToggelVolume:()=>void;
  volumeRef: React.RefObject<number>;
  currentColumn: number;
  setCurrentColumn: React.Dispatch<SetStateAction<number>>;
  urlSupa: string[];
  err: boolean;
  saveProject:()=>void;
  loadProject:()=>void;
  
}