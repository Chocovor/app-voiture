import React, {useState, useEffect} from 'react'

function FunctionCount() {

    const [count, setCount] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            document.title = `Vous avez cliqué ${count} fois`;
        }, 3000)
    })
    return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count+1)}>cliques</button>
    </div>
  )
}

export default FunctionCount

