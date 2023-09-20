import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const HomeLink = ({url,title}) => {
  return (
    <span className={styles.link}>
      <a href={url}>{title}</a>
    </span>
  )
}

export const HomeLinkSimple = ({url,title}) => {
  return (
    <span className={styles.link_simple}>
      <a href={url}>{title}</a>
    </span>
  )
}

export default HomeLink;
