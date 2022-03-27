import './App.css';
import data from './Data';
import Music from './Music';
import 'bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <div className="container-md">

          <div className='row row-cols-1 row-cols-md-2 g-4'>
            {data.map((isi)=>{
              return(
                <Music key={isi.id}  url={isi.album.images[0].url} tittle={isi.album.name} artist={isi.artists[0].name}/>
              );
            })}
          </div>
          
        </div>

        {/* <Music url={data.album[0].images[0].url} tittle={data.name[0]} artist={data.artists[0].name}/> */}
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
