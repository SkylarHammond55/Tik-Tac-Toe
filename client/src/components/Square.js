import React from "react";

function Square({ chooseSquare, val }) {
  return (
    <div className="square" onClick={chooseSquare}>
      {val === "X" ? (
        <img src="/path/to/O.png" alt="X" />
      ) : val === "O" ? (
        <img src="/path/to/O.png" alt="O" />
      ) : null}
    </div>
  );
}

export default Square;
