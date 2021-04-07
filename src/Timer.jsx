import React, {useState, useRef, useEffect} from "react";
import "./Timer.css";

const Timer = () => {

    const [time, setTime] = useState(1500);
    const [isPomodoro, setPomodoro] = useState(true);
    const [isShort, setShort] = useState(false);
    const [isLong, setLong] = useState(false);
    const [isRunning, setRunning] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        if(time === 0) endTimer();
    })

    const getSecs = (i) => {
        return ("0" + i % 60).slice(-2);
    }
    
    const getMins = (i) => {
        return ("0" + Math.floor(i / 60)).slice(-2);
    }

    const updateTimer = (i) => {
        if(i === "pomodoro"){
            setPomodoro(true)
            setShort(false);
            setLong(false);
            setTime(1500);
        }
        if(i === "short"){
            setPomodoro(false);
            setShort(true)
            setLong(false)
            setTime(2);
        }
        if(i === "long"){
            setPomodoro(false);
            setShort(false);
            setLong(true)
            setTime(600);
        }
        stopTimer();
    }

    const startTimer = () => {
        setRunning(true);
        timerRef.current = setInterval(() => {
            if(!time) console.log("bunda")

            setTime(time => time - 1);
        }, 1000);
        return () => clearInterval(timerRef.current);
    }

    const stopTimer = () => {
        clearInterval(timerRef.current);
        setRunning(false);
    }

    const resetTimer = () => {
        if(isPomodoro) setTime(1500);
        if(isShort) setTime(300);
        if(isLong) setTime(600);
        stopTimer();
    }

    const endTimer = () => {
        stopTimer();
        window.alert("The timer has ended!");
        resetTimer();
    }


    return(
        <div className="timer">
            <div className="timer-content">
                <div className="top-buttons">
                    <button onClick={() => updateTimer("pomodoro")} className={isPomodoro ? "active-button" : "unnactive-button"}>Pomodoro</button>
                    <button onClick={() => updateTimer("short")} className={isShort ? "active-button" : "unnactive-button"}>Short Break</button>
                    <button onClick={() => updateTimer("long")} className={isLong ? "active-button" : "unnactive-button"}>Long Break</button>
                </div>
                <div className="timer-display">
                    {getMins(time)}:{getSecs(time)}
                </div>
                <div className="bottom-buttons">
                    <button onClick={!isRunning ? () => startTimer() : undefined} className="start-button">Start</button>
                    <button onClick={isRunning ? () => stopTimer() : undefined} className="stop-button">Stop</button>
                    <button onClick={() => resetTimer()} className="reset-button">Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Timer;