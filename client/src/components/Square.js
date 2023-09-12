import React from "react";

function Square({ chooseSquare, val }) {
  return (
    <div className="square" onClick={chooseSquare}>
      {val === "X" ? (
        <img src="https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg?size=626&ext=jpg&ga=GA1.2.742597560.1692139897" alt="X" />
      ) : val === "O" ? (
        <img src="https://img.freepik.com/free-vector/realistic-american-football-stadium_52683-53798.jpg?size=626&ext=jpg&ga=GA1.1.742597560.1692139897" alt="O" />
      ) : null}
    </div>
  );
}

export default Square;
