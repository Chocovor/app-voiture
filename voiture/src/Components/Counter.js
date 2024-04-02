import React, { useState } from "react";

function Counter () {
    const [count, setCount] = useState (0);
    return(
        <div>
            <button onClick={()=> setCount(count +10)}> + 10 ans</button> 
        </div>
    );
}
export default Counter;