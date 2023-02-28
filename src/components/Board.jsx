import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }

        return false;
    };

    const isWinner = checkWinner();
    const count=0;
    const handleClick = (index) => {
        if (state[index] !== null) {
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn);
        count=count+1;
    };

    const handleReset = () => {
        setState(Array(9).fill(null));
    };
    const checkTie = () => {
        if (state[1] != null && state[2] != null && state[3] != null && state[4] != null && state[5] != null && state[6] != null && state[7] != null && state[8] != null && state[0] != null) {
            return true;
        }
        return false;
    }
    const isTie = checkTie();
    return (
        <div className="board-container">
            {isWinner ? (
                <>
                    <div className="btn">
                    {isWinner} won the game{" "}
                    <br></br>
                    <button onClick={handleReset} className="button">Play Again</button>
                    </div>
                </>
            ) 
            : 
            isTie ? (
                <>
                    <div className="btn">
                    The Game Tied
                    <br></br>
                    <button onClick={handleReset} className="button">Play Again</button>
                    </div>
                </>
            )
            :
            (
                <>
                    <h4 style={{
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize:"25px"
                        
                    }}>Player {isXTurn ? "X" : "O"} please move</h4>
                    <div className="board-row">
                        <Square onClick={() => handleClick(0)} value={state[0]} />
                        <Square onClick={() => handleClick(1)} value={state[1]} />
                        <Square onClick={() => handleClick(2)} value={state[2]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handleClick(3)} value={state[3]} />
                        <Square onClick={() => handleClick(4)} value={state[4]} />
                        <Square onClick={() => handleClick(5)} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handleClick(6)} value={state[6]} />
                        <Square onClick={() => handleClick(7)} value={state[7]} />
                        <Square onClick={() => handleClick(8)} value={state[8]} />
                    </div>
                </>
            )}
        </div>
    );
};

export default Board;
