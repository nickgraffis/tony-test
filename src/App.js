import logo from './logo.svg';
import './App.css';

function App() {
  const image = '/rick.jpg'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className={`h-48 w-48 bg-[url('${window.location.origin + image}')]`}></div>
    </div>
  );
}

export default App;
