import Counter from "./Counter";

const A = (props) => {
    const {count,inc} = props;
    // const increment = () =>{
    //     setcount(count+1);
    // }
    return(
        <div>
            <button onClick={inc}>A {count} click</button>
        </div>
    )
}

export default Counter(A);