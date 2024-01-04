function generateChessboard(size) {
  let board = "";

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if ((row + col) % 2 === 0) {
        board += " ";
      } else {
        board += "#";
      }
      if (col === size - 1) {
        board += "\n"; // Move to the next line after completing a row
      }
    }
  }

  return board;
}

const size = 8;
console.log(generateChessboard(size));

