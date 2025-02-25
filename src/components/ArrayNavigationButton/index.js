import React from 'react';
import {HomeLinkSimple} from '@components/HomeLink';
import styles from './styles.module.scss';

function ArrayNavigationButton() {
  return(
    <div className={styles.container}>
      <HomeLinkSimple url="/tienda/lavatrastos" title="Lavatrastos" />
      <HomeLinkSimple url="/tienda/grifos" title="Grifos" />
      <HomeLinkSimple url="/tienda/bidets" title="Bidet" />
      <HomeLinkSimple url="/tienda/accesorios" title="Accesorios" />
      <HomeLinkSimple url="/tienda/" title="Todo" />
    </div>
  )
}

export default ArrayNavigationButton