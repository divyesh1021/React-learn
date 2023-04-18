import './App.css';
import React, { useState } from "react";
import User from './components/User';
export const MyContext = React.createContext();

function App() {
  const [Name, setName] = useState("divyesh");
  const [value, setValue] = useState(12);

  // const data = { name: 'divyesh', num: 12 }
  const Increament = () => {
    // console.log({ num: data.num + 1 });
    return setValue(value + 1);
  }

  const contectvalue = {
    data: {Name, value},
    increment: Increament
  };
  return (
    <>
      <MyContext.Provider value={contectvalue}>
        <User />
      </MyContext.Provider>
    </>
  );
}

export default App;
