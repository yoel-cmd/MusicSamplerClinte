import React, {createContext,use,useEffect,useRef,useState,type SetStateAction,} from "react";
import type Ilogic from "../interface/LogikInterface";
import { CreateSttMatrix, CreatMatrix } from "../util/CreatMatrix";

export const Logic = createContext<Ilogic | undefined>(undefined);

export const LogicProvide = ({ children }: { children: React.ReactNode }) => {
  const optionMusical = ["piano", "violin"]; // option musical instrument
  const optionMusicalImage = ["🎹", "🎻"]; // option musical instrument
  const optionVolumeImage = ["🔈", "🔉", "🔊"]; // option musical instrument
  const optionVolume = [0.0, 0.3, 0.6]; // option musical instrument
  const [col, setCol] = useState(15); //num col of matrix
  const [musical, setMusical] = useState(optionMusical[0]); // choice musical instrument
  const [musicalImage, setMusicalImage] = useState(optionMusicalImage[0]); // choice musical instrument
  const [gridMatrix, setGridMatrix] = useState(CreatMatrix(col)); //create matrix
  const speedRef = useRef<number>(1000); // control speed musical instrument
  const [speed, setSpeed] = useState(1000); //speed musical instrument
  const [location, setLocation] = useState([0, 0]); // location play musical instrument
  const [buttonText, setButtonText] = useState("▶"); // button text
  const isRunning = useRef<string>("pause"); // control play/pause
  const volumeRef =useRef<number>(optionVolume[2]); // control volume musical instrument
  const [volumeImage,setVolumeImage]=useState<string>("🔊");
  const [currentColumn,setCurrentColumn]=useState<number>(-1);
  const [urlSupa,setUrlSupa]=useState<string[]>(['']);
  const [err,setErr]=useState<boolean>(false);
  useEffect(() => {
    setGridMatrix((prev) => {
      if (prev.length < col) {
        return [...prev, Array.from({ length: 7 }, () => false)];
      }
      if (prev.length > col) {
        return prev.slice(0, col);
      }
      return prev;
    });
  }, [col]);

  const onToggleMusical = () => {
    setMusical(
      (prev) =>
        optionMusical[(optionMusical.indexOf(prev) + 1) % optionMusical.length]
    );
    setMusicalImage(
      (prev) =>
        optionMusicalImage[
          (optionMusicalImage.indexOf(prev) + 1) % optionMusicalImage.length
        ]
    );
  };

  const onToggelVolume=() => {
    volumeRef.current=optionVolume[(optionVolume.indexOf(volumeRef.current)+1)%optionVolume.length]
    setVolumeImage(optionVolumeImage[(optionVolume.indexOf(volumeRef.current))])
  }



 
  

  const onToggle = (col: number, row: number) => {
    setGridMatrix((prev) => {
      const newMatrix = prev.map((colom) => [...colom]);
      newMatrix[col][row] = !prev[col][row];
      return newMatrix;
    });
  };

  const toggleRunning = () => {
    if (isRunning.current !== "run") {
      isRunning.current = "run";
      setButtonText("✋ ");
    } else {
      isRunning.current = "pause";
      setButtonText("▶️");
    }
    console.log("isRuning:", isRunning.current);
    console.log("currentColumn:", currentColumn);
  };

  const stop = () => {
    isRunning.current = "stop";
    setButtonText("▶️ ");
  };

//   const SUPABASE_SONG_URL = "https://xdralwawezlnciucmunw.supabase.co/storage/v1/object/public/piano/do.mp3";

// useEffect(() => {
   
//     setUrlSupa(SUPABASE_SONG_URL);

//     // 2. הפעלת לוגיקה שמשתמשת ב-URL, לדוגמה:
//     // const audio = new Audio(SUPABASE_SONG_URL);
//     // audio.play();

// }, [speed]);

useEffect(()=>{
  const getUrls=async()=>{
    try {
      const data=await fetch("http://localhost:3000/music")
      if(!data.ok){
        throw new Error ("error fetch supabase url")
      }
      const urls=await data.json()
      setUrlSupa(urls.urls)
      
    } catch (error) {
      console.error("error fetch supabase url:", error);
      setErr(true); 
    }
      
  }
  const timerId = setTimeout(() => {
        getUrls();
    }, 1000);
    return () => {
        clearTimeout(timerId);
    };
},[])


//   useEffect(() => {
// const pullUrlInSupa=async()=>{
//   try {
//     const url = await fetch("http://localhost:3000/https://xdralwawezlnciucmunw.supabase.co/storage/v1/object/public/piano/do.mp3");
//     if (!url.ok) {
//       throw new Error("error fetch supabase url");
//     }
//     const data = await url.json();
//     setUrlSupa(data);
//   } catch (error) {
//     console.error("error fetch supabase url:", error);
//     setErr(true);
//   }
// };
// pullUrlInSupa();
//   }, [speed]);

  const url = {
    piano: [
      // "./audio/do.mp3",
      // "./audio/re.mp3",
      // "./audio/mi.mp3",
      // "./audio/fa.mp3",
      // "./audio/sol.mp3",
      // "./audio/la.mp3",
      // "./audio/si.mp3",
    ],
    violin: [
      "./audio/DO-3.flac",
      "./audio/RE-3.flac",
      "./audio/MI-3.flac",
      "./audio/FA-3.flac",
      "./audio/SOL-3.flac",
      "./audio/LA-3.flac",
      "./audio/SI-3.flac",
    ],
  };

  const valueProvide = {
    gridMatrix,
    setGridMatrix,
    col,
    setCol,
    url,
    onToggle,
    speedRef,
    speed,
    setSpeed,
    musical,
    setMusical,
    onToggleMusical,
    location,
    setLocation,
    isRunning,
    toggleRunning,
    buttonText,
    setButtonText,
    stop,
    musicalImage,
    setMusicalImage,
    volumeImage,
    setVolumeImage,
    volumeRef,
    // toggelVolumeImage,
    onToggelVolume,
    currentColumn,
    setCurrentColumn,
    urlSupa,
    err,
  };

  return (
    <>
      <Logic.Provider value={valueProvide}>{children}</Logic.Provider>
    </>
  );
};
