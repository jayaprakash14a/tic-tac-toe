

interface Squareprops {
    value: string | null;
    onClick: () => void;
    highlight: boolean | null;
}

export function Square({ value, onClick, highlight }: Squareprops) {

    return <>
        <button className={`w-10 h-10 border border-gray-300 text-2xl font-bold flex items-center justify-center ${highlight ? 'bg-blue-400' : ''}`} onClick={onClick}>
            {value}
        </button>
    </>
}