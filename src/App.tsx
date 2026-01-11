import "./App.css";
import { Home } from "./components/layout/Home";

import { LogicProvide } from "./context/logic";

function App() {
  return (
    <>
      <LogicProvide>
        {/* <Home countOfDivs={70}/> */}
        <Home/>
      </LogicProvide>
    </>
  );
}

export default App;
