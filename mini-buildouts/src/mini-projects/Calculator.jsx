import { useState, useEffect } from "react";
import '../App.css';
import {evaluate, isNaN} from 'mathjs';

const Calculator = () => {

    const [result, setResult] = useState("");
    const [expression, setExpression] = useState("");

    const calculate = (e) => {
        e.preventDefault();
        console.log("calculate")
        const exec = evaluate(expression);
        if (isNaN(exec)) {
            console.error("Nan")
            setResult("NaN")
        } else {
            setResult(exec);
            console.log(exec);
        }
    }

    const handleButtonClick = (e) => {
        const id = (e.target.id);

        if (id == 'buttons') return;

        console.log(id);
        if (id === 'C') {
            setExpression("");
            setResult("");
        } else if (id === '=') {
            // do nothing as of now...
        } else {
            setExpression((e) => e+id);
        }
    }

    return <div className="calculator__container">
        <h1>React Calculator</h1>
        <form onSubmit={calculate} id="form">
            <label htmlFor="expression" className={result==="NaN" ? "enabled" : "disabled"} style={{color:'red'}}>*Invalid Expression...</label>

            <input pattern="^[\d\s\+\-\*\/]+$"
                id="expression" name="expression" type="text"
                value={expression} onChange={e => setExpression(e.target.value)} />
            
            <p className={result==="NaN"||result==="" ? "disabled" : "enabled"}>{Number(result)}</p>
            
            <div className="calculator__buttons" id="buttons" 
                onClick={(e) => handleButtonClick(e)}
            >
                {/* row 1 */}
                <button id='7' type="button" >7</button>
                <button id='8' type="button" >8</button>
                <button id='9' type="button" >9</button>
                <button id='+' type="button" >+</button>
                {/* row 2 */}
                <button id='4' type="button" >4</button>
                <button id='5' type="button" >5</button>
                <button id='6' type="button" >6</button>
                <button id='-' type="button" >-</button>
                {/* row 3 */}
                <button id='1' type="button" >1</button>
                <button id='2' type="button" >2</button>
                <button id='3' type="button" >3</button>
                <button id='*' type="button" >*</button>
                {/* row 4 */}
                <button id='C' type="button" >C</button>
                <button id='0' type="button" >0</button>
                <button id='=' type="submit" >=</button>
                <button id='/' type="button" >/</button>
            </div>
        </form>
    </div>;
};

export default Calculator;
