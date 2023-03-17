import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/analog.module.sass'

const Analog: React.FC = () => {

  return (
    <main className={styles.content}>
      <div className={styles.container}>
        <div className={styles.box}></div>
      </div>
    </main>
  );
};

export default Analog;
