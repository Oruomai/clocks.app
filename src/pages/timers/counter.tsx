import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/counter.module.sass'
import { ArrowLeft } from 'react-feather'

function Counter() {
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
            <button className={styles.stop_button}>Reset</button>
          </div>
          <div className={styles.math_button}>
                <button className={styles.add_button}>+</button>
                <button className={styles.subtract_button}>-</button>
                <button className={styles.add_button}>+</button>
                <button className={styles.subtract_button}>-</button>
                <button className={styles.add_button}>+</button>
                <button className={styles.subtract_button}>-</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Counter;
