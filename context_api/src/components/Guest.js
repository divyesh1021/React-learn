import { MyContext } from "../App";

const Guest = () => {
    return (
        <>
        <h1>Guest</h1>
        <MyContext.Consumer>
            {({data,increment}) => (<div><h4>Name : {data.Name} Increment : {data.value}</h4>
            <button onClick={increment}>change</button></div>)}
        </MyContext.Consumer>
        </>
    )
}

export default Guest;