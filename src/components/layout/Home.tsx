// import { useContext } from "react";
// import Divs from "./Divs";
// import { Logic } from "../context/logic";

// interface HomeProps {
//   countOfDivs: number;
// }

// export const Home = ({ countOfDivs }: HomeProps) => {
//   const arr = [];
//   const count = countOfDivs;
//   const arrName = ["do", "re", "mi", "fa", "so", "la", "ti"];
//   for (let i = 1; i <= count; i++) {
//     arr.push(<Divs key={i} name={`${i}`} classname={"grid-item"} />);
//   }

//   return (
//     <>
//       <div className="arr">{arr}</div>
//     </>
//   );
// };

import { useContext } from "react";
import { Logic } from "../../context/logic";
import { GridMatrix } from "./GridMatrix";
import { Button } from "../buttons/Button";
import { Logo } from "./Logo";
import { Play } from "../buttons/Play";
import { ControlSpeed } from "../buttons/ControlSpeed";
// import { ControlVolume } from "../buttons/ControlVolume";

export const Home = () => {
  const context = useContext(Logic);
  if (!context) {
    throw new Error ("error")
  }
  const {setCol,onToggleMusical,musical,musicalImage,volumeImage,onToggelVolume}=context
  return (
    <>
    <header className="header"><Logo/></header>
    <div className="body"><GridMatrix/></div>
    <footer className="footer">
      <Button className="btn" onClick={() => setCol((prev) => prev + 1)} text={"Add Column"} />
      <Button className="btn" onClick={() => setCol((prev) => prev - 1)} text={"Remove Column"}/>
      <Button className="btn " onClick={onToggleMusical} text={musicalImage}/>
      <Button className="btn " onClick={onToggelVolume} text={volumeImage}/>
      <Play/>
      <ControlSpeed/>
      
    </footer>
    </>
  );
};
