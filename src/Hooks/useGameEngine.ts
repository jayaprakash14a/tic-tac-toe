import { useState } from "react";
import calculateWinner from "../Utils/calculateWinner";
import type { winner } from "../models";


const useGameEngine = () => {

    const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState<boolean>(true);

    const winner: winner | null = calculateWinner(squares);
    

    const onSquareClick = (idx: number) => {

        if (squares[idx]) {
            return;
        }

        if (winner) {
           return;
        }

        const newSquares: string[] = [...squares];
        newSquares[idx] = isXTurn ? 'X' : 'O';
        setSquares(newSquares);
        setIsXTurn(!isXTurn);
    }

    const restart = () => {
        setSquares(Array(9).fill(null));
        setIsXTurn(true);
    }

    return { squares, winner, isXTurn, onSquareClick, restart }
}

export default useGameEngine;