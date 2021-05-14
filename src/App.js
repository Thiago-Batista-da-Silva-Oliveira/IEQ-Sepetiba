import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Células from './components/pages/Células'
import Eventos from './components/pages/Eventos';
import Cultos from './components/pages/Cultos';
import React from 'react'

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Sobre'  component={Sobre}></Route>
          <Route path='/Células'  component={Células}></Route>
          <Route path='/Eventos'  component={Eventos}></Route>
          <Route path='/Cultos' component={Cultos}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
