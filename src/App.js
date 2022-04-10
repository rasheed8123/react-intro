import logo from './logo.svg';
import './App.css';

function App() {
  const arr = ["Android","Blackberry","iPhone","Windowa Phone"]
  const arr1 = ["Samsung","HTC","Micromax","Apple"]
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <ul>
        {arr.map((e)=>{
           return <li>{e}</li>
        })}
      </ul>
      <h1>Mobile Manufacturers</h1>
      <ul>
        {arr1.map((e)=>{
           return <li>{e}</li>
        })}
      </ul>

    </div>
  );
}

export default App;
