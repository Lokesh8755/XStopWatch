import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0); // Initialize time to 0
  const [intervalTracker, setIntervalTracker] = useState(null); // Use `null` instead of -1 for better clarity.
  
  // Format time function improved to handle edge cases around minute boundaries
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  // Ensure that interval is cleared when component unmounts to avoid memory leaks
  useEffect(() => {
    return () => clearInterval(intervalTracker);
  }, [intervalTracker]);

  return (
    <>
      <div>
        <h1>StopWatch</h1>
        <p>Time: {formatTime(time)}</p>

        {
          intervalTracker === null && (
            <button onClick={() => {
              const intervalId = setInterval(() => {
                setTime((t) => t + 1);
              }, 1000);
              setIntervalTracker(intervalId);
            }}>Start</button>
          )
        }

        {
          intervalTracker !== null && (
            <button onClick={() => {
              clearInterval(intervalTracker);
              setIntervalTracker(null);
            }}>Stop</button>
          )
        }

        &nbsp;

        <button onClick={() => {
          clearInterval(intervalTracker);
          setTime(0);
          setIntervalTracker(null);
        }}>Reset</button>
      </div>
    </>
  );
}

export default App;
