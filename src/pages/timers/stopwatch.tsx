import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/stopwatch.module.sass'

const Stopwatch: React.FC = () => {

  return (
    <main>
      <button className={styles.button}><Link href="/">Home</Link></button>
      <section className={styles.section}>
      <div className={`${styles.sec} ${styles.sec1}`}>
          <h2 id="hour">00</h2>
          <h2 id="dot">:</h2>
          <h2 id="minutes">00</h2>
        </div>
        <div className={`${styles.sec} ${styles.sec2}`}>
          <h2 id="seconds">00</h2>
        </div>
      </section>
    </main>
  );
};

export default Stopwatch;