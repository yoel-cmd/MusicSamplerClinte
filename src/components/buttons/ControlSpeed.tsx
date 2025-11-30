import { useContext } from "react";
import { Logic } from "../../context/logic";

export const ControlSpeed = () => {

    const context = useContext(Logic);
      if (!context) {
        throw new Error("error");
      }
      const { speedRef,setSpeed } = context;

      const onChangeSpeed = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const newSpeed = Number(e.target.value);
        setSpeed(newSpeed);
        speedRef.current = newSpeed;
      }

  return (
    <input className="btnSpeed" type="range" min="100" max="2000" value={speedRef.current} onChange={onChangeSpeed} />
  )
}

