import Musiques from './pages/musiques'
import Films from './pages/films'
import Header from './header/header'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Bienvenue au GRETA</h1>
      <Musiques />
      <br/>
      <Films />
    </div>
  );
}

export default App;
