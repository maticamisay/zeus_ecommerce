import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/Containers/ItemListContainer';
import ItemDetailContainer from './components/Containers/ItemDetailContainer';
import AppContextProvider from './CustomHooks/AppContextProvider';

function App() {

  return (
    <AppContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />

          <Switch>
            <Route exact path='/'>
              <ItemListContainer greeting="Bienvenidos a Zeus Ecommerce" />
            </Route>

            <Route exact path='/categoria/:category'>
              <ItemListContainer />
            </Route>

            <Route exact path='/detalle/:id'>
              <ItemDetailContainer />
            </Route>

          </Switch>


        </div>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
