import React, { useState } from 'react';

const FunctionState = () => {
    
    const [counter, setCounter] = useState(0); // same as:  
                                            // let counter =  0; 
                                            // function setCounter(val) { counter = val };
    const addOne = () => {
        setCounter(prevCounter=> prevCounter+ 1)
    }
    return (
      <div>
        <p>Function State : {counter} $</p> 
        <button onClick={addOne}>State dans Function +1</button>
        <button onClick={()=>setCounter(prevCounter=> prevCounter-1)}>State dans Function -1</button>

      </div>
    );
}

export default FunctionState