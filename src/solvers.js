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
  var matrix = new Board(n);
  

  var innerRecursive = function(matrix, columnInserted) {

    


  };
  /*
    innerRecursive function (state of the matrix, columnToInsert) {
      add a new rook to the matrix at (next row, columnToInsert)    

      Base case:
      check the validity of the matrix
      check if we're at the bottom row
        if yes and yes, solutionCount++

      Recursive case:
      iterate over the columns: for (i from 0 to n) {
        call innerRecursive function with matrix, and the column where we're about to insert a rook
          (* the next rook will be at (next row, column i) )
      }

    }
  */
  // call function
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
