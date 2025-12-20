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
