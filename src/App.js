
import './App.css';
import React from 'react';


import Navigation from './Components/NavBar/Navigation';
import Head from './Components/Header/Heading';
import Corpo from './Components/Corpo/Corpo';




function App() {
  return (
    <div>
      <section className='Background'>
        < Navigation />
        < Head />
        < Corpo />
      </section>

    </div>
  );
}

export default App;
