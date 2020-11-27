import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Menu from './components/Menu';
import List from './components/List';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <Sidebar />
        <Route path='/' exact component={List} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  );

}

export default App;
