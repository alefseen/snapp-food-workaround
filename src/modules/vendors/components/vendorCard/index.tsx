import { makeFaNumber, makePrice } from 'utils/helper';
import vendorsCopies from '../../copies';
import { Vendor } from '../../models';

import styles from './index.module.scss';
interface Props {
  vendor: Vendor;
}

function VendorCard({ vendor }: Props) {
  return (
    <section className={styles.card}>
      <header className={styles.card__header}>
        <div className={styles.card__cover}>
          <img
            src={vendor.backgroundImage}
            className={styles.card__cover_image}
            alt={vendor.title}
          />
        </div>

        <div className={styles.card__logo}>
          <img
            src={vendor.logo}
            className={styles.card__logo_image}
            alt={vendor.title}
          />
        </div>
      </header>

      <div className={styles.card__content}>
        <div className={styles.card__brief}>
          <h3 className={styles.card__title}>{vendor.title}</h3>

          <div>
            <span className={styles.card__rates_count}>
              ({makeFaNumber(vendor.countReview)})
            </span>

            <span className={styles.card__rate}>
              {makeFaNumber(vendor.rate)}
            </span>
          </div>
        </div>

        <p className={styles.card__description}>{vendor.description}</p>

        <div className={styles.card__delivery}>
          <span className={styles.card__delivery_type}>
            {vendor.deliver
              ? vendorsCopies.commonDelivery
              : vendorsCopies.expressDelivery}
          </span>

          <span className={styles.card__delivery_price}>
            {makePrice(vendor.deliveryFee)}
          </span>
        </div>
      </div>
    </section>
  );
}

export default VendorCard;
