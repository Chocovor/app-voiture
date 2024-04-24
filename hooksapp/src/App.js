import './App.css';
// import ClassState from './components/Classstate';
// import FunctionState from './components/FunctionState';
// import Todo from './components/Todo'
// import ClassCount from './components/ClassCount';
// import FunctionCount from './components/FunctionCount';
// import Profile from "./components/Profile";
// import { UserContext, ColorContext } from "./components/MyContext";
import React, { Component, useReducer} from "react";
import Count from './components/Count';
import Button from './components/Button';
import Counti  from './components/Count2';

//    AVANT EXERCICE 10
// function App() {
//   return (
//     <section>
//       <div className="App">
//         <h1 className="text-center">useState Hooks</h1>
//         {/* <ClassState/>
//         <hr/>
//         <FunctionState/> */}
//       </div>
//       <div className="container">
//         {/* <Todo/> */}
//       </div>
//       <div>
//         <ClassCount/>
//         <FunctionCount/>
//       </div>
//     </section>
//   );
// }

//       EXERCICE 10
// class App extends Component {
//   state = {
//     user: {
//       name: "Lisa",
//       age: 8,
//     },
//   };
//   render() {
//     return (
//       <UserContext.Provider value={this.state.user}>
//         <ColorContext.Provider value={"purple"}>
//           <Profile />
//         </ColorContext.Provider>
//       </UserContext.Provider>
//     );
//   }
// }
class App extends React.Component {

  render(){

    return(
      <div ClassAme="text-center">
        test 
        <Count></Count>
        <Counti/>
        <Button>Count 1</Button>
        <Button>Count 2</Button>

      </div>
    );
  }
}

export default App;
