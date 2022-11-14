import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { getVendorsList } from './requests';

function Vendors() {
  useEffect(() => {
    getVendorsList({ page: 0 }).then(res => {
      console.log(res.data.finalResult);
    });
  }, []);

  return (
    <main className={styles.layout}>
      <ul className={styles.list}>
        <li className={styles.list__item}>sss</li>
      </ul>
    </main>
  );
}

export default Vendors;
