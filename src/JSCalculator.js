import React,{useState, useEffect} from 'react';
import './JSCalculator.css'


const buttons = [
    {key: "AC", id: "clear", type: "clear"},
    {key: "/", id: "divide", type: "divide"},
    {key: "*", id: "multiply", type: "multiply"},
    {key: "7", id: "seven", type: "number"},
    {key: "8", id: "eight",type: "number" },
    {key: "9", id: "nine", type: "number"},
    {key: "-", id: "subtract", type: "subtract", isSign: true},
    {key: "4", id: "four", type: "number"},
    {key: "5", id: "five", type: "number"},
    {key: "6", id: "six", type: "number"},
    {key: "+", id: "add", type: "add", isSign: true},
    {key: "1", id: "one", type: "number"},
    {key: "2", id: "two", type: "number"},
    {key: "3", id: "three", type: "number"},
    {key: ".", id: "decimal", type: "decimal"},
    {key: "0", id: "zero", type: "number"},
    {key: "=", id: "equals", type: "equals"}
]

const calculate = (currentValue) => eval(currentValue)
const clearValue = (value) => {
    let parts =  value.split(new RegExp("[/*+-]"));
    let lastPart = parts[parts.length-1];
    if(parts.length > 1 && lastPart === "" && parts[parts.length-2] === "" && !value.endsWith("-")) {
        value = `${value.substring(0, value.length - 2)}${value.substring(value.length - 1)}`;
        if(parts[parts.length-3] === "") {
            value = `${value.substring(0, value.length - 2)}${value.substring(value.length - 1)}`;
        }
    }
    if(lastPart != "") {
        if(lastPart.indexOf(".") != lastPart.lastIndexOf(".") || lastPart.startsWith("00")) {
            value = value.substring(0, value.length - 1);
        }
        if(lastPart.length > 1 && lastPart.startsWith("0")) {
            value = value.substring(1);
        }
    }
    return value;
}
 
function JSCalculator() {
    const[ currentValue, setCurrentValue] = useState("");
    const handleClick = (button) => {
        switch(button.type) {
            case "clear": {
                setCurrentValue("");
                return;
            }
            case "equals": {
                const calculatedResult = calculate(currentValue);
                setCurrentValue(calculatedResult.toString());
                return;
            }
            default: {
                setCurrentValue(clearValue(`${currentValue}${button.key}`));
            }
        }
    }

    return (
        <div className="outer-container"> 
        <div id="js-calculator">
            <div className="calculator-buttons">
                {buttons.map((button) => (
                    <div id={button.id} className="calculator-button" onClick={() => handleClick(button)}>
                            {button.key}
                    </div>
                ))}
            </div>
           <div id="display">{currentValue ? currentValue : '0' }</div>
        </div>
        </div>
    )
}




export default JSCalculator;