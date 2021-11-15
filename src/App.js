import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Musiques from './pages/musiques'
import Films from './pages/films'
import Header from './header/header'
import UpdateItem from './pages/updateItem'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Bienvenue au GRETA</h1>
      <Router>
        <Header />
        <Route path="/" exact >
          <Musiques />
        </Route>
        <Route path="/musiques" exact >
          <Redirect to="/" />
        </Route>
        <Route path="/films" exact>
          <Films />
        </Route>
        <Route path="/musiques/:oeuvreId" exact>
          <UpdateItem route="musiques" />
        </Route>
        <Route path="/films/:oeuvreId" exact>
          <UpdateItem route="films" />
        </Route>
      </Router>
    </div>
  );
}

export default App;
