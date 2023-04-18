import './App.css';
import React, {useState} from "react";
import User from './components/User';
export const MyContext = React.createContext();
function App() {
  const [Name,setname] = useState("divyesh")
  const Change_name = () => {
    return setname('kenil');
  };

  const send = {
    data : Name,
    NameFunc : Change_name
  };
  return (
    <MyContext.Provider value={send}>
      <User />
    </MyContext.Provider>
  );
}

export default App;
