import React from 'react';
import NavBar from './components/NavBar'
import './App.css';
import IdeasList from './components/IdeasList'
// import Cards from './components/Cards'

function App() {

  return (
    <div className="App">
      <NavBar />
      <IdeasList/>
    </div>
  );
}

export default App;
