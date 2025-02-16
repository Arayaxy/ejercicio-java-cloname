const cells = document.querySelectorAll('[data-cell]');
const status = document.getElementById('status');
const resetBtn = document.getElementById('resetBtn');
let isXTurn = true;
let gameActive = true;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6] // Diagonales
];

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick, { once: true });
});

resetBtn.addEventListener('click', resetGame);

function handleCellClick(e) {
    const cell = e.target;
    const currentPlayer = isXTurn ? 'X' : 'O';
    
    cell.textContent = currentPlayer;
    cell.disabled = true;
    
    if (checkWin(currentPlayer)) {
        endGame(false);
        highlightWinningCombination(currentPlayer);
    } else if (isDraw()) {
        endGame(true);
    } else {
        isXTurn = !isXTurn;
        updateStatus();
    }
}

function checkWin(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === player;
        });
    });
}

function highlightWinningCombination(player) {
    winningCombinations.forEach(combination => {
        if (combination.every(index => cells[index].textContent === player)) {
            combination.forEach(index => cells[index].classList.add('winning-cell'));
        }
    });
}

function isDraw() {
    return [...cells].every(cell => cell.textContent !== '');
}

function endGame(draw) {
    gameActive = false;
    if (draw) {
        status.textContent = "¡Empate!";
    } else {
        status.textContent = `¡Jugador ${isXTurn ? 'X' : 'O'} gana!`;
    }
    cells.forEach(cell => cell.disabled = true);
}

function updateStatus() {
    status.textContent = `Turno del jugador ${isXTurn ? 'X' : 'O'}`;
}

function resetGame() {
    isXTurn = true;
    gameActive = true;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.disabled = false;
        cell.classList.remove('winning-cell');
    });
    cells.forEach(cell => {
        cell.replaceWith(cell.cloneNode(true));
    });
    updateStatus();
}