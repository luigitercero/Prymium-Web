import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const HomeLink = ({url,title}) => {
  return (
    <span className={styles.link}>
      <Link href={url}>{title}</Link>
    </span>
  )

}

export default HomeLink;
