import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft: TimeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const TimerBox: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 w-24 h-24 md:w-32 md:h-32 border border-gray-700 shadow-lg">
    <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
      {String(value).padStart(2, '0')}
    </span>
    <span className="text-xs uppercase text-brand-slate mt-1 tracking-widest">{label}</span>
  </div>
);

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isClient) {
    return null;
  }

  const timerComponents = Object.keys(timeLeft).length ? (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      <TimerBox value={timeLeft.days || 0} label="Days" />
      <TimerBox value={timeLeft.hours || 0} label="Hours" />
      <TimerBox value={timeLeft.minutes || 0} label="Minutes" />
      <TimerBox value={timeLeft.seconds || 0} label="Seconds" />
    </div>
  ) : (
    <span className="text-3xl font-bold text-brand-orange">The event has started!</span>
  );

  return <>{timerComponents}</>;
};

export default CountdownTimer;
