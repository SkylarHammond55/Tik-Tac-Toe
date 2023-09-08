import TicTacToe from './components/TicTacToe'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Tic-Tac-Toe Game</h1>
        <TicTacToe /> {/* Render your TicTacToe component here */}
      </header>
    </div>
  );
}

export default App;
