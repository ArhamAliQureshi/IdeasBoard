import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import IdeasList from './components/IdeasList';
import Notification from './components/Notification';
// import Cards from './components/Cards'

function App() {

  return (
    <div className="App">
      <NavBar />
      <IdeasList/>
      <Notification />
    </div>
  );
}

export default App;
