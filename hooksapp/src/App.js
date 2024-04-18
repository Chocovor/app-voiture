import './App.css';
import ClassState from './components/Classstate';
import FunctionState from './components/FunctionState';
import Todo from './components/Todo'
import ClassCount from './components/ClassCount';
import FunctionCount from './components/FunctionCount';

function App() {
  return (
    <section>
      <div className="App">
        <h1 className="text-center">useState Hooks</h1>
        <ClassState/>
        <hr/>
        <FunctionState/>
      </div>
      <div className="container">
        <Todo/>
      </div>
      <div>
        {/* <ClassCount/> */}
        <FunctionCount/>
      </div>
    </section>
  );
}

export default App;
