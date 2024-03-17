'use strict'

let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let player= 1
let winner

function handleCellClick(index){
    let cell = board[index]

    if (cell === 0 && !winner) {
        board[index] = player
        player = player == 1 ? 2 : 1
        console.log(board)
        render()
    } 
 }

function render() {
    const board_obj = document.getElementById('board')
    board_obj.innerHTML = ''
    let cell, cell_obj
    for (let i = 0;i < board.length;i++) {
        cell = board[i]

        cell_obj = document.createElement('div')
        cell_obj.classList.add('cell')
        let calback_func = () => handleCellClick(i)
        cell_obj.onclick = calback_func
        if (cell === 1){
            cell_obj.innerText =  'X'
        } else if (cell === 2) {
            cell_obj.innerText =  'O'
        }
        board_obj.appendChild(cell_obj)
    }
}

render()