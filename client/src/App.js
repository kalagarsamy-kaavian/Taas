// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Helloworld from './Hello';
import World from './World';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Routes>
            <Route path='/' element={<World/>}/>
            <Route path="/hello" element={<Helloworld />}/>
        </Routes>
        </Router>
      </header>
    </div>
  );
}
export default App;