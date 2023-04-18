import { MyContext } from "../App";
const Guest = () => {
    return (<>
        <h1>Guest File</h1>
        <MyContext.Consumer>
            {({ data, NameFunc }) => (<div><h3>Name : {data}</h3>
                <button onClick={NameFunc}>Changename</button></div>)}
        </MyContext.Consumer>
    </>)
};

export default Guest;