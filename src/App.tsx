import React from 'react';
import { BrowserRouter,  } from "react-router-dom";
import { Navbar } from './components';
import Routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <div className='main-container'>
          <Routes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
