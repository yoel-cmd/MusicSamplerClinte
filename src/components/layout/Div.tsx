// import { useState } from "react";

import { useContext } from "react";
import { Logic } from "../../context/logic";
import ColorsRow from "../../util/ColorsRow.ts";

// interface DivsProps {
//   name: string;
//   classname: string;
// }
// const Divs = ({ name }: DivsProps) => {
//   //   const [press, setPress] = useState(false);
//   const [isUrl, setIsUrl] = useState(null);

//   const onClick = async () => {
//     if (isUrl) {
//       setIsUrl(null);
//       return;
//     }
//     try {
//       const respons = await fetch("http://localhost:3000/load-image");
//       if (!respons.ok) {
//         throw new Error("error load to server");
//       }
//       const data = await respons.json();
//       console.log(data.url);
//       setIsUrl(data.url);
//     } catch (error) {
//       console.error("errorr:", error);
//     }
//   };
//   return (
//     <>
//       <div
//         className={isUrl ? "grid-item" : "dark"}
//         onClick={onClick}
//         style={
//           isUrl
//             ? { backgroundImage: `url(http://localhost:3000/${isUrl})` }
//             : undefined
//         }
//       >
//         {!isUrl && <span>enter to load image</span>}
//       </div>
//     </>
//   );
// };

// export default Divs;
interface Props {
  activ: boolean;
  row: number;
  col: number;
}

export const Div = ({ activ, row, col }: Props) => {
  const context = useContext(Logic);
  if (!context) {
    throw new Error("error");
  }
  const { onToggle, url, musical,currentColumn,urlSupa } = context;
  const color = ColorsRow(row);

  const onClick = () => {
    onToggle(col, row);
    console.log("urlSupa[row]",urlSupa[row]);
    
    new Audio(urlSupa[row]).play();
    
  };

  return (
    <div
      className={`grid-music-div ${col===currentColumn ? "currentColumn" : ""}`}
      style={{ background: activ ? color : undefined }}
      onClick={onClick}
    ></div>
  );
};
