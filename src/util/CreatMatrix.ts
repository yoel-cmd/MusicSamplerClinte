// export default function CreatMatrix(col:number) {

//     return Array.from({length:col},()=>{
//         return Array.from({length:7},()=>false)
//     })
// }

export function CreatMatrix(col: number) {
  return Array.from({ length: col }, () => {
    return Array.from({ length: 7 }, () => false);
  });
}

const NOTE_TO_ROW_MAP: { [key: string]: number } = {
  'do': 0, 
  're': 1,
  'mi': 2,
  'fa': 3,
  'sol': 4,
  'la': 5,
  'si': 6,
};
const NUM_ROWS = 7;

export function CreateSttMatrix(notesArray: string[]){
  const numColumns = notesArray.length;
  

  return Array.from({ length: numColumns }, (_, columnIndex) => {
    const noteName = notesArray[columnIndex]; 
    const rowIndexToSetTrue = NOTE_TO_ROW_MAP[noteName];
    return Array.from({ length: NUM_ROWS }, (_, rowIndex) => {
      const isCorrectNote = rowIndex === rowIndexToSetTrue;
      if (rowIndexToSetTrue === undefined) {
        return false;
      }
      return isCorrectNote;
    });
  });
}
