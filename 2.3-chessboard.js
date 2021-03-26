const size = 20;
let chessboard = "";

for (let i=0; i<size; i++){
    let msg = "";
    for (let j=0; j<size; j++){
       if ((j+i) % 2 == 0){
           msg += " ";
       } else {
           msg += "#";
       }
    }
    chessboard += msg;
    chessboard += '\n';
}
console.log(chessboard);


function book_solution(){
    // same as mine
    let size = 8;

    let board = "";
    
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
          board += " ";
        } else {
          board += "#";
        }
      }
      board += "\n";
    }
    
    console.log(board);
}
