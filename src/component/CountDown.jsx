import React, { useEffect, useState } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = new Date(targetDate).getTime() - now;

    if (distance <= 0) return null;

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = calculateTimeLeft();
      if (!updated) {
        clearInterval(interval);
      }
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);



  return (
   <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
    {timeLeft ? (
      <>

      <div className="timeLeft-wrapper">

        <div className="timerBox">
          <span className='timerCount'>{timeLeft.days}</span>
          <span className='timertext'>DAYS</span>
        </div>

        <div className="timerBox">
          <span className='timerCount'>{timeLeft.hours}</span>
          <span className='timertext'>HOURS</span>
        </div>

        <div className="timerBox">
          <span className='timerCount'>{timeLeft.minutes}</span>
          <span className='timertext'>MINS</span>
        </div>

        <div className="timerBox">
          <span className='timerCount'>{timeLeft.seconds}</span>
          <span className='timertext'>SECS</span>
        </div>
      </div>
      </>
    ) : (
      <>
        0d : 0h : 0m : 0s
      </>
    )}
  </div>
  );
};

export default Countdown;
