import Counter from "./Counter";

const B = (props) => {
    const {count,inc} = props;

    // const increment = () =>{
    //     setcount(count+1);
    // }
    return(
        <div>
            <button onMouseOver={inc}>A {count} click</button>
        </div>
    )
}

export default Counter(B);