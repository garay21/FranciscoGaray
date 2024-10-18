const CardItem = ({Title, Img, Ref, Details})=>{
    return(
        <div className="card">
            <img src={Img} className="card-img-top" alt="Imagen del Projecto"/>
            <div className="card-body">
                <h5 className="card-title">{Title}</h5>
                <p className="card-text">{Details}</p>
                <a href={Ref} className="btn btn-primary" target="_blank">Click para ver.</a>
            </div>
        </div>
    );
}

export default CardItem;