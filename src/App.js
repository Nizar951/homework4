import logo from './logo.svg';
import './App.css';
import data from './Data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="isi">
          
          <img src={data.album.images[0].url}/>
          
          <div className="detail">
            <h2>Tittle : {data.name}</h2>
            <h3>Artist : {data.artists[0].name}</h3>
          </div>

          <button>Select</button>
        </div>
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
