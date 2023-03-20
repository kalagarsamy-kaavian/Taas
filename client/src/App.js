// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Info from './data';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={<Info></Info>}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}
export default App;
