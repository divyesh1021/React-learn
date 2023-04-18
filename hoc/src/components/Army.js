import {useState} from 'react';
const Army = () => {
    const [gunshot,setgunshot] = useState(0);

    const cl = ()=>{
        setgunshot(gunshot +1);
    }

    return(
        <>
        <h3 onMouseOver={cl}>Gun Shot : {gunshot}</h3>
        </>
    )
}

export default Army;