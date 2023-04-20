import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/digital.module.sass'
import { ArrowLeft } from 'react-feather'

function Digital() {
  useEffect(() => {
    function clock() {
      let hours = document.getElementById('hour');
      let minutes = document.getElementById('minutes');
      let seconds = document.getElementById('seconds');
      let ampm = document.getElementById('ampm');

      fetch(`https://api.ipgeolocation.io/timezone?apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(data => {
          let timezone = data.timezone;
          let now = new Date();
          let localTime = now.toLocaleTimeString('en-US', { timeZone: timezone });
          let [time, modifier] = localTime.split(' ');
          let [h, m, s] = time.split(':');
          h = ((parseInt(h) % 12) || 12).toString();
          h = (parseInt(h) < 10) ? "0" + h : h;
          ampm!.innerHTML = modifier;
          hours!.innerHTML = h;
          minutes!.innerHTML = m;
          seconds!.innerHTML = s;
        })
        .catch(error => console.error(error));
    }

    var interval = setInterval(clock, 1000);

    return () => clearInterval(interval);
  }, []);



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
          <span className={styles.ampm} id="ampm">AM</span>
        </div>
      </section>
    </main>
  );
};

export default Digital;
