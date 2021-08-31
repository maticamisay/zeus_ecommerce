import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemListContainer/Item/ItemCount';

function App() {
  const onAdd = (count)=>{
    alert(`La cantidad es: ${count}`)
  }

  return (
    <div className="App">
      <NavBar/>
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
      <ItemListContainer greeting="Bienvenidos a Zeus Ecommerce"/>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </div>
  );
}

export default App;
