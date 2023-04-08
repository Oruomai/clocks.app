import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/counter.module.sass';
import { ArrowLeft } from 'react-feather';

function Counter() {
  // State variables
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);

  // Function to start the timer
  const startTimer = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
    const id = setInterval(() => {
      setSeconds((seconds) => {
        if (seconds > 0) {
          return seconds - 1;
        } else {
          const remainingSeconds = totalSeconds % 60;
          setMinutes((minutes) => {
            if (minutes > 0) {
              return minutes - 1;
            } else {
              const remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
              setHours((hours) => (hours > 0 ? hours - 1 : 0));
              return remainingMinutes;
            }
          });
          return remainingSeconds;
        }
      });
    }, 1000);
    setIntervalId(id);
    setTimerRunning(true);
  };

  // Function to stop the timer
  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setIntervalId(null);
    setTimerRunning(false);
  };

  // Function to reset the timer
  const resetTimer = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  // Function to handle Start/Stop button click
  const handleStartStopClick = () => {
    if (timerRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  const addHour = () => {
    setHours((hours) => hours + 1);
  };

  const subtractHour = () => {
    setHours((hours) => (hours > 0 ? hours - 1 : 0));
  };

  const addMinute = () => {
    setMinutes((minutes) => {
      if (minutes < 59) {
        return minutes + 1;
      } else {
        setHours((hours) => hours + 1);
        return 0;
      }
    });
  };

  const subtractMinute = () => {
    setMinutes((minutes) => (minutes > 0 ? minutes - 1 : 0));
  };

  const addSecond = () => {
    setSeconds((seconds) => {
      if (seconds < 59) {
        return seconds + 1;
      } else {
        setMinutes((minutes) => {
          if (minutes < 59) {
            return minutes + 1;
          } else {
            setHours((hours) => hours + 1);
            return 0;
          }
        });
        return 0;
      }
    });
  };

  const subtractSecond = () => {
    setSeconds((seconds) => (seconds > 0 ? seconds - 1 : 0));
  };

  useEffect(() => {
    if (minutes === 60) {
      setMinutes(0);
      setHours((hours) => hours + 1);
    }
  }, [minutes]);

  useEffect(() => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      stopTimer();
    }
  }, [hours, minutes, seconds]);

  return (
    <main>
      <Link href="/">
        <div className={styles.button}>
          <ArrowLeft />
        </div>
      </Link>
      <section className={styles.section}>
        <div className={`${styles.sec} ${styles.sec1}`}>
          <h2 id="hour">{hours.toString().padStart(2, '0')}</h2>
          <h2 id="dot">:</h2>
          <h2 id="minutes">{minutes.toString().padStart(2, '0')}</h2>
        </div>
        <div className={`${styles.sec} ${styles.sec2}`}>
          <h2 id="seconds">{seconds.toString().padStart(2, '0')}</h2>
          <div className={styles.container_button}>
            <button className={styles.start_button} onClick={handleStartStopClick}>
              {timerRunning ? "Stop" : "Start"}
            </button>
            <button className={styles.reset_button} onClick={resetTimer}>
              Reset!
            </button>
          </div>
          <div className={styles.math_button}>
            <button className={styles.add_hour_button} onClick={addHour}>
              +
            </button>
            <button className={styles.subtract_hour_button} onClick={subtractHour}>
              -
            </button>
            <button className={styles.add_min_button} onClick={addMinute}>
              +
            </button>
            <button className={styles.subtract_min_button} onClick={subtractMinute}>
              -
            </button>
            <button className={styles.add_sec_button} onClick={addSecond}>
              +
            </button>
            <button className={styles.subtract_sec_button} onClick={subtractSecond}>
              -
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Counter;
