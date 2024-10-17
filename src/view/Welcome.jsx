import '../styles/welcome.css'
import wsp from '../icons/whatsapp.png';
import fcb from '../icons/facebook.png';
import int from '../icons/instagram.png';
import ltk from '../icons/linkedin.png';
import { useState } from 'react';

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
                        <li className='tecnical-button dwfs' onMouseEnter={()=>changeColor('#20c0d8')}>Dev. Web FullStack.</li>
                        <li className='tecnical-button dsoft'onMouseEnter={()=>changeColor('#efb630')}>Dev. Software (DevOps).</li>
                        <li className='tecnical-button dvvg' onMouseEnter={()=>changeColor('#7b7974')}>Dev. VideoGame</li>
                        <li className='tecnical-button abd' onMouseEnter={()=>changeColor('#1ab783')}>Administración Base de Datos.</li>
                        <li className='tecnical-button tcm' onMouseEnter={()=>changeColor('#eb5148')}>Tecnico en Computacion.</li>
                        <li className='tecnical-button wlm' onMouseEnter={()=>changeColor('#5d5f96')}>Windows y Linux manager.</li>
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
