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
                    <h4>desde Coquimbo,chile. 🇨🇱</h4>
                    <h5></h5>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-sm-6'>
                    <h4>Habilidades Tecnicas.</h4>
                    <ul>
                        <li>Dev Web FullStack.</li>
                        <li>Dev Software (DevOps).</li>
                        <li>VideoGame Dev.</li>
                        <li>Administración Base de Datos.</li>
                        <li>Tecnico en Computacion.</li>
                        <li>Windows y Linux manager.</li>
                    </ul>
                </div>
                <div className='col-12 col-sm-6'>
                    <h4>RSS</h4>
                    <ul>
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
