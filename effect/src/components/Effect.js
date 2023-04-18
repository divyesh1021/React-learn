const Effect = () => {
    const btnStyle = {
        color:'white',
        backgroundColor:'black'
    }
    // const arr = [10,20,30,40];
    const arr = [{id:101,name:'divyesh'}];
    const newarray = arr.map((num,i)=>{
        console.log('num:',num);    
        return (<li key={i}>{num.id} {num.name}</li>)
    });
    console.log(arr);
    console.log(newarray);
    return (<>
    <ul className="p">{newarray}</ul>
    <button style={btnStyle}  >Hello</button>
    <button className="btn btn-danger">Hello</button>
    {/* <img src={process.env.PUBLIC_URL + "/logo.png"} />  when image outside a src folder */}
    {/* <img src={img}></img> when image inside a src folder  */}

    </>);
};

export default Effect;