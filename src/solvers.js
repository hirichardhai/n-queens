/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = []; //fixme

  for (var i = 0; i < n; i++) {
    var arr = [];
    for (var j = 0; j < n; j++) {
      arr.push(0);
    }
    arr[i] = 1;
    solution.push(arr);
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  var matrix = board.rows();
  
  // if (n === 2) {
  //   debugger;
  // }

  var innerRecursive = function(board, rowInsertedAt, columnInsertedAt) {
    //check if current row/column === 1`
    if (!(board.hasAnyRowConflicts() || board.hasAnyColConflicts() )) {

      if (rowInsertedAt === n - 1) {
        solutionCount++;
      } else {

        for (var i = 0; i < n; i++) {
          // make a new board
          let newBoard = new Board( (board.rows()) .map( row => row.slice() ) );
          let newMatrix = newBoard.rows();
          newMatrix[rowInsertedAt + 1][i] = 1;

          innerRecursive(newBoard, rowInsertedAt + 1, i);
        }
      }
    }
  };
debugger;
  innerRecursive(board, -1, 0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var matrix = board.rows();
  
  // if (n === 2) {
  //   debugger;
  // }

  var innerRecursive = function(board, rowInsertedAt, columnInsertedAt) {
    //check if current row/column === 1
    if (!(board.hasAnyQueensConflicts())) {

      if (rowInsertedAt === n - 1) {
        return board.rows();
      } else {

        for (var i = 0; i < n; i++) {
          // make a new board
          let newBoard = new Board( (board.rows()) .map( row => row.slice() ) );
          let newMatrix = newBoard.rows();
          newMatrix[rowInsertedAt + 1][i] = 1;

          var answer = innerRecursive(newBoard, rowInsertedAt + 1, i);
          
          if (answer) {
            return answer;
          }
        }
      }
    }
    return false;
  };

  if (n === 2 || n === 3) {
    var solution = (new Board({n: n})).rows();
  } else {
    var solution = innerRecursive(board, -1, 0);
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  var matrix = board.rows();


  var innerRecursive = function(board, rowInsertedAt, columnInsertedAt) {
    //check if current row/column === 1
    // if (JSON.stringify(board.rows()) === '[[0,0,1,0],[0,1,0,0],[0,0,0,1],[1,0,0,0]]') {
    //   debugger;
    // }

    // console.log(JSON.stringify(board.rows()));

    if (!(board.hasAnyMinorDiagonalConflicts() || board.hasAnyMajorDiagonalConflicts() || board.hasAnyColConflicts() || board.hasAnyRowConflicts())) {

      if (rowInsertedAt === n - 1) {
        solutionCount++;
        console.log('Solution: ' + JSON.stringify(board.rows()));
      } else {

        for (var i = 0; i < n; i++) {
          // make a new board
          let newBoard = new Board( (board.rows()) .map( row => row.slice() ) );
          let newMatrix = newBoard.rows();
          newMatrix[rowInsertedAt + 1][i] = 1;

          innerRecursive(newBoard, rowInsertedAt + 1, i);
        }
      }
    }
  };

  if (n === 2 || n === 3) {
    var solutionCount = 0;
  } else {
    innerRecursive(board, -1, 0);
  }


  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
