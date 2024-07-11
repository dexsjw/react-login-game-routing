import { useContext, useReducer } from "react";
import { gameReducer, initialGameState } from "../reducers/gameReducer";
import { ScoreHistoryContext } from "../store/score-context";
import ScoreHistory from "../components/ScoreHistory";

// function getRandomNumber() {
//   console.log("getRandomNumber called");
//   return Math.floor(Math.random() * 20 + 1);
// }

function GuessNumberGame() {
  const scoreHistoryCtx = useContext(ScoreHistoryContext);
  const {scoreHandler} = scoreHistoryCtx;

  const [gameState, dispatch] = useReducer(gameReducer, initialGameState);
  const {number, guess, pastGuesses, message, gameOver, score} = gameState;

  const guessChangeHandler = (e) => {
    dispatch({ type: "CHANGE_GUESS", payload: e.target.value });
  }

  const guessHandler = () => {
    dispatch({ type: "CHECK_GUESS" });
  }

  const newGameHandler = () => {
    if (gameOver) {
      scoreHandler(score);
      // why can't we directly call the setter function?
    }
    // dispatch({ type: "NEW_GAME", scoreHandler });
    dispatch({ type: "NEW_GAME" });
  }

  return (
    <div>
      <h1>Guess Number Game</h1>
      <h2>Score: {score}</h2>
      <p>Guess a number between 1 and 20.</p>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <label htmlFor="guess-input">Enter guess</label>
        <input
          id="guess-input"
          type="text"
          onChange={guessChangeHandler}
          value={guess}
        />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button type="button" onClick={guessHandler} disabled={gameOver}>
          Guess!
        </button>
        <button type="button" onClick={newGameHandler}>
          New Game
        </button>
      </div>
      <p>{message}</p>
      <p>Answer: {number}</p>
      <div className="guesses-container">
        {pastGuesses.map((pastGuess, i) => (
          <span key={i} className="guesses-number">
            {pastGuess}
          </span>
        ))}
      </div>
      <ScoreHistory />
    </div>
  );
}

export default GuessNumberGame;