import type { winner } from "../models";
import { Square } from "./Square"

interface Boardprops {
    squares: (string | null)[];
    onSquareClick: (idx: number) => void;
    winner: winner | null
}

export function Board({ squares, onSquareClick, winner }: Boardprops) {

    return (<>
        <div className="grid grid-cols-3 gap-2">
            {squares.map((val, id) => {

                return <Square key={id} value={val} 
                    highlight= {winner && (id === winner.a || id === winner.b || id === winner.c) } 
                    onClick={() => onSquareClick(id)} />
            }
            )}
        </div>
    </>)
}