import React,{useState, useEffect} from 'react';
import './TimerClock.css'

const DELAY = 1000;

function TimerClock() {
    const[counter, setCounter] = useState(25 * 60);
    const[isActive, setIsActive] = useState(false);
    const[isSession, setSession] = useState(true);
    const[breakLength, setBreakLength] = useState(5);
    const[sessionLength, setSessionLength] = useState(25);
    const[timerID, setTimerID] = useState(null);

    useEffect(() => {
        if(isActive) {
            if(isSession) {
                counter > 0 && setTimerID(setTimeout(() => isActive && setCounter(counter - 1), DELAY));
                counter === 0 && setSession(false);
                counter === 0 && setCounter(breakLength * 60);
            } else{
                counter > 0 && setTimerID(setTimeout(() => isActive && setCounter(counter - 1), DELAY));
                counter === 0 && setSession(true);
                counter === 0 && setCounter(sessionLength * 60);
            }
        }
      }, [counter, isActive]);

    useEffect(() => {
        setCounter(sessionLength * 60);
    }, [sessionLength])

    useEffect(() => {
        if(counter === 0) {
            setTimeout(() => new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav").play(), 0)
        }
    }, [counter])

    const toggle = () => {
        setIsActive(!isActive);
        if(isActive && timerID) {
            clearTimeout(timerID);        
        }
    }

    const reset = () => {
        setSessionLength(25);
        setCounter(25 * 60);
        setIsActive(false);
        setSession(true);
        setBreakLength(5);
        if(timerID) {
            clearTimeout(timerID);        
        }
    }

    const toTime = (value) => {
        if(value < 10) {
            return "0" + value;
        }
        return value;
    }

    const increaseLength = (value, changer) => {
        if(!isActive && value + 1 <= 60) {
            changer(value + 1);
        }
    }

    const decreaseLength = (value, changer) => {
        if(!isActive && value - 1 > 0) {
            changer(value - 1);
        }
    }



return (
    <div className="container">
    <div className="title">25 + 5 Clock</div>
        <div className="length-control">
            <div className="break">
        <div id="break-label">Break Length</div>
        <div className="buttons">
        <button className="btn" id="break-decrement" value="-" onClick={()=> decreaseLength(breakLength,setBreakLength)}>-</button>
        <div id="break-length">{breakLength}</div>
        <button className="btn" id="break-increment" value="+" onClick={()=> increaseLength(breakLength, setBreakLength)}>+</button>
        </div>
        </div>
        <div className="session">
        <div id="session-label">Session Length</div>
        <div className="buttons">
        <button className="btn" id="session-decrement" value="-" onClick={()=> decreaseLength(sessionLength,setSessionLength)}>-</button>
        <div id="session-length">{sessionLength}</div>
        <button className="btn" id="session-increment" value="+" onClick={()=> increaseLength(sessionLength,setSessionLength)}>+</button>
        </div>
        </div>
        </div>
    <div className="timer">
        <div id="timer-label">{isSession ? "Session" : "Break"}</div>
        <div id="time-left">
            <>
                {toTime(Math.floor(counter / 60))}:{toTime(counter % 60)}
            </>
        </div>
    <div className="timer-control">
        <div className="control-buttons">
        <button id="start_stop" {...isActive ? 'active' : 'inactive'} onClick={toggle}>
            Start/Stop
        </button>
        <button id="reset" onClick={reset}>
            Reset
        </button>
        </div>
    <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
    </div>
    </div>
    </div>
)
}
export default TimerClock;