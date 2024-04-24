import './App.css';
// import ClassState from './components/Classstate';
// import FunctionState from './components/FunctionState';
// import Todo from './components/Todo'
// import ClassCount from './components/ClassCount';
// import FunctionCount from './components/FunctionCount';
// import Profile from "./components/Profile";
// import { UserContext, ColorContext } from "./components/MyContext";
import React, { Component, useReducer, useState, useCallback} from "react";
import Count from './components/Count';
import Button from './components/Button';
import Counti  from './components/Counti';
import ClickSayHello from './components/ClickSayHello';

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

// EXERCICE 11
function App(){

  const [countOne, setCountOne] = useState({
    value:0, 
    btnColor: 'success', 
    increment:25,
  })

  const [countTwo, setCountTwo] = useState({
    value:0, 
    btnColor: 'danger', 
    increment:20,
  })

  const incrementCountOne = useCallback((val) => {
    console.log("je suis dans incrementCountOne");
    countOne.value < 100 && setCountOne({...countOne, value: countOne.value + val})
  },[countOne])
  const incrementCountTwo = useCallback((val) => {
    console.log("je suis dans incrementCountTwo");
    countTwo.value < 100 && setCountTwo({...countTwo, value: countTwo.value + val})
  },[countTwo])
  return(
    <div ClassName="container">     
        <Counti text="CountOne" count={countOne.value} bgColor={countOne.btnColor}/>
        <Counti text="CountTwo" count={countTwo.value} bgColor={countTwo.btnColor}/>

        <Button handleClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}>Count 1</Button>
        <Button handleClick={incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}>Count 2</Button>
        <div className='App'>
          <ClickSayHello/>
        </div>
    </div>
  );
}

export default App;
