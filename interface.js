document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");


    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });
})


var win1 = document.getElementById(seq[0]);
var win2 = document.getElementById(seq[1]);
var win3 = document.getElementById(seq[2]);

function handleClick(event) {


    let square = event.target;
    let position = square.id;



    // var win1 = document.getElementById(position.toString());


    // VERIFICAR COMO DEIXAR O QUADRADO PRETO OU DE OUTRA COR QUANDO ALGUÉM GANHAR

    //TENHO QUE PEGAR O WIN STATES QUE FOI O VENCEDOR E PEGAR OS IDS OU POSIÇÕES E ATRIBUIR AO GETELEMENTBYID


    if (handleMove(position)) {
        winner = (playerTime == 0) ? "O" : "X";
        win1 = document.getElementById(seq[0]);
        win2 = document.getElementById(seq[1]);
        win3 = document.getElementById(seq[2]);

        win1.classList.toggle('active');
        win2.classList.toggle('active');
        win3.classList.toggle('active');

        setTimeout(() => {

            alert("O jogo acabou - O vencedor foi " + winner);
        }, 10);
    }
    updateSquare(position);

}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}' id='${position.toString()}'></div>`
}


// function updateSquares() {

//     let squares = document.querySelectorAll(".square");


//     squares.forEach((square) => {
//         let position = square.id;
//         let symbol = board[position];

//         if (symbol != "") {
//             square.innerHTML = `<div class='${symbol}'></div>`
//         }

//     });
// }



function reset() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.innerHTML = '';
    });

    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;

    win1.classList.remove('active');
    win2.classList.remove('active');
    win3.classList.remove('active');

}