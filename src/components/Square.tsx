

interface Squareprops {
    value: string | null;
    onClick: () => void
}

export function Square({value, onClick} : Squareprops) {
    
    return <>
        <button className="w-10 h-10 border border-gray-300 text-2xl font-bold flex items-center justify-center" onClick={onClick}>
            {value}
        </button>
    </>
}