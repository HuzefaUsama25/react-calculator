import { useState } from "react"


function App() {

  const [display, setdisplay] = useState("");


  function parse(str) {
    return Function(`'use strict'; return (${str})`)()
  }

  function btnTapped(value) {
    setdisplay(display + value)
  }

  function setEqual() {
    setdisplay(Math.round(parse(display),1));
  }

  function clearDisplay() {
    setdisplay("")
  }

  function backspace() {
    let text = display.toString()
    setdisplay(text.slice(0, text.length - 1))
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {display ? display : 0}
        </div>
        <div className="keypad">
          <button onClick={() => btnTapped(1)}>1</button>
          <button onClick={() => btnTapped(2)}>2</button>
          <button onClick={() => btnTapped(3)}>3</button>
          <button className="addition operator" onClick={() => btnTapped("+")}>+</button>
          <button onClick={() => btnTapped(4)}>4</button>
          <button onClick={() => btnTapped(5)}>5</button>
          <button onClick={() => btnTapped(6)}>6</button>
          <button className="subtraction operator" onClick={() => btnTapped("-")}>-</button>
          <button onClick={() => btnTapped(7)}>7</button>
          <button onClick={() => btnTapped(8)}>8</button>
          <button onClick={() => btnTapped(9)}>9</button>
          <button className="multiplication operator" onClick={() => btnTapped("*")}>x</button>
          <button onClick={() => btnTapped(0)}>0</button>
          <button className="clearC" onClick={() => clearDisplay()}>C</button>
          <button className="clearCE" onClick={() => backspace()}>CE</button>


          <button className="division operator" onClick={() => btnTapped("/")}>/</button>
          <button onClick={() => btnTapped(".")}>.</button>

          <button className="equal operator" onClick={() => setEqual()}>=</button>

        </div>
      </div>
    </div>
  );
}

export default App;
