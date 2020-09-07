import React, { useState } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Backdrop from './components/Backdrop';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(true);
  }

  const handleBackdrop = () => {
    setToggle(false);
  }

  return (
    <div className="App">
      <Navbar toggle={handleClick} />
      <Sidebar show={toggle} setshow={handleBackdrop} />
      {toggle ? <Backdrop click={handleBackdrop} /> : ""}
      <Content />
    </div>
  );
}

export default App;
