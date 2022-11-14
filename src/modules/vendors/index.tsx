import { useEffect, useState } from 'react';
import VendorCard from './components/vendorCard';
import styles from './index.module.scss';
import { Vendor } from './models';
import { getVendorsList } from './requests';

function Vendors() {
  const [state, setState] = useState<Vendor[]>([]);

  useEffect(() => {
    getVendorsList({ page: 0 }).then(res => {
      console.log(res.data);

      const newVendors = res.data.finalResult
        .filter(
          (
            item
          ): item is {
            type: 'VENDOR';
            data: Vendor;
          } => item.type === 'VENDOR'
        )
        .map(item => item.data);

      setState(newVendors);
    });
  }, []);

  return (
    <main>
      <ul className={styles.list}>
        {state.map(vendor => (
          <li key={vendor.id} className={styles.list__item}>
            <VendorCard vendor={vendor} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Vendors;
