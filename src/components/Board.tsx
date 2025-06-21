import { Square } from "./Square"

interface Boardprops {
    squares: (string | null)[];
    onSquareClick: (idx: number) => void;
}

export function Board({ squares, onSquareClick }: Boardprops) {

    return (<>
        <div className="grid grid-cols-3 gap-2">
            {squares.map((val, id) =>
                <Square key={id} value={val} onClick={() => onSquareClick(id)} />
            )}
        </div>
    </>)
}