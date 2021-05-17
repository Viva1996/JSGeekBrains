function chessboard() {
    function addRow(board, rowNum, figures) {
        var row = board.insertRow(-1);
        row.insertCell(-1).innerText = rowNum;
        for (var fig of figures) {
            row.insertCell(-1).innerText = fig;
        }
        row.insertCell(-1).innerText = rowNum;
    }
    var board = document.createElement('table');
    addRow(board, '', ['A','B','C','D','E','F','G','H']);
    addRow(board, '1', ['♖','♘','♗','♕','♔','♗','♘','♖']);
    addRow(board, '2', ['♙','♙','♙','♙','♙','♙','♙','♙']);
    for (var i=3; i<=6; i++) {
        addRow(board, i, '        ');
    }
    addRow(board, '7', ['♟','♟','♟','♟','♟','♟','♟','♟']);
    addRow(board, '8', ['♜','♞','♝','♚','♛','♝','♞','♜']);
    addRow(board, '', ['A','B','C','D','E','F','G','H']);
    for (var i=1; i<=8; i++) {
        for (var j=1; j<=8; j++) {
            if (i % 2 + j % 2 === 1) {
                board.rows[i].cells[j].style.backgroundColor = 'grey';
            }
        }
    }
    document.body.appendChild(board);
};

chessboard();