const ItemContact = ({Title,Ref,Description})=>{
    return(
        <li className="contact-item">
            <label>{Title} - </label>
            <a href={Ref} target="_blank">{Description}</a>
        </li>
    );
}
export default ItemContact;