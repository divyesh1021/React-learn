import './App.css';
import {useState} from 'react';
import React from 'react';

function App() {
  const [set,setvalue] = useState("f");
  const [p,setp] = useState("f");
  // const [name,setname] = useState("divyesh");
  // const [password,setpassword] = useState(123);
  const [user,setuser] = useState({name:'',password:''});
  const change = async (e) =>{
    setvalue(e.target.value);
    console.log(set);
  }

  const text = async (e) =>{
    setp(e.target.value.toUpperCase());
  }

  const Multi_change = (e) => {
    // console.log([e.target.value])
    setuser({[e.target.name]:e.target.value})
    // setpassword({[e.target.name]:e.target.value})
  }
  // const set_name = async (e) =>{
  //   setname(e.target.value);
  // }
  // const set_password = async (e) =>{
  //   setpassword(e.target.value);
  // }

  const register = async (e) => {
    // console.log(e.target.name);
    e.preventDefault();
  }

  // const uncontrolled = (e) =>{
  //   e.preventDefault();
  //   const a = React.createRef();
  // }
  return (<>
  <h2 type="text">Controlled by react</h2>
  <input type="text" value={set} onChange={change} />
  <textarea type="text" value={p} onChange={text}></textarea>
  {/* <button type='submit' onClick={ch} >change</button> */}

  <h1>Controlled multiple input</h1>
  <form onSubmit={register}>
    <label htmlFor="Name">Name</label>
    <input name='name' type="text" value={user.name} onChange={Multi_change} />
    <label htmlFor="Name">Password</label>
    <input name="password" type="password" value={user.password} onChange={Multi_change} />
    <button type='submit'>Submit</button>
  </form>


  <h2>Uncontrolled Component</h2>



  </> 
  );
}

export default App;
