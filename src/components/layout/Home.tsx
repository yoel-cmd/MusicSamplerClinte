import { useContext, useState } from "react";
import { Logic } from "../../context/logic";
import { GridMatrix } from "./GridMatrix";
import { Button } from "../buttons/Button";
import { Logo } from "./Logo";
import { Play } from "../buttons/Play";
import { ControlSpeed } from "../buttons/ControlSpeed";
import { ComposerModal } from "./ComposerModal";

export const Home = () => {
  const [isComposerOpen, setIsComposerOpen] = useState(false);
  const context = useContext(Logic);
  if (!context) {
    throw new Error ("error")
  }
  const {setCol,onToggleMusical,musicalImage,volumeImage,onToggelVolume,loadProject,saveProject,col}=context
  return (
    <div className="home-container">
    <header className="header">
      <Button className="btn " onClick={loadProject} text={'load project'}/>
      <Logo/>
      <Button className="btn " onClick={saveProject} text={'save project'}/>
    </header>
    <div className="body"><GridMatrix/></div>
    <footer className="footer">
      <Button className="btn" onClick={() => setCol((prev) => prev + 1)} text={"Add Column"} />
      <Button className="btn" onClick={() => col>10 && setCol((prev) => prev - 1)} text={"Remove Column"}/>
      <Button className="btn " onClick={onToggleMusical} text={musicalImage}/>
      <Button className="btn " onClick={onToggelVolume} text={volumeImage}/>
      <Button className="btn" onClick={() => setIsComposerOpen(true)} text="✍️ Write Music"/>
      <Play/>
      <ControlSpeed/>
      
      <ComposerModal 
        isOpen={isComposerOpen} 
        onClose={() => setIsComposerOpen(false)} 
      />
  
      
    </footer>
    </div>
  );
};
