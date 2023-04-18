import './App.css';
import Lifting from './components/Lifting';
// import User from './components/User';
function App() {

  const data = {name:"divyesh",num:101};

  return (<>
  <div>
    <Lifting name={data} />
    {/* <User a={data} /> */}
  </div>
  </>
  );
}

export default App;


// App/js file ma je variable hoy tene biji file ma access karva mate props no use kari ne kari sakay(Lifting state up)
// vadhu file hoy to Context api no use thay.



