import React from 'react';
import './App.css';
//styling per component or external stylesheet?
import About from './components/About';
import Header from './components/Header';
import SortMenu from './components/SortMenu';
import List from './components/List';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SortMenu />
        <Sidebar />
        <Route path='/' exact component={List} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  );
}

export default App;
