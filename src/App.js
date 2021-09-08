import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        
        <Switch>
          <Route exact path='/'>
            <ItemListContainer greeting="Bienvenidos a Zeus Ecommerce"/>
          </Route>
        </Switch>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
