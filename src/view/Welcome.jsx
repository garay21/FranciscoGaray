import '../styles/welcome.css'
import wsp from '../icons/whatsapp.png';
import fcb from '../icons/facebook.png';
import int from '../icons/instagram.png';
import ltk from '../icons/linkedin.png';
import { useState } from 'react';

import ListItem from '../components/hooks/ListItem';

const Welcome = ()=>{
    const [bgColor, setBgColor] = useState('');

    const changeColor = (clr) => {
        setBgColor(clr)
    }

    return(
        <>
            <div className="welcome d-flex justified-content-center align-items-center" style={{backgroundColor: bgColor}}>
                <div className="text-center content-box" >
                    <h1>Bienvenido !!, Soy Francisco Garay</h1>
                    <h3>-&gt;AnalistaProgramador();</h3>
                    <h4>desde Coquimbo, Chile. 🇨🇱</h4>
                    <h5></h5>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <h4 className="text-center">Habilidades Tecnicas.</h4>
                    <ul className='tecnical-container'>
                        <ListItem changeColor={changeColor} clr="#20c0d8" details="Dev. Web FullStack."/>
                        <ListItem changeColor={changeColor} clr="#efb630" details="Dev. Software (DevOps)."/>
                        <ListItem changeColor={changeColor} clr="#7b7974" details="Dev. VideoGame"/>
                        <ListItem changeColor={changeColor} clr="#1ab783" details="Administración Base de Datos."/>
                        <ListItem changeColor={changeColor} clr="#eb5148" details="Tecnico en Computacion."/>
                        <ListItem changeColor={changeColor} clr="#5d5f96" details="Windows y Linux manager."/>
                    </ul>
                </div>
                <div className='col-12'>
                    <h4 className="text-center">RSS</h4>
                    <ul className="rss-section">
                        <li><a href=''><img src={wsp} /></a></li>
                        <li><a href=''><img src={ltk} /></a></li>
                        <li><a href=''><img src={fcb} /></a></li>
                        <li><a href=''><img src={int} /></a></li>                        
                    </ul>
                </div>                
            </div>
        </>        
    );
}

export default Welcome;
