import { useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [intervalTracker,setIntervalTracker] = useState(-1);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds/60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <>
      <div>
        <h1>StopWatch</h1>
        <p>Time:{formatTime(time)}</p>

        {
          intervalTracker === -1 &&         <button onClick={() => {
            const intervalId = setInterval(()=>{
              setTime(t=> t+1);
            },1000)
            setIntervalTracker(intervalId);
          }}>Start</button>
        }

        
        {
          intervalTracker !== -1 && <button onClick={() => {
            clearInterval(intervalTracker);
            setIntervalTracker(-1);
          }}>Stop</button>
        }

        &nbsp;

        <button onClick={() => {
          clearInterval(intervalTracker);
          setTime(0);
          setIntervalTracker(-1);
        }}>Reset</button>

      </div>
    </>
  )
}

export default App