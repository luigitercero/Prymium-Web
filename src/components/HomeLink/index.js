import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const HomeLink = ({url,title}) => {
  return (
    <span className={styles.link}>
      <Link href={url} legacyBehavior>{title}</Link>
    </span>
  );
}

export const HomeLinkSimple = ({url,title}) => {
  return (
    <span className={styles.link_simple}>
      <Link href={url} legacyBehavior>{title}</Link>
    </span>
  );
}

export default HomeLink;