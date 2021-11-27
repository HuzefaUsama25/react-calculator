import React from 'react'
import {useState} from 'react'

export default function Calculator() {
    const [display, setdisplay] = useState("");
    const operators = ["+","-","*","/","."]
    const digits = ["1","2","3","4","5","6","7","8","9","0"]


    function parse(str) {
        return eval(str)
    }

    function btnTapped(value) { 
        if (operators.includes(display.slice(-1)) && operators.includes(value)){
            console.log("Error!")
        }

        else {
            setdisplay(display + value)
        }
        
    }

    function setEqual() {
        setdisplay(Math.round(parse(display), 1));
    }

    function clearDisplay() {
        setdisplay("")
    }

    function backspace() {
        let text = display.toString()
        setdisplay(text.slice(0, text.length - 1))
    }
    return (
        <div className="calculator">
            <div className="display">
                {display ? display : 0}
            </div>
            <div className="keypad">
                <button onClick={() => btnTapped('1')}>1</button>
                <button onClick={() => btnTapped('2')}>2</button>
                <button onClick={() => btnTapped('3')}>3</button>
                <button className="addition operator" onClick={() => btnTapped("+")}>&#x2b;</button>
                <button onClick={() => btnTapped('4')}>4</button>
                <button onClick={() => btnTapped('5')}>5</button>
                <button onClick={() => btnTapped('6')}>6</button>
                <button className="subtraction operator" onClick={() => btnTapped("-")}>&minus;</button>
                <button onClick={() => btnTapped('7')}>7</button>
                <button onClick={() => btnTapped('8')}>8</button>
                <button onClick={() => btnTapped('9')}>9</button>
                <button className="multiplication operator" onClick={() => btnTapped("*")}>&times;</button>
                <button onClick={() => btnTapped('0')}>0</button>
                <button className="clearC" onClick={() => clearDisplay()}>C</button>
                <button className="clearCE" onClick={() => backspace()}>CE</button>


                <button className="division operator" onClick={() => btnTapped("/")}>&divide;</button>
                <button onClick={() => btnTapped(".")}>.</button>

                <button className="equal operator" onClick={() => setEqual()}>=</button>

            </div>
        </div>
    )
}

