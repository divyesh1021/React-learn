import Reuse from "./Reuse";

const B = (props) =>{
    const {count,inc} = props;
    return(
        <div>
            <button onClick={inc}>B {count} click</button>
        </div>
    )
}

export default Reuse(B);