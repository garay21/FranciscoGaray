const IconContainer = ({Sd})=>{
    return (
        <div className="icons-container">
            {
                [...Sd.lenguaje, ...Sd.typeLeng, ...Sd.frameworks, ...Sd.versionControl, ...Sd.systemOp].map((item, index)=>{
                    return  <div key={index} className='skill-icon'>
                                <img src={item} alt='skill'/>
                            </div>
                    })
            }                            
        </div>
    );
}

export default IconContainer;