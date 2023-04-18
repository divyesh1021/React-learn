import User from "./User";

const Lifting = (props) => {
    const color = {color : 'red'}

    return(<>
    <h1 style={color}>Lifting component</h1>
    <User a={props.name} />
    </>)
}

export default Lifting;