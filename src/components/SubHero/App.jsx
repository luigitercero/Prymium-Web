import React from 'react';
import Image from 'next/image'
import styles from './styles.module.scss';

const SubHero = ({ children, overlay, alt, image = false, isCentered = false  }) =>{
  const childrenStyle = isCentered ? styles.children_centered : styles.children;

  return(
    <section className={styles.hero}>
      {image && (
      <div className={styles.image}>
        <Image
          src={image}
          alt={alt}
          layout="fill"
          priority="true"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    )}
      <div className={childrenStyle}>
        {children}
      </div>
      {overlay && <div className={styles.overlay} />}
    </section>
  )
}

export default SubHero;