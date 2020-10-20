import React,{useState, useEffect} from 'react';
import './DrumMachine.css'

const drumPads = [
    {key: "Q", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", text: "Heater-1"},
    {key: "W", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", text: "Heater-2"},
    {key: "E", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", text: "Heater-3"},
    {key: "A", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", text: "Heater-4"},
    {key: "S", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", text: "Clap"},
    {key: "D", audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", text: "Open-HH"},
    {key: "Z", audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", text: "Kick-n'-Hat"},
    {key: "X", audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", text: "Kick"},
    {key: "C", audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", text: "Closed-HH"}
]


function DrumMachine() {
    const [ currentPad, setCurrentPad ] = useState();
    const play = (pad) => {
        setCurrentPad(pad);
        new Audio(pad.audio).play();
    }

    const keypress = (e) => {
        const pad = drumPads.find((pad) => pad.key.toLowerCase() === e.key)
        if(pad) {
            play(pad)
        }
    } 

    useEffect(() => {
        document.addEventListener("keypress", keypress);

        return () => document.removeEventListener("keypress", keypress);
    }, [])

    return (
        <div className="outer-container"> 
        <div id="drum-machine">
            <div className="drum-pads">
                {drumPads.map((pad) => (
                    <div className="drum-pad" onClick={() => play(pad)}>
                        <>
                            {pad.key}
                            <audio className="clip" id={pad.key} src={pad.audio}></audio>
                        </>

                    </div>
                ))}
            </div>
           <div id="display">
                {currentPad && (
                    <>{currentPad.text}</>
                )}
            </div> 
        </div>
        </div>
    )

}

export default DrumMachine;