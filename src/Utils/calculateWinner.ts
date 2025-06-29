const winList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

const calculateWinner = (squares: String[]) => {
    for (let [a, b, c] of winList) {
        if (squares[a] && squares[b] === squares[a] && squares[c] === squares[b]) {
            return { a, b, c};
        }
    }
    return null;
}


export default calculateWinner;