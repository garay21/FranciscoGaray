import React, { useState } from 'react';
import Header from './view/Header';
import Welcome from './view/Welcome'
import Skills from './view/Skills';
 
function App() {
  const [currentView, setCurrentView] = useState('Home');

  const NavPage = (view) => {
    setCurrentView(view);
  }

  const RenderPage = () => {
    switch(currentView){
      case 'Home' : return <Welcome/>;
      case 'Contact' : return <Welcome/>;
      case 'Skills' : return <Skills/>;
      case 'Projects' : return <Welcome/>;
      case 'Education' : return <Welcome/>;
      default : return <Welcome/>;
    }
  }

  return (
    <div className="container">
        <Header NavPage={NavPage}/>
        {
          RenderPage()
        }
    </div>      
  )
}

export default App
