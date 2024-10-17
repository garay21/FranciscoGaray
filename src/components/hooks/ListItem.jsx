const ListItem = ({changeColor,clr,details})=>{
    return (
        <li className='tecnical-button' 
            onMouseEnter={()=>changeColor(clr)} 
            onTouchStart={()=>changeColor(clr)}
            style={{backgroundColor : clr}}>
                {details}
        </li>
    );
}

export default ListItem;