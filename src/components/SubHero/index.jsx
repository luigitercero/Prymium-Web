import React from 'react';
import Image from "next/legacy/image"
import styles from './styles.module.scss';

const SubHero = ({ children, overlay, alt, image = false, isCentered = false, width, height }) =>{
  const childrenStyle = isCentered ? styles.children_centered : styles.children;

  return(
    <section className={styles.hero}>
      {image && (
        <div className={styles.image}>
          <Image
            src={image}
            alt={alt}
            priority="true"
            //objectFit="cover"
            //objectPosition="center"
            width={width}
            height={height}
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