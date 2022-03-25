import logo from './logo.svg';
import './App.css';
import data from './Data';
import Music from './Music';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Music url={data.album.images[0].url} tittle={data.name} artist={data.artists[0].name}/>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
