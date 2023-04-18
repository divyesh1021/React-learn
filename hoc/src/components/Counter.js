import {useState} from 'react';

const Counter = (WrappedComponent) => {
    function Counter (props) {
        const [count,setcount] = useState(0);
        function increment (){
            setcount(count+1);
        }
        return(
            <div>
                <WrappedComponent count={count} inc={increment} />
            </div>
        );
    }
    return Counter;
}

export default Counter;