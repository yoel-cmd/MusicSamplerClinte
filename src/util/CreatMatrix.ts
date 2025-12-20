export function CreatMatrix(col: number) {
  return Array.from({ length: col }, () => {
    return Array.from({ length: 7 }, () => false);
  });
}


export function ConvertGridToIndices(grid: boolean[][]): number[][] {
  return grid.map((column) => {
    const activeRows: number[] = [];
    column.forEach((isActive, rowIndex) => {
      if (isActive) {
        activeRows.push(rowIndex);
      }
    });
    return activeRows;
  });
}


export function BuildGridFromIndices(indicesArray: number[][], totalRows: number = 7) {
  return indicesArray.map((activeRows) => {
    // יוצר עמודה חדשה שכולה False
    const newCol = Array.from({ length: totalRows }, () => false);
    
    // מדליק רק את השורות שרשומות במערך
    activeRows.forEach((rowIndex) => {
      if (rowIndex < totalRows) { // בדיקת הגנה
        newCol[rowIndex] = true;
      }
    });
    return newCol;
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

export function BuildMatrixFromText(textInput: string) {
  const notesArray = textInput
    .toLowerCase() 
    .split(/[\s,]+/) 
    .filter(word => word.length > 0); 

  const numColumns = notesArray.length;
  const numRows = 7; 


  return Array.from({ length: numColumns }, (_, colIndex) => {
    const newCol = Array.from({ length: numRows }, () => false); 
    const noteName = notesArray[colIndex];
    if (noteName === '-' || noteName === 'rest') {
      return newCol;
    }
    const rowIndex = NOTE_TO_ROW_MAP[noteName];
    if (rowIndex !== undefined) {
      newCol[rowIndex] = true;
    }

    return newCol;
  });
}

