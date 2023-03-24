import Head from 'next/head'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from '../styles/home.module.sass'
const inter = Inter({ subsets: ['latin'] })
import { useState } from 'react';
import { Menu } from 'react-feather'

export default function Home() {
  const [contactText, setContactText] = useState('Contact Me - Contact Me - Contact Me');
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://unpkg.com/feather-icons"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.container}>
        <section className={styles.content}>
            <p className={styles.logo_home}>clocks.app</p>
            <Link href="/"><div className={styles.button}><Menu /></div></Link>
            <h1 className={styles.heading_home}>The #1<br />aesthetic <br />clock app <br />without Ads.</h1>
            <p className={styles.paragraph_home}>High performance and a sleek, 
                                                <br />minimalist design without any ads,
                                                <br />making it both aesthetically pleasing
                                                <br />and efficient in terms of memory usage.</p>
        </section>
        <section className={styles.content_2}>
              <Link href="./clocks/digital" className={styles.links_1}>DIGITAL</Link>
              <Link href="./clocks/analog" className={styles.links_2}>ANALOG</Link>
              <Link href="./timers/stopwatch" className={styles.links_3}>STOPWATCH</Link>
              <Link href="./timers/stopwatch" className={styles.links_4}>COUNTER</Link>
        </section>
        </div>
      </main>
    </>
  )
}
