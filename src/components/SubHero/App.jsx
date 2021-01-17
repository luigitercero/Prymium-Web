import React from 'react';
import Image from 'next/image'
import styles from './styles.module.scss';

const SubHero = ({ children, overlay, image = false  }) =>{
  return(
    <section className={styles.hero}>
      {image && (
      <div className={styles.image}>
        <Image
          src={image}
          layout="fill"
          priority="true"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    )}
      <div className={styles.children}>
        {children}
      </div>
      {overlay && <div className={styles.overlay} />}
    </section>
  )
}

export default SubHero;