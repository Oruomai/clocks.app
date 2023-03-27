import { useState, useEffect } from "react";
import Link from 'next/link';
import styles from '../../styles/stopwatch.module.sass'
import { ArrowLeft } from 'react-feather'

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  const formattedTime = formatTime(time);
  const [minutes, secondsWithMilliseconds] = formattedTime.split(":");
  const [seconds, milliseconds] = secondsWithMilliseconds.split(".");

  return (
    <main>
      <Link href="/"><div className={styles.button}><ArrowLeft /></div></Link>
      <section className={styles.section}>
        <div className={`${styles.sec} ${styles.sec1}`}>
          <h2 id="minutes">{minutes}</h2>
          <h2 id="dot">:</h2>
          <h2 id="seconds">{seconds}</h2>
        </div>
        <div className={`${styles.sec} ${styles.sec2}`}>
          <h2 id="miliseconds">{milliseconds}</h2>
          <div className={styles.container_button}>
            <button className={styles.start_button} onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
            <button className={styles.stop_button} onClick={handleReset}>Reset</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Stopwatch;
