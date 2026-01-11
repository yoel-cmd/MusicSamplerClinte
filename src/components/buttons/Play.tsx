import { useContext, useEffect } from "react";
import { Logic } from "../../context/logic";
import { Button } from "./Button";
import play from "../../util/play";

export const Play = () => {
  const context = useContext(Logic);
  if (!context) {
    throw new Error("error");
  }
  const {
    gridMatrix,
    url,
    urlSupa,
    speedRef,
    musical,
    location,
    setLocation,
    isRunning,
    toggleRunning,
    buttonText,
    stop,
    volumeRef,
    currentColumn,
    setCurrentColumn,
  } = context;



  useEffect(()=>{
    if(isRunning.current==="pause") return;
    if(isRunning.current==="stop") {
      setCurrentColumn(0);
      return;
    }
    play({ currentColumn, setCurrentColumn, toggleRunning, gridMatrix, urlSupa, musical, volumeRef, speedRef } );
  },[currentColumn,isRunning.current])


  // const play = async () => {
  //   toggleRunning();
  //   let currentColumn = location[0];
  //   while(true) {
    
  //   for (let column =currentColumn ; column < gridMatrix.length; column++) {
  //     if (isRunning.current === "pause") {
  //       setLocation([column, 0]);
  //       return;
  //     }
  //     if (isRunning.current === "stop") {
  //       setLocation([0, 0]);
  //       return;
  //     }
  //     for (let row = location[1]; row < gridMatrix[column].length; row++) {
  //       if (gridMatrix[column][row]) {
  //         const currentAudio = new Audio(url[musical][row]);
  //         currentAudio.volume = volumeRef.current;
  //         currentAudio.play()
  //       }
        
  //     }
  //     await new Promise((res) => setTimeout(res, speedRef.current));
  //   }
  //   currentColumn=0;
  // };
  // };

  const presPlay=()=>{
    toggleRunning();
    if (currentColumn<0) {
      setCurrentColumn(0);
    }
  }
  return (
    <>
      <Button className="btn" text={buttonText} onClick={presPlay} />
      <Button className="btn" text="Stop" onClick={stop} />
    </>
  );
};
