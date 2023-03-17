import Head from 'next/head'
import Link from 'next/link';

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/home.module.sass'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.content}>
          <Link href="./clocks/digital" className={styles.links_1}>Digital</Link>
          <Link href="./clocks/analog" className={styles.links_2}>Analog</Link>
        </div>
      </main>
    </>
  )
}
