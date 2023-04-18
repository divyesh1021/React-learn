import Reuse from './Reuse';

const A = (props) =>{
    const {count,inc} = props;
    return(
        <div>
            <button onMouseOver={inc}>A {count} Click</button>
        </div>
    );
}
export default Reuse(A);