import React from "react";
import "../assets/style.css";
const Result = ({score, playAgain}) => (
    <div className="score-board">
        <div className="score">You scored {score} / 5 correct answers!</div>
        <button className="playBtn" onClick={playAgain}>
            Play again!
        </button>
    </div>
);

export default Result;