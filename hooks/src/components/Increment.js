import {useState} from 'react';
function useIncrement(){
    const [set,setitem] = useState(0);
    const a = () => {
        setitem(set + 1 );
    };
    return {
        set,
        a
    }
    // return(
    //     <>
    //     <h1>{set}</h1>
    //     <button type='submit' onClick={a}>click</button>
    //     </>
    // );
};

export default useIncrement;