import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/analog.module.sass'
import { ArrowLeft } from 'react-feather'

function Analog() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch('https://worldtimeapi.org/api/ip?timestamp=${Date.now()}')
        .then(response => response.json())
        .then(data => {
          let timezone = data.timezone;
          let now = new Date(data.datetime);
          setDate(now);
        })
        .catch(error => console.error(error));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function degToRad(degrees: number): number {
    return degrees * Math.PI / 180;
  }

  const hourStyle = {
    transform: `rotate(${(date.getHours() % 12) * 30 + (date.getMinutes() / 2)}deg)`
  };
  const minuteStyle = {
    transform: `rotate(${date.getMinutes() * 6}deg)`
  };
  const secondStyle = {
    transform: `rotate(${date.getSeconds() * 6}deg)`
  };

  return (
    <>
      <Head>
        <title>Analog Clock</title>
        <meta name="description" content="Analog Clock" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://unpkg.com/feather-icons"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.content}>
        <div className={styles.container}>
          <Link href="/"><div className={styles.button}><ArrowLeft /></div></Link>
          <div className={styles.box}>
            <div className={styles.clock}>
              <div className={styles.hour}>
                <div className={styles.hr} id="hr" style={hourStyle}></div>
              </div>
              <div className={styles.min}>
                <div className={styles.mn} id="mn" style={minuteStyle}></div>
              </div>
              <div className={styles.sec}>
                <div className={styles.sc} id="sc" style={secondStyle}></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Analog;
