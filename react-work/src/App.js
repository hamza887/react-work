import logo from './logo.svg';
import './App.css';
import Grocery from './components/Grocery/grocery';
import data from '../src/components/Data/data'
function App(props) {
  console.log(data);
  return (
    <div className="App">
      <h2>hello world</h2>
     <Grocery data={data}/>
    </div>
  );
}

export default App;
