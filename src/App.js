import {useState} from "react"


function App() {

  const [display, setdisplay] = useState("");


  function parse(str) {
    return Function(`'use strict'; return (${str})`)()
  }
  

  function btnTapped (value) {
    setdisplay(display + value)
  }

  function setEqual () {
    setdisplay(Math.round(parse(display)));
  }
  

  return (
    <div>
      <div className="display">
        {display ? display : 0}
      </div>
      <div className="keypad">
      <button onClick={()=>btnTapped(1)}>1</button>
      <button onClick={()=>btnTapped(2)}>2</button>
      <button onClick={()=>btnTapped(3)}>3</button>
      <button onClick={()=>btnTapped(4)}>4</button>
      <button onClick={()=>btnTapped(5)}>5</button>
      <button onClick={()=>btnTapped(6)}>6</button>
      <button onClick={()=>btnTapped(7)}>7</button>
      <button onClick={()=>btnTapped(8)}>8</button>
      <button onClick={()=>btnTapped(9)}>9</button>


      <button onClick={()=>btnTapped("+")}>+</button>
      <button onClick={()=>btnTapped("-")}>-</button>
      <button onClick={()=>btnTapped("*")}>*</button>
      <button onClick={()=>btnTapped("/")}>/</button>

      <button onClick={()=>setEqual()}>=</button>
      </div>
    </div>
  );
}

export default App;
