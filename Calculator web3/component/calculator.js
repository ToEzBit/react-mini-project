import { useState } from 'react'
import '../component/cal.css'

const Calculator=()=>{

    const [display,Setdisplay] = useState('0')

    const getnum=(value)=>{
        if(display.toString().charAt(0) === "0"){
            Setdisplay(value)
        }else{
            Setdisplay(display+value)
        }
    }

    const reset=()=>{
        Setdisplay("0")
    }

    const calculate=()=>{
        let result = eval(display)
        Setdisplay(result)
    }

    return (
        <div className="container">
            <div className="display">
                <p>{display}</p>
            </div>
            <div className="btn-container">
                <button className="operator" onClick={()=>getnum('+')}>+</button>
                <button className="operator" onClick={()=>getnum('-')}>-</button>
                <button className="operator" onClick={()=>getnum('*')}>*</button>
                <button className="operator" onClick={()=>getnum('/')}>/</button>
                <button onClick={()=>getnum('7')}>7</button>
                <button onClick={()=>getnum('8')}>8</button>
                <button onClick={()=>getnum('9')}>9</button>
                <button onClick={()=>getnum('4')}>4</button>
                <button onClick={()=>getnum('5')}>5</button>
                <button onClick={()=>getnum('6')}>6</button>
                <button onClick={()=>getnum('1')}>1</button>
                <button onClick={()=>getnum('2')}>2</button>
                <button onClick={()=>getnum('3')}>3</button>
                <button onClick={()=>getnum('.')}>.</button>
                <button onClick={()=>getnum('0')}>0</button>
                <button className="btn-c" onClick={reset}>c</button>
                <button className="btn-equal" onClick={calculate}>=</button>
            </div>
        </div>
    )
}

export default Calculator