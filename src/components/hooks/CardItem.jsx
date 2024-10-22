const CardItem = ({Title, Img, Ref, Details, Tecno = []})=>{
    return(
        <div className="card">
            <img src={Img} className="card-img-top" alt="Imagen del Projecto"/>
            <div className="card-body">
                <h5 className="card-title">{Title}</h5>
                <div className="skill-content">
                    {
                        Tecno.map((item, index)=>{
                           return <img key={index} src={item} alt="skill" className="skill-icon-card"/>
                        })
                    }
                </div>
                <p className="card-text">{Details}</p>
                <a href={Ref} className="" target="_blank">{Ref}</a>
            </div>
        </div>
    );
}

export default CardItem;