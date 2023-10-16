import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [seconds, setSeconds] = useState(60); 

  useEffect(() => {
    
    const updateCountdown = () => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, [seconds]);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>Time Left: {seconds} seconds</p>
    </div>
  );
}

export default CountdownTimer;