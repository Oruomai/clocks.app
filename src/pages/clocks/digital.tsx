import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/digital.module.sass'

const Digital: React.FC = () => {
  useEffect(() => {
    function clock() {
      let hours = document.getElementById('hour');
      let minutes = document.getElementById('minutes');
      let seconds = document.getElementById('seconds');
      let ampm = document.getElementById('ampm');
  
      fetch('http://worldtimeapi.org/api/ip')
        .then(response => response.json())
        .then(data => {
          let timezone = data.timezone; // get the timezone
          let now = new Date(data.datetime);
          let localTime = now.toLocaleTimeString('en-US', { timeZone: timezone });
          let [h, m, s] = localTime.split(/:| /);
          let am = parseInt(h) < 12 ? "AM" : "PM";
          h = ((parseInt(h) % 12) || 12).toString();
  
          hours!.innerHTML = h;
          minutes!.innerHTML = m;
          seconds!.innerHTML = s;
          ampm!.innerHTML = am;
        })
        .catch(error => console.error(error));
    }
  
    var interval = setInterval(clock, 1000);
  
    return () => clearInterval(interval);
  }, []);

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
          <span className={styles.ampm} id="ampm">AM</span>
        </div>
      </section>
    </main>
  );
};

export default Digital;
