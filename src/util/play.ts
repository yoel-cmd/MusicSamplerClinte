
interface PlayProps {
    currentColumn: number;
    setCurrentColumn: React.Dispatch<React.SetStateAction<number>>;
    toggleRunning: () => void;
    gridMatrix: boolean[][];
    urlSupa: string[];
    musical: string;
    volumeRef: React.RefObject<number>;
    speedRef: React.RefObject<number>;
}

const play = async ({ currentColumn, setCurrentColumn, toggleRunning, gridMatrix, urlSupa, musical, volumeRef, speedRef }: PlayProps) => {
  if (currentColumn < 0) return;
//   toggleRunning();
console.log("currentColumn",currentColumn);
  for (let row = 0; row < gridMatrix[currentColumn].length; row++) {
    
    if (gridMatrix[currentColumn][row]) {
      const currentAudio = new Audio(urlSupa[row]);
      currentAudio.volume = volumeRef.current;
      currentAudio.play();
    }
}
await new Promise((res) => setTimeout(res, speedRef.current));
  if (currentColumn === gridMatrix.length - 1) {
    setCurrentColumn(0);
  } else {
    setCurrentColumn((prev) => prev + 1);
  }
  
}
export default play;
