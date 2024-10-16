import '../styles/welcome.css'
import wsp from '../icons/whatsapp.png';
import fcb from '../icons/facebook.png';
import int from '../icons/instagram.png';
import ltk from '../icons/linkedin.png';

const Welcome = ()=>{
    return(
        <>
            <div className="welcome d-flex justified-content-center align-items-center" >
                <div className="text-center content-box">
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
                        <li className='tecnical-button dwfs'>Dev. Web FullStack.</li>
                        <li className='tecnical-button dsoft'>Dev. Software (DevOps).</li>
                        <li className='tecnical-button dvvg'>Dev. VideoGame</li>
                        <li className='tecnical-button abd'>Administración Base de Datos.</li>
                        <li className='tecnical-button tcm'>Tecnico en Computacion.</li>
                        <li className='tecnical-button wlm'>Windows y Linux manager.</li>
                    </ul>
                </div>
                <div className='col-12'>
                    <h4 className="text-center">RSS</h4>
                    <ul className="rss-section">
                        <li><a href=''><img src={wsp} width='20px'/></a></li>
                        <li><a href=''><img src={ltk} width='20px'/></a></li>
                        <li><a href=''><img src={fcb} width='20px'/></a></li>
                        <li><a href=''><img src={int} width='20px'/></a></li>                        
                    </ul>
                </div>                
            </div>
        </>        
    );
}

export default Welcome;
