import '../styles/header.css'

const Header = ({NavPage}) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="nav-link" onClick={() => NavPage('Home')}>Home</button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav-link" onClick={()=>NavPage('Contact')}>Contacto</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={()=>NavPage('Skills')}>Conocimientos</button>
                            </li>    
                            <li className="nav-item">
                                <button className="nav-link" onClick={()=>NavPage('Projects')}>Proyectos</button>
                            </li>  
                            <li className="nav-item">
                                <button className="nav-link" onClick={()=>NavPage('Education')}>Educacion</button>
                            </li>                           
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;