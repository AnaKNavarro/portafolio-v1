import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css'; // Importa tus estilos aquí

function App() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
