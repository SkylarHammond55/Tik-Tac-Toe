import React, { useState, useEffect } from "react";
import Board from "./Board";
import { Window, MessageList, MessageInput } from "stream-chat-react";
import "./Chat.css";

// import { useState, useEffect } from "react";



function Game({ channel, setChannel }) {

const [color, setColor] = useState("white")
const click = color => {
  setColor(color)
}
useEffect(()=>{
  const boardElement = document.querySelector('.board');
  if (boardElement) {boardElement.style.backgroundColor = color;}
  
}, [color])

  const [playersJoined, setPlayersJoined] = useState(
    channel.state.watcher_count === 2
  );
  const [result, setResult] = useState({ winner: "none", state: "none" });

  channel.on("user.watching.start", (event) => {
    setPlayersJoined(event.watcher_count === 2);
  });
  if (!playersJoined) {
    return <div> Waiting for other player to join...</div>;
  }


  return (
    <div className="gameContainer">

    <div className="themeb">

    <div className="selecttheme">
      <h1>Select Theme</h1>
    </div>

      <button className="limeb" onClick = {
        () => {click("lime")}
      }></button>

      <button className="pinkb" onClick = {
        () => {click("#ff00bb")}
      }></button>

      <button className="blueb" onClick = {
        () => {click("#0066ff")}
      }></button>

    </div>
      <Board result={result} setResult={setResult} />
      <Window>
        <MessageList
          disableDateSeparator
          closeReactionSelectorOnClick
          hideDeletedMessages
          messageActions={["react"]}
        />
        <MessageInput noFiles />
      </Window>
      <div className="leavegameb">
      <button class="btn btn-error"
        onClick={async () => {
          await channel.stopWatching();
          setChannel(null);
        }}
      >
        {" "}
        Leave Game
      </button>
      </div>
      {result.state === "won" && <div> {result.winner} Won The Game</div>}
      {result.state === "tie" && <div> Game Tieds</div>}
    </div>
  );
}

export default Game;
