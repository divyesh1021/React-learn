import './App.css';
import useIncrement from "./components/Increment";
function App() {
  const data = useIncrement();
  const data1 = useIncrement();

  return(
        <>
        <div className='container'>
          <h1>{data.set}</h1>
          <button type='submit' onClick={data.a}>click</button>
          <h1>{data1.set}</h1>
          <button type='submit' onClick={data1.a}>click</button>
        </div>
        </>
    );
}

export default App;