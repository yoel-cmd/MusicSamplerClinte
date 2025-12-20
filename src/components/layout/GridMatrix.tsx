import { useContext } from "react";
import { Logic } from "../../context/logic";
import { Div } from "./Div";

export const GridMatrix = () => {
  const context = useContext(Logic);
  if (!context) {
    throw new Error("error");
  }
  const { gridMatrix, col, urlSupa } = context;

  return (
    <>
      {urlSupa.length > 1 ? (
        <div
          className="grid-music"
          style={{ gridTemplateColumns: `repeat(${col}, 1fr)` }}
        >
          {gridMatrix.map((rowArry, indexRow) =>
            rowArry.map((cell, colIndex) => {
              return (
                <Div
                  key={`${indexRow}-${colIndex}`}
                  activ={cell}
                  col={indexRow}
                  row={colIndex}
                />
              );
            })
          )}
        </div>
      ) : (
        <p className="loading">loading.....</p>
      )}
    </>
  );
};
