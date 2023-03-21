import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/analog.module.sass'
import { ArrowLeft } from 'react-feather'

const Analog: React.FC = () => {

  return (
    <main className={styles.content}>
      <div className={styles.container}>
        <Link href="/"><div className={styles.button}><ArrowLeft /></div></Link>
        <div className={styles.box}></div>
      </div>
    </main>
  );
};

export default Analog;
