import logo from './logo.svg';
import './App.css';

function App() {
  const midnightSnack = "cereal";

  return (
    <div className="App">
      <header className="App-header">
        <h1>{function(out) {return out;}(midnightSnack)}</h1>
      </header>
    </div>
  );
}

export default App;
