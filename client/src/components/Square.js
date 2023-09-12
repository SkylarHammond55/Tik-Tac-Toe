import React from "react";

function Square({ chooseSquare, val }) {
  return (
    <div className="square" onClick={chooseSquare}>
      {val === "X" ? (
        <img src="https://img.freepik.com/free-vector/realistic-rugby-ball-isolated_1308-117537.jpg?size=626&ext=jpg&ga=GA1.2.742597560.1692139897" alt="X" />
      ) : val === "O" ? (
        <img src="/path/to/O.png" alt="O" />
      ) : null}
    </div>
  );
}

export default Square;
