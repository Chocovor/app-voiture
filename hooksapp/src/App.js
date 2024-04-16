import './App.css';
import ClassState from './components/Classstate';
import FunctionState from './components/FunctionState';
import { v4 as uuidv4 } from 'uuid'
import Todo from './components/Todo'

function App() {
  return (
    <div className="App">
      <h1 className="text-center">useState Hooks</h1>
      <ClassState/>
      <hr/>
      <FunctionState/>
      <hr/>
      <Todo/>
    </div>
  );
}

export default App;
