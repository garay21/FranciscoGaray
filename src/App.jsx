import React, { useState } from 'react';
import Header from './view/Header';
import Welcome from './view/Welcome'
import Skills from './view/Skills';
import Contact from './view/Contact';
import Projects from './view/Projects'
import Education from './view/Education'
 
function App() {
  const [currentView, setCurrentView] = useState('Home');

  const NavPage = (view) => {
    setCurrentView(view);
  }

  const RenderPage = () => {
    switch(currentView){
      case 'Home' : return <Welcome/>;
      case 'Contact' : return <Contact/>;
      case 'Skills' : return <Skills/>;
      case 'Projects' : return <Projects/>;
      case 'Education' : return <Education/>;
      default : return <Welcome/>;
    }
  }

  return (
    <div className="container-fluid">
        <Header NavPage={NavPage}/>
        <div className='container-fluid'>{
          RenderPage()
        }</div>
        <footer className='footer'>
          <p className='text-center'>© 2024 Francisco Garay. Todos los derechos reservados.</p>
        </footer>
    </div>      
  )
}

export default App
