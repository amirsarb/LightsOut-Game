/**
 * @author Amir Sarbazi
 * @email [amir.sarbazi@gmail.com]
 * @create date 2023-01-25 14:40:55
 * @desc [The lights out game consists of a 5 by 5 grid of lights. 
 * A random number or a stored pattern of these lights is switched on. 
 * Pressing any of the lights will toggle it and the adjacent lights]
 */
import './App.css';
import Board from './Board'

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
