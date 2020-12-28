import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Musiques from './pages/musiques'
import Films from './pages/films'
import Header from './header/header'

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
      </Router>
    </div>
  );
}

export default App;
