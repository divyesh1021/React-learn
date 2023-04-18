import {useState} from 'react';

const Reuse = (WrappedComponent) => {
    function Reuse (props) {
        const [count,setcount] = useState(0);
        function increment() {
            setcount(count+1);
        } 
    
        return(
        <div>
            <WrappedComponent count={count} inc={increment} />
        </div>
        );
    }
    return Reuse;
};

export default Reuse;