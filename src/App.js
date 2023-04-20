import './App.css';
import Square from './components/Square';
import Row from './components/Row'
import { isWinner, playerSymbol } from './utils'
import useGameState from './hooks/useGameState'


function App() {
  
  // Fetch some state if needed and parse it to the hook below.
  // If this was implemented, it might be better to utilise context here to store the state globally, making it readily available
  // accross the app.
  // useEffect(() => {
  //   fetch state from api using an Id from params
  // })

  // If this was connected to an api, we would have some kind of loading variable abailable here.
  const { playerX, boardState, handleclick } = useGameState();

  return (
    <div className="App">
      <div className="container">
        <Row>
          {[0, 1, 2].map(i => (
            <Square
              value={boardState[i]}
              handleclick={handleclick}
              position={i}
            />
          ))}
        </Row>

        <Row>
          {[3, 4, 5].map(i => (
            <Square
              value={boardState[i]}
              handleclick={handleclick}
              position={i}
            />
          ))}
        </Row>

        <Row>
          {[6, 7, 8].map(i => (
            <Square
              value={boardState[i]}
              handleclick={handleclick}
              position={i}
            />
          ))}
        </Row>

        <div>
          <h1>Status: {isWinner(boardState) ? `Winner: ${playerSymbol(!playerX)}` : 'playing...' }</h1>
          <p>Player: {playerSymbol(playerX)}'s turn</p>
        </div>
      </div>
    </div>

  );
}

export default App;
