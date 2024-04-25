import {useState, useEffect} from 'react';

function ClickSayHello() {

const [text, setText] = useState("");

useEffect (()=>{
    document.title = text;
},[text])

  return (
    <div>
      <button
      onClick={() => setText("Hello!")}>
        Click me to say hello!
      </button>
    </div>
  )
}

export default ClickSayHello