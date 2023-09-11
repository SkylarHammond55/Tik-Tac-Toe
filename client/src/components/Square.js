import React from "react";

function Square({ chooseSquare, val }) {
  return (
    <div className="square" onClick={chooseSquare}>
      {val === "X" ? (
        <img src="https://p7.hiclipart.com/preview/175/716/851/harry-potter-and-the-philosopher-s-stone-hermione-granger-clip-art-harry-potter.jpg" alt="X" />
      ) : val === "O" ? (
        <img src="/path/to/O.png" alt="O" />
      ) : null}
    </div>
  );
}

export default Square;
