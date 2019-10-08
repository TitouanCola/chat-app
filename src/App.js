import React from 'react';
import Contact from './Components/Contact.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contact name="Dimitri Poisson" online={true} icon="https://randomuser.me/api/portraits/men/83.jpg"/>
        <Contact name="Henry Soto" online={false} icon="https://randomuser.me/api/portraits/men/3.jpg"/>
        <Contact name="Stéphanie Matrice" online={true} icon="https://randomuser.me/api/portraits/women/37.jpg"/>
      </header>
    </div>
  );
}

export default App;
