import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>{favoriteFood()}</h1>
      </header>
    </div>
  );
}

const favoriteFood = () => {
  return "cereal";
}
export default App;
