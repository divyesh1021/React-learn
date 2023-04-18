import User2 from "./User2";

const User = (props) => {
    
    return(<>
    <h1>UserJs</h1>
    {/* <h2>{props.a.name}</h2> */}
    <User2 b={props.a} />
    </>)
}

export default User;