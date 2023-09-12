import React, { useState, useEffect } from "react"; // Add useEffect import for high scores
import Board from "./Board";
import { Window, MessageList, MessageInput } from "stream-chat-react";
import "./Chat.css";

function Game({ channel, setChannel }) {
  const [playersJoined, setPlayersJoined] = useState(
    channel.state.watcher_count === 2
  );
  const [result, setResult] = useState({ winner: "none", state: "none" });
  const [highScores, setHighScores] = useState([]);

  // high score css, inline was simple didn't want to create entire section for a box
  const highScoresContainerStyle = {
    backgroundColor: "#f4f4f4",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    marginTop: "20px",

  };

  const updateHighScores = (newScore) => {
    setHighScores([...highScores, newScore]);

    // CODE GOES HERE
    //  once the backend is complete we can use a fetch or axios request 
    // to send the score to the database

  };


  const fetchHighScores = async () => {

    // CODE GOES HERE
    // again once backend is complete use fetch or axio request to retrieve scores from
    // database


    try {
      const response = await fetch("/api/highscores");
      const data = await response.json();
      setHighScores(data);
    } catch (error) {
      console.error("Error fetching high scores:", error);
    }
  };

  // Load high scores when the component mounts
  useEffect(() => {
    fetchHighScores();
  }, []);

  channel.on("user.watching.start", (event) => {
    setPlayersJoined(event.watcher_count === 2);
  });
  if (!playersJoined) {
    return <div> Waiting for other player to join...</div>;
  }
  return (
    <div className="gameContainer">
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
      {result.state === "tie" && <div> Game Tie</div>}
      <div style={highScoresContainerStyle}>
        <h2>High Scores</h2>
        <ul>
          {highScores.map((score, index) => (
            <li key={index} style={{ fontSize: "18px", marginBottom: "8px" }}>{score}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Game;