import { useState, useEffect } from "react";
import Link from 'next/link';
import styles from '../../styles/stopwatch.module.sass'
import { ArrowLeft } from 'react-feather'

function Stopwatch() {
  return (
    <main>
      <Link href="/"><div className={styles.button}><ArrowLeft /></div></Link>
      <section className={styles.section}>
      <div className={`${styles.sec} ${styles.sec1}`}>
          <h2 id="hour">00</h2>
          <h2 id="dot">:</h2>
          <h2 id="minutes">00</h2>
        </div>
        <div className={`${styles.sec} ${styles.sec2}`}>
          <h2 id="seconds">00</h2>
          <div className={styles.container_button}>
            <button className={styles.start_button}>Start</button>
            <button className={styles.stop_button}>Stop</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Stopwatch;