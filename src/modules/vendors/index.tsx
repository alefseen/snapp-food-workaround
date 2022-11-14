import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'store';

import VendorCard from './components/vendorCard';
import styles from './index.module.scss';
import { getVendors } from './slice';

function Vendors() {
  const { vendors, count } = useSelector(state => state.vendors);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVendors());
  }, []);

  return (
    <main>
      <ul className={styles.list}>
        {vendors.map(vendor => (
          <li key={vendor.id} className={styles.list__item}>
            <VendorCard vendor={vendor} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Vendors;
