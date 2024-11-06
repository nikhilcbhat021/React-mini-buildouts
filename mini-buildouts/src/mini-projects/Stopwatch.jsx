import { useState  } from "react";

export default function Stopwatch(props) {
    const [time, setTime] = useState(0);
    const [intervalTracker, setIntervalTracker] = useState(-1);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };

    return (<>
        <h1>Stopwatch</h1>
        <p>Time: {formatTime(Math.floor(time/100))}</p>
        {
            intervalTracker === -1 ? 
            (<button onClick={() => {
                const intervalId = setInterval(() => {
                    setTime(t => t+1);
                }, 10);
                setIntervalTracker(intervalId);
            }}>Start</button>) : 
            (<button onClick={() => {
                clearInterval(intervalTracker);
                setIntervalTracker(-1);
            }}>Stop</button>)
        }
        
        <button onClick={() => {
            clearInterval(intervalTracker);
            setTime(0);
            setIntervalTracker(-1);
        }}>Reset</button>
        <div>
            <br />
            Time in ms: {time}
        </div>
    </>)
}